#include <Arduino.h>

class SimpleTime {
public:
    String day;  // "Sunday", "Monday", ..., "Saturday"
    int hour;
    int minute;

    SimpleTime(String d, int h, int m) : day(d), hour(h), minute(m) {}

    void incrementHour() {
        hour++;
        if (hour >= 24) {
            hour = 0;
            incrementDay();
        }
    }
    void incrementDay() {
        if (day == "Sunday") day = "Monday";
        else if (day == "Monday") day = "Tuesday";
        else if (day == "Tuesday") day = "Wednesday";
        else if (day == "Wednesday") day = "Thursday";
        else if (day == "Thursday") day = "Friday";
        else if (day == "Friday") day = "Saturday";
        else if (day == "Saturday") day = "Sunday";
    }
};

int hall_pin = 13;
int box_led_pin = 26;
int saturday_led_pin = 12;
int sunday_led_pin = 14;
//SWITCH THESE

unsigned long previousMillis = 0; // will store last time the hour was updated

bool boxOpened = false; 

SimpleTime currentTime("Saturday", 0, 0); // Saturday, 00:00

void setup() {
  pinMode(hall_pin, INPUT);
  pinMode(box_led_pin, OUTPUT);
  pinMode(saturday_led_pin, OUTPUT);
  pinMode(sunday_led_pin, OUTPUT);
  Serial.begin(9600);
}

void simulateHourlyIncrement() {
    unsigned long currentMillis = millis();
    if (currentMillis - previousMillis >= 1000) { // 1 second
        previousMillis = currentMillis;
        currentTime.incrementHour();

        Serial.print(currentTime.hour);
        Serial.println(currentTime.day);

    }
}

void loop() {
  int pinValue = digitalRead(hall_pin);
  simulateHourlyIncrement();

  if (pinValue == 1) {
        digitalWrite(box_led_pin, LOW);
        boxOpened = true;
        
    }

    // Reset boxOpened flag at 00:00 or 17:00
    if ((currentTime.hour == 0 || currentTime.hour == 17) && currentTime.minute == 0) {
        boxOpened = false;
    }

    // Turn the box light on at 00:00 or 17:00 if it hasn't been opened
    if (!boxOpened) {
        digitalWrite(box_led_pin, HIGH);
    } 

  // Control Saturday and Sunday LEDs
  digitalWrite(saturday_led_pin, (currentTime.day == "Saturday") ? HIGH : LOW);
  digitalWrite(sunday_led_pin, (currentTime.day == "Sunday") ? HIGH : LOW);

  delay(10);
}


