import React from 'react';
import {Text} from 'react-native';
import {ProfileComponent} from '@components';
import {AuthConsumer} from '@contexts/auth';

const ProfileScreen = (props) => {
    //console.log(props);
    const {navigation} = props;
    const {isLogin} = AuthConsumer();

    function seeProduct() {
        navigation.navigate('Product');
    }

    return(
        <>
            {isLogin ? (
                <ProfileComponent action={() => seeProduct()} />
            ) : (
                <Text>403 Forbidden</Text>
            )}
        </>
    );
};

export default ProfileScreen;