import { View } from "@tarojs/components";
import { AtButton, AtRadio } from "taro-ui";
import "./index.scss";
import GlobalFooter from "../../components/GlobalFooter";
import questions from "../../data/questions.json";
import { useEffect, useState } from "react";
import Taro from "@tarojs/taro";

// 做题页面
export default () => {
  // 当前题目序号从1开始
  const [current, setCurrent] = useState<number>(1);
  // 当前题目
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  // 当前题目选项
  const questionOptions = currentQuestion.options.map((option) => {
    return { label: `${option.key}, ${option.value}`, value: option.key };
  });
  // 当前答案
  const [currentAnswer, setCurrentAnswer] = useState<string>();
  // 回答列表
  const [answerList] = useState<string[]>([]);

  // 序号变化时，切换当前题目以及选项
  useEffect(() => {
    setCurrentQuestion(questions[current - 1]);
    setCurrentAnswer(answerList[current - 1]);
  }, [current]);

  return (
    <View className="doQuestionPage">
      <View className="at-article__h1 title">
        {current}.{currentQuestion.title}
      </View>
      <View className="options-wrapper">
        <AtRadio
          options={questionOptions}
          value={currentAnswer}
          onClick={(value) => {
            setCurrentAnswer(value);
            // 记录回答
            answerList[current - 1] = value;
          }}
        />
      </View>
      {current < questions.length && (
        <AtButton
          type="primary"
          circle
          className="controlBtn"
          onClick={() => setCurrent(current + 1)}
          disabled={!currentAnswer}
        >
          下一题
        </AtButton>
      )}
      {current == questions.length && (
        <AtButton
          type="primary"
          circle
          className="controlBtn"
          onClick={() => {
            // 传递答案
            Taro.setStorageSync("answerList", answerList); // 本地存储方式
            // TODO: 提交答案
            Taro.navigateTo({ url: "/pages/result/index" });
          }}
          disabled={!currentAnswer}
        >
          查看结果
        </AtButton>
      )}
      {current > 1 && (
        <AtButton
          circle
          className="controlBtn"
          onClick={() => setCurrent(current - 1)}
        >
          上一题
        </AtButton>
      )}
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
