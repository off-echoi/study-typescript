{
  // Array
  const fruits: string[] = ['apple', 'banana'] // readeOnly 가능
  const scores: Array<number> = [1, 2, 3] // readeOnly 불가

  // Tuple -> interface, type alias, class로 대체하여 사용할 것을 권장 그러나 리액트의 useState처럼 사용한다면 사용가능
  let student: [string, number]
  student = ['name', 123]
  student[0] // name
  student[1] // 123

  const [name, age] = student
}
