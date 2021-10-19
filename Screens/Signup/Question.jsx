import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import NumericInput from 'react-native-numeric-input'
import { Button } from 'react-native-paper';

const Question = (props) => {

    return (
        <View>
            <Text style={styles.text}>{props.question}</Text>
            {
            props.buttons ?  
            (props.buttons.map((btn,ind)=><Button style={styles.buttons} key={ind} mode="contained" onPress={()=>console.log(btn)}>{btn}</Button>))  :
            <NumericInput containerStyle={styles.numeric} onChange={value => console.log(value)} />
            }
        </View>
    )
}

export default Question

const styles = StyleSheet.create({
    text:{
        fontSize: 30,
        color: 'black',
        marginTop: 30,
        textAlign: 'center'
    },
    buttons:{
        borderRadius: 15, 
        marginTop: 15,
        backgroundColor: '#d16b11'
    },
    numeric:{
        marginTop: 20, 
        marginLeft: 'auto',
        marginRight: 'auto'
    }
})
