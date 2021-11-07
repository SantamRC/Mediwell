import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar } from 'react-native-paper';

const Profile = () => {
    return (
        <View>
            <Text>Profile</Text>
            <Avatar.Image size={50} source={require('../../Assets/lewis.jpg')} />
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({})
