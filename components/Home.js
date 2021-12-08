import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, TextInput, Image, Dimensions, Animated, FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { elevate } from 'react-native-elevate';

export function Home (props) 
{
    const navigation = useNavigation()

    // const FoodCards = ({food}) => {
    //     return (
    //         <View style={styles.itemsCardView}>
    //             <Image style={styles.foodCardsImage} source={food.Image}/>
    //         </View>
    //     )
    // }

    const ItemCardsView = (props) => {
        return (
            <View style={styles.innerCardView}>
                <View style={styles.innerCardView2}>
                    <Image source = {props.image} style={styles.foodImage}/>
                </View>
                <View style={{flex: 1}}>
                    <Text style={styles.texrtInnerCard}>{props.title}</Text>
                    <Text style={styles.texrtInnerCard2}>{props.subtitle}</Text>
                </View>
            </View>
        )
    }
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
                            <ScrollView horizontal = {true}>
                                <ItemCardsView image = {require('../assets/freshFood2.jpeg')} title = "Salmon Salad" subtitle="340 kcal"/>
                                <ItemCardsView image = {require('../assets/freshFood1.jpeg')} title = "Checken with Avo" subtitle="500 kcal"/>
                                <ItemCardsView image = {require('../assets/freshFood2.jpeg')} title = "Mixed Salad" subtitle="400 kcal"/>
                            </ScrollView>
                        </View>
                    <Text style={styles.title}>Lunch</Text>
                        <View style={styles.itemsCardView}>
                            <ScrollView horizontal = {true}>
                                <ItemCardsView image = {require('../assets/freshFood2.jpeg')} title = "Salmon Salad" subtitle="400 kcal"/>
                                <ItemCardsView image = {require('../assets/freshFood1.jpeg')} title = "Salmon Salad" subtitle="400 kcal"/>
                                <ItemCardsView image = {require('../assets/freshFood2.jpeg')} title = "Salmon Salad"subtitle="400 kcal"/>
                            </ScrollView>
                        </View>
                    <Text style={styles.title}>Dinner</Text>
                        <View style={styles.itemsCardView}>
                            <ScrollView horizontal = {true}>
                                <ItemCardsView image = {require('../assets/freshFood2.jpeg')} title = "Salmon Salad"/>
                                <ItemCardsView image = {require('../assets/freshFood1.jpeg')} title = "Salmon Salad"/>
                                <ItemCardsView image = {require('../assets/freshFood2.jpeg')} title = "Salmon Salad"/>
                            </ScrollView>
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
        height: 190,
        elevation: 15,
        marginVertical: 20
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