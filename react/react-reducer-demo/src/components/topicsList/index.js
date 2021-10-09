import React from 'react';
import {List} from 'antd'
function TopicsList(props){
    let {data,loading} = props;
    return(
        
        <List
            loading={loading}
            dataSource={data}
            renderItem={
                (data) =>{
                    return (
                        <List.Item>
                            
                        </List.Item>
                    )
                }
            }
        >

        </List>
    )
}

export default TopicsList;