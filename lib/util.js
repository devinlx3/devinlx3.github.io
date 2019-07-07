const AppUtils = {
    getElement: function(selector){
        return document.querySelector(selector);
    },
    getParentElement: function(ele={}){
        return ele.parentNode;
    },
    /**
     * 获取或设置对象的属性值
     * @param {object} target 对象
     * @param {string} key 属性键
     * @param {object} val 属性值
     */
    attr(target, key, val){//target is object, is not array
        if(val){
            target.setAttribute(key, val);
            return val;
        }else{
            return target.getAttribute(key);
        }
    },
    getCurTime(date){
        return (date || new Date()).format("HH:mm:ss");
    },
    getCurDate(date){
        return (date || new Date()).format("yyyy-MM-dd");
    },
    getCurDataTime(date){
        return (date || new Date()).Format("yyyy-MM-dd HH:mm:ss");
    },
};
Date.prototype.format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "H+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}