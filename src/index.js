import Prism from "prismjs"
import text from "./text"
(() => {
  const area = document.querySelector(".area")
  const resume = document.querySelector('.resume')
  const _style = document.createElement("style")
  document.head.appendChild(_style)
  const length = text.length
  let _text = ""
  let interval
  const readCharset = async (index,content,type) => {
    let speed = 1
    let charset = content.slice(index, index + speed)
    index += speed
    if (index > length) {
      return 
    }
    await render(charset)
    await readCharset(index, content)
  }
  const render = charset =>
    new Promise(resolve => {
      setTimeout(() => {
        _text += charset
        const _html = Prism.highlight(_text, Prism.languages.css)
        _style.innerHTML = _text
        area.innerHTML = _html
        area.scrollTop = area.scrollHeight
        if (charset === "？" || charset === "！" || charset === "，") {
          interval = 1000
        } else {
          interval = 20
        }
        resolve()
      }, interval)
  });
  (async area => {
    await readCharset(0, text)
  })(area)
})()
