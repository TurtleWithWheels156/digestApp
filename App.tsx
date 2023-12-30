import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './app/screens/Login';
import List from './app/screens/List';
import Details from './app/screens/Details';
import { useEffect, useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, User, onAuthStateChanged } from 'firebase/auth';
import { DocumentData, collection, onSnapshot, doc, getDoc } from 'firebase/firestore';
import { FIREBASE_AUTH, FIRESTORE_DB } from './FirebaseConfig';


const Stack = createNativeStackNavigator();

const InsideStack = createNativeStackNavigator();

function InsideLayout () {
  return <InsideStack.Navigator>
    <InsideStack.Screen name='My tōt' component={List}/>
    <InsideStack.Screen name='Details' component={Details}/>
  </InsideStack.Navigator>

}

/*
<View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Login>

      </Login>
      <StatusBar style="auto" />
    </View>
  */

export default function App() {
  console.log("hey");
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user', user);
      setUser(user);
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        { user ? (<Stack.Screen name='Inside' component={InsideLayout} options={{headerShown: false}}/>) : (<Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>)}
        
      </Stack.Navigator>
    </NavigationContainer>
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
