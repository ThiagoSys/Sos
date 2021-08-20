import React from 'react'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import Advertencia from '../../assent/js/advertencia2'
import Compartir from '../../assent/js/compartir1'
import Contrato from '../../assent/js/contrato'
import Desactivar from '../../assent/js/desactivar'
import Facebook from '../../assent/js/facebook'
import Google from '../../assent/js/google'
import Group1 from '../../assent/js/group1'
import Group3 from '../../assent/js/group3'
import Group4 from '../../assent/js/group4'
import Group5 from '../../assent/js/group5'
import Hotel from '../../assent/js/menuSos/hotel'
import Huella from '../../assent/js/menuSos/huella'
import ContrasenaOneAzul from '../../assent/js/iconRegistro/contrasenaOneAzul'
import ContrasenaOneNegro from '../../assent/js/iconRegistro/contrasenaOneNegro'
import ContrasenaOnePlomo from '../../assent/js/iconRegistro/contrasenaOnePlomo'
import ContrasenaTwoAzul from '../../assent/js/iconRegistro/contrasenaTwoAzul'
import ContrasenaTwoNegro from '../../assent/js/iconRegistro/contrasenaTwoNegro'
import ContrasenaTwoPlomo from '../../assent/js/iconRegistro/contrasenaTwoPlomo'
import EmailAzul from '../../assent/js/iconRegistro/emailAzul'
import EmailNegro from '../../assent/js/iconRegistro/emailNegro'
import EmailPlomo from '../../assent/js/iconRegistro/emailPlomo'
import TelefonoAzul from '../../assent/js/iconRegistro/telefonoAzul'
import TelefonoNegro from '../../assent/js/iconRegistro/telefonoNegro'
import TelefonoPlomo from '../../assent/js/iconRegistro/telefonoPlomo'
import UsuarioOneAzul from '../../assent/js/iconRegistro/usuarioOneAzul'
import UsuarioOneNegro from '../../assent/js/iconRegistro/usuarioOneNegro'
import UsuarioOnePlomo from '../../assent/js/iconRegistro/usuarioOnePlomo'
import UsuarioTwoAzul from '../../assent/js/iconRegistro/usuarioTwoAzul'
import UsuarioTwoNegro from '../../assent/js/iconRegistro/usuarioTwoNegro'
import UsuarioTwoPlomo from '../../assent/js/iconRegistro/usuarioTwoPlomo'
import CajaDeMenu from '../../assent/js/menuSos/cajaDeMenu'
import JovenFeliz from '../../assent/js/img/jovenFeliz'
import JovenTriste from '../../assent/js/img/jovenTriste'
import MujerTecnologica from '../../assent/js/img/mujerTecnologica'
import Lista from '../../assent/js/menuSos/lista'
import Pregunta from '../../assent/js/pregunta'
import Sirena from '../../assent/js/sirena'
import InputText from '../../components/inputTexto'
import styles from '../../global/styles'
import ButtonRedondo from '../../components/buttonRedondo'

interface propsPrueba{
    navigation:any,
}
const Prueba = ({navigation}:propsPrueba)=> {
    const sos = ()=>{
        console.log('CUENTA')
        navigation.navigate('indexSos')
    }
    return(
        <>

        <ScrollView>
           <Text>Registro</Text>
            <View style={{flexDirection:'row'}}> 
                <ContrasenaOneAzul/>
                <ContrasenaOnePlomo/>
                <ContrasenaOneNegro/>
                <EmailAzul/>
                <EmailPlomo/>
                <EmailNegro/>
                <UsuarioOneAzul/>
                <UsuarioOnePlomo/>
                <UsuarioOneNegro/>
                <TelefonoAzul/>
                <TelefonoPlomo/>
                <TelefonoNegro/>
            </View>
            <View style={{flexDirection:'row'}}>
                <ContrasenaTwoAzul/>
                <ContrasenaTwoPlomo/>
                <ContrasenaTwoNegro/>
                <UsuarioTwoAzul/>
                <UsuarioTwoPlomo/>
                <UsuarioTwoNegro/>
            </View>
            <View style={{flexDirection:'row'}}>
                <Advertencia/>
                <Compartir/>
                <Contrato/>
                <Desactivar/>
                <Group1/>
                <Group5/>
                <Sirena/>
                <Pregunta/>
            </View>
            <View style={{flexDirection:'row'}}>
                <Facebook/>
                <Google/>
                <Group3/>
                <Group4/>
            </View>
            <View style={{flexDirection:'row'}}>
                <Huella/>
                <Hotel/>
                <Lista/>
            </View>

            <View style={[{paddingHorizontal:20, paddingBottom:80}]}>
                    <ButtonRedondo title={'SOS'} press={sos}/>
                </View>
        </ScrollView>

        </>
    )
}

export default Prueba