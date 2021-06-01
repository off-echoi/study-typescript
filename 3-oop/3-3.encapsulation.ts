{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  /**
   * 캡슐화
   * 기본으로 public(클래스 밖에서 접근 가능)
   * private - 외부에서 보거나 접근할 수 없다
   * protected - 이 클래스를 상속한 자식클래스에서만 접근이 가능
   */
  class CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    private constructor(beans: number) {
      this.fillCoffeeBeans(beans);
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('beans는 0보다 커야합니다.');
      }
      this.coffeeBeans += beans;
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

  const maker = CoffeeMaker.makeMachine(100);
  //   maker.coffeeBeans = -32; // !! invalid !! 이처럼 외부에서 직접 변경하게 되면 허용되지 않은 값도 넣을 수 있기 때문에 private로 바로 접근할 수 없게 해준다.
  maker.fillCoffeeBeans(32);
  console.log(maker);
}
