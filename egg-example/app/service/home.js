const Service = require('egg').Service

class HomeService extends Service{
    async user(){
        // 假设从数据库获取用户信息
        return{
            name: 'wave',
            slogen:'I can',
        };
    }
}

module.exports = HomeService;