import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function client({ navigation, route}) {
    const {name} = route.params

    navigation.setOptions({ title: name })
    return (
        <View>
            <Text>Cliente</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
