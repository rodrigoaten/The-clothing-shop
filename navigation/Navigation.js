import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import theclothingshopStack from './theclothingshopStack'
import clientsStack from './ClientsStack'
import notificationStack from './notificationStack'
import paymentStack from './paymentStack'


const Tab = createBottomTabNavigator()

export default function navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Theclothingshop"
                    component={ theclothingshopStack }
                    options={{ title: "The clothing shop"}}
                />
                <Tab.Screen
                    name="clients"
                    component={ clientsStack }
                    options={{ title: "Clientes"}}

                />
                <Tab.Screen
                    name="notification"
                    component={ notificationStack }
                    options={{ title: "Notificaciones"}}

                />
                <Tab.Screen
                    name="payment"
                    component={ paymentStack }
                    options={{ title: "Pagos"}}

                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
