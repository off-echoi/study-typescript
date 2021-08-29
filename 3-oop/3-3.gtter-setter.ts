{
  class User {
    private internalAge = 4;

    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
        this.internalAge = num;
      }
    }

    /** 이 코드를 아래의 한줄로 요약하여 사용 가능
     * private firstName:string
     * public lastName:string
     * constructor(firstName:string, lastName:string){
     *  this.firstName = firstName;
     *  this.lastName = lastName;
     * }
     */
    constructor(private firstName: string, public lastName: string) {}

    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  }
  const user = new User('Steve', 'Jobs');
  user.age = 6;
  console.log(user.fullName);
}
