import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { NavigationProp, Route } from '@react-navigation/native'
import { FIREBASE_AUTH } from '../../FirebaseConfig'

interface RouterProps {
    navigation: NavigationProp<any, any>;
}

const List = ({navigation} : RouterProps) => {
  return (
    <View style={styles.container}>
      <Text>List</Text>
      <Button onPress={() => navigation.navigate('Details')} title='Open Details'/>
      <Button onPress={() => FIREBASE_AUTH.signOut()} title='Logout'/>
    </View>
  )
}



export default List;

const styles = StyleSheet.create({
    container: {
      marginHorizontal: 20,
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    input: {
        marginVertical : 4,
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff'
    }
  });