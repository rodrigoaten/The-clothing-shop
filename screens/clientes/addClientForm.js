import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input, Button } from 'react-native-elements'

export default function AddClientForm() {
    return (
        <View style={styles.viewContainer}>
            <AddForm/>
            <Button
            title="Agregar cliente nuevo"
            // onPress={}
            buttonStyle={styles.btnclientForm}
            />
        </View>
    )
}

function AddForm() {
    const [phone, setPhone] = useState("")

    return (
        <View>
            <Input
                placeholder="Nombre"
            />
            <Input
                placeholder="Apellido"
            />
            <Input
                placeholder="Fecha de pago"
            />
            <Input
                placeholder="Cantidad deuda"
            />
            <Input
                placeholder="Numero telefono"
                keyboardType="phone-pad"
            />
            
        </View>
    )
}

const styles = StyleSheet.create({})
