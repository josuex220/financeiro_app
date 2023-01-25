import * as React from 'react';
import {useState} from "react";
import {Text, StatusBar, StyleSheet,SafeAreaView, ScrollView, View, Dimensions,TouchableOpacity,Image,Alert} from 'react-native';
import MenuIcon from '../../assets/icons/menu.svg';
import HomeIcon from '../../assets/icons/home.svg';
import CardsIcon from '../../assets/icons/cards.svg';
import PlusIcon from '../../assets/icons/plus.svg';
import StatsIcon from '../../assets/icons/stats.svg';
import UserIcon from '../../assets/icons/user.svg';
import Card from '../Components/Card';

import Carousel from 'react-native-reanimated-carousel';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from 'react-native-chart-kit'
  import Swiper from 'react-native-swiper'
  const getList = async () => {
    const res = await fetch('https://api.wdwebdesign.com.br/card/getAll/11');
    if (!res.ok) {
        throw new Error(`${res.status}: ${await res.text()}`)
      }
      return res.json();
  } 
 
  export default function Cards(){
   

        const width = Dimensions.get('window').width-30;
        
        // fetch(`https://api.wdwebdesign.com.br/card/getAll/11`)
        // .then(response => response.json())
        // .then(response => {
        //     var cardsResponse = [];
        //     for (let i = 0; i < response.length; i++) {
        //         const element = response[i];            
        //         cardsResponse.push(<Card
        //             key={i}
        //             accountId={element.id_account}
        //             binCard={element.last_six}
        //             myName={element.holder}
        //             cardName={element.card_bank}
        //             colorCard={element.color}
        //             colorLogo={element.colorLogo}
        //         />);
        //     }
        //     setCards(cardsResponse)
        // })
        // .catch(err => console.error(err));
        
        const [listCards, setCards] = useState([]);
        React.useEffect(() => {
            getList()
            .then(setCards)
            .catch(console.error);
        },[]);
        // console.log(listCards)

        StatusBar.setBarStyle('dark-content', true);
        let app =
                <SafeAreaView style={allStyle.body}>
                    <ScrollView style={allStyle.bodyScroll}>
                        <View style={[allStyle.container, allStyle.marginT]}>
                            <View style={[allStyle.header, allStyle.flexDv, allStyle.flexCollumn]}>
                                <TouchableOpacity style={[styles.touchable,  allStyle.flexDv]}>
                                        <MenuIcon width={21.76} height={16.71} fill={'#26272A'}/>
                                </TouchableOpacity>
                                <Text style={allStyle.titleView}>Cartões</Text>
                                <View style={allStyle.circleProfiler}>

                                </View>
                            </View>

                            
                            <View style={[allStyle.marginT,{paddingBottom:70}]}>
                                 
                                    <Swiper 
                                            style={styles.wrapper} 
                                            showsPagination={false} 
                                            loop={false} 
                                            showsButtons={false}
                                            height="100%"
                                            >
                                        { listCards.map((element, i ) => (
                                            <Card
                                                key={i}
                                                accountId={element.id_account}
                                                binCard={element.last_six}
                                                myName={element.holder}
                                                cardName={element.card_bank}
                                                colorCard={element.color}
                                                colorLogo={element.colorLogo}
                                            />
                                        ))}
                                    </Swiper>
                               
                            </View>
                            
                        </View>
                        
                    </ScrollView>
                    
                </SafeAreaView>;
        return app;
    }

const styles = StyleSheet.create({
    touchable: {
      justifyContent: 'center',
      width: 48,
      height:'100%',
    },
    text: {
      color: 'transparent',
      fontSize: 18,
      textAlign: 'center'
    },
    wrapper: {},
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
  })
