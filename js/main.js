// // The code snippet you want to highlight, as a string
// var text = "body{color: red;}";

// // Returns a highlighted HTML string
// var css = Prism.highlight(text, Prism.languages.css, 'javascript');
// console.log(css)


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


`
var n = 0
var id = setInterval(()=>{
  n += 1
  code.innerHTML = result.substring(0,n)
//   code.innerHTML = code.innerHTML.replace('html','<span style="color:red;">html</span>')
  code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css, 'javascript');
  styleTag.innerHTML = result.substring(0,n)
  if(n >= result.length ){
     window.clearInterval(id)
  }
},10)