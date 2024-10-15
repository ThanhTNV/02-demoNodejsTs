const _name: string = 'John Doe'
console.log(_name)

type Handle = () => Promise<string>

const handleF: Handle = () => Promise.resolve('Hello ' + _name)

handleF().then((value) => console.log(value))

let person: { name: string; age: number } = {
  name: 'Diep',
  age: 20
}
