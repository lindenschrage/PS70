#include <WiFi.h>
#include "time.h"

const char* ssid     = *****
const char* password = *****
const char* ntpServer = "pool.ntp.org";
const long  gmtOffset_sec = -18000; // offset -4 hours
const int   daylightOffset_sec = 3600;

int hall_pin = 13;
int box_led_pin = 26;
int saturday_led_pin = 12;
int sunday_led_pin = 14;

bool boxOpened = false;

void setup() {
  pinMode(hall_pin, INPUT);
  pinMode(box_led_pin, OUTPUT);
  pinMode(saturday_led_pin, OUTPUT);
  pinMode(sunday_led_pin, OUTPUT);
  Serial.begin(9600);

  // Connect to Wi-Fi
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nWiFi connected.");

  // Init and get the time
  configTime(gmtOffset_sec, daylightOffset_sec, ntpServer);
}

void loop() {
  delay(1000);
  checkTimeAndControlLight();
  readHallSensor();
  controlDayLed();
}

void checkTimeAndControlLight() {
  struct tm timeinfo;
  if (!getLocalTime(&timeinfo)) {
    Serial.println("Failed to obtain time");
    return;
  }

  // Control light based on time
  if ((timeinfo.tm_hour == 0 && timeinfo.tm_min == 0) || 
      (timeinfo.tm_hour == 17 && timeinfo.tm_min == 0)) {
    if (!boxOpened) {
      digitalWrite(box_led_pin, HIGH);
    }
  } else {
    boxOpened = false;
  }
}

void readHallSensor() {
  int pinValue = digitalRead(hall_pin);
  if (pinValue == LOW) {
    digitalWrite(box_led_pin, LOW);
    boxOpened = true;
  }
}

void controlDayLed() {
  struct tm timeinfo;
  if (!getLocalTime(&timeinfo)) {
    Serial.println("Failed to obtain time");
    return;
  }

  // Control Saturday and Sunday LEDs
  digitalWrite(saturday_led_pin, (timeinfo.tm_wday == 6) ? HIGH : LOW); // 6 is Saturday
  digitalWrite(sunday_led_pin, (timeinfo.tm_wday == 0) ? HIGH : LOW);   // 0 is Sunday
}
