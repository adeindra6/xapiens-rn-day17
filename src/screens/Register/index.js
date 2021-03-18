import React, {useState, useEffect} from 'react';
import {
    View,
    StyleSheet,
    Alert,
} from 'react-native';
import axios from 'axios';
import {TitleComponent, RegisterComponent} from '@components';
import {AuthConsumer} from '@contexts/auth';

const RegisterScreen = (props) => {
    //console.log({props});
    const {navigation} = props;
    const {setUser} = AuthConsumer();

    useEffect(() => {
        navigation.openDrawer();
    }, []);

    async function register(name, username, email, phone, password) {
        let status;
        await axios.post(`http://simple-wms.herokuapp.com/api/v1/auth/signup`, {
            "data": {
                "full_name": name,
                "username": username,
                "password": password,
                "phone_number": phone,
                "email": email
            }
        }).then((response) => {
            console.log(response.data.status);
            status = response.data.status;
            let token = "temptoken";
            setUser(
                false,
                token,
                name,
                username,
                email,
                phone,
                password
            );
        }).catch((error) => {
            console.log(error);
            Alert.alert("Error", error);
        });

        if(status == 'Success') {
            navigation.navigate('Login');
        }
    }

    return(
        <View style={styles.body}>
            <TitleComponent title="Sign Up" />
            <RegisterComponent action={(name, username, email, phone, password) => register(name, username, email, phone, password)} />
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'white',
    },

    title: {
        fontSize: 32,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default RegisterScreen;