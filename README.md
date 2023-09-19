```sh
yarn install
npx expo install react-native-web@~0.18.10 react-dom@18.2.0 @expo/webpack-config@^18.0.1 react-native-gesture-handler
npm install @react-navigation/stack react-native-stars
yarn add @react-navigation/drawer
```

```js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons'; // Importe o conjunto de ícones desejado
import { TouchableOpacity } from 'react-native'; // Importe TouchableOpacity
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';

const Drawer = createDrawerNavigator();

function AppDrawerNavigator({ navigation }) {
  const openDrawer = () => {
    navigation.openDrawer(); // Abre o Drawer Navigator
  };

  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={openDrawer}>
              <Ionicons
                name="menu" // Nome do ícone desejado
                size={30} // Tamanho do ícone
                color="black" // Cor do ícone
                style={{ marginLeft: 10 }} // Estilo do ícone (opcional)
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={openDrawer}>
              <Ionicons
                name="menu" // Nome do ícone desejado
                size={30} // Tamanho do ícone
                color="black" // Cor do ícone
                style={{ marginLeft: 10 }} // Estilo do ícone (opcional)
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default AppDrawerNavigator;

```