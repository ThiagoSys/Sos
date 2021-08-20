import React from 'react';

import { createStackNavigator } from '@react-navigation/stack'
import { Bienvenido, Registro, Login, CambioExitoso, RegistroExitoso, RecuperarContraseña, ValidarCodigo, CambiarContraseña, Prueba } from  '../vistas/inicioSesion'
import { Sos } from '../vistas/home';

const RootStack = createStackNavigator();

interface ScreensProps {
    navigation?: any
  }
const SOSLogin = ({navigation}:ScreensProps) => {

    return(
     <RootStack.Navigator 
        screenOptions={{
            // headerShown:false,
            headerStyle: {
                backgroundColor: '#3AaaA7',
                shadowColor: '#efefef',
                // height:100
            },
            headerTintColor: '#fafafa',
            headerTitleStyle: {
                // fontWeight: 'normal',
                textAlign: 'center',
                fontSize:18,
                // position:'absolute',
            }
        }}
    >
      <RootStack.Screen 
          name="indexBienvenido"
          component={Bienvenido}
          options={{
              title:'a',
              headerShown:false
          }}
      />
      <RootStack.Screen 
          name="indexRegistro"
          component={Registro}
          options={{
              title:'',
              headerShown:false
          }}
      />
      <RootStack.Screen 
          name="indexLogin"
          component={Login}
          options={{
              title:'',
              headerShown:false
          }}
      />
        <RootStack.Screen 
          name="indexCambioExitoso"
          component={CambioExitoso}
          options={{
              title:'',
              headerShown:false
          }}
      />
        <RootStack.Screen 
          name="indexRegistroExitoso"
          component={RegistroExitoso}
          options={{
              title:'',
              headerShown:false
          }}
      />
        <RootStack.Screen 
          name="indexRecuperarContraseña"
          component={RecuperarContraseña}
          options={{
              title:'',
              headerShown:false
          }}
      />
        <RootStack.Screen 
          name="indexValidarCodigo"
          component={ValidarCodigo}
          options={{
              title:'',
              headerShown:false
          }}
      />
        <RootStack.Screen 
          name="indexCambiarContraseña"
          component={CambiarContraseña}
          options={{
              title:'',
              headerShown:false
          }}
      />
        <RootStack.Screen 
          name="indexSos"
          component={Sos}
          options={{
              title:'',
              headerShown:false
          }}
      />
        <RootStack.Screen 
          name="indexPrueba"
          component={Prueba}
          options={{
              title:'',
              headerShown:false
          }}
      />
    </RootStack.Navigator>
    )
}

export default SOSLogin;