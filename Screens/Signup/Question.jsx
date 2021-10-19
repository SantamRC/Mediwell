import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import NumericInput from 'react-native-numeric-input'

const Question = (props) => {

    return (
        <View>
            <Text>{props.question}</Text>
            {
            props.buttons ?  
            (props.buttons.map((btn,ind)=><Button key={ind} title={btn} onPress={()=>console.log(btn)} />))  :
            <NumericInput onChange={value => console.log(value)} />
            }
        </View>
    )
}

export default Question

const styles = StyleSheet.create({})
