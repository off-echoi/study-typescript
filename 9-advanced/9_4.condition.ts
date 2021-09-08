{
  type Check<T> = T extends string ? boolean : number
  type Type = Check<string>
  type Type1 = Check<'a'>
}
