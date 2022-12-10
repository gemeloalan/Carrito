import React from 'react'
import { Text, View, Button } from 'react-native';
import { StackNavigator } from '../Navigation/StackNavigator';
import {StackScreenProps} from '@react-navigation/stack';
import { styles } from '../../estilo/appstyle';
interface Props extends StackScreenProps <any  , any  > {};

export const InicioScreen = ({navigation}:Props) => {
   
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>
      SCREEN    INICIO
           </Text>
    <Button
    title='IR A LA PAGINA 1'
onPress={()=>navigation.navigate('UnoScreen')}
    />
    <Text>MIGUEL EMMANUEL ARRIOLA ORTEGA</Text>
    <Text>DSM 43</Text>


    </View>
  )
}
