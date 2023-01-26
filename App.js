import React,{ useState } from 'react';
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import Login from './src/Controllers/Login';

export default function App() {
    const [screen, setScreen] = useState(0);
    const [fontsLoaded] = useFonts({
        'GIlroyLight' : require('./assets/fonts/GilroyLight.otf'),
        'GilroyExtraBold' : require('./assets/fonts/GilroyExtraBold.otf'),
        'GilroyMedium' : require('./assets/fonts/Gilroy-Medium.ttf'),
        'GilroyRegular' : require('./assets/fonts/Gilroy-Regular.ttf'),
        'GilroySemiBold' : require('./assets/fonts/Gilroy-SemiBold.ttf'),
    });

    if(!fontsLoaded){
        return (
            <AppLoading/>
        )
    }else{
        
        return (<Login/>)
        
        return (
            <NavigationContainer>
                <Routes/>
            </NavigationContainer>
        );
    }
    //Routes
  
}



