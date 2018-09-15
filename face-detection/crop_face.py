#!/usr/bin/env python3

from detect_face import detect_face
import subprocess
import sys

def main():
  if len(sys.argv) != 3:
    sys.exit('Usage: %s IMAGE_PATH OUTPUT_PATH_PREFIX' % sys.argv[0])

  image_path =sys.argv[1]
  output_path_prefix =sys.argv[2]

  faces = detect_face(image_path)
  if len(faces) == 0:
    sys.exit('No face found')
  for (n, face) in enumerate(faces, start=1):
    (x, y, width, height) = face
    subprocess.run([
      'convert', image_path,
      '-gravity', 'NorthWest', '-extent', f'{width}x{height}+{x}+{y}',
      f'{output_path_prefix}-{n}.png',
    ])

if __name__ == '__main__':
  main()
