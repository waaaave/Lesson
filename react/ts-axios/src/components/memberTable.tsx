import React, {useEffect, useState} from 'react';
import { MemberEntity } from '../model/member';
import { getMembersCollection } from '../api/memberApi';

const useMemberCollection = () =>{
  const [memberCollection, setMemberCollection] = useState<MemberEntity[]>([])
  const loadMemberCollection = async () => {
    const memberCollection = await getMembersCollection();
    setMemberCollection(memberCollection)
  }
  return { memberCollection, loadMemberCollection }
  
}

export const MemberTableComponent = () => {
  const { memberCollection, loadMemberCollection } = useMemberCollection();
  useEffect(() =>{
    loadMemberCollection();
  },[])
  return(
    <>
      <table>
        <thead>
          <tr>
            <th>avatar</th>
            <th>id</th>
            <th>login</th>
          </tr>
        </thead>
        <tbody>
          {
            memberCollection.map((member) => (
              <MemberRow key={member.id} member={member} />
            ))
          }
        </tbody>
      </table>
    </>
  )
}

const MemberRow = ({member}:{member:MemberEntity}) => (
  <tr>
    <td>
      <img src={member.avatar_url} style={{maxWidth:'10rem'}} alt="" />
    </td>
    <td>
    <span>{member.id}</span>
    </td>
    <td>
    <span>{member.login}</span>
    </td>
  </tr>
)