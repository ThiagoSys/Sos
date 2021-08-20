import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import BtnLoginSocial from '../../components/buttonLoginSocial'
import ButtonRedondo from '../../components/buttonRedondo'
import HeaderShow from '../../components/header'
import InputText from '../../components/inputTexto'
import colors from '../../global/colors'
import styles from '../../global/styles'


interface propsLogin{
    navigation:any
}
const RecuperarContraseña = ({navigation}:propsLogin)=> {

    const recuperarContraseña = ()=>{
        navigation.navigate('indexValidarCodigo')
        // navigation.navigate('indexRecuperarContraseña')
    }
    const pressBack = ()=>{
        navigation.navigate('indexLogin')
    }
    return(
        <>
            <HeaderShow navigate={pressBack}/>
            <View style={[styles.container]}>
                <View style={[{flex:1}]}>
                    <KeyboardAwareScrollView>
                        <View style={[styles.container, {paddingHorizontal:20}]}>
                            <Text style={[{fontSize:20, fontWeight:'bold', paddingVertical:15}]}>Recuperar contraseña</Text>
                            <Text style={[{textAlign:'justify' ,fontSize:16, paddingVertical:15}]}>Para restablecer su contraseña, ingrese su correo electrónico</Text>
                            <InputText label={'Correo electrónico'} val={2} keyboard={'email-address'}/>
                        </View>
                    </KeyboardAwareScrollView>
                </View>

                <View style={[{paddingHorizontal:20, paddingBottom:80}]}>
                    <ButtonRedondo title={'Recuperar'} press={recuperarContraseña}/>
                </View>
            </View>

        </>
    )
}

export default RecuperarContraseña
