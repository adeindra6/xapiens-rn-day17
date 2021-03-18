import React, {useState, useEffect} from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    FlatList,
    Alert,
} from 'react-native';
import axios from 'axios';
import {AuthConsumer} from '@contexts/auth';

const ProductComponent = (props) => {
    const [product, setProduct] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    const {token} = AuthConsumer();
    const {action} = props;

    const getProductsData = async () => {
        await axios.get(`http://simple-wms.herokuapp.com/api/v1/product`, {
            headers: {
                'Authorization': `token ${token}`
            }
        })
        .then(response => {
            setProduct(response.data.data.data);
        })
        .catch((error) => {
            Alert.alert("Error", error);
        });
    };

    useEffect(() => {
        getProductsData();
    }, []);

    const Item = ({item}) => (
        <TouchableOpacity
            style={styles.btn}>
            <Text style={styles.label}>{item.name}</Text>
        </TouchableOpacity>
    );

    const renderItem = ({item}) => {
        return(
            <Item
                item={item}
                onPress={() => {
                    setSelectedId(item.id);
                }}
            />
        );
    };

    return(
        <View>
            <ScrollView>
                <SafeAreaView>
                    <FlatList
                        data={product}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        extraData={selectedId}
                    />
                </SafeAreaView>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    btn: {
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: '#5db075',
        width: '80%',
        alignSelf: 'center',
    },

    label: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
    },
});

export default ProductComponent;