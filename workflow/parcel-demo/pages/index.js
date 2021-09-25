import React, { useState, useEffect } from 'react';
import { List, Col, Avatar } from 'antd';
import axios from 'axios';
const limit = 50;
const Index = () => {
    // 文章列表
    const [topics, setTopics] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios
            .get(`https://cnodejs.org/api/v1/topics?tab=all&page=${page}&limit=${limit}&mdrender=true`)
            .then(data => {
                console.log(data.data.data);
                setTopics(data.data.data);
                setLoading(false);
            })
    }, [topics, page])
    return (
        <List
            className="topic_list"
            loading={loading}
            dataSource={topics}
            renderItem={(topic) => {
                return (
                    <List.Item>
                        <Col xs="24" md="20">
                            <Avatar src={topic.author.avatar_url} />
                            {topic.title}
                        </Col>
                    </List.Item>
                )
            }}
        >

        </List>
    )
}
export default Index