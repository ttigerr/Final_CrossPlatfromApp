import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Modal, Image } from 'react-native';
import { getStorage, ref, getDownloadURL } from "firebase/storage"


export function Home(props) {
    const FBstorage = getStorage()
    // image for the card
    const ItemImage = (props) => {
        const [image, setImage] = useState()

        useEffect( () => {
            if(!image) { getItemImage(props.image) }
        })
        // function to get the image
        const getItemImage = (name) => {
            // create a reference to the image
            const imgRef = ref(FBstorage, `foods/${props.image}`)
            getDownloadURL(imgRef)
                .then((url) => {
                    setImage( url )
                })
                .catch((error) => console.log(error))
        }
        if( !image ) {
            return (
                <Text>...Loading...</Text>
            )
        }
        else{
            return( <Image source={{uri: image}} style={{width:100, height: 100}} />)
        }
    }

    const Card = (props) => {
        // restrict the length of the name
        // useEffect( () => {

        // })
        return (
            <View style={styles.card}>
                <ItemImage image={props.image} />
                <Text>{props.name}</Text>
                <Text>{props.calories}</Text>
            </View>
        )
    }

    const renderItem = ({ item }) => (
        <Card name={item.name} calories={item.calories} image={item.image} />
    )

    return (

        <View style={styles.container}>
            <Text>Welcome to home screen</Text>
            <FlatList
                renderItem={renderItem}
                data={props.foodData}
                keyExtractor={item => item.id}
                horizontal={false}
                numColumns={2}
            />
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
    card: {
        minHeight: 100,
    }
})