import {Text, StyleSheet} from 'react-native';
import React from 'react';
import { useFonts } from "expo-font";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {Entypo, Feather, Ionicons, AntDesign} from '@expo/vector-icons';

import MenuIcon from '../assets/icons/menu';
import HomeIcon from '../assets/icons/home.svg';
import CardsIcon from '../assets/icons/cards.svg';
import PlusIcon from '../assets/icons/plus.svg';
import StatsIcon from '../assets/icons/stats.svg';
import UserIcon from '../assets/icons/user.svg';

import ButtonNew from './Controllers/Button';

//Pages
import Home from './Controllers/Home';
import Finance from './Controllers/Finance';
import Cards from './Controllers/Cards';
import Test from './Controllers/Test';

const Tab = createBottomTabNavigator();
    
export default function Routes(){
    
  let [fontsLoaded] = useFonts({
      SFProTextBlack: require("../assets/fonts/SFProTextBlack.otf"),
      SFProTextBlackItalic: require("../assets/fonts/SFProTextBlackItalic.otf"),
      SFProTextBold: require("../assets/fonts/SFProTextBold.otf"),
      SFProTextBoldItalic: require("../assets/fonts/SFProTextBoldItalic.otf"),
      SFProTextHeavy: require("../assets/fonts/SFProTextHeavy.otf"),
      SFProTextHeavyItalic: require("../assets/fonts/SFProTextHeavyItalic.otf"),
      SFProTextLight: require("../assets/fonts/SFProTextLight.otf"),
      SFProTextMedium: require("../assets/fonts/SFProTextMedium.otf"),
      SFProTextMediumItalic: require("../assets/fonts/SFProTextMediumItalic.otf"),
      SFProTextRegular: require("../assets/fonts/SFProTextRegular.otf"),
      SFProTextRegularItalic: require("../assets/fonts/SFProTextRegularItalic.otf"),
      SFProTextSemibold: require("../assets/fonts/SFProTextSemibold.otf"),
      SFProTextSemiboldItalic: require("../assets/fonts/SFProTextSemiboldItalic.otf"),
      SFProTextThin: require("../assets/fonts/SFProTextThin.otf"),
      SFProTextThinItalic: require("../assets/fonts/SFProTextThinItalic.otf"),
      SFProTextUltralight: require("../assets/fonts/SFProTextUltralight.otf"),
      SFProTextUltralightItalic: require("../assets/fonts/SFProTextUltralightItalic.otf")
  });

  return (
    <Tab.Navigator
    screenOptions={{
        headerStatusBarHeight:20,
        tabBarShowLabel:false,
        tabBarStyle:{
            height:70
        }
      }}
    >
        <Tab.Screen 
            name='Inicio' 
            component={Home} 
            options={{ 
                headerShown: false, 
                tabBarIcon: ({size, color}) => (
                    <Feather name='home' size={size} color={color}/>
                ) 
            }}/>
        <Tab.Screen 
            name='Stats' 
            component={Finance} 
            options={{ 
                headerShown: false, 
                tabBarIcon: ({size, color}) => (
                    <Ionicons name='stats-chart' size={size} color={color}/>
                ) 
            }}
            />
        <Tab.Screen 
            name='Add Transaction' 
            component={Home} 
            options={{ 
                headerShown: false, 
                tabBarIcon: ({size, color}) => (
                    <ButtonNew size={size} color={color}/>
                ) 
            }}
            />
        <Tab.Screen 
            name='Cards'
            component={Cards} 
            options={{ 
                headerShown: false, 
                tabBarIcon: ({size, color}) => (
                    <Feather name='credit-card' size={size} color={color}/>
                ) 
            }}
            />
        <Tab.Screen 
            name='My Account'
            component={Test} 
            options={{ 
                headerShown: false, 
                tabBarIcon: ({size, color}) => (
                    <Feather name='user' size={size} color={color}/>
                ) 
            }}
            />
    </Tab.Navigator>
  )
    
}
const style = StyleSheet.create({
    text:{
        color:"#eeee"
    }
})