const requireDirectory = require('require-directory')

class InitManager {

  static initCore(app){
    // 将app挂载到 InitManager
    // console.log(process.cwd());
    InitManager.app = app
    InitManager.initModels(app)
    InitManager.initLoadRouters(app)
  }
  static initLoadRouters(app){
    requireDirectory(module, `${process.cwd()}/src/routes`, {
      visit: function whenLoadModule(obj){
        // console.log(obj);
        app.use(obj.routes()) // 启动路由中间件
        app.use(obj.allowedMethods()) // 允许所有的访问方法
      }
    })
  }
  static initModels(app){
    const m = require('../models/index')
    
    m.init()
  }
}

module.exports = InitManager