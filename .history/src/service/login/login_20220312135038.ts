import gxRequest from '../index'

enum 

export function accountLoginRequest(account: IAccount){
  return gxRequest.post({
    url: LoginAPI.AccountLogin
  })
}
