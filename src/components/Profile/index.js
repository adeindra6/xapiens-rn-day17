import React, {useState, useEffect} from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Image,
} from 'react-native';
import {AuthConsumer} from '@contexts/auth';

const ProfileComponent = (props) => {
    const {fullname, username, email, phonenumber, password} = AuthConsumer();
    const {action} = props;

    function actionSubmit() {
        action();
    }

    return(
        <>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.btnlogout}>
                    <Text style={styles.label}>Logout</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Profile</Text>
                <Image style={styles.img} source={require('../../images/profile.png')} />
            </View>
            <View style={styles.body}>
                <Text style={styles.info}>Name: {fullname}</Text>
                <Text style={styles.info}>Username: {username}</Text>
                <Text style={styles.info}>E-mail: {email}</Text>
                <Text style={styles.info}>Phone Number: {phonenumber}</Text>
                <Text style={styles.info}>Password: {password}</Text>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => actionSubmit()}>
                    <Text style={styles.label}>See Products</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: '#5db075',
        alignItems: 'center',
    },

    body: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },

    title: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
    },

    btnlogout: {
        width: '30%',
        height: 50,
        borderRadius: 50,
        backgroundColor: '#5db075',
        marginLeft: '70%',
    },

    img: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        overflow: "hidden",
    },

    btn: {
        width: '30%',
        height: 50,
        borderRadius: 50,
        marginTop: '10%',
        backgroundColor: '#5db075',
    },

    label: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        color: 'white',
    },

    info: {
        fontSize: 18,
    },
});

export default ProfileComponent;