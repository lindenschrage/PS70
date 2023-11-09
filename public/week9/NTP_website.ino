#include <WiFi.h>
#include "time.h"
const char* ssid     = 
const char* password = 
const char* ntpServer = "pool.ntp.org";
//ofset -4 hours
const long  gmtOffset_sec = -18000;
const int   daylightOffset_sec = 3600;
struct DayPin {
  int pin;
  int day;
}
DayPin pins[] = {
  {5, 0},   // Sunday
  {14, 1},  // Monday
  {27, 2},  // Tuesday
  {26, 3},  // Wednesday
  {25, 4},  // Thursday
  {32, 5},  // Friday
  {33, 6}   // Saturday
};
const int NUM_DAYS = sizeof(pins) / sizeof(pins[0]);
void setup(){
  Serial.begin(115200);
  // Connect to Wi-Fi
  Serial.print("Connecting to ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected.");
  // Init and get the time
  configTime(gmtOffset_sec, daylightOffset_sec, ntpServer);
  printLocalTime();
  //disconnect WiFi as it's no longer needed
  WiFi.disconnect(true);
  WiFi.mode(WIFI_OFF);
  // setup pin 5 as a digital output pin
 for (int i = 0; i < NUM_DAYS; ++i) {
    pinMode(pins[i].pin, OUTPUT);
  }
}

void loop(){
  delay(1000);
  printLocalTime();
  checkDay();
}

void printLocalTime(){
  struct tm timeinfo;
  if(!getLocalTime(&timeinfo)){
    Serial.println("Failed to obtain time");
    return;
  }
}

void checkDay() {
  struct tm timeinfo;
  if(!getLocalTime(&timeinfo)) {
    Serial.println("Failed to obtain time");
    return;
  }
  Serial.println(timeinfo.tm_wday);
  for (int i = 0; i < NUM_DAYS; ++i) {
    if (timeinfo.tm_wday == pins[i].day) {
      digitalWrite(pins[i].pin, HIGH);
      Serial.println("LED is ON for today.");
    } else {
      digitalWrite(pins[i].pin, LOW);
    }
  }
}
