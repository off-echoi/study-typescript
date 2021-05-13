{
  /**
   * Type Inference
   * 타입의 추론이 가능한 경우에 타입을 명시하지 않는것
   * 되도록이면 타입은 적어주는것이 좋다.
   * 간략한 코드의 경우에 타입을 적지않아도 상관없어 보이지만
   * 코드가 길어질수록, 양이 많아질수록 적어주는것이 좋다.
   */
  let text = 'hello'
  function print(message = 'hello') {
    console.log(message)
  }
  print('hello')

  function add(x: number, y: number): number {
    return x + y
  }
  const result = add(1, 2)
}
