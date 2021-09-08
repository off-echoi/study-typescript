{
  const obj = {
    name: 'ellie',
  }
  obj.name // ellie
  obj['name'] // ellie
  // 타입도 인덱스를 기반해서 적용할 수 있음
  type Animal = {
    name: string
    age: number
    gender: 'male' | 'female'
  }
  type Name = Animal['name']

  const text: Name = 'hello'

  type Gender = Animal['gender']
  const gender: Gender = 'female'

  type Keys = keyof Animal // 'name' | 'age' | 'gender'
  const key: Keys = 'gender'

  type Person = {
    name: string
    gender: Animal['gender']
  }
  const person: Person = {
    name: 'ember',
    gender: 'male',
  }
}
