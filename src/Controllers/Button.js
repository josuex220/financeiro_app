import React from "react";
import { View, Text, StyleSheet } from "react-native";

import {Entypo, Feather, Ionicons, AntDesign} from '@expo/vector-icons';

export default function Button({size, color}){
    return (
        <View style={[style.IconPlus]}>
            <AntDesign name="plus" size={size} color='#fff'/>
        </View>
    );
}
const style = StyleSheet.create({
    IconPlus:{
        backgroundColor:'#2A64D9',
        height:60,
        width:60,
        borderRadius:60,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        color:'#ffffff',
        marginBottom:60
    }
});