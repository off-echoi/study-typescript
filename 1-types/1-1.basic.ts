{
    /**
     * JavaScript
     * Primitive: number, string, boolean, bigint, symbol, null, undefined
     * Object: function, array ...
     */
    // number
    const num: number = -1

    //string
    const str: string = "hi"
    
    //boolean
    const boal:boolean = false

    // undefined
    let name: undefined // 💩
    let age: number | undefined
    age = 0
    age = undefined
    function find():number | undefined {
        return undefined
    }
    //null
    let person: null // 💩
    let people:string|null

    //unknown 💩 - 가능하면 사용하지 않는다.
    let notSure:unknown = 0
    notSure = 'A'
    notSure = true

    // any 💩 - 가능하면 사용하지 않는다.
    let anything:any = 0
    anything = 'hello'

    // void - 아무것도 리턴하지 않는 함수
    function print():void {
        console.log('hello')
        return
    }
    let unusualbe:void = undefined // 변수에 void를 사용하는 경우는 undefined만 할당할 수 있다. 즉 잘 사용하지 않는다.

    // never - 함수에서 아무것도 리턴하지 않을때
    function throwError(message:string):never{
        throw new Error(message)
        // while(true){}
    }
    
    // object - 원시타입을 제외한 모든 object 타입  💩 
    let obj:object = [1,2]
    function acceptSomeObject(obj:object){
    }
    acceptSomeObject({name:'choi'})
    acceptSomeObject({animal:'dog'})
}