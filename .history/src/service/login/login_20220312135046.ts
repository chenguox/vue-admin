import gxRequest from '../index'

enum LoginAPI {
  
}

export function accountLoginRequest(account: IAccount){
  return gxRequest.post({
    url: LoginAPI.AccountLogin
  })
}
