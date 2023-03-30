Function.prototype.apply = function (thisArg, args) {
    // 1、获取被执行的函数
    const fn = this; // 这里的this指向sum函数

    // 2、绑定this
    thisArg = thisArg ? Object(thisArg) : thisArg; // 处理thisArg为Number/null/undefined的情况
    thisArg.fn = fn;

    // 执行函数
    const result = args ? thisArg.fn(...args) : thisArg.fn(); // args可能为undefined
    delete thisArg.fn;

    // 返回执行结果
    return result;
};


export default {}
