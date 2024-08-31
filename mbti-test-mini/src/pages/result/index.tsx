import { View, Image } from "@tarojs/components";
import { AtButton } from "taro-ui";
import Taro from "@tarojs/taro";
import headerBg from "../../assets/headerBg.jpg";
import "./index.scss";
import GlobalFooter from "../../components/GlobalFooter";
import question from "../../data/questions.json";
import questionResults from "../../data/question_results.json";
import { getMaxScore } from "../../utils/bizUtils";

// 结果页
export default () => {
  const answerList = Taro.getStorageSync("answerList");
  if (!answerList || answerList.length < 1) {
    Taro.showToast({
      title: "未完成测试",
      icon: "error",
      duration: 3000,
    });
  }
  const result = getMaxScore(answerList, question, questionResults);

  return (
    <View className="resultPage">
      <View className="at-article__h1 title">{result.resultName}</View>
      <View className="at-article__h2 subTitle">
        你的结果是：{result.resultDesc}
      </View>
      <AtButton
        type="primary"
        circle
        className="enterBtn"
        onClick={() => {
          Taro.reLaunch({ url: "/pages/index/index" }); // 为防止页面无限重叠跳转(可返回的)，所以用reLaunch
        }}
      >
        返回主页
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
