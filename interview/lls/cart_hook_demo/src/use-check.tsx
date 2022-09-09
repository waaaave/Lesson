import { useReducer, useEffect, useCallback } from "react"

const CHECKED_CHANGE = 'CHECKED_CHANGE'
const CHECKED_ALL_CHANGE = 'CHECKED_ALL_CHANGE'
const SET_CHECKED_MAP = 'SET_CHECKED_MAP'

type CheckedMap = {
    [key:string]:boolean
}

type CheckedChange<T> = {
    type : typeof CHECKED_CHANGE
    payload:{
        dataItem:T
        checked: boolean
    }
}

type CheckedAllChange = {
    type : typeof CHECKED_ALL_CHANGE
    payload: boolean

}


type Action<T> = CheckedChange<T> | CheckedAllChange  // 联合类型

export const useChecked = (dataSource) => {



    const [checkedMap, dispatch] = useReducer(
        (checkedMapParam: CheckedMap, action: Action<T>) => {
            switch(action.type){
                case CHECKED_CHANGE:
                    return{

                    }
                case CHECKED_ALL_CHANGE:
                    return{
                        
                    }
                default:
                    return checkedMapParam
            }
        }, {})
    const onCheckedChange = () =>{

    }

    const filterChecked = useCallback(() => {

    },[checkedMap, dataSource, key])

    useEffect(() => {
      filterChecked()
    }, [dataSource])
    

    return {
        onCheckedChange,
        checkedMap,
        dispatch,
        filterChecked,
        checkedall
    }
}