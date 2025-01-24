#include <ArduinoJson.h>
#include <ArduinoJson.hpp>

int sliderPin1 = A0;
int sliderPin2 = A1;
int sliderPin3 = A2;
int sliderPin4 = A3;
int sliderPin5 = A4;
int sliderPin6 = A5;

int value1 = 0;
int value2 = 0;
int value3 = 0;
int value4 = 0;
int value5 = 0;
int value6 = 0;

DynamicJsonDocument doc(1024);

void setup() {
  Serial.begin(9600);
}

void loop() {
  value1 = analogRead(sliderPin1);
  value2 = analogRead(sliderPin2);
  value3 = analogRead(sliderPin3);
  value4 = analogRead(sliderPin4);
  value5 = analogRead(sliderPin5);
  value6 = analogRead(sliderPin6);
  doc["s1"] = value1;
  doc["s2"] = value2;
  doc["s3"] = value3;
  doc["s4"] = value4;
  doc["s5"] = value5;
  doc["s6"] = value6;
  serializeJson(doc, Serial);
  Serial.println();
  delay(100);
}
