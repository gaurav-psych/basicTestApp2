import React, {Component} from 'react';
import {Text, View, FlatList, TextInput, Pressable} from 'react-native';

export default class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      todoData: '',
    };
  }

  addText = text => {
    this.setState({
      todoData: text,
    });
  };

  deleteThatTodo = (data, index) => {
    let newTodoList = this.state.todoList.filter(eachItem => eachItem != data);

    this.setState({
      todoList: newTodoList,
    });
  };

  renderEachTodo = (data, index) => {
    // console.log(data, ' each todo data');
    return (
      <View
        style={{
          flexDirection: 'row',
          borderRadius: 5,
          borderWidth: 1,
          borderColor: 'black',
          justifyContent: 'space-between',
          marginVertical: 10,
        }}
        key={data}>
        <Text style={{marginLeft: 10, marginVertical: 5}}>{data}</Text>
        <Pressable onPress={() => this.deleteThatTodo(data, index)}>
          <Text style={{color: 'red', marginRight: 10, marginVertical: 5}}>
            Delete
          </Text>
        </Pressable>
      </View>
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
            placeholder="add todos"
            onChangeText={this.addText}
            style={{width: '50%'}}
            value={this.state.todoData}
          />
          <Pressable
            style={{
              backgroundColor: 'blue',
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={this.addEachTodo}>
            <Text style={{color: '#fff', marginHorizontal: 10}}>Add</Text>
          </Pressable>
        </View>
        <Text style={{fontSize: 18}}>Todo List</Text>
        <Text style={{fontSize: 12, alignSelf: 'flex-end'}}>
          {todoSizeStatement}
        </Text>
        <FlatList
          data={this.state.todoList}
          renderItem={({item, index}) => this.renderEachTodo(item, index)}
        />
      </View>
    );
  }
}
