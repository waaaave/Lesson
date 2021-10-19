import * as React from 'react';

import {memberAPI} from '../../api/member';
//<> 泛型 泛指内部关键的数据类型
interface Props{

}
interface State{
    members:[]
}
export class MembersPage extends React.Component<Props,State>{
    constructor(props){
        super(props);
        this.state={
            members:[]
        }
    }
    //发送请求
    public componentDidMount(){
        //职责分离
        memberAPI.fetchMembers()
        .then(members =>{
            console.log(members);
            this.setState(
                {members:members}
            )
            
        })
    }
    render(){
        return(
            <div className="row">
                <h2>mp</h2>
                <table className="table">
                    <tbody>
                        {
                            this.state.members.map(MemberRow)
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
const MemberRow = (member,index) =>{
    console.log(member,index);
    return(
        <tr key={member.id}>
            <td>
                <img src={member.avatar_url} className='avatar' alt="" />
            </td>
            <td>
                <span>{member.id}</span>
            </td>
            <td>
                <span>{member.login}</span>
            </td>
        </tr>
    )
    
}