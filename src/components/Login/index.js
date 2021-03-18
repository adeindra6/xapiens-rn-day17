import React, {useState} from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet,
    Alert,
} from 'react-native';
import {useForm} from '@libs';

const LoginComponent = (props) => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const {action} = props;

    function usernameHandler(text) {
        console.log("Login Component Username Handler : " + text);
        setUsername(text);
    }

    let {Username, verifUsername} = useForm();
    function validateUsername(username) {
        let verifiedUsername = verifUsername(username);
        return verifiedUsername;
    }

    function passwordHandler(text) {
        console.log("Login Component Password Handler : " + text);
        setPassword(text);
    }

    let { Password, verifPassword } = useForm();
    function validatePassword(password) {
        let verifiedPassword = verifPassword(password);
        return verifiedPassword;
    }

    function actionSubmit() {
        if(validateUsername(username) && validatePassword(password)) {
            action(username, password);
            setUsername('');
            setPassword('');            
        }
        else {
            Alert.alert(
                "Warning", 
                "Pastikan Username memiliki antara 6 dan 20 karakter dan Password setidaknya memiliki 6 karakter!"
            );
        }
    }

    return(
        <View>
            <TextInput
                value={ username }
                placeholder="Username"
                style={ styles.input }
                onChangeText={(text) => {
                    usernameHandler(text);
                }}
            />
            <TextInput
                value={ password }
                placeholder="Password"
                secureTextEntry={true}
                style={ styles.input }
                onChangeText={(text) => {
                    passwordHandler(text);
                }}
            />
            <TouchableOpacity
                style={styles.btn}
                onPress={() => actionSubmit()}>
                <Text style={styles.label}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.link}>
                <Text style={styles.linklabel}>Forgot your password?</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        marginTop: 20,
        width: '90%',
        borderRadius: 10,
        borderColor: '#bdbdbd',
        borderWidth: 1,
        backgroundColor: '#e8e8e8',
        alignSelf: 'center',
    },

    btn: {
        width: '90%',
        height: 50,
        alignSelf: 'center',
        borderRadius: 50,
        backgroundColor: '#5db075',
        marginTop: '30%',
    },

    label: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        color: 'white',
    },

    link: {
        width: '90%',
        height: 50,
        alignSelf: 'center',
        backgroundColor: 'white',
    },

    linklabel: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        color: '#5db075',
    },
});

export default LoginComponent;