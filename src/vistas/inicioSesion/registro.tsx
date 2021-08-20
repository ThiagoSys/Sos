import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Facebook from '../../assent/js/facebook'
import Google from '../../assent/js/google'
import InputText from '../../components/inputTexto'
import BtnLoginSocial from '../../components/buttonLoginSocial'
import colors from '../../global/colors'
import styles from '../../global/styles'
import ButtonRedondo from '../../components/buttonRedondo'
import HeaderShow from '../../components/header'


interface propsRegistro{
    navigation:any
}
const Registro = ({navigation}:propsRegistro)=> {

    const crearCuenta = ()=>{
        console.log('CUENTA')
        navigation.navigate('indexRegistroExitoso')
    }

    const pressBack = ()=>{
        navigation.navigate('indexBienvenido')
    }
    return(
        <>
            <HeaderShow navigate={pressBack}/>
            <KeyboardAwareScrollView>
                <View style={[{paddingHorizontal:20}]}>
                    <Text style={[{fontSize:20, fontWeight:'bold', paddingVertical:15}]}>Crear Cuenta</Text>
                    <InputText label={'Nombres y apellidos'} val={1} keyboard={'ascii-capable'}/>
                    <InputText label={'Correo electrónico'} val={2} keyboard={'email-address'}/>
                    <InputText label={'Celular'} val={3} keyboard={'numeric'}/>
                    <InputText label={'Contraseña'} val={4} keyboard={'default'} security={true}/>
                    <InputText label={'Confirmar contraseña'} val={4} keyboard={'default'} security={true}/>

                    <View style={[{marginVertical:20}]}>
                        <ButtonRedondo title={'Crear cuenta'} press={crearCuenta}/>
                    </View>

                    <View style={[{ paddingVertical:50}]}>
                        <Text style={[{textAlign:'center', paddingVertical:15, color:colors.whitedark7}]}>O conectar vía</Text>

                        <View style={[{flexDirection:'row',width:'100%', justifyContent:'space-between'}]}>
                            <View style={[{width:'45%'}]}>
                                <BtnLoginSocial title={'Facebook'} press={()=>console.log(0)}/>
                            </View>
                            <View style={[{width:'45%', justifyContent:'center',alignItems:'center'}]}>
                                <BtnLoginSocial title={'Google'} press={()=>console.log(0)}/>
                            </View>
                        </View>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </>
    )
}

export default Registro
