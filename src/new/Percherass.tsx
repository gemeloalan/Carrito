import React from 'react';
import {useState} from 'react';

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
import {Pinicio} from '../proyect/Pinicio';
interface Props extends StackScreenProps<any, any> {}

export const Percherass = ({route, navigation}: Props) => {
  const [cantidad, setcantidad] = useState(0);
  const [valor, setvalor] = useState(0);
  const ropa = route.params;

  const total = (numt: number) => {
    setvalor(150 * parseFloat(cantidad));
  };
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>ver MASOTA </Text>

      <Image
        source={require('../imagenes/perchera.jpg')}
        style={styles.imach}
      />

      <Text style={styles.TRANSPORTE}>ESTE ARTIUCLO CUESTA $150</Text>
      <Text style={styles.piezas}>PIEZAS A COMPRAR:</Text>

      <TextInput
        style={styles.input}
        placeholder="CUANTOS DESEA COMPRAR"
        onChangeText={setcantidad}
        value={cantidad}
        keyboardType="numeric"
      />
      <Text>
        {' '}
        TOTAL:
        {valor}
      </Text>
      <TouchableOpacity style={styles.estudia} onPress={() => total(1)}>
        <Text style={styles.test}>CALCULAR</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.estudia}
        onPress={() =>
          navigation.navigate('Juguetess', {
            venta_perchera: {valor},
            venta_ropa: {ropa},
          })
        }>
        <Text style={styles.test}>AGG AL CARRITO</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.estudia}
        onPress={() =>
          navigation.navigate('Juguetess', {
            venta_perchera: {valor},
            venta_ropa: {ropa},
          })
        }>
        <Text style={styles.test}>JUGUETES</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.estudia}
        onPress={() =>
          navigation.navigate('Ropass', {
            venta_ropa: {valor},
          })
        }>
        <Text style={styles.test}>REGRESAR</Text>
      </TouchableOpacity>
    </View>
  );
};
/*  
     onPress={() => total(1)} */
