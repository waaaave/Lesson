// 类的开发者，调用者
class Login {
  constructor(username,password){
    const PASSWORD = Symbol();
    this.username = username
    //编写者,使用symbol规避了公共访问
    this[PASSWORD] = password;
    //1. {} key 
    // 2. 怎么存进对象， key又不可访问？ 私有
    // 3. symbol
  }
  checkPassword(pwd){
    return this[PASSWORD] == pwd
  }
}