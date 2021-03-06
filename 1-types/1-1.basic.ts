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
    let name: undefined // π©
    let age: number | undefined
    age = 0
    age = undefined
    function find():number | undefined {
        return undefined
    }
    //null
    let person: null // π©
    let people:string|null

    //unknown π© - κ°λ₯νλ©΄ μ¬μ©νμ§ μλλ€.
    let notSure:unknown = 0
    notSure = 'A'
    notSure = true

    // any π© - κ°λ₯νλ©΄ μ¬μ©νμ§ μλλ€.
    let anything:any = 0
    anything = 'hello'

    // void - μλ¬΄κ²λ λ¦¬ν΄νμ§ μλ ν¨μ
    function print():void {
        console.log('hello')
        return
    }
    let unusualbe:void = undefined // λ³μμ voidλ₯Ό μ¬μ©νλ κ²½μ°λ undefinedλ§ ν λΉν  μ μλ€. μ¦ μ μ¬μ©νμ§ μλλ€.

    // never - ν¨μμμ μλ¬΄κ²λ λ¦¬ν΄νμ§ μμλ
    function throwError(message:string):never{
        throw new Error(message)
        // while(true){}
    }
    
    // object - μμνμμ μ μΈν λͺ¨λ  object νμ  π© 
    let obj:object = [1,2]
    function acceptSomeObject(obj:object){
    }
    acceptSomeObject({name:'choi'})
    acceptSomeObject({animal:'dog'})
}