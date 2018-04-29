import { era } from './data'

function setup (name: string|number): void {
  const mountPoint = document.getElementsByTagName('body')[0]
  mountPoint.innerText = name.toString()
}

setup(era())
