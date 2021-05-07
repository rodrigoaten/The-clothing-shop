import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Alert } from 'react-native'
import { getClientById } from '../../utils/actions'

export default function getClient({ navigation, route}) {
   
    const {id, name} = route.params
    const [client, setClient] = useState(null)

    navigation.setOptions({ title: name })

    useEffect(() => {
        (async () => {
            
            const response = await getClientById("clientes", id )
            if (response.statusResponse) {
                setClient(response.document)
            } else {
                setClient({})
                Alert.alert("Ocurrió un problema al cargar el cliente. Pilas pues")
            }
        })()    
    }, [])
    
    return (
        <View>
            <Text>y ahora?</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
