import React from 'react'
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import Stack from './stack'
import Home from '../screens/Home'
import About from '../screens/About'

import { TouchableOpacity } from 'react-native';

export default function Draw(){
    const Drawer = createDrawerNavigator()


    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen
                    name='home'
                    component={Stack}
                    options={{
                        // headerLeft: ({ focused, size }) => (
                        //     <TouchableOpacity onPress={ navigation.openDrawer}>
                        //         <Entypo
                        //         name={'menu'}
                        //         size={24}
                        //         color="#fff"
                        //         style={{ marginLeft: 10 }}
                        //         />
                        //     </TouchableOpacity>
                        // ),
                        headerTransparent: false,
                        headerTitle: 'JM Stream',
                        headerTitleStyle:{
                            color: '#fff',
                            fontSize: '1.8rem',
                            width: '100%',
                            
                        },
                        headerStyle:{
                            backgroundColor: 'rgb(20,20,20)',
                        },
                        
                    }}
                />
                <Drawer.Screen
                    name='about'
                    component={About}
                    options={{
                        
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

