import React, { Component } from 'react';
import { Layout, Icon  } from 'antd';
import  './header.scss'

const { Header } = Layout;
export default class HeaderView extends Component {

  toggleCollapsedClick = () => { 
    const { toggleCollapsed } = this.props;
    if (toggleCollapsed) { 
      toggleCollapsed();
    }
  }
  render() {
    const { collapsed, isMobile } = this.props;
    return (
      <Header className="home_header">
          {
            isMobile?<div className="header_logo" />:""
          }
          <Icon
            className="trigger"
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
             onClick={this.toggleCollapsedClick}
          />
      </Header>
    );
  }
};