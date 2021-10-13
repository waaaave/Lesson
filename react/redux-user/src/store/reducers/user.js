// user reducer 是数据收归store之后的一个数据节点
// 等待被组件

export default function user(
    user = {
        loading : true,
        data : {}
    },
    action
){
    switch(action.type){
        case 'user_loading':
            return {
                loading : true,
                data : {}
            }
        case 'user_loadover':
            return{
                loading : false,
                data : action.data
            }
            default:
                return user
    }
}