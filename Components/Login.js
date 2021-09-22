import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView,TextInput } from 'react-native';
import BasicButton from './BasicButton';
import LoginSignupButton from './LoginSignupButton';
export default function Login()
{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.title}>
                Login
            </Text>
            <View style={styles.form}>
                <Text style={styles.label}>
                    Enter your email address
                </Text>
                <TextInput style={styles.inputField} keyboardType="email-address" placeholder="Email" value={email} 
                onChangeText={(val)=>{
                    setEmail(val);
                }}/>
                <View style={styles.divider}></View>
                <Text style={styles.label}>
                    Enter your password
                </Text>
                <TextInput style={styles.inputField} secureTextEntry placeholder="Password" value={password} 
                onChangeText={(val)=>{
                    setPassword(val);
                }}/>
            </View>
            <BasicButton text="Login" onPress={handleLoginButtonClick} />
            <LoginSignupButton customStyle={styles.signup} text="Dont have an account" buttonText="Signup Here" onPress={handleSignupButtonClick}/>
        </ScrollView>
    );
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        marginTop:60,
        paddingHorizontal:30
    },
    title:{
        fontWeight:"500",
        fontSize:20,
        letterSpacing:0.1,
        color:"#2e2e2e"
    },
    form:{
        marginVertical:35
    },
    label:{
        fontSize:16,
        lineHeight:18,
        color:"#666",
        marginBottom:3
    },
    inputField:{
        fontSize:40,
        borderBottomWidth:1,
        borderBottomColor:"#bfbfbf",
        paddingVertical:6
    },
    divider:{
        paddingVertical:12
    },
    log:{
        textAlign:"center",
        marginVertical:2
    },
    signup:{
        marginTop:40
    },
    buttonContainer:{
        backgroundColor:"#2B35E0",
        borderRadius:8,
        padding:10
    },
    buttonText:{
        fontWeight:"bold",
        fontSize:18,
        color:"#fff",
        textAlign:"center"
    }
})