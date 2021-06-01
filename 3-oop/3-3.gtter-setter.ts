{
  class User {
    private internalAge = 4;
    constructor(private firstName: string, public lastName: string) {}
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
        this.internalAge = num;
      }
    }

    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  }
  const user = new User('Steve', 'Jobs');
  user.age = 6;
  console.log(user.fullName);
}
