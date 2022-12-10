import React from 'react';
import {Text, View, Button, Image, TouchableOpacity} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../../estilo/appstyle';
import {Estudiante} from '../screens/Estudiante';
import {Ropa} from '../proyect/Auto';
import {ScrollView} from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any, any> {}

export const Index = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <ScrollView>
        <Text style={styles.title}>BIENVENIDO A LA TIENDA DE AUTOS </Text>

        <Image source={require('../imagenes/index.jpg')} style={styles.imach} />

        <TouchableOpacity
          style={styles.estudia}
          onPress={() =>
            navigation.navigate('Ropass', {
              id: 1,
              nombre: 'mike',
            })
          }>
          <Text style={styles.test}>ROPA</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.estudia}
          onPress={() =>
            navigation.navigate('Index', {
              id: 1,
              nombre: 'mike',
            })
          }>
          <Text style={styles.test}>INDEX</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
