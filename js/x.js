
function writeCode(prefix,code,fn){
    let domCode = document.querySelector('#code')
   let n = 0
    let id = setInterval(()=>{
      n += 1
      
      domCode.innerHTML = Prism.highlight(prefix + code.substring(0,n), Prism.languages.css, 'javascript');
    
      styleTag.innerHTML =  prefix + code.substring(0,n)
      domCode.scrollTop = domCode.scrollHeight 

      if(n >= code.length ){
         window.clearInterval(id) 
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
  
  
  var result2 = `
      #paper{
      }  
      /* 接下来把 Mrkdown 变成 HTML - marked.js*/
      `
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

    creatPaper(() =>{
      writeCode(result,result2, ()=>{
        writeMarkdown(md)
      })
    } )//第一次写，前缀是空的，然后写result;第二次写,前缀是result，写 result2.
  })
  
  
  function creatPaper(fn){//同步
    var paper = document.createElement('div')
    paper.id = 'paper'
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn.call()
  }
  
 