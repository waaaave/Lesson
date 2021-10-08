import React from 'react';
import {Card ,Tag} from 'antd';

export default function Details(props){
    let {data,loading} = props;
    let {title,content} = data;
    return(
        <Card
            bordered
            loading={loading}
            type="inner"
            title={
                <>
                    <h1>
                        <Tag color="green">分享</Tag>
                        {title}
                    </h1>
                </>
            }
        >
           <div dangerouslySetInnerHTML={{__html:content}}></div>
        </Card>
    )
}
