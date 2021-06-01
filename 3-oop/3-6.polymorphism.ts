{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
    syrup?: boolean;
  };

  interface ICoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMaker implements ICoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    constructor(beans: number) {
      // protected constructor(beans: number) {
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
  class CaffeeLatteMachine extends CoffeeMaker {
    // 자식클래스에서 생성자를 추가로 만들어주기위해서는 꼭 super()를 사용해야한다.
    constructor(beans: number, public readonly milk: string) {
      super(beans);
    }
    private steamMilk(): void {
      console.log('Steaming Milk...');
    }
    makeCoffee(shots: number): CoffeeCup {
      // 자식에서 부모의 인스턴스들을 가져다 쓰기위해서 super을 쓴다.
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }
  class SweetCoffeeMaker extends CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return {
        ...coffee,
        syrup: true,
      };
    }
  }

  const maker = new CoffeeMaker(24);
  const latteeMaker = new CaffeeLatteMachine(25, 'soy or law fat');
  const coffee = latteeMaker.makeCoffee(2);
  //   console.log(coffee);
  const syrupCoffeeMaker = new SweetCoffeeMaker(34);
  const syrupCoffee = syrupCoffeeMaker.makeCoffee(3);
  console.log(syrupCoffee);

  const machines: ICoffeeMaker[] = [
    new CoffeeMaker(16),
    new CaffeeLatteMachine(16, 'soy'),
    new SweetCoffeeMaker(11),
    new CoffeeMaker(22),
    new CaffeeLatteMachine(33, 'law fat'),
    new SweetCoffeeMaker(41),
  ];

  machines.forEach((machine) => {
    console.log('---------------------------------------');
    machine.makeCoffee(1);
  });
}
