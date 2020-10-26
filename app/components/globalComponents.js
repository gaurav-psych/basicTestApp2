import * as React from 'react';
import {View, Text, Button, Image, Pressable, TextInput} from 'react-native';
import {firstScreenStyles} from '../style/firstScreenStyle';
import {secondScreenStyles} from '../style/secondScreenStyles';

export const Header = props => {
  return (
    <View style={firstScreenStyles.topV}>
      <Pressable onPress={props.onPress}>
        <Image
          source={require('../assets/images/arrowleft.png')}
          style={firstScreenStyles.first}
        />
      </Pressable>
      <Text style={firstScreenStyles.tetx}>Chapter 1</Text>
      <View style={firstScreenStyles.bar} />
      <Text style={firstScreenStyles.tetx2}>Random Text</Text>
    </View>
  );
};

export const SecondHeader = props => {
  return (
    <View style={secondScreenStyles.header}>
      <Pressable onPress={props.onPress}>
        <Image
          source={require('../assets/images/chevronleft.png')}
          style={secondScreenStyles.first}
        />
      </Pressable>
      <Text style={secondScreenStyles.tetx}>UX Fundamentals </Text>
    </View>
  );
};

export const WidthButton = props => {
  return (
    <Pressable style={secondScreenStyles.keepL}>
      <Text style={secondScreenStyles.keepLSt}>Keep Learning n</Text>
    </Pressable>
  );
};

export const BottonButtons = props => {
  return (
    <Pressable onPress={props.onPress} style={firstScreenStyles.pressN}>
      <Text style={firstScreenStyles.textStNN}>{props.title}</Text>
    </Pressable>
  );
};

export const TextInputMod = props => {
  return (
    <View
      style={{
        marginHorizontal: 20,
        width: '80%',
        backgroundColor: '#d1d1d1',
        marginVertical: 15,
        borderRadius: 5,
      }}>
      <TextInput
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
        style={{width: '60%'}}
        keyboardType={props.numeric ? 'numeric' : 'default'}
      />
    </View>
  );
};
export const BottomTab = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderTopWidth: 0.5,
      }}>
      <Image
        source={require('../assets/images/arrowleft.png')}
        style={firstScreenStyles.first}
      />
      <Image
        source={require('../assets/images/arrowleft.png')}
        style={firstScreenStyles.first2}
      />
      <Text style={firstScreenStyles.newBotom}>10/10</Text>
      <Image
        source={require('../assets/images/arrowleft.png')}
        style={firstScreenStyles.first}
      />
      <Image
        source={require('../assets/images/arrowleft.png')}
        style={firstScreenStyles.first23}
      />
    </View>
  );
};

export const TextInputMobi = props => {
  return (
    <View>
      <Text style={{marginBottom: 5}}>{props.title}</Text>

      <TextInput
        placeholder={props.title}
        style={{
          borderWidth: 1,
          borderRadius: 5,
          textAlign: 'center',
          borderColor: '#F1F1F1',
        }}
      />
    </View>
  );
};

export const VioletButton = props => {
  return (
    <Pressable style={secondScreenStyles.keepLBut}>
      <Text style={secondScreenStyles.keepLSt}>{props.title}</Text>
    </Pressable>
  );
};
