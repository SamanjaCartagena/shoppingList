import React,{useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button,Form} from 'react-native';
export default function AddTodo({submitHandler}){
    const [text,setText] = useState('');
    const changeHandler =(val) =>{
        setText(val);
    }
    const clear=()=>{
      setText('')
    }
    const clearEverything =()=>{
    }
  
    return (
        <View>
            

            <TextInput
            style={styles.input}
           placeholder='new item...'
           value={text}
           onChangeText={changeHandler}

/>
<Button style={{borderColor:'black'}} onPress={() =>{submitHandler(text);clear();}}title='Add List' color='coral' />

        </View>
    )
}
const styles = StyleSheet.create({
  input:{
      marginBottom:10,
      paddingHorizontal:8,
      paddingVertical:6,
      borderBottomWidth:1,
      borderBottomColor:'#ddd'

  }

})