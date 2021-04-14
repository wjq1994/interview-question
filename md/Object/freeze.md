# freeze

```javascript
function myFreeze(obj) {
    if (obj instanceof Object) {
        // 阻止添加新属性并将所有现有属性标记为不可配置。当前属性的值只要原来是可写的就可以改变。
        // 不会影响从原型链上继承的属性。但 __proto__ 属性的值也会不能修改。
        Object.seal(obj);

        let p;
        for (p in obj) {
            if (obj.hasOwnProperty(p)) {
                Object.defineProperty(obj, p, {
                    writable: false
                });
                myFreeze(obj[p]);// 递归，实现更深层次的冻结
            }
        }
    }
}
```