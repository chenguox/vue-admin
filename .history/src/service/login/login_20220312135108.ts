import gxRequest from '../index'

enum LoginAPI {
  Account
}

export function accountLoginRequest(account: IAccount){
  return gxRequest.post({
    url: LoginAPI.AccountLogin
  })
}
