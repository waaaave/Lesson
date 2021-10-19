
const defaultState = {
    inputValue: 'write something',
    list: [
        '每天起床学习',
        '上午学习',
        '下午还是学习',
        '晚上依旧学习'
    ]
}

export default (state = defaultState, action) => {

    //Reducer 只能接收state
    if(action.type==='changeInput'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }

    if(action.type === 'addItem'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ' '
        return newState
    }

    return state
}