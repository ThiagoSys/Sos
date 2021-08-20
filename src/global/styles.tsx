import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
      flex:1,
    },

// CONTENEDOR HORIZONTAL
// *****Begin    
    flex_one:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
    },
    flex_twe:{
        flex:2,
        justifyContent:"center",
        alignItems:"center",
      },
    flex_three:{
        flex:3,
        justifyContent:"center",
        alignItems:"center",
    },
    flex_four:{
        flex:4,
        justifyContent:"center",
        alignItems:"center",
    },
// ****End

// CONTENEDOR HORIZONTAL
// *****Begin
    box_horizontal:{
        marginHorizontal:20,
        flexDirection:'row', 
        borderRadius:10
    },
// *****End

// BUTTON
// *****Begin
    button_box:{
        height:50,
        borderRadius:10
    },
    button_box_center:{
        height:50,
        borderRadius:10,
        justifyContent:"center"
    },
// *****END

// TEXTO
// *****Begin

    text_center:{
        textAlign:"center",
        color:'white',
        fontSize:16,
    },
    text_center_white:{
        textAlign:"center",
        color:'white',
    },
// *****End

    footer_ios:{
        marginBottom:20,
        paddingVertical:20,
    },
    footer_android:{
        paddingVertical:20,
    }
  })

export default styles