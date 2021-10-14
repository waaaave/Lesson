//所有的状态都在心中

export default function topics(topics={
    loading:true,
    date:[]
},action){
    switch(action.type){
        case "topics_loading":
            return {
                loading: true,
                data: [],
            };

        case "topics_loadover":
            return {
                loading: false,
                data: action.data,
            };
        default:
            return topics;
    }
}