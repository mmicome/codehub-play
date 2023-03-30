Function.prototype.call = function (thisArg, ...args) {
    // 1、获取被调用的函数
    const fn = this; // 这里的this指向sum

    // 2、绑定this，将thisArg转成对象类型（防止传入非对象类型）
    thisArg = thisArg ? Object(thisArg) : window;
    thisArg.fn = fn;

    // 3、执行函数
    const result = thisArg.fn(...args);
    delete thisArg.fn;

    // 4、返回执行结果
    return result;
};

export default {}