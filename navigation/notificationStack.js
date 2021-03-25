import React from 'react'
import { createStackNavigator} from '@react-navigation/stack'

import notification from '../screens/notification'

const Stack = createStackNavigator()

export default function notificationStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="notification"
                component={ notification }
                options={{ title: "Notificaciones" }}
            />
        </Stack.Navigator>
    )
}
