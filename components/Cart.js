import React from 'react'

import {View, Text} from 'react-native'

const Cart = (props) => {

  // untuk menghilangkan back arrow di header
  props.navigation.setOptions({
    headerLeft: () => {
      return null;
    },
  })

  return (
    <View>
      <Text>Cart Page</Text>
    </View>
  )
}


export default Cart
