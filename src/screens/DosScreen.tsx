import React from 'react'
import { Text, View, Button } from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import { styles } from '../../estilo/appstyle';

interface Props extends StackScreenProps <any  , any  > {};

export const DosScreen = ({navigation}:Props) => {
   
  return (
    <View style={styles.globalMargin}>
    <Text style={styles.title}>
SCREEN DOS        </Text>
    <Button
    title='IR A LA PAGINA 1'
onPress={()=>navigation.navigate('UnoScreen')}
    />
     <Button
    title='IR A LA PAGINA FINAL'
onPress={()=>navigation.navigate('FinalScreen')}
    />
   <Text>MIGUEL EMMANUEL ARRIOLA ORTEGA</Text>
    <Text>DSM 43</Text>

    </View>
  )
}
