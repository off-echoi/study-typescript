{
  /**
   * Enum
   */
  // Javascript X
  const MAX_NUM = 6
  const MAX_STUDENT_PER_CLASS = 10
  const MONDAY = 0
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAAY: 2 })
  // Typescript
  enum Days {
    Monday = 1, // 지정하지 않으면 자동으로 0 부터 할당 (인덱스), 문자는 일일이 지정
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  let day: Days = Days.Saturday
  // !! Enum의 문제점 enum으로 타입이 지정된 변수에 다른 어떤 숫자로 할당할 수 있다.
  // 예시로 아래처럼 Day안에 없는 숫자를 할당해도 오류없이 컴파일 된다.
  day = 10
  console.log(day)

  // 그래서 유니온타입으로 대체가 가능하면 유니온타입으로 대체하고,
  // 예외적으로 모바일의 네이티브 프로그래밍언어와 함께 작업이 되어야하는 경우에 서로 이해할 수 있는 enum을 사용해야한다
}
