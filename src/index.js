import Prism from "prismjs"
import area,{resume} from "./text"
import showdown from 'showdown'
import "babel-polyfill"  //parcel bug https://github.com/parcel-bundler/parcel/issues/871
(() => {

  const length = area.length
  const resume_len = resume.length
  const converter = new showdown.Converter()
  const _area = document.querySelector(".area")
  const _resume = document.querySelector('.resume')
  const _style = document.createElement("style")
  const renderType = {
    area:'area',
    resume:'resume'
  }
  document.head.appendChild(_style)
  let _text = ''
  let interval
  const readCharset = async (index,content,type) => {
    let speed = 1
    let charset = content.slice(index, index + speed)
    index += speed
    if (index > (type === renderType.area?length:resume_len)) {
      return 
    }
    await render(charset,type)
    await readCharset(index, content,type)
  }
  const handleAreaHTML = (_text,area) => {
    const _html = Prism.highlight(_text, Prism.languages.css)
    _style.innerHTML = _text
    writeHTMLAndSetScrollTop(area,_html)
  }
  const handleResumeMD = (_text, resume) => {
    const MdConvertHTML = converter.makeHtml(_text)
    writeHTMLAndSetScrollTop(resume,MdConvertHTML)
  }
  const writeHTMLAndSetScrollTop = (ele,html)=>{
    ele.innerHTML = html
    ele.scrollTop = ele.scrollHeight
  }
  const render = (charset,type) =>
    new Promise(resolve => {
      setTimeout(() => {
        _text += charset
        type === renderType.area?handleAreaHTML(_text,_area):handleResumeMD(_text,_resume)
        if (charset === "？" || charset === "！" || charset === "，") {
          interval = 1000
        } else {
          interval = 20
        }
        resolve()
      }, interval)
  });
  (async () => {
    await readCharset(0, area,renderType.area)
    _text = ''
    await readCharset(0,resume,renderType.resume)
  })()
})()
