login
  1. 跨层次 共享登录状态
    useContext + useReducer + createContext
  2. 登录后，前端要做那些细节
    1. 用 cookie 方案的话
      每次http请求都会带上， 存在浏览器的文件中， 不能太长 一般只放uid之类的
    2. localstorage name，avatar
    3. token 
      因为有时候cookie不安全
  3. HTTP请求头理解：
    为什么要Content-Type字段？
      - 使用 'Content-Type':'application/json' 就会 JSON.parse
    怎么处理前端发送出来的内容？
      - 
    使用Authorization: `${state.token.t}`, 带上token
    
    小程序怎么拿到用户信息？
      - 通过微信做到用户-微信-小程序链接获取信息
    
    token的需要
    用户再点击小程序之后，首先弹出弹出层确认是否授权给小程序或网站获取用户信息的权利
    授权之后，微信就会把一个令牌交给第三方
    这就叫做 access token 

    fetch('weixin.com'),{
      header:{
        Authorization:'token'
      }
    }