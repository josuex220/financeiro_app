import React from 'react';
import { useFonts } from "expo-font";
import { Text, View, StyleSheet, Pressable } from 'react-native';

export default function Textdivider(props) {
    const { title = 'Demostração',
            lineColor = '#2A64D9',
            textColor='#fff',
            backgroundColor='#fff',
            } = props;
  
    const [fontsLoaded] = useFonts({
        'GIlroyLight' : require('../../assets/fonts/GilroyLight.otf'),
        'GilroyExtraBold' : require('../../assets/fonts/GilroyExtraBold.otf'),
        'GilroyMedium' : require('../../assets/fonts/Gilroy-Medium.ttf'),
        'GilroyRegular' : require('../../assets/fonts/Gilroy-Regular.ttf'),
        'GilroySemiBold' : require('../../assets/fonts/Gilroy-SemiBold.ttf'),
    });

    return (
        <View style={{marginTop:60, justifyContent:'center', alignItems:'center'}}>
            <View style={{width:'80%', height:2, backgroundColor:lineColor, zIndex:0, position:'absolute'}}></View>
            <Text style={{backgroundColor:'white', padding:5, color:'#747980'}}>{title}</Text>
            
        </View>
    );

}