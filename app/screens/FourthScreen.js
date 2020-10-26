import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import {FlatList, View, Text, TextInput, Image, StyleSheet} from 'react-native';
import {saveTextSear} from '../redux/actions/userAction';

const FourthScreen = () => {
  const timeSlotsData = useSelector(
    state => state.userReducer.dummyData,
    shallowEqual,
  );

  console.log(timeSlotsData, ' new ');

  const onTextSearched = text => {
    // let staticImages = [];

    // for (let i = 0; i < this.dummyData.length; i++) {
    //   if (
    //     this.dummyData[i].name.includes(text.toLowerCase()) ||
    //     this.dummyData[i].location.includes(text.toLowerCase())
    //   ) {
    //     staticImages.push(this.dummyData[i]);
    //   }
    // }

    // this.setState({
    //   flatListData: staticImages,
    // });
    console.log(text, 'text');
  };

  return (
    <View style={{flex: 1, marginHorizontal: 10}}>
      <Text>Wuhu</Text>
      {renderTextInput(onTextSearched)}
      {renderImagesFlatlist(timeSlotsData)}
    </View>
  );
};

const renderTextInput = searchFun => {
  return (
    <TextInput
      placeholder="Search for image"
      onChangeText={text => searchFun(text)}
    />
  );
};

const renderEachImage = (image, index) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={{uri: image.url}}
        style={styles.imageStyle}
        resizeMode="contain"
      />
      <Text>{image.name}</Text>
      <Text>{image.location}</Text>
    </View>
  );
};

const renderImagesFlatlist = data => {
  return (
    <FlatList
      data={data}
      renderItem={({item, index}) => renderEachImage(item, index)}
    />
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 100,
    width: '100%',
    // marginHorizontal: 20,
    marginVertical: 10,
  },
});

export default FourthScreen;
