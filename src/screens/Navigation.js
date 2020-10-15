import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import LoginScreen from './LoginScreen'
import HomeScreen from './HomeScreen'
import SignUpScreen from './SignUpScreen'
import ProductScreen from './ProductScreen'
import { createDrawerNavigator } from 'react-navigation-drawer'
import OrdersScreen from './OrdersScreen'
import WishlistScreen from './WishlistScreen'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import DrawerScreen from './DrawerScreen'
import ProductDescScreen from './ProductDescScreen'
import LoadingScreen from './LoadingScreen'
import PlaceOrderScreen from './PlaceOrderScreen'
import DetailsScreens from './DetailsScreen'

const AuthNav = createStackNavigator({
    Load:{
        screen: LoadingScreen,
        navigationOptions:{
            headerShown: false
        }
    },
    Log:{
        screen: LoginScreen,
        navigationOptions:{
            headerShown: false
        }
    },
    Reg:{
        screen:SignUpScreen,
        navigationOptions:{
            headerShown:false
        }
    }
})

const HomeStack = createStackNavigator({
    Home: {
        screen:HomeScreen,
        navigationOptions:({ navigation }) => ({
            headerTitle:<Text style={{textTransform:'uppercase',textAlign:'center',fontFamily:'Jost-SemiBold',fontSize:25}}>Anand & co</Text>,
            headerLeft: 
            <TouchableOpacity  onPress={()=>{navigation.openDrawer()}}>
                <Image source={require('../../assets/icons/menu.png')} style={{width: 25,height:25,margin:10,resizeMode:'stretch'}} />
            </TouchableOpacity>,
            headerRight:
            <TouchableOpacity  onPress={()=>{navigation.navigate('Order')}}>
                <Image source={require('../../assets/icons/order.png')} style={{width: 25,height:25,margin:10,resizeMode:'stretch'}} />
            </TouchableOpacity>
        })
    }
})
const OrderStack = createStackNavigator({
    Order: {
        screen:OrdersScreen,
        navigationOptions:({ navigation }) => ({
            headerTitle:<Text style={{textTransform:'uppercase',textAlign:'center',fontFamily:'Jost-SemiBold',fontSize:25}}>Anand & co</Text>,
            headerLeft: 
            <TouchableOpacity  onPress={()=>{navigation.openDrawer()}}>
                <Image source={require('../../assets/icons/menu.png')} style={{width: 25,height:25,margin:10,resizeMode:'stretch'}} />
            </TouchableOpacity>,
            headerRight:
            <TouchableOpacity  onPress={()=>{navigation.navigate('Order')}}>
                <Image source={require('../../assets/icons/order.png')} style={{width: 25,height:25,margin:10,resizeMode:'stretch'}} />
            </TouchableOpacity>
        })
    }
})
const WishStack = createStackNavigator({
    Wish: {
        screen:WishlistScreen,
        navigationOptions:({ navigation }) => ({
            headerTitle:<Text style={{textTransform:'uppercase',textAlign:'center',fontFamily:'Jost-SemiBold',fontSize:25}}>Anand & co</Text>,
            headerLeft: 
            <TouchableOpacity  onPress={()=>{navigation.openDrawer()}}>
                <Image source={require('../../assets/icons/menu.png')} style={{width: 25,height:25,margin:10,resizeMode:'stretch'}} />
            </TouchableOpacity>,
            headerRight:
            <TouchableOpacity  onPress={()=>{navigation.navigate('Order')}}>
                <Image source={require('../../assets/icons/order.png')} style={{width: 25,height:25,margin:10,resizeMode:'stretch'}} />
            </TouchableOpacity>
        })
    }
})

const drawerNav = createDrawerNavigator({
    Home: {
        screen:HomeStack
    },
    My_Orders:{
        screen: OrderStack
    },
    My_Wishlist:{
        screen: WishStack
    }
    },
    {
        contentComponent: DrawerScreen
    })

const MainNav = createStackNavigator({
    drawer: {
        screen: drawerNav,
        navigationOptions:{
            headerShown:false
        }
    },
    Prod:{
        screen: ProductScreen,
        navigationOptions : ({navigation}) =>({
            headerTitle: <View><Text style={{textTransform:'uppercase',fontFamily:'Jost-Bold',fontSize:20,color:'grey'}}>Shop by category</Text></View>,
        })
    },
    ProdDesc:{
        screen: ProductDescScreen,
        navigationOptions:{
            headerShown:false
        }
    },
    Details:{
        screen: DetailsScreens,
    },
    PlaceOrder:{
        screen: PlaceOrderScreen
    }
})

const AllNav = createSwitchNavigator({
    Auth: AuthNav,
    Main: MainNav
}) 

const Nav = createAppContainer(AllNav)

export default class Navigation extends React.Component{
    render(){
        return(
            <Nav />
        )
    }
}