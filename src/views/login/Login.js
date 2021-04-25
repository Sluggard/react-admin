import React from 'react'
import { Form, Input, Button } from 'antd'
import './Login.less'

const Login = () => {
  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  const labelCol = { span: 5 }
  return (
    <div className="login-body">
      <Form
        labelAlign="left"
        className="login-form"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <div className="login-form-title">管理后台</div>
        <Form.Item>
          <Form.Item
            labelCol={labelCol}
            className="login-form-item"
            label="用户名"
            name="username"
            colon={false}
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input bordered="false" />
          </Form.Item>

          <Form.Item
            labelCol={labelCol}
            className="login-form-item"
            label="密码"
            colon={false}
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input.Password bordered="false" />
          </Form.Item>
          <Form.Item className="login-form-btn">
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
