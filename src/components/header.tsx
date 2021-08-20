import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text, Platform} from 'react-native'
import colors from '../global/colors'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

MaterialIcons.loadFont()

interface propsHeader {
    textHeader?:any,
    navigate?: ()=> void,
}

const HeaderShow = ({textHeader, navigate}:propsHeader)=>{


    const platformIcon = ()=>{
        return(
            <>
            {
                Platform.OS==='ios'?(
                    <>
                        <MaterialIcons name={'arrow-back-ios'} color={`${colors.whitedark9}`}size={26}/>
                    </>
                ):(
                    <>
                        <MaterialIcons name={'arrow-back'} color={`${colors.whitedark9}`}size={26}/>
                    </>
                )
            }
            </>
        )
    }

    return(
        <>
            <View style={[Platform.OS==='ios'? styles.headerIOS:styles.headerANDROID]}>

                <View style={[styles.icon_box]}>
                    <TouchableOpacity style={[styles.icon_back]} onPress={navigate}>
                        { platformIcon() }
                    </TouchableOpacity>
                </View>
                {
                    // textHeader{}
                }
                <Text style={[styles.text_header]}>{textHeader}</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    headerANDROID:{
        position:'relative',
        height:55,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        // paddingVertical:10,
        // paddingHorizontal:20,
        zIndex:1,
        backgroundColor:colors.whitedark2,

        shadowColor:colors.whitedark8,
        shadowOffset:{width:0, height:5},
        shadowOpacity:.3,
        elevation:1,
    },
    headerIOS:{
        // marginTop:32,
        paddingTop:32,
        position:'relative',
        height:90,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        // paddingVertical:10,
        // paddingHorizontal:20,
        zIndex:1,
        backgroundColor:colors.whitedark2,
        shadowColor:colors.whitedark8,
        shadowOffset:{width:0, height:5},
        shadowOpacity:.3,
        elevation:1,
        // borderBottomWidth:1,
    },
    text_header:{
        fontSize:16,
        fontStyle:'normal',
        fontWeight:'500',
        lineHeight:22,
        textAlign:'center',
    },
    icon_box:{
        position:'absolute',
        // backgroundColor:'red',
        height:'100%',
        width:50,
        left:0,
        bottom:0,
        justifyContent:'center',
        alignItems:'center',
    },
    icon_back:{
        // position:'absolute',
        // backgroundColor:colors.wh,
        // height:'100%',
        borderRadius:100,
        left:0,
        bottom:0,
        justifyContent:'center',
        alignItems:'center',
    }
})
export default HeaderShow