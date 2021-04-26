import React from 'react'
import './Layout.less'
import { Layout } from 'antd'

import MySider from '../sider/Sider'
import MyHeader from '../header/Header'

const { Content, Footer } = Layout

class MyLayout extends React.Component {
  render() {
    return (
      <Layout>
        <MySider></MySider>
        <Layout className="site-layout">
          <MyHeader></MyHeader>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              overflowY: 'scroll'
            }}
          >
            {this.props.children}
          </Content>
          <Footer
            style={{
              textAlign: 'center'
            }}
          >
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

export default MyLayout
