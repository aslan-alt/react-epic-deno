import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import styled from 'styled-components'
import { AuthStore } from '@/stores/auth'

const Wrapper = styled.div`
    padding:20px 0;
    h1{
        border:1px solid red;
        text-align:center;
    }
`;
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 8,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};
const onFinish = (values) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const Validators = {//校验,使用callback或者Promise都可以
    username(rule, value, callback) {
        console.log(rule, value)
        if (/\W/.test(value)) return Promise.reject('不能出现字母数字下划线以外的字符')
        if (value.length < 3) return Promise.reject('用户名不能小于3')
        if (value.length > 10) return Promise.reject('用户名长度不能大于10')
        Promise.resolve()
    }
}

function Login() {
    return (
        <Wrapper>
            <h1>登陆</h1>
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: '请输入用户名',
                        },
                        {
                            validator: Validators.username
                        }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>


                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        </Wrapper>
    );
}





export default Login;
