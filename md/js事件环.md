# js事件环

规范有提到两个概念，但没有详细介绍，查阅一些资料大概可总结如下：

## macrotask

包含执行整体的js代码，事件回调，XHR回调，定时器（setTimeout/setInterval/setImmediate），IO操作，UI render

## microtask 

更新应用程序状态的任务，包括promise回调，MutationObserver，process.nextTick，Object.observe

其中setImmediate和process.nextTick是nodejs的实现，在nodejs篇会详细介绍。

## 总结

- 事件循环是js实现异步的核心
- 每轮事件循环分为3个步骤：
    - 执行macrotask队列的一个任务
    - 执行完当前microtask队列的所有任务
    - UI render

- 浏览器只保证requestAnimationFrame的回调在重绘之前执行，没有确定的时间，何时重绘由浏览器决定


```javascript
console.log('start')

setTimeout(function() {
  console.log('setTimeout')
}, 0)

new Promise(function(resolve){
  console.log('resolve');
  resolve();
}).then(function() {
  console.log('promise1')
}).then(function() {
  console.log('promise2')
})

console.log('end')
```

## 参考链接

[http://lynnelv.github.io/js-event-loop-browser](http://lynnelv.github.io/js-event-loop-browser)