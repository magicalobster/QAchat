import { View, Image } from "@tarojs/components";
import { AtButton } from "taro-ui";
import headerBg from "../../assets/headerBg.jpg";
import "./index.scss";
import GlobalFooter from "../../components/GlobalFooter";
import Taro from "@tarojs/taro";

// 主页
export default () => {
  return (
    <View className="indexPage">
      <View className="at-article__h1 title">MBTI性格测试</View>
      <View className="at-article__h2 subTitle">
        用2分钟描述你是谁以及你的性格特点
      </View>
      <AtButton
        type="primary"
        circle
        className="enterBtn"
        onClick={() => {
          Taro.navigateTo({ url: "/pages/doQuestion/index" });
        }}
      >
        开始测试
      </AtButton>
      <Image className="headerBg" src={headerBg} />
      <GlobalFooter />
    </View>
  );
};

// export default class Index extends Component<PropsWithChildren> {
//   componentDidMount () { }
//
//   componentWillUnmount () { }
//
//   componentDidShow () { }
//
//   componentDidHide () { }
//
//   render () {
//     return (
//       <View className='index'>
//         <Text>Hello world!</Text>
//         <AtButton type='primary'>I need Taro UI</AtButton>
//         <Text>Taro UI 支持 Vue 了吗？</Text>
//         <AtButton type='primary' circle>支持</AtButton>
//         <Text>共建？</Text>
//         <AtButton type='secondary' circle>来</AtButton>
//         <AtBadge value={10} maxValue={99}>
//           <AtButton size='small'>按钮</AtButton>
//         </AtBadge>
//       </View>
//     )
//   }
// }
