import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'

// Import components
import { Home } from './components/Home';
import { Save } from './components/Save';
import { Profile } from './components/Profile';

const Tab = createBottomTabNavigator()
// const FBauth = getAuth()

export function BottomNavigation (props) {
    // const[ auth, setAuth ] = useState()
    // const[ user, setUser ] = useState()

    // useEffect(() => {
    //     onAuthStateChanged( FBauth, (user) => {
    //       if( user ) { 
    //         setAuth(true) 
    //         setUser(user)
    //         console.log( 'authed')
    //       }
    //       else {
    //         setAuth(false)
    //         setUser(null)
    //       }
    //     })
    // })

    // const LogoutHandler = () => {
    //     signOut( FBauth ).then( () => {
    //       setAuth( false )
    //       setUser( null )
    //     })
    //     .catch( (error) => console.log(error.code) )
    // }
  return (
    <Tab.Navigator >
        <Tab.Screen name="Browse" 
            component={Home} 
            options={{headerTitleStyle: {fontSize: 30}, headerTitleAlign: 'left',
            tabBarActiveTintColor: '#f08f11',
            tabBarIcon: ({color}) => (<MaterialCommunityIcon name= "home"color={color} size={26}/>)
        }}/>
        <Tab.Screen name="Save" 
            component={Save} 
            options={{headerTitleStyle: {fontSize: 30}, headerTitleAlign: 'left',
            tabBarActiveTintColor: '#f08f11',
            tabBarIcon: ({color}) => (<MaterialCommunityIcon name= "list"color={color} size={26}/>)
        }}/>
        <Tab.Screen name="Profile" 
            component={Profile} 
            options={{headerTitleStyle: {fontSize: 30}, headerTitleAlign: 'left',
            tabBarActiveTintColor: '#f08f11',
            tabBarIcon: ({color}) => (<MaterialCommunityIcon name= "account"color={color} size={26}/>)
        }}/>
    </Tab.Navigator>
  );
}