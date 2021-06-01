{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface ICoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface ICommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMaker implements ICoffeeMaker, ICommercialCoffeeMaker {
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
    clean() {
      console.log('cleaning the machine');
    }
    private grindBeans(shots: number): void {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
    }
    private preheat(): void {
      console.log('heating up...');
    }
    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...`);
      return {
        shots: shots,
        hasMilk: false,
      };
    }
    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class AmateurUser {
    constructor(private machine: ICoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }
  class ProBarista {
    constructor(private machine: ICommercialCoffeeMaker) {}
    makecoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(45);
      this.machine.clean();
    }
  }

  const maker1: CoffeeMaker = CoffeeMaker.makeMachine(34);
  maker1.fillCoffeeBeans(100);
  maker1.makeCoffee(10);

  const maker2: ICoffeeMaker = CoffeeMaker.makeMachine(44);
  // maker2.fillCoffeeBeans(100); maker2의 타입이 ICoffeeMaker이기 때문에 ICoffeeMaker안에 지정되어있지 않은 fillCoffeeBeans를 사용하면 에러가 난다. maker1과 타입을 비교해보아라
  maker2.makeCoffee(2);

  const maker3: ICommercialCoffeeMaker = CoffeeMaker.makeMachine(63);
  maker3.makeCoffee(3);
  maker3.clean();

  const amateur = new AmateurUser(maker1);
  amateur.makeCoffee();

  const proBarista = new ProBarista(maker1);
  proBarista.makecoffee();
}
