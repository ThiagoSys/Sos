import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet} from 'react-native'
import Facebook from '../assent/js/facebook'
import Google from '../assent/js/google'
import colors from '../global/colors'

interface propsBtn {
    title: String,
    color?:String,
    press: () => void,
}

const BtnLoginSocial = ({title,color, press}:propsBtn)=>{

    const iconButton = ()=>{
        if(title=='Facebook'){
            return(
                <>
                    <Facebook/>
                </>
            )            
        }
        if(title=='Google'){
            return(
                <>
                    <Google/>
                </>
            )            
        }

    } 
 return (
    <>
        <TouchableOpacity activeOpacity={.5} style={[{width:'100%'}]} onPress={press}>
            <View style={[styles.button]}>
                {iconButton()}
                <Text style={[styles.texto]}>Facebook</Text>
            </View>
        </TouchableOpacity>
    </>
 )
}

const styles = StyleSheet.create({
    button:{
        borderRadius:10, 
        height:50,
        justifyContent:'center', 
        alignItems:'center', 
        backgroundColor:'white',
        flexDirection:'row',
        borderWidth:1,
        borderColor:colors.whitedark3,
    },
    texto:{
        textAlign:'center',
        color:'black',
        paddingHorizontal:10,
    }
})
export default BtnLoginSocial