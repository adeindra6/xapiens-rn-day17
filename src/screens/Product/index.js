import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import {TitleComponent, ProductComponent} from '@components';
import {AuthConsumer} from '@contexts/auth';

const ProductScreen = (props) => {
    //console.log({props});
    const {navigation} = props;
    const {isLogin} = AuthConsumer();

    return(
        <>
            {isLogin ? (
                <View>
                    <TitleComponent title="Data Products" />
                    <ProductComponent />
                </View>
            ) : (
                <Text>403 Forbidden</Text>
            )}
        </>
    );
};

export default ProductScreen;