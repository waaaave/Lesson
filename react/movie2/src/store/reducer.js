//自建数据中心
// 共同富裕
// store 数据仓库

export const initialState = {
    loading: true,
    movies: [],
    errorMessage: null
}


// reduccer 函数  action一会要执行的动作
export const reducer = (state, action) => {
    switch (action.type) { //做了什么事
        case "SEARCH_MOVIES_SUCCESS":
            return {
                //上一次的状态
                ...state,
                loading: false,
                movies: action.payload
            }
        default:
            return state
    }
}