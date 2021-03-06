function deepClone(obj){

    //=>过滤特殊情况
    if(obj===null) return null;
    if(typeof obj!=="object") return obj;
    if(obj instanceof RegExp(obj)){
      return new RegExp(obj);
    }
  
    //=>不直接创建空对象的目的:克隆的结果和之前保持相同的所属类
    let newObj=new obj.constructor;
    for(let key in obj){
      if(obj.hasOwnProperty(key)){
        newObj[key]=deepClone(obj[key])
      }
    }
    return newObj
  }