import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer,createSwitchNavigator } from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import Bmi from "../screens/BmiScreen";

export default class AppNavigator extends Component{
    render(){
        return(
            <NavigationContainer>
                <AppContainer/>
            </NavigationContainer>
        )
    }
}

const tabNavigator = createSwitchNavigator({
    HomeScreen:HomeScreen,
    Bmi:Bmi
})

const AppContainer=createAppContainer(
  tabNavigator
)
