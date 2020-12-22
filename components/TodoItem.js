import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import CheckBox from 'react-native-check-box';
//import CheckBox from 'react-native-check-box';

   
    


 
export default function TodoItem({ item, pressHandler, onValueChange }) {
    
    const [checking, setChecking]=useState(false);
    
  

    
    function clickHandler(item){
        if(!checking){
     setChecking(true);
     
        }
    
     else{
      setChecking(false);
     }

    
    
}



    return(
         <TouchableOpacity > 
         <View style={styles.item}>
        <CheckBox  isChecked={checking}  onClick={()=>clickHandler(item)} 
/>
        <Text style={{textDecorationLine: checking ? 'line-through':'none', position:'absolute',top:20,left:40}}>{item.text}</Text>
         <MaterialIcons name='delete' size={18} color='#333' style={{position:'absolute', right:10, top:20}} onPress={()=>pressHandler(item.key)}/>
         
         </View>
         </TouchableOpacity>
     )
    }
    const styles= StyleSheet.create({
   
        item:{
            padding:16,
            marginTop:16,
            borderColor:'#bbb',
            borderWidth:1,
            borderStyle:'dashed',
            borderRadius:10,
            flexDirection:'row',
                    
            
        
        },
        
        })

