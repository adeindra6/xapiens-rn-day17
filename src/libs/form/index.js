import React, {useState} from 'react';

const useForm = (n='', u='', e='', pn='', p='') => {
    const [name, setName] = useState(n);
    const [username, setUsername] = useState(u);
    const [email, setEmail] = useState(e);
    const [phone, setPhone] = useState(pn);
    const [password, setPassword] = useState(p);

    function verifName(text) {
        const reg = /^[A-Za-z\d\s]+$/;
        let verifiedName = reg.test(String(text).toLowerCase());
        return verifiedName;
    }

    function verifUsername(text) {
        const reg = /^[A-Za-z\d\s]+$/;
        if(text !== null) {
            if(text.length >= 6 && text.length <= 20) {
                let verifiedUsername = reg.test(String(text).toLowerCase());
                return verifiedUsername;
            }
            else {
                return false;
            }
        }
    }

    function verifEmail(text) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let verifiedEmail = re.test(String(text).toLowerCase());
        return verifiedEmail;
    }

    function verifPhone(text) {
        let numreg = /^\d+$/;
        if(text !== null) {
            let verifiedPhone = numreg.test(String(text).toLowerCase());
            return verifiedPhone;
        }
        else {
            return false;
        }
    }

    function verifPassword(text) {
        if(text !== null) {
            if(text.length >= 6) {
                return true;
            }
            else {
                return false;
            }
        }
    }

    const Name = () => setName(name);
    const Username = () => setUsername(username);
    const Email = () => setEmail(email);
    const Phone = () => setPhone(phone);
    const Password = () => setPassword(password);

    return{
        Name,
        Username,
        Email,
        Phone,
        Password,
        verifName,
        verifUsername,
        verifEmail,
        verifPhone,
        verifPassword,
    };
};

export default useForm;