import gxRequest from '../index'

import { IAccount,IDataType,ILoginREsult}

enum LoginAPI {
  AccountLogin = '/login'
}

export function accountLoginRequest(account: IAccount){
  return gxRequest.post({
    url: LoginAPI.AccountLogin
    data: account
  })
}
