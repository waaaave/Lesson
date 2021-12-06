// Axios -> json -> react
// Axios -> promise<t> -> AxiosResponse<any[]> -> {data} => MemberEntity[] 
import Axios, { AxiosResponse } from 'axios'
// 每个接口都需要接口数据模型定义
import { MemberEntity } from '../model/member'
// ts + react 会多一个model层 做数据集的对象映射

const githubURL = 'https://api.github.com'
const githubMemberURL = `${githubURL}/orgs/lemoncode/members`

// 返回一个member数组
export const getMembersCollection = (): Promise<MemberEntity[]> => {
  // resolve([1])
  const promise = new Promise<MemberEntity[]>((resolve, reject) => {
    try {
      // response -> MemberEntity
      Axios.get<MemberEntity[]>(githubMemberURL).then(response =>
        resolve(mapMamberListApiToModel(response)))
    } catch (e) {
      reject(e)
    }
  });
  return promise
}

const mapMamberListApiToModel = ({ data }: AxiosResponse<any[]>): MemberEntity[] => data.map(githubMember => ({
  id: githubMember.id,
  login: githubMember.login,
  avatar_url: githubMember.avatar_url
}))
