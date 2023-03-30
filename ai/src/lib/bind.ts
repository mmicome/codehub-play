Function.prototype.bind = function (thisArg:any, ...args:any[]) {
    // 1、获取被调用的函数
    const fn = this;

    // 2、绑定this
    thisArg = thisArg ? Object(thisArg) : window;
    const retFunc = function (...extraArgs: any[]) {
        thisArg.fn = fn;
        const result = thisArg.fn(...args, ...extraArgs); // 对两次传入的参数进行合并
        delete thisArg.fn;
        return result;
     };

    // 3、直接返回方法，且这个方法绑定了执行参数
    return retFunc;
};

export default {}