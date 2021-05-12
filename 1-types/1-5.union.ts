{
  /**
   * Union Types: OR
   */
  type Direction = 'left' | 'right' | 'up' | 'down'
  function move(direction: Direction) {
    console.log(direction)
  }
  move('down')
  move('left')
  move('up')

  type TileSize = 8 | 16 | 32
  const tile: TileSize = 16

  type SuccessState = {
    response: {
      body: string
    }
  }
  type FailState = {
    reason: string
  }
  type LoginState = SuccessState | FailState
  function login(id: string, password: string): LoginState {
    return {
      response: {
        body: 'logged in!',
      },
    }
  }

  function printLoginState(state: LoginState): void {
    if ('response' in state) {
      console.log('성공')
    } else {
      console.log('실패')
    }
  }
}
