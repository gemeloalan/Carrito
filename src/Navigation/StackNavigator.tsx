import {DosScreen} from '../screens/DosScreen';
import {FinalScreen} from '../screens/FinalScreen';
import {UnoScreen} from '../screens/UnoScreen';
import {InicioScreen} from '../screens/InicioScreen';
import {styles} from '../../estilo/appstyle';
import {Estudiante} from '../screens/Estudiante';
import {createStackNavigator} from '@react-navigation/stack';
import {Pinicio} from '../proyect/Pinicio';
import {Ropa} from '../proyect/Auto';
import {Perchera} from '../proyect/Camioneta';
import {Camas} from '../proyect/Ccamioneta';
import {Juguetes} from '../proyect/Juguetes';
import {Monos} from '../proyect/Limosina';
import {Bmonos} from '../proyect/compra/Bmonos';
import {Bcamas} from '../proyect/compra/Bcamas';
import {Bjuguetes} from '../proyect/compra/Bjuguetes';
import {Bperchera} from '../proyect/compra/Bperchera';
import {Bropa} from '../proyect/compra/Bropa';
import {Vropa} from '../proyect/venta/Vropa';
import {Index} from '../new/Index';
import {Camass} from '../new/Camioneta';
import {Percherass} from '../new/Percherass';
import {Ropass} from '../new/Ropass';
import {Juguetess} from '../new/Juguetess';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    /*    <Stack.Navigator>
      <Stack.Screen name="InicioScreen"  options={{title:"Pagina de Inicio"}}  component={InicioScreen}  />
      <Stack.Screen name="UnoScreen"  options={{title:"Pagina 1"}}  component={UnoScreen} />
      <Stack.Screen name="DosScreen"  options={{title:"Pagina 2"}}  component={DosScreen} />
      <Stack.Screen name="FinalScreen" options={{title:"Pagina Final"}}   component={FinalScreen} />
      <Stack.Screen name="Estudiante" options={{title:"Pagina Final"}}   component={Estudiante} />
    </Stack.Navigator> */
    <Stack.Navigator>
      <Stack.Screen
        name="Pinicio"
        options={{title: 'Pagina de Inicio'}}
        component={Pinicio}
      />
      <Stack.Screen
        name="Index"
        options={{title: 'COMPRA '}}
        component={Index}
      />
      <Stack.Screen name="Ropa" options={{title: 'AUTO'}} component={Ropa} />
      <Stack.Screen
        name="Juguetes"
        options={{title: 'COMPRAR CAMIONETA '}}
        component={Juguetes}
      />
      <Stack.Screen
        name="Perchera"
        options={{title: 'CAMIONEETAS '}}
        component={Perchera}
      />
      <Stack.Screen
        name="Bperchera"
        options={{title: 'COMPRA '}}
        component={Bperchera}
      />
      <Stack.Screen
        name="Camas"
        options={{title: 'COMPRAR CAMIONETA'}}
        component={Camas}
      />
      <Stack.Screen
        name="Monos"
        options={{title: 'LIMOSINA '}}
        component={Monos}
      />
      <Stack.Screen
        name="Bropa"
        options={{title: 'COMPRA '}}
        component={Bropa}
      />
      <Stack.Screen
        name="Bjuguetes"
        options={{title: 'COMPRA '}}
        component={Bjuguetes}
      />
      <Stack.Screen
        name="Bcamas"
        options={{title: 'COMPRA '}}
        component={Bcamas}
      />
      <Stack.Screen
        name="Bmonos"
        options={{title: 'COMPRA '}}
        component={Bmonos}
      />
      <Stack.Screen
        name="Camass"
        options={{title: 'VENTA DE CAMAS '}}
        component={Camass}
      />
      <Stack.Screen
        name="Juguetess"
        options={{title: 'VENTA '}}
        component={Juguetess}
      />
      <Stack.Screen
        name="Percherass"
        options={{title: 'VENTA '}}
        component={Percherass}
      />
      <Stack.Screen
        name="Ropass"
        options={{title: 'VENTA '}}
        component={Ropass}
      />
      <Stack.Screen
        name="Vropa"
        options={{title: 'VENTA '}}
        component={Vropa}
      />
    </Stack.Navigator>
  );
};
