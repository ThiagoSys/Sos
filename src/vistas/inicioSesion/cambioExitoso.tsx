import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import JovenFeliz from '../../assent/js/img/jovenFeliz'
import MujerTecnologica from '../../assent/js/img/mujerTecnologica'
import Btn from '../../components/buttonRectangulo'
import ButtonRedondo from '../../components/buttonRedondo'
import colors from '../../global/colors'
import styles from '../../global/styles'


interface propsBienvenido {
    navigation:any
}


const CambioExitoso = ({navigation}:propsBienvenido)=> {

    const login = ()=>{
        console.log('Login')
        navigation.navigate('indexLogin')
    }
    return(
        <>
        <View style={[styles.container]}>
            <View style={[styles.flex_three]}>
                <Text style={[{fontWeight:'bold',fontSize:30,color:`${colors.azulPrincipal}`}]}>¡Cambio exitoso!</Text>
                <View style={{paddingVertical:30}}>
                    <JovenFeliz/>
                </View>
            </View>
            <View style={[{flex:1, paddingHorizontal:20}]}>
                    <View style={[{marginVertical:10}]}>
                        <ButtonRedondo press={login} title={'Iniciar Sesión'}/>
                    </View>
            </View>
        </View>
        </>
    )
}

export default CambioExitoso
