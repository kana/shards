#!/usr/bin/env python3

from detect_face import detect_face
import random
import subprocess
import sys

def main():
  if len(sys.argv) != 3:
    sys.exit('Usage: %s IMAGE_PATH OUTPUT_PATH' % sys.argv[0])

  image_path =sys.argv[1]
  output_path =sys.argv[2]

  faces = detect_face(image_path)
  if len(faces) == 0:
    subprocess.run([
      'convert', image_path,
      '-gravity', 'North', '-extent', '1:1',
      '-resize', '128x128',
      f'{output_path}',
    ])
  else:
    (x, y, width, height) = random.choice(faces)
    subprocess.run([
      'convert', image_path,
      '-gravity', 'NorthWest', '-extent', f'{width}x{height}+{x}+{y}',
      '-resize', '128x128',
      f'{output_path}',
    ])

if __name__ == '__main__':
  main()
