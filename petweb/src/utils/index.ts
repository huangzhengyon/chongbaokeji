let utils: any = Object.create(null);

utils.scrollToAppoint = function( to: number, from: number, el: any, duration: number = 500) {
    if (!window.requestAnimationFrame) {
      window.requestAnimationFrame = window.webkitRequestAnimationFrame
        || function (callback: any): any {
          return window.setTimeout(callback, 1000 / 60)
        }
    }
    
    // 默认滚动的容器为#content  views/home
    el = !el ? document.querySelector('body') : el
    // 默认为content的滚动条的位置
    from = !from ? el.scrollTop : from

    const difference = Math.abs(from - to);
    const step = Math.ceil((difference / duration) * 50)
  
    function scroll(start: any, end: any, step: any) {
      if (start === end) return false
  
      let d = start + step > end ? end : start + step
      if (start > end) { d = start - step < end ? end : start - step }
  
      if (el === window) {
        window.scrollTo(d, d)
      } else {
        el.scrollTop = d
      }
      window.requestAnimationFrame(() => scroll(d, end, step))
    }
    scroll(from, to, step)
  }



  export default utils