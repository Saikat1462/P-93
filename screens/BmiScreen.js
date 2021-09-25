import React,{Component} from "react"
import { Text,View } from "react-native"

export default class Bmi extends Component{
    render(){
        return(
            <View style={{
                flex:1,
                justifyContent:"center",
                alignItems:"center"
            }}>
                <Text>BmiScreen</Text>
            </View>
        )
    }
}