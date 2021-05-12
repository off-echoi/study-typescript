{
  /**
   * Type Aliases
   */
  type Text = string
  const name: Text = 'Choi'
  type Num = number

  type Student = {
    name: Text
    age: number
  }

  const student: Student = {
    name: 'eun',
    age: 12,
  }

  /**
   * String Literal Types
   */
  type Name = 'name'
  let myName: Name
  myName = 'name'
  // myName = 'choi' x
}
