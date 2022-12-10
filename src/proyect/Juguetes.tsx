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
import {Pinicio} from '../proyect/Pinicio';

interface Props extends StackScreenProps<any, any> {}

export const Juguetes = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>MOTOCICLETAS</Text>

      <Image
        source={require('../imagenes/MOTO.jpg')}
        style={styles.imach}
      />
      <Text style={styles.TRANSPORTE}>ESTE ARTIUCLO CUESTA $150,999</Text>

      <TouchableOpacity
        style={styles.estudia}
        onPress={() =>
          navigation.navigate('Bjuguetes', {
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
