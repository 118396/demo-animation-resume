// // The code snippet you want to highlight, as a string
// var text = "body{color: red;}";

// // Returns a highlighted HTML string
// var css = Prism.highlight(text, Prism.languages.css, 'javascript');
// console.log(css)

/* 把 code 写到 #code 和 style 标签里 */
function writeCode(prefix,code,fn){
  let domCode = document.querySelector('#code')
 let n = 0
  let id = setInterval(()=>{
    n += 1
    // domCode.innerHTML = code.substring(0,n) //把你给我的代码取出 0 到 n 个。
    domCode.innerHTML = Prism.highlight(prefix + code.substring(0,n), Prism.languages.css, 'javascript');
    // 把你给我的 code 前 n 个字符以  css 的形式高亮，然后放到domCode 中。
    styleTag.innerHTML =  prefix + code.substring(0,n)
    domCode.scrollTop = domCode.scrollHeight // 可拉的最大高度
    // 把你给我的 code 前 n 个字符直接放到 style 标签里面。
    if(n >= code.length ){ //一旦发现写完了
       window.clearInterval(id) //将定时器清除
       fn && fn.call()
    }
  },0)
}

function writeMarkdown(markdown, fn){
  let domPaper = document.querySelector('#paper > .content')
  let n = 0
  let id = setInterval(()=>{
    n += 1
    domPaper.innerHTML = markdown.substring(0, n)
    domPaper.scrollTop = domPaper.scrollHeight 
    if(n >= markdown.length ){ 
       window.clearInterval(id)
       fn && fn.call()
    }
  },0)
}

var result = `/*
 面试官你好，我是 XXX
 我将以动画的形式来介绍自己
 只用文字介绍太单调了
 我就用代码来介绍吧
 首先准备一些样式
 */

*{
transition:all 1s ;
}
html{
  background: rgb(222,222,222);
font-size : 16px;
}
#code{
  border:1px solid red;
padding: 16px;
}

/* 我需要一点代码高亮 */

.token.selector{
    color: #690;
}
.token.property{
    color: #905;
}
.token.function{
    color: #DD4a68;
}
/* 加点 3D 效果 */
#code{
  transform: rotate(360deg);
}
/* 不玩了，我来介绍一下我自己*/
/* 我需要一张白纸 */
#code{
  position: fixed;
  left: 0;
  width: 50%;
  height: 100%;
}
#paper{
  position: fixed;
  right:0;
  width: 50%;
  height: 100%;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
}
#paper > .content {
  background : white;
  width:100%;
  height: 100%;
} 
`

/*var n = 0
var id = setInterval(()=>{
  n += 1
  code.innerHTML = result.substring(0,n) //直接覆盖，不需要加什么
//   code.innerHTML = code.innerHTML.replace('html','<span style="color:red;">html</span>')
  code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css, 'javascript');
  styleTag.innerHTML = result.substring(0,n)
  if(n >= result.length ){
     window.clearInterval(id)
     fn2()
     fn3(result)
  }
},10) */
// var result2 = `
//     #paper{
//     }  
//     /* 接下来把 Mrkdown 变成 HTML - marked.js*/
//     `
var md = `
# 自我介绍
我叫 xx 
1994 年 2 月 出生
xxx 学校毕业
自学前端半年
希望应聘前端开发岗位
# 技能介绍
熟悉 javaScript CSS
#技能介绍
1> 轮播
2> 简历
3> 画板

QQ ： xxx
手机 ： xxxx

`
writeCode('',result,()=>{ // writeCode call the function 
  //给你一个电话，做好了之后就打这个电话给我 call back。 
  creatPaper(() =>{
    writeCode(result,result2, ()=>{
      writeMarkdown(md)
    })
  } )//第一次写，前缀是空的，然后写result;第二次写,前缀是result，写 result2.
})
//定闹钟： 50毫秒之后写第一行代码
// 没有等它写完代码就直接执行 fn2 ，这就说明writeCode是个异步任务

// 1.定闹 钟 
// 2.writeCode 返回
// 3. 执行 fn2
// 4。闹钟时间到
// 5.写第一行代码


function creatPaper(fn){//同步
  var paper = document.createElement('div')
  paper.id = 'paper'
  var content = document.createElement('pre')
  content.className = 'content'
  paper.appendChild(content)
  document.body.appendChild(paper)
  fn && fn.call()
}

/*
function fn3(preResult){ 
var n = 0
var id = setInterval(() => {
  n += 1
  code.innerHTML = preResult + result.substring(0,n) // n-1个字符
  //之前是直接覆盖，不需要加什么，现在并不知道之前的内容是什么，所以只能一个字一个字的添加。
  styleTag.innerHTML = preResult + result.substring(0,n)
  code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css, 'javascript');
  if(n >= result.length){
    window.clearInterval(id)
  }
},50)
}*/