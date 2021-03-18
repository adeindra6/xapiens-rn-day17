import React, {useState, useEffect} from 'react';
import {
    View,
    StyleSheet,
    Alert,
} from 'react-native';
import axios from 'axios';
import {TitleComponent, LoginComponent} from '@components';
import {AuthConsumer} from '@contexts/auth';

const LoginScreen = (props) => {
    const {navigation} = props;
    const {setUser} = AuthConsumer();

    useEffect(() => {
        navigation.openDrawer();
    }, []);

    async function login(username, password) {
        let status;
        await axios.post(`http://simple-wms.herokuapp.com/api/v1/auth/login`, {
            "data": {
                "username": username,
                "password": password
            }
        }).then((response) => {
            console.log(response.data.status);
            status = response.data.status;            
            setUser(
                true,
                response.data.data.token,
                response.data.data.full_name,
                response.data.data.username,
                response.data.data.email,
                response.data.data.phone_number,
                password
            );
        }).catch((error) => {
            console.log(error);
            Alert.alert("Error", error);
        });
        
        if(status == 'Success') {
            navigation.navigate('Profile');
        }
    }

    return(
        <View style={styles.body}>
            <TitleComponent title="Login" />
            <LoginComponent action={(username, password) => login(username, password)} />
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

export default LoginScreen;