import Axios from 'axios'
import React from 'react'
import { AsyncStorage, Text, View } from 'react-native'
import PlaceOrderScreen from './PlaceOrderScreen'

export default class DetailsScreens extends React.Component{
    state={
        formStatus: false
    }
    componentDidMount(){
        AsyncStorage.getItem('userId').then((res)=>{
            console.log(res)
            Axios.post("http://18.216.5.45:8080/api/customerdetails",{
                id: res
            }).then((res1)=>{
                if(res1.data.mobile_no === undefined && res1.data.address === undefined){
                    this.setState({
                        formStatus: false
                    })
                }else{
                    this.setState({
                        formStatus: true
                    })
                }
            })
        })
    }
    render(){
        if(this.state.formStatus === false){
            return(
                <View>
                    <Text></Text>
                </View>
            )
        }else{
            return(
                <View>
                    <PlaceOrderScreen />
                </View>
            )
        }
    }
}