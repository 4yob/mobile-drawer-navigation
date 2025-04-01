import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Atividade 07 - Drawer Navigation</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0FFF0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#9ACD32',
    },
});