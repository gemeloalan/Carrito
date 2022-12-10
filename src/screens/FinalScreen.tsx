import React from 'react'
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { StackNavigator } from '../Navigation/StackNavigator';
import {StackScreenProps} from '@react-navigation/stack';
import { styles } from '../../estilo/appstyle';

interface Props extends StackScreenProps <any  , any  > {};

export const FinalScreen = ({navigation}:Props) => {
   
  return (
    <View style={styles.globalMargin}>
    <Text style={styles.title}>
      SCREEN  FINAL       </Text>
    <Button
    title='IR LA PAGINA DE INICIO'
onPress={()=>navigation.navigate('InicioScreen')}
    />
     <Button
    title='REGRESAR '
onPress={()=>navigation.navigate('DosScreen')}
    />
    <Text>
      NAVEGANDO CON ARGUMENTOS
    </Text>
     


    <TouchableOpacity
    style={styles.estudia}
    onPress={()=>navigation.navigate('Estudiante',{
    
    
  
      id : 1,
    nombre : 'mike'

    }) }
    >
<Text
    style={styles.test}
    >IR A LA PAGINA DE ESTUDIANTE</Text>
    </TouchableOpacity>
    <Text>MIGUEL EMMANUEL ARRIOLA ORTEGA</Text>
    <Text>DSM 43</Text>

    </View>
  )
}
