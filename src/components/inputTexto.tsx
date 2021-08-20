import React, { createRef }from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { StyleSheet, TouchableNativeFeedback, TouchableOpacity } from 'react-native'
import { Text, TextInput, View } from 'react-native'
import ContrasenaOneAzul from '../assent/js/iconRegistro/contrasenaOneAzul'
import ContrasenaOnePlomo from '../assent/js/iconRegistro/contrasenaOnePlomo'
import EmailAzul from '../assent/js/iconRegistro/emailAzul'
import EmailPlomo from '../assent/js/iconRegistro/emailPlomo'
import TelefonoAzul from '../assent/js/iconRegistro/telefonoAzul'
import TelefonoPlomo from '../assent/js/iconRegistro/telefonoPlomo'
import UsuarioOneAzul from '../assent/js/iconRegistro/usuarioOneAzul'
import UsuarioOnePlomo from '../assent/js/iconRegistro/usuarioOnePlomo'
import colors from '../global/colors'


interface propsRef {
    inputRef?:any
    label:String,
    val?:any,
    keyboard?:any,
    security?:boolean|false,
}

const InputText = ({inputRef,label,val,keyboard,security}:propsRef)=>{

    inputRef=createRef()

    const [active ,setActive]= useState(false)

    const pressIn = ()=>{
        console.log('IN')
    }
    const pressOut = ()=>{
        console.log('OUT')
    }
    const pressFocus = ()=>{
        setActive(true)
        console.log('FOCUS')
    }
    const pressBlur = ()=>{
        setActive(false)
        console.log('BLUR')
    }
    const press =()=>{
        inputRef.current.focus()
    }

    const iconInput =()=>{
        if(val===1){
            return(
                <>
                    { active?(<UsuarioOneAzul/>):(<UsuarioOnePlomo/>)}
                </>
            )
        }
        if(val===2){
            return(
                <>
                    { active?(<EmailAzul/>):(<EmailPlomo/>)}
                </>
            )
        }
        if(val===3){
            return(
                <>
                    { active?(<TelefonoAzul/>):(<TelefonoPlomo/>)}
                </>
            )
        }
        if(val===4){
            return(
                <>
                    { active?(<ContrasenaOneAzul/>):(<ContrasenaOnePlomo/>)}
                </>
            )
        }
    }
    return(
        <>
            <TouchableOpacity activeOpacity={1} onPress={press} style={[{width:'100%',position:'relative', height:60, borderRadius:10,backgroundColor:colors.whitedark2, marginVertical:10 },active?stylesText.active_true:stylesText.active_false]}>
                <Text style={[{fontSize:12 ,position:'absolute', left:10,paddingTop:10, zIndex:10 }]} >{label}</Text>
                <TextInput ref={inputRef} onFocus={pressFocus} onPressIn={pressIn} onPressOut={pressOut} onBlur={pressBlur} style={[stylesText.input]} placeholder={`${label}`} secureTextEntry={security} keyboardType={keyboard}/>
                <View style={[stylesText.icon]}>
                    {iconInput()}
                </View>
            </TouchableOpacity>
        </>
    )
}

const stylesText= StyleSheet.create({
    active_true:{
        borderWidth:2,
        borderColor:colors.azulPrincipal,
    },
    active_false:{
        borderWidth:2,
        borderColor:colors.whitedark2
    },

    input:{
        position:'absolute',
        paddingHorizontal:10,
        height:'100%',
        width:'90%', 
        borderRadius:10,
        paddingTop: 20,
        fontSize:14
    },
    icon:{
        position:'absolute', 
        height:'100%', 
        width:'10%', 
        right:0,
        justifyContent:'center',
        alignItems:'center'
    }

})

export default InputText