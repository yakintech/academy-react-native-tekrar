import { View, Text, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, List } from 'react-native-paper'
import { useIsFocused } from '@react-navigation/native'

const ProductListScreen = ({ navigation, route }: any) => {

  const [products, setproducts] = useState<Product[]>([])
  const isFocused = useIsFocused();


  useEffect(() => {

    if (isFocused) {      
      
      axios.get('https://northwind.vercel.app/api/products')
        .then(res => {
          setproducts(res.data);
        })

    }

  }, [isFocused])


  const renderItem = ({ item }: any) => {
    return <Pressable onPress={() => navigation.navigate('ProductDetail', { id: item.id })}>
      <List.Item
        title={item.name}
        description={item.unitPrice}
        left={props => <List.Icon icon="folder" />}
      />
    </Pressable>
  }

  return (<>
    <Button onPress={() => navigation.navigate('AddProduct')}>Add Product</Button>
    <FlatList
      data={products}
      renderItem={renderItem}
    />
  </>
  )
}

export default ProductListScreen


interface Product {
  name: string
  id: number
  categoryId: number
  unitPrice: number
}