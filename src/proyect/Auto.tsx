import React from 'react';
import {Text, View, Button, Image, TouchableOpacity, _Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../../estilo/appstyle';
import {Estudiante} from '../screens/Estudiante';
import {Pinicio} from './Pinicio';
import {TextInput} from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any, any> {}

export const Ropa = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Renta de automoviles </Text>

      <Image source={require('../imagenes/Carro.jpg')} style={styles.imach} />

      <Text style={styles.TRANSPORTE}>ESTE AUTO CUESTA SOLO $8000 *dia</Text>

      <TouchableOpacity
        style={styles.estudia}
        onPress={() =>
          navigation.navigate('Bropa', {
            id: 1,
            nombre: 'jai',
          })
        }>
        <Text style={styles.test}>COMPRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.estudia}
        onPress={() =>
          navigation.navigate('Pinicio', {
            id: 1,
            nombre: 'jai',
          })
        }>
        <Text style={styles.test}>REGRESAR</Text>
      </TouchableOpacity>
    </View>
  );
};
