{
  type Video = {
    title: string
    author: string
  }
  // 나쁜 예시
  //   type VideoOptional = {
  //     title?: string
  //     author?: string
  //   }

  // Map
  type Optional<T> = {
    [P in keyof T]?: T[P] // = for ... in
  }
  type VideoOptional = Optional<Video>

  const vidOp: VideoOptional = {
    title: 'hi',
  }
  type Animal = {
    name: string
    age: number
  }
  const animal: Optional<Animal> = {
    name: 'cat',
  }
  //   Readonly 속성
  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P]
  }
  animal.name = 'dog'
  const vidRead: ReadOnly<Video> = {
    title: 'hello',
    author: 'me',
  }
  //   vidRead.title = 'bye' // error
  type Nullable<T> = {
    [P in keyof T]: T[P] | null
  }
  const obj2: Nullable<Video> = {
    title: 'hi',
    author: null,
  }
  type Proxy<T> = {
    get(): T
    set(value: T): void
  }
  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>
  }
}
