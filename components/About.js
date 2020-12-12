import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'

export class About extends Component {
    render() {
        return (
            <View style={style.view}>
                <Text style={style.title}> a propos de moi ! </Text>
                <Text> eaze;lmc dqlsmd;qskeiazp cxlckwmx^pzea cwxlkmeazj  </Text>
            </View>
        )
    }
}
const style= StyleSheet.create({
    view:{
        margin:20
    },
    title:{
        fontSize:22,
        marginBottom:20,
    }
})

export default About
