import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { ActivityIndicator } from 'react-native-paper';

const ProductDetailScreen = ({ route }: any) => {

  const [detail, setdetail] = useState<any>({});
  const [loading, setloading] = useState(true)

  let { id } = route.params;


  useEffect(() => {

    axios.get('https://northwind.vercel.app/api/products/' + id)
      .then(res => {
        setdetail(res.data);
        setloading(false);
      })

  }, [])


  return (
    <>
      <ActivityIndicator animating={loading} color='red' />
      {
        loading ? <></> : <View>
          <Text>Id: {id}</Text>
          <Text>Name: {detail.name}</Text>
          <Text>Price: {detail.unitPrice}</Text>
          <Text>Category Id: {detail.categoryId}</Text>
        </View>
      }
    </>

  )
}

export default ProductDetailScreen