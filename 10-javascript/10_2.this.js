function simpleFunc() {
  console.log(this)
}
simpleFunc()

console.clear()
class Counter {
  count = 0
  increase = function () {
    console.log(this)
  }
  // 아래 처럼 익명함수를 사용하면 bind를 사용하지 않고도 this는 Counter를 가리킨다.
  // increase = () => {
  //   console.log(this)
  // }
}
const counter = new Counter()
counter.increase()

// const caller = counter.increase
// caller() // undefind
const caller = counter.increase.bind(counter)
caller() // Counter

class Bob {}
const bob = new Bob()
bob.run = counter.increase
bob.run()
