import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';

export function ItemLists(props) {
    const [listData, setListData] = useState()

    useEffect(() => {
        setListData(props.data)
    }, [props.data])

    const data = { time: new Date().getTime(), user: Math.random() * 100 }

    const renderItem = ({ item }) => (
        <View><Text>{item.time}</Text></View>
    )
    return (

        <View style={styles.container}>
            <Text style={styles.title}>Morning</Text>
            <TouchableOpacity style={styles.button} onPress={() => { props.add('foods', data) }}>
                <Text>Add something</Text>
            </TouchableOpacity>
            <FlatList data={listData} renderItem={renderItem} keyExtractor={item => item.id} />
        </View>
    )

}

// Style of Home
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    metaText: {
        textAlign: 'center'
    },
    title: {
        margin: 20,
        fontSize: 20
    }
})