import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableHighlight
} from 'react-native';

import NumberFormat from 'react-number-format';

// api
import axios from "axios"

import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


const ENTRIES1 = [
  {
    title: 'Beautiful and dramatic Antelope Canyon',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/UYiroysl.jpg',
  },
  {
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
  {
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://i.imgur.com/MABUbpDl.jpg',
  },
  {
    title: 'Acrocorinth, Greece',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
  },
  {
    title: 'The lone tree, majestic landscape of New Zealand',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
  },
];

const {width: screenWidth} = Dimensions.get('window');


const Home = (props) => {

  // untuk menghilangkan back arrow di header
  // props.navigation.setOptions({
  //   headerLeft: () => {
  //     return null;
  //   },
  // })

  const carouselRef = useRef(null);
  const [entries, setEntries] = useState([]);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);


  // const [itemBook, setItemBook] = useState([]);

  // const books = async () => {
  //   try {
  //       const response = await axios.get("https://waysbook.herokuapp.com/api/v1/books");
  //       if (response.status == 200) {
  //         setItemBook(response.data.data.promoBooks);                   
  //       }
  //   } catch (err) {
  //       console.log(err);
  //   }
  // }

  // useEffect(() => {
  //     books();
  // }, [])

  // const goForward = () => {
  //   carouselRef.current.snapToNext();
  // };

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);


  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{uri: item.illustration}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Text style={styles.titleCarousel} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.contentCarousel}>
            {/* <TouchableOpacity onPress={goForward}>
              <Text>go to next slide</Text>
            </TouchableOpacity> */}
            <Carousel
              ref={carouselRef}
              sliderWidth={screenWidth}
              sliderHeight={screenWidth}
              itemWidth={screenWidth - 60}
              data={entries}
              renderItem={renderItem}
              hasParallaxImages={true}
            />
          </View>
        
          <View style={styles.listBook}>
            <Text style={styles.titleListBook}>List Book</Text>
              <View style={styles.dataBook}>
                <Image
                  style={{ width: 200, height: 200, marginBottom : 18 }}
                  source={{ uri: 'https://picsum.photos/700' }}
                />
                <Title style={styles.titleBook}>Card title</Title>
                <Paragraph style={styles.descBook}>Card content</Paragraph>
                <NumberFormat 
                  value='50000' 
                  displayType={'text'} 
                  thousandSeparator={true} 
                  prefix={'Rp. '} 
                  renderText={
                      value => <Text style={styles.priceBook}>{value}</Text>
                  } />
              </View>
              <View style={styles.dataBook}>
              <Image
                style={{ width: 200, height: 200, marginBottom : 18 }}
                source={{ uri: 'https://picsum.photos/700' }}
              />
              <Title style={styles.titleBook}>Card title</Title>
              <Paragraph style={styles.descBook}>Card content</Paragraph>
              <NumberFormat 
                value='50000' 
                displayType={'text'} 
                thousandSeparator={true} 
                prefix={'Rp. '} 
                renderText={
                    value => <Text style={styles.priceBook}>{value}</Text>
                } />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentCarousel : {
    marginTop : 20,
    marginBottom : 60
  },
  titleCarousel : {
    fontSize : 24,
    fontWeight : '700',
    fontFamily : 'times'
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'contain',
    marginBottom : 18
  },

  listBook : {
    marginRight : 30,
    marginLeft : 30
  },
  
  titleListBook : {
    color : "black",
    fontWeight : 'bold',
    fontSize : 36,
    fontFamily : 'times',
    marginBottom : 40
  },

  imageBook : {
    marginBottom : 18
  },

  dataBook : {
    marginBottom : 18
  },

  titleBook : {
    fontSize : 24,
    fontWeight : '700',
    fontFamily : "times"
  },

  descBook : {
    fontWeight : '400',
    fontSize : 14,
    color : '#929292',
    marginBottom : 12
  },

  priceBook : {
    color: '#44B300',
    fontSize : 14,
    fontWeight : '800'
  }

});