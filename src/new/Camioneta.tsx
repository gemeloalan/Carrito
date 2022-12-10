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

export const Camass = ({route, navigation}: Props) => {
  const [cantidad, setcantidad] = useState(0);
  const [valor, setvalor] = useState(0);
  const ventas = route.params;
  const total = (numt: number) => {
    setvalor(150 * parseFloat(cantidad));
  };
  return (
    <View style={styles.globalMargin}>
      <ScrollView>
        <Text style={styles.title}>CAMIONETAS DISPONIBLES </Text>

        <Image source={require('../imagenes/camag.jpg')} style={styles.imach} />
        <Image source={require('../imagenes/camac.jpg')} style={styles.imach} />

        <Text style={styles.TRANSPORTE}>ESE ARTIUCLO CUESTA $150</Text>
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
            navigation.navigate('Vropa', {
              venta_cama: {valor},
              total: {ventas},
            })
          }>
          <Text style={styles.test}>AGG AL CARRITO</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
/*  
     onPress={() => total(1)} */
