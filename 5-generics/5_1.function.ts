{
  function checkNotNull<T>(arg: T | null): T {
    if (arg === null) {
      throw new Error('not valis number!')
    }
    return arg
  }
}
const stringCheck: string = checkNotNull('a')
const numberCheck: number = checkNotNull(123)
const booleanCheck: boolean = checkNotNull(false)
const nullCheck = checkNotNull(null)
