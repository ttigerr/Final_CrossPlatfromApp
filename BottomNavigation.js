import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import components
import { Home } from './components/Home';
import { Save } from './components/Save';

const Tab = createBottomTabNavigator()

// Screen
const HomeScreen = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Save" component={Save}/>
        </Tab.Navigator>
    )
}


// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator >
//         <Tab.Screen name="Home" component={Home}/>
        
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }