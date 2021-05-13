{
  /**
   * Type Assertions'
   * 타입을 강요, 강제할때 사용함. 권장하지 않는다.
   * 타입을 확실히 장담하지 못하는 경우에는 사용하지 않는다. 1-10-2 의 예제확인
   */
  function jstringFunction(): any {
    return 'hello';
  }
  const result = jstringFunction();
  /**
   * result.length;
   * 위의 코드는 타입 에러가 발생한다.
   * jstringFunction이 any타입을 리턴하기때문에 바로 문자열에 관련된 api(length)를 사용할 수 없다.
   * 아래처럽 type assertion 후 사용해주어야한다.
   * 그러나 jstringFunction이 숫자를 반환해도  type assertion으로 string이라고 확신했기 때문에
   * 에러가 나지않고 undefined를 출력한다.
   * 추후에 에러가 발생할 수 있다.
   * */

  (result as string).length;
  (<string>result).length;

  // 1-10-2
  // 에러발생. wrong이 실제로는 숫자인데, type assertion을 이용해서 숫자배열이라고 확정했기 때문에 오류 발생
  const wrong: any = 5;
  console.log((wrong as Array<Number>).push(1));

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  /**
   * !
   */
  const numbers = findNumbers()!; // ! findNumbers의 return은 무조건숫자배열로 존재한다고 할때 사용하는 기호 (아래 !와 위치만 다르지 같은 사용법)
  numbers!.push(2); // ! numbers는 무조건 null이 아니다. undefined가 아니라고 할때 사용하는 기호
}
