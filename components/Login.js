
import React from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  Image,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';

// components
import InputTextFields from './InputTextFields';

const Login = ({navigation}) => {
  
  navigation.setOptions({    
    headerShown : false,
  })
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <View style={{marginTop : 60, alignItems : 'center', justifyContent:'center'}}>
            <Image source={require('../assets/logo.png')}></Image>
            <Text style={[styles.text, {marginTop : 10, fontSize : 28, fontWeight : 'bold', marginBottom : 60}]}>WaysBook</Text>
          </View>

            {/* Text Field Email */}
            <InputTextFields title="Email"></InputTextFields>
            {/* Text Field Password */}
            <InputTextFields style={{marginTop : 32, marginBottom : 8}} title="Password" isSecure={true}></InputTextFields>

            <Text style={[styles.text, styles.link, { textAlign: "right" }]}>Forgot Password?</Text>

            <TouchableOpacity style={styles.submitContainer} onPress={() => navigation.navigate('Home')}>
              <Text style={[styles.text, {color: "#fff", fontWeight : "600", fontSize : 16}]} >
                Login
              </Text>
            </TouchableOpacity>

            <Text  style={[styles.text, {fontSize : 14, color : "#ABB4BD", textAlign : "center", marginTop:24}]}>
              Don't have an account?
              <Text style={[styles.text, styles.link]} onPress={() => navigation.navigate('RegisterScreen')} >
                Register Now
              </Text>
            </Text>
          
        </View>

        {/* <Button
          title="Go to Details"
          onPress={() => navigation.navigate('RegisterScreen')}
        /> */}
      </ScrollView>
        
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor : "#fff",
    paddingHorizontal : 30
  },
  text: {
    fontFamily: "Avenir Next",
    color: "#1D2029"
  },
  socialButton : {
    flexDirection : "row",
    marginHorizontal : 12,
    paddingVertical: 12,
    paddingHorizontal : 30,
    borderWidth : StyleSheet.hairlineWidth,
    borderColor : "rgba(171, 180, 189, 0.65)",
    borderRadius : 4,
    backgroundColor : "#fff",
    shadowColor : "rgba(171, 180, 189, 0.35)",
    shadowOffset : {width : 0, height:10},
    shadowOpacity : 1,
    shadowRadius : 20,
    elevation : 5
  },
  socialLogo : {
    width : 16,
    height : 16,
    marginRight : 8
  },
  link : {
    color : "#393939",
    fontSize : 14,
    fontWeight : 'bold'
  },
  submitContainer : {
    backgroundColor : "#393939",
    fontSize : 16,
    borderRadius : 4,
    paddingVertical : 12,
    marginTop : 32,
    alignItems : 'center',
    justifyContent : 'center',
    shadowColor : 'rgba(255, 22, 84, 0.24)',
    shadowOffset : {width : 0, height : 9},
    shadowOpacity : 1,
    shadowRadius : 20
  }
})

export default Login
