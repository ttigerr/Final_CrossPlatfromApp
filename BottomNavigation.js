import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'

// Import components
import { Home } from './components/Home';
import { ItemLists } from './components/ItemLists';
import { Profile } from './components/Profile';
import { Logout } from './components/Logout';

// Import database
import { firebaseConfig } from './Config';
import {initializeApp,} from 'firebase/app'
import { getAdditionalUserInfo, getAuth, onAuthStateChanged} from "firebase/auth"
import { initializeFirestore, getFirestore, setDoc, doc, addDoc, collection, query, where, onSnapshot } from 'firebase/firestore'

// initialise the assets from database
const FBapp = initializeApp( firebaseConfig)
const FSdb = initializeFirestore(FBapp, {useFetchStreams: false})
const FBauth = getAuth()

const Tab = createBottomTabNavigator()


export function BottomNavigation (props) {
    const[ auth, setAuth ] = useState()
    const[ user, setUser ] = useState()
    const [ data, setData ] = useState()

  // useEffect( () => {
  //   if(!data) {
  //     props.get()
  //     .then( (response) => {
  //       setData( response )
  //     })
  //     //.catch( (error) => console.log(error) )
  //   }
  // }, [data] )


  return (
    <Tab.Navigator >
        <Tab.Screen name="Browse" 
            options={{headerTitleStyle: {fontSize: 30}, headerTitleAlign: 'left',
            tabBarActiveTintColor: '#f08f11',
            tabBarIcon: ({color, size}) => (<MaterialCommunityIcon name= "home"color={color} size={size}/>)
        }}>
            { (props) => <Home {...props}/> }
        </Tab.Screen>
        <Tab.Screen name="Lists" 
            options={{headerTitleStyle: {fontSize: 30}, headerTitleAlign: 'left',
            tabBarActiveTintColor: '#f08f11',
            tabBarIcon: ({color, size}) => (<MaterialCommunityIcon name= "format-list-bulleted"color={color} size={size}/>)
        }}>
            { (props) => <ItemLists {...props} /> }
        </Tab.Screen>
        <Tab.Screen name="Profile" 
            options={{headerTitleStyle: {fontSize: 30}, headerTitleAlign: 'left',
            tabBarActiveTintColor: '#f08f11',
            //headerRight: (props) => <Logout {...props} handler={LogoutHandler} user={user} />,
            tabBarIcon: ({color, size}) => (<MaterialCommunityIcon name= "account"color={color} size={size}/>)
        }}>
            { (props) => <Profile {...props}/> }
        </Tab.Screen>
    </Tab.Navigator>
  );
}