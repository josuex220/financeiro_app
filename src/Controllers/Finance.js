import {Text, StatusBar, StyleSheet,SafeAreaView, ScrollView, View, Dimensions,TouchableOpacity,Image} from 'react-native';
import MenuIcon from '../../assets/icons/menu.svg';
import HomeIcon from '../../assets/icons/home.svg';
import CardsIcon from '../../assets/icons/cards.svg';
import PlusIcon from '../../assets/icons/plus.svg';
import StatsIcon from '../../assets/icons/stats.svg';
import UserIcon from '../../assets/icons/user.svg';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from 'react-native-chart-kit'

  
  export default function Finance(){
        StatusBar.setBarStyle('dark-content', true);
        let app =
                <SafeAreaView style={allStyle.body}>
                    <ScrollView style={allStyle.bodyScroll}>
                        <View style={[allStyle.container, allStyle.marginT]}>
                            <View style={[allStyle.header, allStyle.flexDv, allStyle.flexCollumn]}>
                                <TouchableOpacity style={[styles.touchable,  allStyle.flexDv]}>
                                        <MenuIcon width={21.76} height={16.71} fill={'#26272A'}/>
                                </TouchableOpacity>
                                <Text style={allStyle.titleView}>Financias</Text>
                                <View style={allStyle.circleProfiler}>

                                </View>
                            </View>
                            <View style={[ allStyle.tab, allStyle.marginY]}>
                                <View style={[allStyle.tabItem,allStyle.tabActive]}>
                                    <Text style={[allStyle.textTabItem, allStyle.textTabActive] }>Semana</Text>
                                </View>
                                <View style={[allStyle.tabItem]}>
                                    <Text style={allStyle.textTabItem }>Mês</Text>
                                </View>
                                <View style={[allStyle.tabItem]}>
                                    <Text style={allStyle.textTabItem }>Ano</Text>
                                </View>
                            </View>
                            
                            <View style={[allStyle.cardCollumnFinance,allStyle.marginY, allStyle.budgeCardFinance]}>
                                <View><ProgressChart
                                    data={{
                                        data: [0.2]
                                      }}
                                    width={150}
                                    height={150}
                                    strokeWidth={12}
                                    radius={60}
                                    chartConfig={{
                                        backgroundGradientFrom: "#ffffff",
                                        backgroundGradientFromOpacity: 0,
                                        backgroundGradientTo: "#ffffff",
                                        backgroundGradientToOpacity: 0.5,
                                        color: (opacity = 1) => `rgba(42, 100, 217, ${opacity})`,
                                        strokeWidth: 0, // optional, default 3
                                        barPercentage: 0.2,
                                        
                                      }}
                                    hideLegend={true}
                                    />
                                    <View style={{justifyContent:'center', position:'absolute', width:138, height:138, alignItems:'center', left:6, top:6, borderRadius:138}}>
                                        <Text style={{fontSize:14, color: '#26272A'}}>R$ 3.900,00</Text>
                                        <Text style={{fontSize:10, color:'#8D9096'}}>Restante</Text>
                                    </View>
                                </View>
                                <View style={[allStyle.cardCollumnStatus]}>
                                    <View style={[allStyle.cardStatus]}>
                                        <View style={[allStyle.statusGasto]}></View>
                                        <Text style={[allStyle.textCardStatus]}>Gasto</Text>
                                    </View>
                                    <View style={[allStyle.cardStatus]}>
                                        <View style={[allStyle.statusRestante]}></View>
                                        <Text style={[allStyle.textCardStatus]}>Restante</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={[allStyle.marginY]}>
                                <Text style={allStyle.labelTitle}>Hoje</Text>
                                    {/* Cart Gastos */}
                                    <View style={[allStyle.cardCollumn,allStyle.marginY, allStyle.budgeCard]}>
                                            <View style={allStyle.encapsuCircle}>
                                                <View style={allStyle.circleProfilerBudge}></View>
                                            </View>
                                            <View style={allStyle.infosBudgeCart}>
                                                <View style={allStyle.cardBudgeText}>
                                                    <Text style={allStyle.titleCardBudge}>Internet</Text>
                                                    <Text style={[allStyle.contentCardBudge, allStyle.colorRed]}>-R$100,00</Text>
                                                </View>
                                                <View style={allStyle.cardBudgeTextBase}>
                                                    <Text style={allStyle.titleCardBudgeBase}>Next</Text>
                                                    <Text style={allStyle.contentCardBudgeBase}>03:00 PM</Text>
                                                </View>
                                            </View>
                                        </View>
                                    {/* Cart Gastos Fim */}
                                    {/* Cart Gastos */}
                                        <View style={[allStyle.cardCollumn,allStyle.marginYT, allStyle.budgeCard]}>
                                            <View style={allStyle.encapsuCircle}>
                                                <View style={allStyle.circleProfilerBudge}></View>
                                            </View>
                                            <View style={allStyle.infosBudgeCart}>
                                                <View style={allStyle.cardBudgeText}>
                                                    <Text style={allStyle.titleCardBudge}>Salário</Text>
                                                    <Text style={[allStyle.contentCardBudge, allStyle.colorGreen]}>R$4.000,00</Text>
                                                </View>
                                                <View style={allStyle.cardBudgeTextBase}>
                                                    <Text style={allStyle.titleCardBudgeBase}>Next</Text>
                                                    <Text style={allStyle.contentCardBudgeBase}>03:00 PM</Text>
                                                </View>
                                            </View>
                                        </View>
                                    {/* Cart Gastos Fim */}
                                    {/* Cart Gastos */}
                                    <View style={[allStyle.cardCollumn,allStyle.marginYT, allStyle.budgeCard]}>
                                            <View style={allStyle.encapsuCircle}>
                                                <View style={allStyle.circleProfilerBudge}></View>
                                            </View>
                                            <View style={allStyle.infosBudgeCart}>
                                                <View style={allStyle.cardBudgeText}>
                                                    <Text style={allStyle.titleCardBudge}>Fatura Catão Nubank</Text>
                                                    <Text style={[allStyle.contentCardBudge, allStyle.colorRed]}>-R$400,00</Text>
                                                </View>
                                                <View style={allStyle.cardBudgeTextBase}>
                                                    <Text style={allStyle.titleCardBudgeBase}>Next</Text>
                                                    <Text style={allStyle.contentCardBudgeBase}>03:50 PM</Text>
                                                </View>
                                            </View>
                                        </View>
                                    {/* Cart Gastos Fim */}
                                    {/* Cart Gastos */}
                                    <View style={[allStyle.cardCollumn,allStyle.marginYT, allStyle.budgeCard]}>
                                            <View style={allStyle.encapsuCircle}>
                                                <View style={allStyle.circleProfilerBudge}></View>
                                            </View>
                                            <View style={allStyle.infosBudgeCart}>
                                                <View style={allStyle.cardBudgeText}>
                                                    <Text style={allStyle.titleCardBudge}>Alimentação</Text>
                                                    <Text style={[allStyle.contentCardBudge, allStyle.colorRed]}>-R$630,14</Text>
                                                </View>
                                                <View style={allStyle.cardBudgeTextBase}>
                                                    <Text style={allStyle.titleCardBudgeBase}>Next</Text>
                                                    <Text style={allStyle.contentCardBudgeBase}>06:20 PM</Text>
                                                </View>
                                            </View>
                                        </View>
                                    {/* Cart Gastos Fim */}
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