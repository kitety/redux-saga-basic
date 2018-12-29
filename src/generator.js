import $ from "jquery";
function* gen () {
  var post = yield $.getJSON("https://jsonplaceholder.typicode.com/posts")
  console.log(post)
  var user = yield $.getJSON("https://jsonplaceholder.typicode.com/users")
  console.log(user)

}
// var myGen = gen()
// console.log(myGen.next())
// generator 自动执行
// 递归执行
function run (generator) {
  var myGen = generator()
  function handle (yielded) {
    if (!yielded.done) {
      // 返回的是promise对象，可以有then方法
      yielded.value.then(function (data) {
        // data就是异步返回的内容，用next传给前面的变量
        return handle(myGen.next(data))
      })
    }
  }
  handle(myGen.next())
}
run(gen)
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

