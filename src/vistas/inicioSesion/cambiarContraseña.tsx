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
const CambiarContraseña = ({navigation}:propsLogin)=> {

    const cambiarContraseña = ()=>{
        navigation.navigate('indexCambioExitoso')
        // navigation.navigate('indexRecuperarContraseña')
    }
    const pressBack = ()=>{
        navigation.navigate('indexValidarCodigo')
    }
    return(
        <>
            <HeaderShow navigate={pressBack}/>
            <View style={[styles.container]}>
                <View style={[{flex:1}]}>
                    <KeyboardAwareScrollView>
                        <View style={[styles.container, {paddingHorizontal:20}]}>
                            <Text style={[{fontSize:20, fontWeight:'bold', paddingVertical:15}]}>Ingresar contraseña</Text>
                            <InputText label={'Ingresar contraseña nueva'} val={4} keyboard={'default'} security={true}/>
                            <InputText label={'Confirmar contraseña nueva'} val={4} keyboard={'default'} security={true}/>
                        </View>
                    </KeyboardAwareScrollView>
                </View>

                <View style={[{paddingHorizontal:20, paddingBottom:80}]}>
                    <ButtonRedondo title={'Guardar'} press={cambiarContraseña}/>
                </View>
            </View>

        </>
    )
}

export default CambiarContraseña
