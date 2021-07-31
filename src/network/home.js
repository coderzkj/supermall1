import {request} from "./ruquest";

//将home中全部的url在home.js中管理
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export  function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page,
    }
  })
}
