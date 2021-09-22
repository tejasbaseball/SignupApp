import React, {useState} from 'react';
import { StyleSheet,View,Text,TouchableOpacity } from 'react-native';
export default function LoginSignupButton(customStyle,buttonText,text,onPress)
{
    return(
        <View>
            <Text>{text}</Text>
            <TouchableOpacity onPress={onPress}><Text>{buttonText}</Text></TouchableOpacity>
        </View>
    );
}
const styles=StyleSheet.create({
    container:{
        fontSize:16,
        lineHeight:20,
        flexDirection:"row",
        alignItems:"center",
    },
    text:{
        fontSize:16,
        lineHeight:20
    },
    buttonText:{
        fontWeight:"500",
        fontSize:17,
        lineHeight:20,
        color:"#2B35E0",
        marginLeft:2
    }
})