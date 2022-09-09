import { useReducer, useEffect, useCallback } from "react"
interface Option {
    key? :string
}
const SET_CHECKED_MAP = 'SET_CHECKED_MAP'
type CheckedMap = {
    [key:string]:boolean
}
type SetCheckedMap = {
    type: typeof SET_CHECKED_MAP
    payload: CheckedMap
}
type Action = SetCheckedMap

export const useChecked = <T>(
        dataSource: T[],
        {key = 'id'} :Option = {}
) => {
    const [checkedMap, dispatch] = useReducer((checkedMapParam:CheckedMap, action:Action) => {
        switch(action.type){
            case SET_CHECKED_MAP:{
                return action.payload
            }
            default:
                return{}
        }
    }, {})
}