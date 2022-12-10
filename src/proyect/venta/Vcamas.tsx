import React from 'react'
import { Text, View, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../../../estilo/appstyle';

interface Props extends StackScreenProps<any , any>{};
export const Vcamas = ({route, navigation}:Props) => {
    const params = route.params;
  
  return (
    <View style={styles.globalMargin}>
    <Text style={styles.title}>

{    JSON.stringify(params, null, 3)
}    </Text>
   </View>
  )
}
