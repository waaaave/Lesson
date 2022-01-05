import React from 'react'
import { connect } from "react-redux";
import { Form, Input, Button   } from "antd";

// UI FORM -> dispatch action -> user reducer 重新计算
const Login = (props) => {
    console.log(props)
    const onFinish = (values) => {
        console.log(values);
    }
    const onFinishFailed = () => {

    }
    return (
        <>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                    ]}
                >
                    <Input type="password"/>
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                    offset: 8,
                    span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                    登录
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}



export default connect((state) => state.user, { 
 })(
    Login
);
