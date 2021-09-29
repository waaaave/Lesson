import React,{useState} from "react"

interface Props{
    initialUserName:string;
    onNameUpdate:(newName:string)=>void;
}

export const NameEditComponent:React.FC<Props> = ({initialUserName,onNameUpdate}) =>{

    const [editingName,setEditingName] = useState(initialUserName) //data 组件的自有数据
    const onChange = (event:any)=>{
        setEditingName(event.target.value)
    }
    const onNameSubmit =()=>{
        onNameUpdate(editingName)
    }

    return(
        <>
           <label>update name</label>
           <input type="text" value={editingName} onChange={onChange} />
           <button onClick={onNameSubmit}>Change</button>
        </>
    )
}