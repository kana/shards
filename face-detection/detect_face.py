#!/usr/bin/env python3

# Requirements:
#
# brew install opencv
# curl -O -L https://github.com/nagadomi/lbpcascade_animeface/raw/master/lbpcascade_animeface.xml

import cv2
import sys

DETECTOR_PATH = 'lbpcascade_animeface.xml'

def main():
  if len(sys.argv) != 2:
    sys.exit('Usage: %s IMAGE_PATH' % sys.argv[0])

  faces = detect_face(sys.argv[1])
  for (x, y, width, height) in faces:
    print(x, y, width, height)

def detect_face(image_path):
  image = cv2.imread(image_path)
  gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
  face_cascade = cv2.CascadeClassifier(DETECTOR_PATH)
  faces = face_cascade.detectMultiScale(gray, scaleFactor=1.2, minNeighbors=5)
  return faces

if __name__ == '__main__':
  main()
