import { Layout, Menu } from 'antd'
import React from 'react'
import {
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  AppstoreOutlined
} from '@ant-design/icons'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
const { Sider } = Layout
const { SubMenu } = Menu

const menuList = [
  {
    id: 1,
    parentId: null,
    icon: <PieChartOutlined />,
    path: '/index',
    title: '首页',
    children: null
  },
  {
    id: 1,
    parentId: null,
    icon: <PieChartOutlined />,
    path: '/login',
    title: '登录页',
    children: null
  },
  {
    id: 2,
    parentId: null,
    path: '/sys/setting',
    icon: <AppstoreOutlined />,
    title: '系统设置',
    children: [
      {
        id: 3,
        parentId: 2,
        icon: <ContainerOutlined />,
        path: '/sys/menu',
        title: '菜单管理'
      },
      {
        id: 4,
        parentId: 2,
        icon: <PieChartOutlined />,
        path: '/sys/permission',
        title: '权限管理'
      },
      {
        id: 5,
        parentId: 2,
        icon: <DesktopOutlined />,
        path: '/sys/user',
        title: '用户管理'
      },
      {
        id: 6,
        parentId: 2,
        icon: <MailOutlined />,
        path: '/sys/dept',
        title: '部门管理'
      }
    ]
  }
]
class MySider extends React.Component {
  constructor(props) {
    super(props)
    const menu = this.renderMenu(menuList)
    this.state = {
      menu,
      defaultSelectedKeys: [1],
      defaultOpenKeys: [2]
    }
  }
  renderMenu = (menuList) => {
    return menuList.map((menu) => {
      if (menu.children) {
        return (
          <SubMenu
            key={menu.id}
            value={menu.path}
            icon={menu.icon}
            title={menu.title}
          >
            {this.renderMenu(menu.children)}
          </SubMenu>
        )
      } else {
        return (
          <Menu.Item value={menu.path} key={menu.id} icon={menu.icon}>
            {menu.title}
          </Menu.Item>
        )
      }
    })
  }
  onSelect = ({ item, key, keyPath, selectedKeys, domEvent }) => {
    console.log(item, 'item')
    console.log(key, 'key')
    console.log(keyPath, 'keyPath')
    console.log(selectedKeys, 'selectedKeys')
    console.log(domEvent, 'domEvent')
    console.log(this.props.history, 'history')
    // this.props.history.push(key)
  }
  render() {
    let { collapsed } = this.props
    return (
      <Sider collapsed={collapsed}>
        <div className="logo" />
        <Menu
          defaultSelectedKeys={this.state.defaultSelectedKeys}
          defaultOpenKeys={this.state.defaultOpenKeys}
          mode="inline"
          theme="dark"
          // inlineCollapsed={collapsed}
          onSelect={this.onSelect}
        >
          {this.state.menu}
        </Menu>
      </Sider>
    )
  }
}
// mapStateToProps：将state映射到组件的props中
const mapStateToProps = (state) => {
  return {
    collapsed: state.collapsed
  }
}
export default connect(mapStateToProps)(withRouter(MySider))
