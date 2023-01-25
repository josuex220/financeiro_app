import React,{ useState } from 'react';
import AppLoading from "expo-app-loading";
import ButtonCustom from './ButtonCustom';
import Textdivider from '../Components/Textdivider';
import Social from '../Components/Social';
import { useFonts } from "expo-font";
import {Text, StyleSheet, SafeAreaView, View, TextInput, Button} from 'react-native';

import {Entypo, Feather, Fontisto, Ionicons} from '@expo/vector-icons';

export default function Login(){
    const [fontsLoaded] = useFonts({
        'GIlroyLight' : require('../../assets/fonts/GilroyLight.otf'),
        'GilroyExtraBold' : require('../../assets/fonts/GilroyExtraBold.otf'),
        'GilroyMedium' : require('../../assets/fonts/Gilroy-Medium.ttf'),
        'GilroyRegular' : require('../../assets/fonts/Gilroy-Regular.ttf'),
        'GilroySemiBold' : require('../../assets/fonts/Gilroy-SemiBold.ttf'),
    });

    if(!fontsLoaded){
        return (
            <AppLoading/>
        )
    }else{
        return (
                
            <SafeAreaView style={[allStyle.body, allStyle.container, allStyle.center]}>
                <Text style={[allStyle.textTitle, {fontFamily:'GilroySemiBold'}]}>Login</Text>
                <View style={[allStyle.marginTop]}>
                    <View>
                    <View>
                            <Text style={[allStyle.textLabel, {fontFamily:'GilroySemiBold'}]}>E-mail</Text>
                            <View style={[allStyle.inputGroup]}>
                                <Fontisto style={{paddingRight:12}} name='email' size={16} color={'#667085'}/>
                                <TextInput 
                                    style={[allStyle.textInput,{fontFamily:'GilroyMedium', fontSize:12, flex:1}]}
                                    placeholder="Seu Email"
                                    />
                            </View>
                        </View>
                        <View style={[{marginTop:18}]}>
                            <Text style={[allStyle.textLabel, {fontFamily:'GilroySemiBold'}]}>Senha</Text>
                            <View style={[allStyle.inputGroup, {paddingRight:0}]}>
                                <Feather style={{paddingRight:12}} name='lock' size={16} color={'#667085'}/>
                                <TextInput 
                                    style={[allStyle.textInput,{fontFamily:'GilroyMedium', fontSize:12, flex:1}]}
                                    placeholder="Sua Senha"
                                    />
                                <Ionicons style={{paddingRight:12}} name='eye-off-outline' size={16} color={'#667085'}/>
                            </View>
                        </View>
                        <View style={[{marginTop:64}]}>
                            <ButtonCustom
                                onPress={()=>setScreen(2)}
                                title="Login"/>
                        </View>
                        <Textdivider 
                            title="Ou"
                            lineColor="#CDCED1"
                        />
                        <View style={{alignItems:'center', marginTop:20, flexDirection:'row', justifyContent:'center'}}>
                            <Social icon={<Fontisto name='facebook' size={30} color={'#1877F2'}/>}/>
                            <Social icon={<Ionicons name='logo-google' size={30} color={'#EA4335'}/>}/>
                            <Social icon={<Ionicons name='logo-linkedin' size={30} color={'#0A66C2'}/>}/>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const allStyle = StyleSheet.create({
    
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
    },
    body:{
        marginTop:20
    },
    textLabel:{
        fontSize:14
    },
    inputGroup:{
        borderStyle:'solid',
        borderWidth: 1,
        borderColor: "#A2A2A6",
        borderRadius: 4,
        marginTop:7,
        flexDirection:'row',
        alignContent:'center',
        alignItems:'center',
        paddingLeft:12,
        paddingRight:12,
        
        height:43,
    },
    textInput:{
        width:'100%',
        height:'100%'
    },
    marginTop:{
        marginTop:45
    },
    container:{
        paddingLeft:24,
        paddingRight:24
    },
    center:{
        width:'100%',
        height:'100%',
        justifyContent:'center'
    },
    textTitle:{
        fontSize:28,
        color:'#312E49'
    }
});