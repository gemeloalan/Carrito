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

export const Ropass = ({navigation}: Props) => {
  const [cantidad, setcantidad] = useState(0);
  const [valor, setvalor] = useState(0);

  const total = (numt: number) => {
    setvalor(150 * parseFloat(cantidad));
  };
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>ver MASCOA </Text>

      <Image source={require('../imagenes/ropa.jpg')} style={styles.imach} />

      <Text style={styles.TRANSPORTE}>ESTE ATIUCLO CUESTA $150</Text>
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
          navigation.navigate('Percherass', {
            venta_ropa: {valor},
          })
        }>
        <Text style={styles.test}>AGG AL CARRITO</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.estudia}
        onPress={() =>
          navigation.navigate('Percherass', {
            venta_ropa: {valor},
          })
        }>
        <Text style={styles.test}>PERCHERAS</Text>
      </TouchableOpacity>
    </View>
  );
};
/*  
     onPress={() => total(1)} */
