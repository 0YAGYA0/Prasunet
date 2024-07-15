

import React from 'react';
import type {PropsWithChildren} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import ToDoScreen from './src/screen/ToDoScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

export default function App(){
  return(
    <SafeAreaView>
    <View>
      <ToDoScreen/>
    </View>
    </SafeAreaView> 
  )
}
const styles =  StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})


