import React from 'react';
import {FlatList, View, Text, TextInput, Image, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class UserDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flatListData: this.dummyData,
      textSearched: '',
    };
  }

  render() {
    const {
      name,
      age,
      locality,
      dob,
      profession,
      guests,
      address,
    } = this.props.userReducer.eachUserObject;
    return (
      <View style={{flex: 1, marginHorizontal: 10}}>
        <Text>Name : {name}</Text>
        <Text>locality : {locality}</Text>
        <Text>profession : {profession}</Text>
        <Text>guests : {guests}</Text>
        <Text>address : {address}</Text>
        <Text>age : {age}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const {userReducer} = state;
  return {userReducer};
};

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(
//     {
//       saveSlotsArr,
//     },
//     dispatch,
//   );

export default connect(mapStateToProps, null)(UserDetails);

const styles = StyleSheet.create({
  imageStyle: {
    height: 100,
    width: '100%',
    // marginHorizontal: 20,
    marginVertical: 10,
  },
});
