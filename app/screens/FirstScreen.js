import * as React from 'react';
import {
  View,
  Text,
  Button,
  Image,
  ScrollView,
  Pressable,
  Platform,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  BackHandler,
  Alert,
} from 'react-native';
import {TextInputMod, BottonButtons} from '../components/globalComponents';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {saveSlotsArr} from '../redux/actions/userAction';
import {showToaster} from '../components/toast';
import ImagePicker from 'react-native-image-crop-picker';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

class FirstScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      phone: '',
      profession: 'Employed',
      guests: 0,
      locality: '',
      age: '',

      address: '',
      showPicker: false,
      dob: '',
    };
  }
  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.backAction,
    );
    this._unsubscribe09 = this.props.navigation.addListener('focus', () => {
      this.setState({
        name: '',
        phone: '',
        profession: '',
        guests: 0,
        locality: '',
        age: '',

        address: '',
        showPicker: false,
        dob: '',
      });
    });
  }

  onTextCHange = (text, type) => {
    this.setState({
      [type]: text,
    });
  };

  onImagePick = async () => {
    ImagePicker.openPicker({
      multiple: true,
      cropping: false,
      mediaType: 'photo',
    })
      .then(images => {})
      .catch(err => {});
  };

  onPress = () => {
    this.setState({
      showPicker: true,
    });
  };

  onSaveUser = () => {
    const {name, age, locality, dob, profession, guests, address} = this.state;
    console.log(profession, ' pro');
    let user = {
      name,
      age,
      locality,
      dob,
      profession,
      guests,
      address,
    };
    const {userBookingData} = this.props.userReducer;
    let newArr = [...userBookingData, user];
    this.props.saveSlotsArr(newArr);
    this.setState({
      name: '',
      phone: '',
      profession: '',
      guests: 0,
      locality: '',
      age: '',

      address: '',
      showPicker: false,
      dob: '',
    });
  };

  onChange = (event, selectedDate) => {
    const currentDate = selectedDate || this.state.dob;
    this.setState({
      showPicker: false,
      dob: currentDate,
    });
  };

  componentWillUnmount() {
    this.backHandler.remove();
    this._unsubscribe09();
  }

  backAction = () => {
    Alert.alert('Hold on!', 'Are you sure you want to go back?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  };
  render() {
    const {phone, name, address, locality, age, dob} = this.state;
    return (
      <KeyboardAvoidingView
        style={{flex: 1, alignItems: 'center'}}
        keyboardVerticalOffset={Platform.OS == 'ios' ? '10' : '-300'}
        behavior="height">
        <TextInputMod
          placeholder="Enter name"
          value={name}
          onChangeText={text => this.onTextCHange(text, 'name')}
          numeric={false}
        />
        <TextInputMod
          placeholder="Enter age"
          value={age}
          onChangeText={text => this.onTextCHange(text, 'age')}
          numeric={true}
        />
        <Pressable
          style={{backgroundColor: '#ccc', borderRadius: 20}}
          onPress={this.onPress}>
          <Text style={{padding: 10}}>
            {dob ? dob.toDateString() : 'Select Date of Birth'}
          </Text>
        </Pressable>
        <Picker
          selectedValue={this.state.profession}
          style={{height: 50, width: '80%', borderColor: '#ccc'}}
          onValueChange={(itemValue, itemIndex) => {
            this.setState({profession: itemValue});
          }}>
          <Picker.Item label="Select" value="Select" />
          <Picker.Item label="Employed" value="Employed" />
          <Picker.Item label="Student" value="Student" />
        </Picker>
        <TextInputMod
          placeholder="Enter locality"
          value={locality}
          onChangeText={text => this.onTextCHange(text, 'locality')}
          numeric={false}
        />
        <Picker
          selectedValue={this.state.guests}
          style={{height: 50, width: '80%', borderColor: '#ccc'}}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({guests: itemValue})
          }>
          <Picker.Item label="0 guests" value={0} />
          <Picker.Item label="1 guest" value={1} />
          <Picker.Item label="2 guests" value={2} />
        </Picker>
        <TextInputMod
          placeholder="Enter address"
          value={address}
          onChangeText={text => this.onTextCHange(text, 'address')}
          numeric={false}
        />
        {this.state.showPicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={this.state.dob ? this.state.dob : new Date()}
            mode={'date'}
            is24Hour={true}
            display="default"
            onChange={this.onChange}
          />
        )}

        <BottonButtons title="Save User" onPress={this.onSaveUser} />
        <View style={{height: 40}} />
        {/* <BottonButtons title="Open Image selector" onPress={this.onImagePick} /> */}
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => {
  const {userReducer} = state;
  return {userReducer};
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      saveSlotsArr,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(FirstScreen);
