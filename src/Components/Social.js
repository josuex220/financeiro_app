import React from "react";
import { View, Text, StyleSheet } from "react-native";

import {Entypo, Feather, Ionicons, AntDesign} from '@expo/vector-icons';

export default function Social({size, color, onPress, icon}){
    return (
        <View style={[style.IconPlus]} onPress={onPress}>
            {icon}
        </View>
    );
}
const style = StyleSheet.create({
    IconPlus:{
        borderStyle:'solid',
        borderWidth: 1,
        marginLeft:5,
        marginRight:5,
        borderColor: "#EBE9F1",
        height:68,
        width:72,
        borderRadius:6,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        color:'#ffffff',
    }
});