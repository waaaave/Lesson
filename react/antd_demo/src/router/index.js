import Topic from "../view/topic/index";
import UndefinedPage from '../view/page404/index'

const route = [
    {
        path:"/topic/:id",
        exact:true,
        render(props){
            return <Topic {...props}/>
        }
    },
    {
        path:"",
        exact:false,
        render(props){
            return <UndefinedPage{...props}/>
        }
    }
]

export { route }