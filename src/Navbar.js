import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Navbar = props => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: 'center',
        jystifyContent: 'center',
        backgroundColor: '#3949ab',
        paddingTop: 20
    },
    text: {
        color: 'white',

    }
})