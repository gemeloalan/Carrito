import React from 'react'
import { Text, View, Button } from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { DosScreen } from './DosScreen';
import { InicioScreen } from './InicioScreen';
import { styles } from '../../estilo/appstyle';

interface Props extends StackScreenProps <any  , any  > {};

export const UnoScreen = () => {
  const navigator = useNavigation();

   
  return (
    <View style={styles.globalMargin}>
    <Text style={styles.title}>
      SCREEN UNO        </Text>
      <Button
    title='IR A LA PAGINA 2'
onPress={()=>navigator.navigate('DosScreen')}
    />
     <Button
    title='IR A LA PAGINA DE INICIO'
onPress={()=>navigator.navigate(InicioScreen)}
    />
   <Text>MIGUEL EMMANUEL ARRIOLA ORTEGA</Text>
    <Text>DSM 43</Text>

    </View>
  )
}
