import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
import { MaterialIcons } from '@expo/vector-icons';


export default function App() {
  
 const [todos, setTodos] =useState([
   {text:'buy coffee', key:'1'},
   
 ]);
  const clearEverything=()=>{
    Alert.alert('DELETE ALL!','Are you sure you want to delete the entire list?',[
      {text:'Yes', onPress: ()=> setTodos('')},
    {text:'Cancel', onPress:()=>console.log('alert')}]);
  }
 const pressHandler=(key) =>{
   setTodos((prevTodos) =>{
    return prevTodos.filter(todo => todo.key != key);
   });
 }
 const submitHandler = (text) =>{
   if(text.length > 3){
   setTodos((prevTodos) =>{
      return [
        {text: text, key:Math.random().toString()},
        ...prevTodos
      ]
   })
  
 }
 else{
   Alert.alert('OOPS!','Items must be over 3 chars long',[
   {text:'Understood', onPress: ()=> console.log('alert')}]);
 }
}




  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
    }}>
    <View style={styles.container}>
      <Header/>
      <MaterialIcons name="clear-all" onPress={()=>clearEverything()} size={24} color="black" style={{position:'relative', textAlign:'right', right:20}}  />

    <View style={styles.content}>
      <AddTodo submitHandler={submitHandler}/>
  {/***form */}
  <View style={styles.list}>
    <FlatList 
    data ={todos}
    renderItem={({item})=>(
      <TodoItem item={item} pressHandler={pressHandler}/>

    )}
    />
  </View>
    </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
  content:{
    flex:1,
    padding:40
  },
  list:{
    flex:1,
    margin:20,

  }
 
});
