import React from 'react'
import { FlatList } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements/dist/buttons/Button'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function ListClients({ clientes, navigation, loadMore }) {

    return (
        <View>
            <FlatList
                data={ clientes}
                keyExtractor={(item, index) => index.toString()}
                onEndReachedThreshold={0.5}
                onEndReached={loadMore}
                renderItem={(client) => (
                    <Client client={client} navigation={navigation}/>
                )}
            />
        </View>
    )
}

function Client ({ client, navigation, loadMore }) {

    const { name, payDays } = client.item

    const goClient = () => {
        navigation.navigate("client", { id, name})
    }
    
    return (
        <TouchableOpacity onPress={goClient}>

            <View style={styles.clientView}>
                <Text style={styles.clientTitle}>{name}</Text>
                <Text style={styles.clientName}>
                    {
                         payDays === undefined ?
                            "No tiene días"
                        :
                            (payDays.length > 2 ? 
                               "Dias" + " " + payDays[1] + " y " + payDays[2] 
                            : 
                               "Dias" + " " + `${payDays[1]}` )
                    } 
                
                </Text>
                {/* <View>
                    <Button
                        title= "Abono"
                        buttonStyle={styles.btnpayment}
                    />
                </View> */}
                
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    clientTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: "black",
        marginTop:10
    },
    clientName: {
        color: "red"
    },
    clientView: {
        marginLeft: 15
    },
    btnpayment: {
        backgroundColor: "#442484",
        
    }    
})
