const query = {
    sender: 'Sender',
    receiver: 'Receiver'
}
    //  写框架 打包工作流 多个js文件打包到一起 
    ; (function (w) {
        // 不污染全局
        // js 只会作为前端环境运行
        console.log(w, '----------------------');
        if (!w) {
            return;
        }
        const paramsStr = w.location.search.split('?')[1];
        if (!paramsStr) {
            return;
        }
        const paramsArr = paramsStr.split('&');
        for (let i = 0; i < paramsArr.length; i++) {
            const elements = paramsArr[i].split('=');
            //get 编码  encode
            //解码 decode
            query[elements[0]] = decodeURI(elements[1])
        }
        console.log(query);
    })(window)
