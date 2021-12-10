import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'

// Import components
import { Home } from './components/Home';
import { ItemLists } from './components/ItemLists';
import { Profile } from './components/Profile';

export function BottomNavigation(props) {
    const [ data, setData ] = useState()
    const Tab = createBottomTabNavigator()
    const navigation = useNavigation()

    useEffect(() => {
        // if user is logged out, go to "Login" screen
        if (!props.auth) {
            navigation.reset({ index: 0, routes: [{ name: "Login" }] })
        }
    }, [props.auth])

    useEffect( () => {
        setData( props.data )
    }, [props.data])

    // added logout button to all page headers, passed as a prop from App.js
    return (
        <Tab.Navigator screenOptions={{ headerRight: () => props.logout }}>
            <Tab.Screen name="Browse"
                options={{
                    headerTitleStyle: { fontSize: 30 }, headerTitleAlign: 'left',
                    tabBarActiveTintColor: '#f08f11',
                    tabBarIcon: ({ color, size }) => (<MaterialCommunityIcon name="home" color={color} size={size} />)
                }}>
                {(props) => <Home {...props} foodData={data} test="test"/>}
            </Tab.Screen>
            <Tab.Screen name="Lists"
                options={{
                    headerTitleStyle: { fontSize: 30 }, headerTitleAlign: 'left',
                    tabBarActiveTintColor: '#f08f11',
                    tabBarIcon: ({ color, size }) => (<MaterialCommunityIcon name="format-list-bulleted" color={color} size={size} />)
                }}>
                {(props) => <ItemLists {...props} auth={props.auth} data={props.data} />}
            </Tab.Screen>
            {/* <Tab.Screen name="Profile"
                options={{
                    headerTitleStyle: { fontSize: 30 }, headerTitleAlign: 'left',
                    tabBarActiveTintColor: '#f08f11',
                    tabBarIcon: ({ color, size }) => (<MaterialCommunityIcon name="account" color={color} size={size} />)
                }}>
                {(props) => <Profile {...props} />}
            </Tab.Screen> */}
        </Tab.Navigator>
    );
}
