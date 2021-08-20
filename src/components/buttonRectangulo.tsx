import React from 'react'
import { Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import colors from '../global/colors'
import styles from '../global/styles'

interface propsBtn {
    title: String,
    color?:String,
    press: () => void,
}

const buttonRectangulo = ({title,color, press}:propsBtn)=>{

 return (
    <>
        <TouchableHighlight onPress={press} style={[styles.button_box]}>
            <View style={[styles.button_box_center,{backgroundColor:`${color}`}]}>
                <Text style={[styles.text_center]}>{title}</Text>
            </View>
        </TouchableHighlight>
    </>
 )
}
export default buttonRectangulo