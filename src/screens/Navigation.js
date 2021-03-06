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
import LoadingScreen from './LoadingScreen'
import PlaceOrderScreen from './PlaceOrderScreen'
import DetailsScreens from './DetailsScreen'
import ProductDescScreen from './DescScreen'

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
const drawerNav = createDrawerNavigator({
    Home: {
        screen:HomeScreen,
   
    },
    My_Orders:{
        screen:OrdersScreen,
    },
    My_Wishlist:{
        screen:WishlistScreen,  
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
            headerTitle: <View><Text style={{fontFamily:'Jost-SemiBold',fontSize:18,textTransform:'uppercase'}}>Anand & Co</Text></View>,
        })
    },
    ProdDesc:{
        screen: ProductDescScreen,
        navigationOptions : ({navigation}) =>({
            headerTitle: <View><Text style={{fontFamily:'Jost-SemiBold',fontSize:18,textTransform:'uppercase'}}>Anand & Co</Text></View>,
        })
    },
    Details:{
        screen: DetailsScreens,
    },
    PlaceOrder:{
        screen: PlaceOrderScreen,
        navigationOptions : ({navigation}) =>({
            headerTitle: <View><Text style={{fontFamily:'Jost-SemiBold',fontSize:18,textTransform:'uppercase'}}>Anand & Co</Text></View>,
        })
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