import { Layout, Drawer} from 'antd';
import BaseLeftLayout from './baseLeftLayout'
import ScrollBar from 'smooth-scrollbar';
import { enquireScreen } from 'enquire-js';
import Header from './header'
const { Sider, Content } = Layout;
import style from './index.less'

export default class SiderDemo extends React.Component {
  state = {
    collapsed: false,
    isMobile: false,
  };
  componentDidMount() {
    // 滚动条
    ScrollBar.init(document.getElementsByClassName("rightLayoutContext")[0]);

    // 手机类型
    enquireScreen(mobile => {
      const { isMobile } = this.state;
      if (isMobile !== mobile) {
        this.setState({
          isMobile: mobile,
        });
      }
    });
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const { children } = this.props;
    const { collapsed, isMobile } = this.state;
    return (
      <Layout>
        <BaseLeftLayout {...{collapsed,isMobile}} 
            toggle = {this.toggle.bind(this)}
         />
        <Layout ref="rightContent" className={style.rightLayoutContext}>
          <Header toggleCollapsed={this.toggle} isMobile={isMobile}/>
          <Content className={style.layoutContext} >
             { children }
          </Content>
        </Layout>
      </Layout>
    );
  }
}
