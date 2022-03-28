import gxRequest from '../../index'

import { IDataType } from '@/service/login/type'

export function getPageListData(url: string, queryInfo: any) {
  return gxRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
