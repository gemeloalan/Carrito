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

export const Bcamas = ({navigation}: Props) => {
  const [cantidad, setcantidad] = useState(0);
  const [valor, setvalor] = useState(0);

  const total = (numt: number) => {
    setvalor(500000 * parseFloat(cantidad));
  };
  return (
    <ScrollView>
      <View style={styles.globalMargin}>
        <Text style={styles.title}>COMPRAR LA CAMIONETA </Text>
        <Image
          source={require('../../imagenes/blazer.jpg')}
          style={styles.imach}
        />
        <Text style={styles.TRANSPORTE}>ESTE ARTIUCLO CUESTA $500,000</Text>
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
          <Text style={styles.test}>AGG AL CARRITO</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.estudia}
          onPress={() =>
            navigation.navigate('Vropa', {
              total: {valor},
            })
          }>
          <Text style={styles.test}>FINALIZAR COMPRA</Text>
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
    </ScrollView>
  );
};
/*  
     onPress={() => total(1)} */
