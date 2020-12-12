import React, { Component } from 'react'
import { Text, View,TextInput } from 'react-native'

export class Home extends Component {
    constructor (props){
        super(props)
        this.state ={
            city:'Alger'
        }
    }
    setCity(city){
        this.setState({city})
    }
    render() {
        return (
            <TextInput
            onChangeText={(text)=> this.setCity(text)}
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} 
      value={this.state.city}
      
      />
        )
    }
}

export default Home
