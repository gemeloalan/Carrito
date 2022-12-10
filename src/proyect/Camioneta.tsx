import React from 'react';
import {
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../../estilo/appstyle';
import {Estudiante} from '../screens/Estudiante';
import {Pinicio} from './Pinicio';

interface Props extends StackScreenProps<any, any> {}

export const Perchera = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>RENTA UNA CAMIONETA </Text>

      <Image source={require('../imagenes/blazer.jpg')} style={styles.imach} />
      <Text style={styles.TRANSPORTE}>ESTE ARTIUCLO CUESTA $150</Text>

      <TouchableOpacity
        style={styles.estudia}
        onPress={() =>
          navigation.navigate('Bperchera', {
            id: 1,
            nombre: 'mike',
          })
        }>
        <Text style={styles.test}>COMPRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.estudia}
        onPress={() =>
          navigation.navigate('Pinicio', {
            id: 1,
            nombre: 'mike',
          })
        }>
        <Text style={styles.test}>REGRESAR</Text>
      </TouchableOpacity>
    </View>
  );
};
