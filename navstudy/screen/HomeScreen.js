import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
    const [today, setToday] = useState(new Date());

    useEffect(() => {
        console.log(today);
    });
    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
            <StatusBar style="auto" />
            <Button
                onPress={() => {
                    console.log("送信" + today);
                    navigation.setOptions({ date: today })
                    navigation.navigate('DetailScreen', { date: today })
                }}
                title="Go to DetailScreen"
            />
            <Button
                onPress={() => setToday(new Date())}
                title="date リセット"
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
