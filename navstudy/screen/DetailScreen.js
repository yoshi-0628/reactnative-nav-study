import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function DetailScreen({ navigation, route }) {
    const { date } = route.params;

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            console.log("受信", date);
        });

        return unsubscribe;
        // useEffectの第二引数に変わった時の値を入れる
    }, [navigation, route]);
    return (
        <View style={styles.container}>
            <Text>DetailScreen</Text>
            <StatusBar style="auto" />
            <Button
                onPress={() => navigation.goBack()}
                title="Go back"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
