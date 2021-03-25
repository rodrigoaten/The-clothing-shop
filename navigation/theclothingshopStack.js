import React from 'react'
import { createStackNavigator} from '@react-navigation/stack'

import Theclothingshop from '../screens/Theclothingshop'

const Stack = createStackNavigator()

export default function theclothingshopStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="the clothing shop"
                component={ Theclothingshop }
                options={{ title: "The clothing shop" }}
            />
        </Stack.Navigator>
    )
}