const allStyle = StyleSheet.create({
    
    titleCardBudge:{
        fontSize:13,
        fontWeight:'600',
        color:'#26272A'
    },
    bodyScroll:{
        paddingBottom:20
    },
    colorRed:{
        color:'#CA2E2E'
    },
    colorGreen:{
        color:'#01BD60'
    },
    contentCardBudge:{
        fontSize:15,
        fontWeight:'600',
        color:'#26272A'
    },
    titleCardBudgeBase:{
        fontSize:12,
        fontWeight:'300',
        color:'#8D9096'
    },
    contentCardBudgeBase:{
        fontSize:13,
        fontWeight:'300',
        color:'#8D9096'
    },
    
    cardBudgeTextBase:{
        marginTop:5,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    infosBudgeCart:{
        flex:1,
        justifyContent:'center',
        paddingTop:20,
        paddingBottom:20,
        paddingRight:15
    },
    cardBudgeText:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    labelTitle:{
        fontSize:16,
        fontWeight:'600',
        color:'#26272A'
    },
    cardCollumn:{
        width: '100%',
        height:100,
        borderRadius:12,
        justifyContent:'center',
        backgroundColor:'#fff'
    },
    cardCollumnStatus:{
        alignContent:'center',
        justifyContent:'center',
        flexDirection:'row'
    },
    cardStatus:{
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        marginLeft:12.5,
        marginRight:12.5,
    },
    textCardStatus:{
        fontSize:12
    },
    statusGasto:{
        width:15,
        height:15,
        borderRadius:15,
        backgroundColor:'rgba(42,100,217,.5)',
        alignContent:'center',
        justifyContent:'center',
        marginRight:7,
    },
    statusRestante:{
        width:15,
        height:15,
        borderRadius:15,
        backgroundColor:'red',
        alignContent:'center',
        justifyContent:'center',
        backgroundColor:'rgba(42,100,217,.9)',
        marginRight:7
    },
    cardCollumnFinance:{
        width: '100%',
        height:200,
        borderRadius:12,
        justifyContent:'center',
        backgroundColor:'#fff',
        shadowColor: '#000',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 12,
    },
    budgeCard:{
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    budgeCardFinance:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        // backgroundColor:'red'
    },
    tab:{
        backgroundColor:'#F2F2F2',
        padding:6,
        flex:12,
        flexDirection:'row',
        borderRadius:14
    },
    TabsBottomNavigation:{
        flexDirection:'row',
        width:'100%',
        height:72,
        backgroundColor:'#FFFFFF',
        shadowColor: '#000',
        shadowOffset: {width: 10, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    chartPadding:{
        padding:20
    },

    itensTabsBottomCenterNavigation:{
        backgroundColor:'#2A64D9',
        height:60,
        width:60,
        borderRadius:60,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        bottom:45,
        left: '50%',
        marginLeft:-30,
        position:'absolute'
    },
    itensTabsBottomMargin:{
        flex:2
    },
    itensTabsBottomNavigation:{
        flex:6,
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        textAlign:'center'
    },
    TabsNavigation:{
        flex:5,
        flexDirection:'row'
    },
    textTabItem:{
        fontSize:12,
        color:'#8D9096'
    },
    tabItem:{
        flex:4,
        textAlign:'center',
        color:'#ffffff',
        alignItems:'center',
        padding: 10
    },
    marginY:{
        marginTop:30,
    },
    marginYT:{
        marginTop:10,
    },

    circleProfiler:{
        width:48,
        height:48,
        borderRadius:48,
        backgroundColor:'#E1E4EB',
    },
    encapsuCircle:{
        width:80,
        height:100,
        paddingLeft:10,
        justifyContent:'center'
    },
    circleProfilerBudge:{

        width:48,
        height:48,
        borderRadius:48,
        backgroundColor:'#E1E4EB',
    },
    titleView:{
        flex:12,
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
        fontSize:16,
        // backgroundColor:'#000'
    },
    tabActive:{
        backgroundColor:'#fff',
        borderRadius:12,
        color:'#2A64D9'
    },
    textTabActive:{
        color:'#2A64D9'
    },
    flexCollumn:{
        flexDirection:'row'
    },
    header:{
        height:48,
        alignItems:'center',
        width:'100%',
    },
    container:{
        paddingLeft:15,
        paddingRight:15,
    },
    marginT:{
        marginTop:10
    },
    body:{
        height:'100%',
        marginTop:20,
        backgroundColor:'#FAFAFA'
    }
    
})
