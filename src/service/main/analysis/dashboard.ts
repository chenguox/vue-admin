import gxRequest from "@/service";

enum DashBoardAPI = {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale'
}

export function getCategoryGoodsCount(){
  return gxRequest.get({
    url: DashBoardAPI.categoryGoodsCount
  })
}

export function getCatagoryGoodsSale(){
  return gxRequest.get({
    url: DashBoardAPI.categoryGoodsSale
  })
}

export function getCategoryGoodsFavor(){
  return gxRequest.get({
    url: DashBoardAPI.categoryGoodsFavor
  })
}

export function getAddressGoodsSale(){
  return gxRequest.get({
    url: DashBoardAPI.addressGoodsSale
  })
}