import React, { useRef } from 'react'
import { View, Text, Platform, TouchableOpacity, StatusBar, Image } from 'react-native'
import CajaDeMenu from '../../assent/js/menuSos/cajaDeMenu'
import Hotel from '../../assent/js/menuSos/hotel'
import Huella from '../../assent/js/menuSos/huella'
import Lista from '../../assent/js/menuSos/lista'
import colors from '../../global/colors'
import styles from '../../global/styles'

// import Menu, {  } from 'react-native-material-menu';
import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
MaterialIcons.loadFont()

interface propsSos{
    navigation:any,
    menu:any,
}

const Sos = ({navigation, menu}:propsSos)=>{
    menu = useRef();

    const logout = ()=>{
        menu.current.hide();
        navigation.navigate('indexBienvenido')
    }
    const hideMenu = () => menu.current.hide();
  
    const showMenu = () => {
        console.log('SHOWWWW')
        menu.current.show();
    }
  
    const Prueba = ()=>{
        // navigation.navigate('indexPrueba')
        navigation.navigate('indexPrueba')
    }
    return(
        <>
            <StatusBar animated={true} backgroundColor={"rgba(0,0,0,0)"} barStyle="light-content" translucent={true}/>
            <View style={[styles.container]}>

                <Image style={[{position:'absolute',height:'100%', width:'100%'}]} source={require('../../assent/img/edificio.jpeg')}/>

                <View style={[{height:'100%', width:'100%',position:'absolute', backgroundColor:'rgba(0,0,0,.9)'}]}>
                </View>

                <View style={[styles.flex_one, Platform.OS==='ios'?{marginTop:32}:{marginTop:25}]}>

                    <View style={[{position:'absolute',height:50, top:0, right:20}]}>

                        <Menu ref={menu} animationDuration={300} button={
                            <TouchableOpacity onPress={showMenu} activeOpacity={.9} style={[{height:50, justifyContent:'center',alignItems:'center', top:0}]}>
                                <MaterialIcons name={'menu'} size={40} color={'white'}/>
                            </TouchableOpacity>

                        } style={[Platform.OS=='ios'?{top:82}:{top:50}]}>
                            <MenuItem onPress={hideMenu}>Mi perfil</MenuItem>
                            <MenuItem onPress={hideMenu}>Teléfono SOS</MenuItem>
                            <MenuDivider />
                            <MenuItem onPress={logout}>Cerrar sesión</MenuItem>
                        </Menu>
                    </View>



                    <View style={[{position:'absolute',height:50, justifyContent:'center',alignItems:'center', top:50}]}>
                        <Text style={[{color:'white', fontSize:18, fontWeight:'bold'}]}>SERVICIO DE AYUDA</Text>
                    </View>

                    <View style={[{justifyContent:'center',alignItems:'center'}]}>
                        <TouchableOpacity activeOpacity={.8} style={[{backgroundColor:colors.rojoSOS, height:180,width:180, borderRadius:100, justifyContent:'center', borderWidth:10, borderColor:'white'}]}>
                            <Text style={[styles.text_center_white,{fontSize:35, fontWeight:'bold'}]}>SOS</Text>
                        </TouchableOpacity>
                        <Text style={[styles.text_center_white,{fontSize:18, paddingVertical:25}]}>Presionar por 3 segundos</Text>
                    </View> 

                    <View style={[Platform.OS==='ios'?styles.footer_ios:styles.footer_android,{justifyContent:'center',alignItems:'center', marginHorizontal:20, bottom:0, position:'absolute'}]}>
                        <View style={[{justifyContent:'center', alignItems:'center', position:'relative',height:70, width:315}]}>
                            <CajaDeMenu/>
                            <View style={[{position:'absolute',height:50, width:'33.33%', bottom:0,left:0, justifyContent:'center', alignItems:'center'}]}>
                                <TouchableOpacity onPress={Prueba} activeOpacity={.5} style={[{borderRadius:100, height:50, width:50, justifyContent:'center', alignItems:'center'}]}>
                                    <Huella/>
                                </TouchableOpacity>
                            </View>
                            <View style={[{position:'absolute',height:70,width:'33.33%',justifyContent:'center',alignItems:'center'}]}>
                                <TouchableOpacity activeOpacity={.5} style={[{borderRadius:100, height:70,width:70, justifyContent:'center',alignItems:'center'}]}>
                                <Hotel/>
                                </TouchableOpacity>
                            </View>
                            <View style={[{position:'absolute',height:50,width:'33.33%',bottom:0, right:0,justifyContent:'center',alignItems:'center'}]}>
                                <TouchableOpacity activeOpacity={.5} style={[{borderRadius:100, height:50,width:50, justifyContent:'center',alignItems:'center'}]}>
                                    <Lista/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>                    

                </View>




            </View>
        </>
    )
}

export default Sos