import React from 'react';
import {Text, View, Button, Image, TouchableOpacity} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../../estilo/appstyle';
import {Estudiante} from '../screens/Estudiante';
import {Ropa} from './Auto';
import {ScrollView} from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any, any> {}

export const Pinicio = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <ScrollView>
        <Text style={styles.title}>BIENVENIDO ↓ JAI COMPRA-RENTA </Text>

        <Text style={styles.VC}>RENTAR</Text>
        <TouchableOpacity
          // style={styles.estudia}
          onPress={() =>
            navigation.navigate('Ropa', {
              id: 1,
              nombre: 'jai',
            })
          }>
          <Image
            source={require('../imagenes/Autoo.jpg')}
            style={styles.imachos}
          />

          <Text style={styles.testts}>AUTOS</Text>
        </TouchableOpacity>

        <TouchableOpacity
          //  style={styles.estudia}
          onPress={() =>
            navigation.navigate('Monos', {
              id: 1,
              nombre: 'jai',
            })
          }>
          <Image
            source={require('../imagenes/hummer.jpg')}
            style={styles.imachos}
          />

          <Text style={styles.testts}>LIMOSINAS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.test}
          onPress={() =>
            navigation.navigate('Perchera', {
              id: 1,
              nombre: 'jai',
            })
          }>
          <Image
            source={require('../imagenes/Camioneta.jpg')}
            style={styles.imachos}
          />

          <Text style={styles.testts}>CAMIONETAS FAMILIARES</Text>
        </TouchableOpacity>
        <Text style={styles.VC}>COMPRAR</Text>
        <TouchableOpacity
          // style={styles.test}
          onPress={() =>
            navigation.navigate('Camas', {
              id: 1,
              nombre: 'jai',
            })
          }>
          <Image
            source={require('../imagenes/blazer.jpg')}
            style={styles.imachos}
          />

          <Text style={styles.testts}>CAMIONETAS</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.test}
          onPress={() =>
            navigation.navigate('Juguetes', {
              id: 1,
              nombre: 'jai',
            })
          }>
          <Image
            source={require('../imagenes/MOTO.jpg')}
            style={styles.imachos}
          />

          <Text style={styles.testts}>MOTOCICLETAS</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
/*  <TouchableOpacity
    style={styles.estudia}
    onPress={()=>navigation.navigate('Index',{
      id : 1,
    nombre : 'jai'

    }) }
    >
<Text
    style={styles.test}
    >INDEX</Text>
    </TouchableOpacity> */
