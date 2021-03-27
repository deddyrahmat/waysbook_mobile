import React from 'react'

import {View, Text} from 'react-native'

const Profile = (props) => {

  // untuk menghilangkan back arrow di header
  props.navigation.setOptions({
    headerLeft: () => {
      return null;
    },
  })

  return (
    <View>
      <Text>Profile Page</Text>
    </View>
  )
}


export default Profile
