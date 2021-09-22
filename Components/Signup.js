import React, { useState } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import BasicButton from './BasicButton';
import LoginSignupButton from './LoginSignupButton';
import ValidationComponent from 'react-native-form-validator';
export default class Signup extends ValidationComponent {
    constructor(props)
    {
        super(props);
        this.state = { name:"", email:"", ageGroup:"", password:"", confirmPassword:"" };
    }
    handleRegisterButtonClick = () => {

    };
    handleSignupButtonClick = () => {

    };
    render()
    {
        return (
            <ScrollView>
                <Text>
                    Signup
                </Text>
                <View>
                    <Text>
                        Enter your name
                    </Text>
                    <TextInput placeholder="Name" value={name}
                    />
                    <Text >
                        Enter your email address
                    </Text>
                    <TextInput keyboardType="email-address" placeholder="Email" value={email}
                    />
                    <Text>
                        Enter your age group
                    </Text>
                    <TextInput placeholder="Age Group" value={ageGroup}
                    />
                    <Text style={styles.label}>
                        Enter your password
                    </Text>
                    <TextInput placeholder="Password" value={password}
                    />
                    <Text>
                        Confirm your password
                    </Text>
                    <TextInput  placeholder="Confirm" value={confirm}
                    />
                </View>
                <BasicButton text="Login" onPress={handleLoginButtonClick} />
                <LoginSignupButton text="Dont have an account" buttonText="Signup Here" onPress={handleSignupButtonClick} />
            </ScrollView>
        );
    }
}