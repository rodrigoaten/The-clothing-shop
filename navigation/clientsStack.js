import React from 'react'
import { createStackNavigator} from '@react-navigation/stack'

import clients from '../screens/clients'

const Stack = createStackNavigator()

export default function clientsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="clients"
                component={ clients }
                options={{ title: "Clientes" }}
            />
        </Stack.Navigator>
    )
}
