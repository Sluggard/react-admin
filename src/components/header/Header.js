import React from 'react'
import { Layout } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import setCollapsed from '../../store/actions/index'
const { Header } = Layout

class MyHeader extends React.Component {
  render() {
    let { collapsed, setCollapsed } = this.props
    return (
      <Header className="site-layout-background" style={{ padding: 0 }}>
        {React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: 'trigger',
            onClick: () => {
              setCollapsed(!collapsed)
            }
          }
        )}
      </Header>
    )
  }
}
// mapStateToProps：将state映射到组件的props中
const mapStateToProps = (state) => {
  return {
    collapsed: state.collapsed
  }
}
// mapDispatchToProps：将dispatch映射到组件的props中
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setCollapsed(data) {
      dispatch(setCollapsed(data))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyHeader)
