import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../global/colors'

interface propsBtn {
    title: String,
    color?:String,
    press: () => void,
}

const ButtonRedondo = ({title,color, press}:propsBtn)=>{

 return (
    <>
        <TouchableOpacity activeOpacity={.9} onPress={press}>
            <View style={[styles.button]}>
                <Text style={[styles.texto]}>{title}</Text>
            </View>
        </TouchableOpacity>
    </>
 )
}
const styles=StyleSheet.create({
    button:{
        borderRadius:100,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.azulPrincipal
    },
    texto:{
        fontSize:18,
        textAlign:'center',
        color:'white'
    }
})
export default ButtonRedondo