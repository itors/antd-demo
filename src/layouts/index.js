import { Layout, message} from 'antd';
import BaseLeftLayout from './baseLeftLayout'
import ScrollBar from 'smooth-scrollbar';
import { enquireScreen, unenquireScreen } from 'enquire-js';
import Header from './header'
const { Content } = Layout;
import style from './index.less'


export default class SiderDemo extends React.Component {
  state = {
    collapsed: false,
    platform: 0,
  };

  componentWillMount() {
    // 浏览器类型
    enquireScreen(mobile => {
      const { isMobile } = this.state;
      if (isMobile !== mobile) {
        this.setState({
          isMobile: mobile,
        });
      }
    });
  }
  componentDidMount() {
    // 滚动条
    ScrollBar.init(document.getElementsByClassName("rightLayoutContext")[0]);
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
        <BaseLeftLayout 
            toggle = {this.toggle.bind(this)}
            isMobile = {isMobile}
            collapsed = {collapsed}
         />
        <Layout ref="rightContent" className="rightLayoutContext">
          <Header toggleCollapsed={this.toggle} isMobile={isMobile}/>
          <Content className={style.layoutContext} >
             { children }
          </Content>
        </Layout>
      </Layout>
    );
  }
}
