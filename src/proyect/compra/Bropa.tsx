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
import {styles} from '../../../estilo/appstyle';
import {Estudiante} from '../../screens/Estudiante';
import {Pinicio} from '../../proyect/Pinicio';
interface Props extends StackScreenProps<any, any> {}

export const Bropa = ({navigation}: Props) => {
  const [cantidad, setcantidad] = useState(0);
  const [valor, setvalor] = useState(0);

  const total = (numt: number) => {
    setvalor(5000 * parseFloat(cantidad));
  };
  return (
    <View style={styles.globalMargin}>
      <ScrollView>
        <Text style={styles.title}>ver MASOTA </Text>

        <Image
          source={require('../../imagenes/Autoo.jpg')}
          style={styles.imach}
        />

        <Text style={styles.TRANSPORTE}>ESTE AUTO CUESTA $5000/dia</Text>

        <Text style={styles.piezas}>PIEZAS A COMPRAR:</Text>

        <TextInput
          style={styles.input}
          placeholder="Dias a rentar"
          onChangeText={setcantidad}
          value={cantidad}
          keyboardType="numeric"
        />
        <Text>
          {' '}
          TOTAL:
          {valor}
        </Text>

        <View style={{flexDirection: 'column'}}>
          <TouchableOpacity style={styles.estudia} onPress={() => total(1)}>
            <Text style={styles.test}>CONFIRMAR RENTA</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.estudia}
            onPress={() =>
              navigation.navigate('Vropa', {
                total: {valor},
              })
            }>
            <Text style={styles.test}>RENTAR</Text>
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
      </ScrollView>
    </View>
  );
};
/*  
     onPress={() => total(1)} */
