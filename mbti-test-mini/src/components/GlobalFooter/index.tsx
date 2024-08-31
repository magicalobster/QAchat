import { View} from "@tarojs/components";
import "./index.scss";

// 全局footer
export default () => {
  return (
    <View className="globalFooter">
      作者：magicalobster
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
