import React, { useState, useCallback} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer, useFocusEffect } from '@react-navigation/native'
import { getClients, getMoreClients } from '../../utils/actions'
import ListClients from '../clientes/ListClients'
import { size } from 'lodash'

import { Icon } from 'react-native-elements'


export default function clients( {navigation} ) {
    const [startClient, setStartClient] = useState(null)
    const [clients, setClients] = useState([])

    const limitClients = 3

    useFocusEffect(
        useCallback(async() => {
                const answer = await getClients(limitClients)
                if(answer.statusResponse) {
                    setStartClient(answer.startClient)
                    setClients(answer.clientes)
                }
            },[])
    )

    const loadMore = async() => {
        if(!startClient){
            return 
        } 
        const answer = await getMoreClients(limitClients, startClient)
        if(answer.statusResponse) {
            setStartClient(answer.startClient)
            setClients([...clients, ...answer.clientes])
        }

    }

    return (
        <View style={styles.viewBody}>
            
            {
                size(clients) > 0 ? (
                    <ListClients
                    clientes={clients} //TODO: Quitar el slice
                    navigation={navigation}
                    loadMore={loadMore}
                    />
                ) : (
                    <View style={styles.notFoundView}>
                        <Text> Cargando... </Text>
                    </View>
                )
            }
            {
            <Icon
             type="material-community"
             name="plus"
             reverse
             containerStyle={styles.btnContainer}
             color="#445566"
             onPress={ () => navigation.navigate("clientForm")}                            
             />
            
            }
        </View>
    )
}

const styles = StyleSheet.create({
    viewBody: {
        flex: 1
    },
    btnContainer: {
        position: "absolute",
        bottom: 10,
        right: 10,
        shadowOffset: {width:2, height:2},
        shadowColor: "black",
        shadowOpacity: 0.5

    },
    notFoundView: {
        justifyContent: "center",
        alignItems: "center"
    }
})
