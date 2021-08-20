import React from 'react'
import { Text, View } from 'react-native'
import JovenFeliz from '../../assent/js/img/jovenFeliz'
import MujerTecnologica from '../../assent/js/img/mujerTecnologica'
import ButtonRectangulo from '../../components/buttonRectangulo'
import colors from '../../global/colors'
import styles from '../../global/styles'


interface propsBienvenido {
    navigation:any
}


const Bienvenido = ({navigation}:propsBienvenido)=> {

    const registro = ()=>{
        console.log('Registro')
        navigation.navigate('indexRegistro')
    }
    const login = ()=>{
        console.log('Login')
        navigation.navigate('indexLogin')
    }
    return(
        <>
        <View style={[styles.container]}>
            <View style={[styles.flex_three]}>
                <Text style={[{fontWeight:'bold',fontSize:30,color:`${colors.azulPrincipal}`}]}>Bienvenido</Text>
                <View style={{paddingVertical:30}}>
                    <MujerTecnologica/>
                </View>
            </View>
            <View style={[styles.flex_one]}>
                <View style={[styles.box_horizontal,{backgroundColor:colors.whitedark3}]}>
                    <View style={{width:'50%'}}>
                        <ButtonRectangulo title={'Registrarse'} color={`${colors.azulPrincipal}`} press={registro}/>
                    </View>
                    <View style={{width:'50%'}}>
                        <ButtonRectangulo title={'Iniciar Sesión'} color={`${colors.whitedark3}`} press={login}/>
                    </View>
                </View>
            </View>
        </View>
        </>
    )
}

export default Bienvenido
