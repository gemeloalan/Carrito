import React from 'react';
import {
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../../estilo/appstyle';
import {Estudiante} from '../screens/Estudiante';
import {Pinicio} from './Pinicio';

interface Props extends StackScreenProps<any, any> {}

export const Monos = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}></Text>


      <Text style={{color: 'yellow'}}>
        ESTA LIMOSINA SE RENTA POR: $10,000 El dia
      </Text>

      <TouchableOpacity
        style={styles.test}
        onPress={() =>
          navigation.navigate('Bmonos', {
            id: 1,
            nombre: 'mike',
          })
        }>
      <Image source={require('../imagenes/hummer.jpg')} style={styles.imach} />

        <Text style={styles.testts}>COMPRAR</Text>
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
