import React, { useState } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import BasicButton from './BasicButton';
import LoginSignupButton from './LoginSignupButton';
import ValidationComponent from 'react-native-form-validator';
import {Picker} from 'react-native-picker/Picker';
export default class Signup extends ValidationComponent {
    constructor(props){
        super(props);
        this.state={name:"", email:"", ageGroup:"",password:"", confirmPassword:""};
    }
    handleRegisterButtonClick=()=>{
        this.validate({
            name:{
                minLength:3,
                maxLength:25,
                required:true
            },
            email:{
                email:true,
                required:true
            },
            ageGroup:{
                required:true
            },
            password:{
                required:true
            },
            confirmPassword:{
                required:true,
                equalPassword:this.state.password
            }
        })
        console.log("hello");
    };
    handleSignupButtonClick=()=>{
        console.log("hello");
    }
    render()
    {
        return(
            <ScrollView style={styles.container}>
                <Text style={styles.title}>Signup</Text>
                <View style={styles.form}>
                    <Text style={styles.label}>Name</Text>
                    <TextInput style={styles.inputField} placeholder="Enter your name" value={this.state.name}></TextInput>
                    <View></View>
                    <Text style={styles.label}>Email Address</Text>
                    <TextInput style={styles.inputField} keyboardType="email-address" placeholder="Enter your email" value={this.state.email}></TextInput>
                    <View></View>
                    <Text style={styles.label}>Age Group</Text>
                    <Picker style={styles.inputField} selectedValue={this.state.ageGroup} onValueChange={(ageGroup,itemIndex)=>{
                        this.setState({ageGroup});
                    }}>
                        <Picker.Item label="" value=""/>
                        <Picker.Item laabel="1-4" value="1-4"/>
                        <Picker.Item label="5-12" value="5-12"/>
                        <Picker.Item label="13-18" value="13-18"/>
                    </Picker>
                    <View></View>
                    <Text style={styles.label}>Password</Text>
                    <TextInput style={styles.inputField} keyboardType="password" secureTextEntry placeholder="Enter your password" value={this.state.password}></TextInput>
                    <View></View>
                    <Text style={styles.label}>Password</Text>
                    <TextInput style={styles.inputField} keyboardType="password" secureTextEntry placeholder="Confirm your password" value={this.state.confirmPassword}></TextInput>
                    <View></View>
                </View>
                <BasicButton text="Register" onPress={this.handleRegisterButtonClick}/>
                <LoginSignupButton text="Signup" onPress={this.handleSignupButtonClick}/>
            </ScrollView>
        );
    }
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
    }
});