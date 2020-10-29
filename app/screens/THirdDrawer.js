import React from 'react';
import {FlatList, View, Text, TextInput, Image, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class ThirdDrawer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flatListData: this.dummyData,
      textSearched: '',
      age18: 0,
      age25: 0,
      age25P: 0,
      avGrpSi: 0,
      profC: 0,
      studC: 0,
    };
  }

  componentDidMount() {
    this._unsubscribe0912 = this.props.navigation.addListener('focus', () => {
      this.getLatestData();
    });
  }

  componentWillUnmount() {
    this._unsubscribe0912();
  }

  getLatestData = () => {
    let {userBookingData} = this.props.userReducer;
    let age1318 = 0;

    let age25 = 0;
    let age25P = 0;
    let avGrpSi = 0;
    let profC = 0;
    let studC = 0;

    let data = userBookingData.map(eachData => {
      if (eachData.age > 13 && eachData.age <= 18) {
        age1318++;
      }
      if (eachData.age > 18 && eachData.age <= 25) {
        age25++;
      }
      if (eachData.age > 25) {
        age25P++;
      }

      avGrpSi += eachData.guests;

      if (eachData.profession == 'Employed') {
        profC++;
      }
      console.log(eachData.profession, 'prof');
      if (eachData.profession == 'Student') {
        studC++;
      }
    });

    let totalAvergaeSize = avGrpSi / userBookingData.length;
    console.log(totalAvergaeSize, 'av');
    setTimeout(() => {
      this.setState({
        age18: age1318,
        age25: age25,
        age25P: age25P,
        avGrpSi: totalAvergaeSize,
        profC: profC,
        studC: studC,
      });
    }, 100);
  };

  render() {
    const {age18, age25, age25P, avGrpSi, profC, studC} = this.state;
    return (
      <View style={{flex: 1, marginHorizontal: 30, marginVertical: 20}}>
        <Text style={{fontSize: 20}}>Age By Group</Text>
        <Text>13-18 : {age18}</Text>
        <Text>18-25 : {age25}</Text>
        <Text>25> : {age25P}</Text>
        <Text style={{fontSize: 16, marginVertical: 20}}>
          Average Guests : {avGrpSi}
        </Text>
        <Text style={{fontSize: 16, marginVertical: 5}}>
          Professional Count: {profC}
        </Text>
        <Text style={{fontSize: 16, marginVertical: 5}}>
          Student Count : {studC}
        </Text>
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

export default connect(mapStateToProps, null)(ThirdDrawer);

const styles = StyleSheet.create({
  imageStyle: {
    height: 100,
    width: '100%',
    // marginHorizontal: 20,
    marginVertical: 10,
  },
});
