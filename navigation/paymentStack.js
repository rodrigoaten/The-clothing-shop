import React from 'react'
import { createStackNavigator} from '@react-navigation/stack'

import payment from '../screens/payment'

const Stack = createStackNavigator()

export default function paymentStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="payment"
                component={ payment }
                options={{ title: "Pagos" }}
            />
        </Stack.Navigator>
    )
}
