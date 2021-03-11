function debounce(fn,delay){
    var timer = null;
    return function(){
        clearTimeout(timer)// 清除上一延时器
        timer = setTimeout(function(){// 重新设置新的延时器
                fn()
        },delay)
    }
}

function throttle(fn, delay) {
    let flag = false
    return function () {
      if (flag) {
        return  // 如果flag = false，那就直接不执行下边的代码
      }
      flag = true // 持续触发的话，flag一直是true，就会停在上边的判断那里
      setTimeout(() => {
        fn()// 定时器到时间之后，函数就会被执行
        flag = false 
      }, delay)
    }
}