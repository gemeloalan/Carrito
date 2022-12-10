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

export const Camas = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.testts}>CAMIONETAS </Text>

      {/* <Image source={require('../imagenes/camag.jpg')} style={styles.imach} /> */}

      <TouchableOpacity
        style={styles.test}
        onPress={() =>
          navigation.navigate('Bcamas', {
            id: 1,
            nombre: 'jai',
          })
        }>
        <Image
          source={require('../imagenes/blazer.jpg')}
          style={styles.imachos}
          />
          <Text style={styles.costo}> ESTE AUTO CUESTA $200,000 </Text>

        <Text style={styles.testts}>COMPRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.estudia}
        onPress={() =>
          navigation.navigate('Pinicio', {
            id: 1,
            nombre: 'jai',
          })
        }>
        <Text style={styles.test}>REGRESA</Text>
      </TouchableOpacity>
    </View>
  );
};
