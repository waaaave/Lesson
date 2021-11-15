// 购物车 有商品列表
// ts 类型的限定
// interface 用于校验添加到购物车的所有商品
// interface goods {
//   id:number;
//   name: string;
//   prise: number;
// }

// data 数据流
// js 在数组声明的时候都会有一个长度
const cartData = Array(5)
  .fill(undefined)
  .map((v,i,z) => {
    console.log(z);
   return { id: i,
    name: `商品${i}`,
    price: Math.round(Math.random()*1000)}
  })

  console.log(cartData);