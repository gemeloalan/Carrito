import React from 'react'
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../../../estilo/appstyle';

interface Props extends StackScreenProps<any , any>{};
export const Finaliza = ({route, navigation}:Props) => {
    const params = route.params;
    const ropa_total = params;
  
  return (
    <View style={styles.globalMargin}>
    <Text style={styles.title}>

{    JSON.stringify(params, null, 3)
}    </Text>

   </View>
  )
}
