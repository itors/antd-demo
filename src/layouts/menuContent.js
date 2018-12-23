import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';

export default class MenuContent extends Component {
  state={

  }
  menuSelect(){
    const { onMenuSelect } = this.props;
    if(onMenuSelect){
      onMenuSelect();
    }
  }

 
  render() {
    const { collapsed, onMenuSelect } = this.props;
    return (
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          onClick={this.menuSelect.bind(this)}
        >
          <Menu.SubMenu
            key="sub1"
            title={(
              <span>
                <Icon type="smile" />
                <span>数据传递</span>
              </span>)}
          >
            <Menu.Item key="testPage">
              <Link to="testPage">
                <Icon type="video-camera" />
                <span>models传递数据</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="dataTransfer">
              <Link to="dataTransfer">
                <Icon type="user" />
                <span>学习数据流</span>
              </Link>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="/">
            <Link to="/">
              <Icon type="upload" />
              <span>首页</span>
            </Link>
          </Menu.Item>
        </Menu>
    );
  }
};
