{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    /**
     * class level "static" 키워드는 멤버변수를 클래스레벨로 만들어줌 (함수도 앞에 static을 붙여서 사용가능 line 21와 line 41참고)
     * 즉 클래스가 생성될때 한번 만들어져서 coffeeBeans처럼 매번 생성되지 않음 이는 곧 메모리의 절약을 의미
     * 또한 클래스의 밖에서 CoffeeMaker.BEANS_GRAM_PER_SHOT 처럼 사용할 수 있음
     * */
    static BEANS_GRAM_PER_SHOT: number = 7;
    coffeeBeans: number = 0; // instance level 멤버변수 // 클래스 내부에서 사용할때 this. 으로 사용 가능

    constructor(beans: number) {
      // 클래스로 오브젝트를 만들때 가장 먼저 실행되는 함수 = 초기값 설정을 해줄 수 있음
      this.coffeeBeans = beans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }
    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      return {
        shots: shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(32);
  console.log(maker);
  const maker2 = new CoffeeMaker(12);
  console.log(maker2);
  console.log(CoffeeMaker.BEANS_GRAM_PER_SHOT);
  const maker3 = CoffeeMaker.makeMachine(3);
}
