export function* hello () {
  console.log('hello saga')
}
/*
function* gen(){
  var a=yield 'Hello'
  console.log(a)
}
var g=gen()
g.next()
  //  console.log(g.next())
  //  console.log(g.next(1111))
要点：
1.返回一个生成器函数，可以通过next(),让其运行到yield语句停止，也可以在括号里面赋值，为其传入值。和python的生成器有很多类似的地方
2.yield本身没有返回值
3.一步也会在yield停止，因此可以用写同步的方式去写异步程序，避免回调地域
 var a=yield axios.post('xxx')
 var b=yield axios.post('xxx',a)
 */
