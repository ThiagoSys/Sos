import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { Alert } from 'react-native'
import { Text, TouchableOpacity, View } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import BtnLoginSocial from '../../components/buttonLoginSocial'
import ButtonRedondo from '../../components/buttonRedondo'
import HeaderShow from '../../components/header'
import InputText from '../../components/inputTexto'
import colors from '../../global/colors'
import styles from '../../global/styles'


interface propsLogin{
    navigation:any,
    codeOne:any,
    codeTwo:any,
    codeThree:any,
    codeFour:any,
}
const ValidarCodigo = ({navigation, codeOne, codeTwo, codeThree, codeFour}:propsLogin)=> {

    codeOne = useRef()
    codeTwo = useRef()
    codeThree = useRef()
    codeFour = useRef()
    
    const [tipo, setTipo] = useState(true)
    const [codigo, setCodigo] = useState('')
    const [one, setOne] = useState('')
    const [two, setTwo] = useState('')
    const [three, setThree] = useState('')
    const [four, setFour] = useState('')

    const crearCuenta = ()=>{
        console.log('CUENTA VALIDO')
        navigation.navigate('indexExito')
    }
    const inputOne = (val:any)=>{
        setOne(val)
        if(val.length!==1){
            const newCodigo = codigo.slice(0,0)
            codeOne.current.blur()
            setCodigo(newCodigo)
        }else{
            setCodigo(val)
            codeTwo.current.focus()
        }
    }
    const inputTwo = (val:any)=>{
        setTwo(val)
        if(val.length!==1){
            const newCodigo = codigo.slice(0,1)
            codeOne.current.focus()
            setCodigo(newCodigo)
        }else{
            setCodigo(codigo+val)
            codeThree.current.focus()
        }
    }
    const inputThree = (val:any)=>{
        setThree(val)
        if(val.length!==1){
            const newCodigo = codigo.slice(0,2)
            codeTwo.current.focus()
            setCodigo(newCodigo)
        }else{
            setCodigo(codigo+val)
            codeFour.current.focus()
        }
    }
    const inputFour = (val:any)=>{
        setFour(val)
        if(val.length!==1){
            const newCodigo = codigo.slice(0,3)
            codeThree.current.focus()
            setCodigo(newCodigo)
        }else{
            setCodigo(codigo+val)
            codeFour.current.blur()
        }
    }

    const pressCodigo = ()=>{
        if(codigo.length===0){
            codeOne.current.focus()
        }
        if(codigo.length===1){
            codeTwo.current.focus()
        }
        if(codigo.length===2){
            codeThree.current.focus()
        }
        if(codigo.length===3){
            codeFour.current.focus()
        }
        if(codigo.length===4){
            codeFour.current.focus()
        }
    }

    const numeros = (a:any, press?:()=>void, _color?:any)=>{
        return(
            <>
                <TouchableOpacity disabled={false} activeOpacity={.5} style={[{width:70, height:70,backgroundColor:_color, borderRadius:100, justifyContent:'center',alignItems:'center'}]} onPress={press}>
                    <Text style={[{ color:'black',textAlign:'center'}]}>{a}</Text>
                </TouchableOpacity>
            </>
        )
    }

    const validarCodigo = ()=>{ 
        if(codigo.length===4){
            // Alert.alert('VALIDO','Codigo exitoso')
            navigation.navigate('indexCambiarContraseña')
        }
     }
    const click0 = ()=>{ agregar('0') }
    const click1 = ()=>{ agregar('1') }
    const click2 = ()=>{ agregar('2') }
    const click3 = ()=>{ agregar('3') }
    const click4 = ()=>{ agregar('4') }
    const click5 = ()=>{ agregar('5') }
    const click6 = ()=>{ agregar('6') }
    const click7 = ()=>{ agregar('7') }
    const click8 = ()=>{ agregar('8') }
    const click9 = ()=>{ agregar('9') }
    const agregar = (a:any)=>{
        if(codigo.length===0){
            if(one.length===0){ setCodigo(codigo+a); setOne(a) }
        }
        if(codigo.length===1){
            if(two.length===0) { setCodigo(codigo+a); setTwo(a) }
        }
        if(codigo.length===2){
            if(three.length===0) { setCodigo(codigo+a); setThree(a) }
        }
        if(codigo.length===3){
            if(four.length===0) { setCodigo(codigo+a); setFour(a) }
        }
    }
    const eliminar = ()=>{
        if(codigo.length===1){
            const newCodigo = codigo.slice(0,0)
            setCodigo(newCodigo)
            setOne('')
        }
        if(codigo.length===2){
            const newCodigo = codigo.slice(0,1)
            setCodigo(newCodigo)
            setTwo('')
        }
        if(codigo.length===3){
            const newCodigo = codigo.slice(0,2)
            setCodigo(newCodigo)
            setThree('')
        }
        if(codigo.length===4){
            const newCodigo = codigo.slice(0,3)
            setCodigo(newCodigo)
            setFour('')
        }
    }
    const pressBack = ()=>{
        navigation.navigate('indexRecuperarContraseña')
    }
    return(
        <>
            <HeaderShow textHeader={'Validar código'} navigate={pressBack}/>
            <View style={[styles.container]}>
                <View style={[{flex:1}]}>
                    <KeyboardAwareScrollView >
                        <View style={[{paddingHorizontal:20}]}>
                            <Text style={[{textAlign:'justify' ,fontSize:16, paddingVertical:15 }]}>Por favor, revisar su bandeja de entrada e ingresar el código de 4 digitos enviado a fredromeo.001@gmail.com</Text>

                            <View style={[{ height:50, width:'100%', position:'relative', justifyContent:'center',alignItems:'center'}]}>
                                <View style={[{ position:'absolute', flexDirection:'row', height:50, width:240}]}>
                                    <View style={[{height:50, width:50,marginHorizontal:5, zIndex:-2}]}>
                                        <TextInput value={one} ref={codeOne} placeholder={'0'} style={{ width:50, borderBottomWidth:.5,height:50, textAlign:'center'}} maxLength={1}  onChangeText={(val)=>inputOne(val)} keyboardType={'numeric'}/>
                                    </View>
                                    <View style={[{height:50, width:50,marginHorizontal:5}]}>
                                        <TextInput value={two} ref={codeTwo} placeholder={'0'} style={{ width:50, borderBottomWidth:.5,height:50, textAlign:'center'}} maxLength={1} onChangeText={(val)=>inputTwo(val)} keyboardType={'numeric'}/>
                                    </View>
                                    <View style={[{height:50, width:50,marginHorizontal:5}]}>
                                        <TextInput value={three} ref={codeThree} placeholder={'0'} style={{width:50,borderBottomWidth:.5,height:50, textAlign:'center'}} maxLength={1} onChangeText={(val)=>inputThree(val)} keyboardType={'numeric'}/>
                                    </View>
                                    <View style={[{height:50, width:50,marginHorizontal:5}]}>
                                        <TextInput value={four} ref={codeFour} placeholder={'0'} style={{width:50, borderBottomWidth:.5,height:50, textAlign:'center'}} maxLength={1} onChangeText={(val)=>inputFour(val)} keyboardType={'numeric'}/>
                                    </View>
                                </View>
                                
                                <TouchableOpacity activeOpacity={.9} onPress={pressCodigo} style={[{position:'absolute', height:50, width:240}]}></TouchableOpacity>
                            </View>
                            
                            <View style={[{flexDirection:'row', paddingVertical:20, justifyContent:'center'}]}>
                                <Text style={[{fontSize:12}]}>Si no recibiste el codigo de </Text>
                                <TouchableOpacity activeOpacity={.9} onPress={()=>{setTipo(!tipo)}}>
                                    <Text style={[{fontSize:12}]}>verificación.</Text>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={.6}>
                                    <Text style={[{fontSize:12,color:colors.azulPrincipal}]}> Renviar</Text>
                                </TouchableOpacity>
                            </View>
                            {/* <Text style={[{fontSize:18,color:colors.azulPrincipal, textAlign:'center'}]}>{codigo}</Text> */}
                            
                            {
                                tipo?(
                                    <>
                                    </>
                                ):(
                                    <>
                                        <View style={[{ justifyContent:'center', alignItems:'center', paddingTop:40}]}>
                                            <View style={[{width:300, justifyContent:'space-between', alignItems:'center', flexDirection:'row',marginVertical:10}]}>
                                                {numeros('1', click1, colors.whitedark3)}
                                                {numeros('2', click2, colors.whitedark3)}
                                                {numeros('3', click3, colors.whitedark3)}
                                            </View>
                                            <View style={[{ width:300, justifyContent:'space-between', alignItems:'center', flexDirection:'row',marginVertical:10}]}>
                                                {numeros('4', click4, colors.whitedark3)}
                                                {numeros('5', click5, colors.whitedark3)}
                                                {numeros('6', click6, colors.whitedark3)}
                                            </View>
                                            <View style={[{ width:300, justifyContent:'space-between', alignItems:'center', flexDirection:'row',marginVertical:10}]}>
                                                {numeros('7', click7, colors.whitedark3)}
                                                {numeros('8', click8, colors.whitedark3)}
                                                {numeros('9', click9, colors.whitedark3)}
                                            </View>
                                            <View style={[{ width:300, justifyContent:'space-between', alignItems:'center', flexDirection:'row',marginVertical:10}]}>
                                                {numeros('OK', validarCodigo, colors.azulPrincipal)}
                                                {numeros('0', click0, colors.whitedark3)}
                                                {numeros('X', eliminar, 'red' )}
                                            </View>
                                        </View>
                                    </>
                                )

                            }                     
                        </View>


                    </KeyboardAwareScrollView>
                </View>

                <View style={[{paddingHorizontal:20, paddingBottom:80}]}>
                    <ButtonRedondo title={'Validar'} press={validarCodigo}/>
                </View>
            </View>

        </>
    )
}

export default ValidarCodigo
