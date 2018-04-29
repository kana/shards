import { era } from './data'

function setup (name: string|number): void {
  const mountPoint = document.getElementById('root')
  mountPoint.innerText = name.toString()
}

setup(era())
