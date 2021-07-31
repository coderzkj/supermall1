import {request} from "./ruquest";

export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommend() {
  return request({
    url:'/recommend'
  })
}
// ES6创建一个类
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
// const p = new Person('jing', 12)

//ES5创建一个类
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// const p = new Person('ming', 15)
export class Goods{
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.realPrice = itemInfo.lowNowPrice;
    this.discount = itemInfo.discountDesc;
    this.columns= columns;
    this.services = services;
  }
}

export class Shop{
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.goodsCount = shopInfo.cGoods;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
  }
}

export class GoodsInfo {
  constructor(detailInfo, detailImage) {
    this.desc = detailInfo.desc;
    this.title = detailImage.key;
    this.imgList = detailImage.list;
  }
}

export class ParamsInfo {
  constructor(info, rule) {
    //images可能没有值
    this.image = info.images ? info.images[0] : '';
    this.info = info.set;
    this.size = rule.tables;
  }
}


//判断一个对象是不是空对象
// const m = {};
// Object.keys(m).length === 0


