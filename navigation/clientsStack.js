import React from 'react'
import { createStackNavigator} from '@react-navigation/stack'

import clients from '../screens/clientes/clients'
import clientForm from '../screens/clientes/clientForm'

const Stack = createStackNavigator()

export default function clientsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="clients"
                component={ clients }
                options={{ title: "Clientes" }}
            />
            <Stack.Screen
                name="clientForm"
                component={ clientForm }
                options={{ title: "Nuevo Cliente" }}
            />
        </Stack.Navigator>
    )
}
