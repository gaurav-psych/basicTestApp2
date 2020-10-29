import React, {Component} from 'react';
import {Text, View, FlatList, TextInput, Pressable} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {saveEachUserObj} from '../redux/actions/userAction';

class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      todoData: '',
    };
  }

  componentDidMount() {
    this._unsubscribe091 = this.props.navigation.addListener('focus', () => {
      this.setState({
        todoList: this.props.userReducer.userBookingData,
      });
    });
  }

  componentWillUnmount() {
    this._unsubscribe091();
  }

  addText = text => {
    // this.setState({
    //   todoData: text,
    // });

    let newUserArr = this.props.userReducer.userBookingData.filter(data =>
      data.name.includes(text),
    );
    this.setState({
      todoList: newUserArr,
    });
  };

  deleteThatTodo = (data, index) => {
    let newTodoList = this.state.todoList.filter(eachItem => eachItem != data);

    this.setState({
      todoList: newTodoList,
    });
  };

  onEachTodoPress = data => {
    this.props.saveEachUserObj(data);
    this.props.navigation.navigate('ExtraStack');
  };

  renderEachTodo = (data, index) => {
    // console.log(data, ' each todo data');
    return (
      <Pressable
        style={{
          flexDirection: 'row',
          borderRadius: 5,
          borderWidth: 1,
          borderColor: 'black',
          justifyContent: 'space-between',
          marginVertical: 10,
        }}
        key={data}
        onPress={() => this.onEachTodoPress(data)}>
        <Text style={{marginLeft: 10, marginVertical: 5}}>{data.name}</Text>
        <Text style={{marginLeft: 10, marginVertical: 5}}>{data.age}</Text>
        {/* <Pressable onPress={() => this.deleteThatTodo(data, index)}>
          <Text style={{color: 'red', marginRight: 10, marginVertical: 5}}>
            Delete
          </Text>
        </Pressable> */}
      </Pressable>
    );
  };

  addEachTodo = () => {
    // console.log(this.state.todoData, ' data');
    let newTodo = [...this.state.todoList, this.state.todoData];
    this.setState({
      todoList: newTodo,
      todoData: '',
    });
  };

  render() {
    const {todoList} = this.state;
    let todoSizeStatement = `There are ${todoList.length} todos`;
    return (
      <View style={{flex: 1, marginHorizontal: 10, marginVertical: 10}}>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            placeholder="Search users"
            onChangeText={this.addText}
            style={{width: '50%', borderColor: '#ccc', borderWidth: 0.5}}
            // value={this.state.todoData}
          />
          {/* <Pressable
            style={{
              backgroundColor: 'blue',
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={this.addEachTodo}>
            <Text style={{color: '#fff', marginHorizontal: 10}}>Search</Text>
          </Pressable> */}
        </View>
        <Text style={{fontSize: 18}}>User List</Text>
        {/* <Text style={{fontSize: 12, alignSelf: 'flex-end'}}>
          {todoSizeStatement}
        </Text> */}
        <FlatList
          data={todoList}
          renderItem={({item, index}) => this.renderEachTodo(item, index)}
        />
      </View>
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
      saveEachUserObj,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen);
