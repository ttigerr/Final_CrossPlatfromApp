import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, TextInput, Image, Dimensions, Animated, FlatList, Modal} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getStorage, ref, getDownloadURL } from "firebase/storage"
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { elevate } from 'react-native-elevate';

export function Home (props) 
{
    const navigation = useNavigation()

    const FBstorage = getStorage()

    // image for the card
    const ItemImage = (props) => 
    {
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
            return( <Image source={{uri: image}} style={{width:140, height: 100}} />)
        }
    }

    const Card = (props) => {
        // restrict the length of the name
        // useEffect( () => {

        // })
        return (
            <View style={styles.innerCardView}>
                <View style={styles.innerCardView2}>
                    <ItemImage image={props.image} />
                </View>
                <View style={{flex: 1}}>
                    <Text style={styles.texrtInnerCard}>{props.name}</Text>
                    <Text style={styles.texrtInnerCard2}>{props.calories}</Text>
                </View>
            </View>
        )
    }

    const renderItem = ({ item }) => (
        <Card name={item.name} calories={item.calories} image={item.image} />
    )
    return(

        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.inner}>
                    <View style={styles.searchBar}>
                        <MaterialCommunityIcon name="magnify" size={20} style={{marginLeft: 15}}/>
                        <TextInput placeholder="Search" style={{marginLeft: 10}}/>
                    </View>
                    <Text style={styles.title}>Breakfast</Text>
                        <View style={styles.itemsCardView}>
                            {/* <ScrollView horizontal = {true}>
                                <FlatList
                                    renderItem={renderItem}
                                    data={props.foodData}
                                    keyExtractor={item => item.id}
                                    numColumns={2}
                                />
                            </ScrollView> */}
                            <FlatList
                                    renderItem={renderItem}
                                    data={props.foodData}
                                    keyExtractor={item => item.id}
                                    numColumns={2}
                            />
                        </View>
                </View> 
            </ScrollView>
            
        </SafeAreaView>
    )
}

// Style of Home
const styles = StyleSheet.create ({
    container:{
        flex: 1,
        backgroundColor: 'white',
    },
    inner: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    searchBar: {
        height: 40,
        backgroundColor: "#f2f2f2",
        marginVertical: 20,
        borderRadius: 15,
        flexDirection: "row",
        alignItems: "center"
        
    },
    itemsCardView: {
        height: 700,
        elevation: 15,
        marginVertical: 20,
        alignItems: "center",
    },
    innerCardView: {
        height: 180,
        width: 160,
        elevation: 15,
        borderWidth: 0.2,  
        borderRadius: 10,
    },
    innerCardView2: {
        flex: 2,
        alignItems: "center",
        marginVertical: 10,
   },
   foodImage: {
       flex: 1,
       width: 140,
       height: null,
       resizeMode: 'cover',
   },
   texrtInnerCard: {
       fontWeight: "bold",
        marginLeft: 10,
        marginBottom: 5
   },
    texrtInnerCard2: {
        marginLeft: 10
    },

})