const area = `
/* 
* 这是一个空白页面
* 0，
* 1，
* 2，
* 我们加东西吧！
* 首先,先来添加一下全局的动画效果！
*/

*{
  -webkit-transition: all .8s;
  transition: all .8s;
}
/* 啊？没效果么？背景变一下颜色可好？*/

html {
  /* 
  3，
  2，
  1 */
  background: rgb(160, 196, 189);
}
.token.comment{ 
    color: white 
}


/* 哈哈！厉害吧！？

* 你的眼睛是不是要瞎了?那字体也变一下呗? 

*/

.area{
  color: rgb(222,222,222); 
  overflow: auto;
  background: rgb(12, 16, 26);
  border: 1px solid #ccc;
  max-height: 44.6%;
  width: 35%;
  font-size: 14px;
  font-family: monospace;
  padding: 10px 10px 20px;
  box-shadow: -4px 4px 2px 0 rgba(0,0,0,0.3);
  white-space: pre-wrap;
  outline: 0;
}



/* 
* ！
* yoyoyoyo，怎样？抱歉让你的眼睛损伤啦～ 
* 我们来看看「代码高亮」！

*/


.token.comment{ color: #857F6B; font-style: italic; }
.token.selector{ color: #E69F0F; }
.token.property{ color: #64D5EA; }
.token.punctuation{ color: #64D5EA; }
.token.function{ color: #BE84F2; }


/*

* 哈哈，是不是非常不错？
* 嗯,我们准备写一点其他的东西，把这个东西往右移动一下！
* 3，
* 2，
* 1
*/

.area {
  -webkit-transform: translateX(150%);
  transform:translateX(150%);
}

/*
* 接下来我们写一份简历好不好？
* 首先我们先准备一个打字框！
*/

.resume{
  position:fixed;
  top:0;
  padding: .5em;  margin: .5em;
  background: white; color: #222;
  width: 40vw; height:500px; 
  border: 1px solid;
  overflow: scroll;
  color: rgb(222,222,222); 
  background: rgb(12, 16, 26);
}
`
const resume = `
罗松林
=============
- 前端
- yzstrive@gmail.com

技能
=============
- 熟练使用html css js
- 对angular,react,vue有一定了解
- 对前端模块化开发有自己的理解


链接
=============
- [本项目的源代码](https://github.com/yzstrive/awesome-resume)
`
export default area
export { resume }
