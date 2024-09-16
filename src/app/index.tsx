import { View, Text } from 'react-native'
import React from 'react'
import ProductComponent from '../components/ProductComponent'
import ProductList from '../components/ProductList'

const index = () => {
    return (
        <View style={{ padding: 0 }}>

            <ProductList />

        </View>
    )
}

export default index