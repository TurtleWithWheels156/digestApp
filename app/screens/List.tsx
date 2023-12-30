import { View, Text, StyleSheet, Button, Image } from 'react-native'
import React from 'react'
import { NavigationProp, Route } from '@react-navigation/native'
import { useEffect, useState } from 'react';
import { DocumentData, collection, onSnapshot, doc, getDoc } from 'firebase/firestore';
import { FIREBASE_AUTH, FIRESTORE_DB } from '../../FirebaseConfig';

interface RouterProps {
    navigation: NavigationProp<any, any>;
}

const Ingredient = ({name, quantity, unit, source} : {name: string, quantity: string, unit: string, source: string}) => {
  return (
    <View>
            <Text >{name}</Text>
            <Text >{quantity} {unit}</Text>
            <Image
                style={{width: 50, height: 50}} 
                source={{
                uri: source,
                }}
            />
    </View>
  )
}

const List = ({navigation} : RouterProps) => {
  //test firestore apis
  const [name, setName] = useState<string>('');
  const [tot, setTot] = useState<any>([]);
  const testBindle = async() => {
  try {
        const response = doc(FIRESTORE_DB, "test", "1");
        const docSnap = await getDoc(response);
        console.log(response);
        console.log(docSnap.data());
        if(docSnap.data() != null) {
          // Optional chaining
          setName(docSnap?.data()?.name);
          // Rename bindle document
          setTot(docSnap?.data()?.bindle);
          console.log(name);
          console.log(tot);
        }
    } catch(error: any) {
        console.log(error);
    } finally {
    }
  }
  useEffect(() => {
    testBindle();
  }, []);

  //end test
  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.navigate('Details')} title='Open Details'/>
      <Button onPress={() => FIREBASE_AUTH.signOut()} title='Logout'/>
      {tot.map((item: { name: string; quantity: string; unit: string; receipt: string; key: any})=> <Ingredient key={item.key} name={item.name} quantity={item.quantity} unit={item.unit} source={item.receipt}/>)}
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