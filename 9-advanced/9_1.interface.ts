{
  // Type 은 어떠한 타입을 사용하는가를 설명하는게 초점`
  // Interface는 무언가를 만들때 따라야하는 규격과 관련하여 초점
  type PositionType = {
    x: number
    y: number
  }
  interface PositionInterface {
    x: number
    y: number
  }

  // object
  const obj1: PositionType = {
    x: 1,
    y: 1,
  }
  const obj2: PositionInterface = {
    x: 2,
    y: 2,
    z: 2,
  }

  // class
  class Pos1 implements PositionType {
    x: number
    y: number
  }

  class Pos2 implements PositionInterface {
    x: number
    y: number
    z: number
  }
  // Extends
  interface ZPositionInterface extends PositionInterface {
    z: number
  }
  type ZpositionType = PositionType & { z: number }

  // Interface만 결합이 가능
  interface PositionInterface {
    x: number
    y: number
    z: number
  }
  // Type computed 속성 사용가능
  type Person = {
    name: string
    age: number
  }
  type Name = Person['name'] // string
  type NumberType = number
  type Direction = 'left' | 'right'
}
