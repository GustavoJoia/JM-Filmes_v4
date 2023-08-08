import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import Stack from './stack'
import About from '../screens/About'

export default function Draw(){
    const Drawer = createDrawerNavigator()
    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen
                    name='home'
                    component={Stack}
                    options={{
                        headerTransparent: true,
                        headerTitle: 'JM Stream',
                        headerTitleStyle:{
                            color: '#fff',
                            fontSize: '1.8rem',
                            width: '100%',
                            marginLeft: '80%',
                        },
                    }}
                />
                <Drawer.Screen
                    name='about'
                    component={About}
                    options={{
                        headerTransparent: true,
                        headerTitle: 'Sobre nós'
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}