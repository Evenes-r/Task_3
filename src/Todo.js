import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export const Todo = ({ todo, onRemove }) => {
    return (
        <View style={styles.todo}>
            <Text>{todo.title}</Text>
            <Button title='Х' onPress={() => onRemove(todo.id)} />
        </View>
    )



}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom: 10
    }
})