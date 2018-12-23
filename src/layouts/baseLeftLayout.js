import React, { Component } from 'react';
import MenuContent from './menuContent'
import { Layout, Drawer} from 'antd';
import style from './index.less'
const { Sider } = Layout;
export default class BaseLeftLayout extends Component {
  state={

  }
  
  closeCollapsed(){
    const { toggle } = this.props;
    if(toggle){
        toggle();
    }
  }
  render() {
      const {isMobile, collapsed } = this.props;
    return <div>
            { isMobile ?(
                <Drawer
                visible={collapsed}
                closable={false}
                maskClosable={true}
                placement="left"
                width={189}
                onClose={this.closeCollapsed.bind(this)}
                style={{
                    padding: 0,
                    height: '100vh',
                }}
            >
                <div className={style.logoBox}>
                <div className={style.logo} />
                <div className={style.logoName} >My Antd</div>
                </div>
                <MenuContent onMenuSelect = {this.closeCollapsed.bind(this)} />
            </Drawer>
        ):(<Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            className={collapsed?style.sideCollapsed:style.sideLayout}
        >
            <div className={style.logoBox}>
            <div className={style.logo} />
            <div className={style.logoName} style={{display: collapsed?'none':""}} >My Antd</div>
            </div>
            <MenuContent collapsed={collapsed}/>
        </Sider>)
        }
      </div>
  }
};
