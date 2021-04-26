import React, { useState, useEffect, useCallback} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { getClients } from '../utils/actions'
import ListClients from '../clientes/ListClients'
import { size } from 'lodash'
import navigation from '../navigation/Navigation'


export default function clients() {
    const [startClient, setStartClient] = useState(null)
    const [clients, setClients] = useState([])

    const limitClients = 
    useFocusEffect(
        useCallback(async() => {
                const answer = await getClients(limitClients)
                if(answer.statusResponse) {
                    setStartClient(answer.startClients)
                    setClients(answer.clientes)
                }
            },
            [],
        )
    )

    return (
        <View>
            {
                size(clients) > 0 ? (
                    <ListClients
                    clientes={clients}
                    navigation={navigation}
                    />
                ) : (
                    <View style={styles.notFoundView}>
                        <Text>No hay na'</Text>
                    </View>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    notFoundView: {
        justifyContent: "center",
        alignItems: "center"
    }
})
