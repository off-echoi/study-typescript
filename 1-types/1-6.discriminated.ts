;() => {
  type SuccessState = {
    result: 'sucess'
    response: {
      body: string
    }
  }
  type FailState = {
    result: 'fail'
    reason: string
  }
  type LoginState = SuccessState | FailState
  function login(id: string, password: string): LoginState {
    return {
      result: 'sucess',
      response: {
        body: 'logged in!',
      },
    }
  }

  function printLoginState(state: LoginState): void {
    if (state.result === 'sucess') {
      console.log('성공')
    } else {
      console.log('실패')
    }
  }
}
