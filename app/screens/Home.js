import * as React from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';
import {TextInputMobi, VioletButton} from '../components/globalComponents';
import {homeScreenStyle} from '../style/homeScreenStyle';

const Card = () => {
  return (
    <View style={homeScreenStyle.cardStyle}>
      <View style={homeScreenStyle.headST}>
        <Image
          source={{uri: 'https://source.unsplash.com/random'}}
          style={homeScreenStyle.imgSt}
        />
        <Text style={homeScreenStyle.heaText}>goDutch .</Text>
      </View>
      <View style={{marginHorizontal: 10, marginVertical: 65}}>
        <TextInputMobi title="Mobile Number" />
      </View>
      <View
        style={{width: '65%', justifyContent: 'center', alignSelf: 'center'}}>
        <VioletButton title="Continue" />
      </View>
    </View>
  );
};

const HomeScreen = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Card props={props} />
    </View>
  );
};

export default HomeScreen;
