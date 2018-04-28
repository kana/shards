import { era } from './data'

function say (name: string|number): void {
  console.log('Hello', name)
}

say(era())
