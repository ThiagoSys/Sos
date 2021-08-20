import React from 'react'
import { Alert } from 'react-native'
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
const Login = ({navigation}:propsLogin)=> {

    const crearCuenta = ()=>{
        console.log('CUENTA')
        navigation.navigate('indexSos')
    }

    const loginFacebook = ()=>{
        Alert.alert('FACEBOOK',' Regisrado con Facebook')
    }
    const loginGoogle = ()=>{
        
        Alert.alert('GOOGLE',' Regisrado con Google')
    }

    const recuperarCuenta = ()=>{
        console.log('CUENTA')
        navigation.navigate('indexRecuperarContraseña')
    }
    const pressBack = ()=>{
        navigation.navigate('indexBienvenido')
    }
    return(
        <>
            <HeaderShow navigate={pressBack}/>
            <View style={[styles.container]}>
                <View style={[{flex:1}]}>
                    <KeyboardAwareScrollView>
                        <View style={[styles.container, {paddingHorizontal:20}]}>
                            <Text style={[{fontSize:20, fontWeight:'bold', paddingVertical:15}]}>Iniciar sesión</Text>
                            
                            <InputText label={'Correo electrónico'} val={2} keyboard={'email-address'}/>
                            <InputText label={'Contraseña'} val={4} keyboard={'default'} security={true}/>
                            <View style={[{marginBottom:10}]}>
                                <TouchableOpacity onPress={recuperarCuenta}>
                                    <Text style={[{color:colors.azulPrincipal, textAlign:'right'}]}>Recuperar contraseña</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[{marginVertical:20}]}>
                                <ButtonRedondo title={'Iniciar sesión'} press={crearCuenta}/>
                            </View>
                        </View>
                    </KeyboardAwareScrollView>
                </View>

                <View style={[{paddingHorizontal:20, paddingBottom:80}]}>
                    <Text style={[{textAlign:'center', paddingVertical:15, color:colors.whitedark7}]}>O conectar vía</Text>

                    <View style={[{flexDirection:'row',width:'100%', justifyContent:'space-between'}]}>
                        <View style={[{width:'45%'}]}>
                            <BtnLoginSocial title={'Facebook'} press={loginFacebook}/>
                        </View>
                        <View style={[{width:'45%', justifyContent:'center',alignItems:'center'}]}>
                            <BtnLoginSocial title={'Google'} press={loginGoogle}/>
                        </View>
                    </View>
                </View>                
            </View>

        </>
    )
}

export default Login
