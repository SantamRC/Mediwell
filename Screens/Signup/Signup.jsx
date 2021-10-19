import React,{useState} from 'react'
import { Formik } from 'formik';
import Stepper from "react-native-stepper-ui";
import { View, Alert, Text } from "react-native";
import Question from './Question';


const questions=[
    {
        question: "Please tell us your biological gender",
        buttons : ["Male","Female"]
    },
    {
        question: "Please tell us your current weight"
    },
    {
        question: "Please tell us your current height"
    },
    {
        question: "How often do you exercise (>45 Min)?",
        buttons : ["Never","1-2 x per month","1-2 x per week",">4 x per week"]
    },
    {
        question: "What kind of Diabetees do you have ?",
        buttons : ["Type 1","Type 2","Type 3"]
    },
    {
        question: "For how long have you had Diabetes already ?",
        buttons : ["Less than 1 month","Less than 6 months","Less than 1 year","Less than 3 year","Less than 6 year","Less than 19 year","Less than 20 year"]
    },
    {
        question: "When was the last severe hypo ?",
        buttons : ["1 day ago","1 week ago","1 month ago","6 months ago","1 year ago","More than 1 year","Never"]
    },
    {
        question: "How often do you have hypos during excercise ?",
        buttons : ["Every exercise","Every 2-3 exercises","Every 4-6 exercises","Almost Never","Never"]
    },
    {
        question: "What CGM do you use ?",
        buttons : ["Abbott","Dexcom"]
    },
]

const content = 
    questions.map((data,ind)=>
        <Question key={ind} question={data.question} buttons={data.buttons} />
    )

const App = () => {
  const [active, setActive] = useState(0);
  return (
    <View style={{ marginVertical: 20, marginHorizontal: 20 }}>
      <Stepper
        active={active}
        content={content}
        onNext={() => setActive((p) => p + 1)}
        onBack={() => setActive((p) => p - 1)}
        onFinish={() => Alert.alert("Finish")}
        stepStyle={{
            backgroundColor: "green",
            display: "flex",
        }}
        buttonStyle={{
            marginTop: 20, 
            marginLeft: 'auto',
            marginRight: 'auto',
            width: 130,
            borderRadius: 20, 
        }}
        buttonTextStyle={{
            textAlign: "center"
        }}
      />
    </View>
  );
};

export default App;
