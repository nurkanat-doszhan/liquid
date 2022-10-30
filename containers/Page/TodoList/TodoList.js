import 'TodoList.css';
import React, { useState } from 'react';
import Parse from 'parse/react-native'
// import {
//   CheckOutlined,
//   CloseOutlined,
//   PlusOutlined,
//   RedoOutlined,
// } from '@ant-design/icons';
import { IconComponentProvider, Icon, Text } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Button, ListItem, TextInput } from '@react-native-material/core';
import { View } from 'react-native';

export const TodoList = () => {
  // State variables
  const [readResults, setReadResults] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState('');

  // Functions used by the screen components
  const createTodo = async function () {
    // This value comes from a state variable
    const newTodoTitleValue = newTodoTitle;
    // Creates a new Todo parse object instance
    let Todo = new Parse.Object('Todo');
    Todo.set('title', newTodoTitleValue);
    Todo.set('done', false);
    // After setting the to-do values, save it on the server
    try {
      await Todo.save();
      // Success
      alert('Success! To-do created!');
      // Refresh to-dos list to show the new one (you will create this function later)
      readTodos();
      return true;
    } catch (error) {
      // Error can be caused by lack of Internet connection
      alert(`Error! ${error.message}`);
      return false;
    }
  };

  const readTodos = async function () {
    // Reading parse objects is done by using Parse.Query
    const parseQuery = new Parse.Query('Todo');
    try {
      let todos = await parseQuery.find();
      // Be aware that empty or invalid queries return as an empty array
      // Set results to state variable
      setReadResults(todos);
      return true;
    } catch (error) {
      // Error can be caused by lack of Internet connection
      alert(`Error! ${error.message}`);
      return false;
    }
  };

  const updateTodo = async function (todoId, done) {
    // Create a new to-do parse object instance and set todo id
    let Todo = new Parse.Object('Todo');
    Todo.set('objectId', todoId);
    // Set new done value and save Parse Object changes
    Todo.set('done', done);
    try {
      await Todo.save();
      // Success
      alert('Success! To-do updated!');
      // Refresh todos list
      readTodos();
      return true;
    } catch (error) {
      // Error can be caused by lack of Internet connection
      alert(`Error! ${error.message}`);
      return false;
    }
  };

  const deleteTodo = async function (todoId) {
    // Create a new Todo parse object instance and set todo id
    let Todo = new Parse.Object('Todo');
    Todo.set('objectId', todoId);
    // .destroy should be called to delete a parse object
    try {
      await Todo.destroy();
      alert('Success! To-do deleted!');
      // Refresh to-dos list to remove this one
      readTodos();
      return true;
    } catch (error) {
      // Error can be caused by lack of Internet connection
      alert(`Error! ${error.message}`);
      return false;
    }
  };

  return (
  <IconComponentProvider IconComponent={MaterialCommunityIcons}>
    <View>
      <View className="header">
        {/* <img
          className="header_logo"
          alt="Back4App Logo"
          src={
            'https://blog.back4app.com/wp-content/uploads/2019/05/back4app-white-logo-500px.png'
          }
        /> */}
        <Text className="header_text_bold">{'React on Back4App'}</Text>
        <Text className="header_text">{'To-do List'}</Text>
      </View>
      <View className="container">
        <View className="flex_between">
          <Text className="list_heading">Todo List</Text>
          {/* To-do read (refresh) button */}
          <Button
            type="primary"
            shape="circle"
            color={'#208AEC'}
            size={'default'}
            onClick={readTodos}
            icon={<Icon name="home" size={24} color="red"/>}
          ></Button>
        </View>
        <View className="new_todo_wrapper flex_between">
          {/* Todo create text input */}
          <TextInput
            value={newTodoTitle}
            onChange={(event) => setNewTodoTitle(event.target.value)}
            placeholder="New Todo"
            size="large"
          />
          {/* Todo create button */}
          <Button
            type="primary"
            className="create_todo_button"
            color={'#208AEC'}
            size={'large'}
            onClick={createTodo}
            icon={<Icon name="home" size={24} color="red"/>}
          >
            Add
          </Button>
        </View>
        <View>
          {/* Todo read results list */}
          {readResults !== null &&
            readResults !== undefined &&
            readResults.length > 0 && (
              <ListItem
                dataSource={readResults}
                renderItem={(item) => (
                  <ListItem className="todo_item">
                    <Text
                      className={
                        item.get('done') === true
                          ? 'todo_text_done'
                          : 'todo_text'
                      }
                    >
                      {item.get('title')}
                    </Text>
                    <View className="flex_row">
                      {/* Todo update button */}
                      {item.get('done') !== true && (
                        <Button
                          type="primary"
                          shape="circle"
                          className="todo_button"
                          onClick={() => updateTodo(item.id, true)}
                          icon={
                            <Icon name="home" size={24} color="red"/>
                          }
                        ></Button>
                      )}
                      {/* Todo delete button */}
                      <Button
                        type="primary"
                        shape="circle"
                        className="todo_button"
                        onClick={() => deleteTodo(item.id)}
                        icon={
                            <Icon name="home" size={24} color="red"/>
                        }
                      ></Button>
                    </View>
                  </ListItem>
                )}
              />
            )}
        </View>
      </View>
    </View>
    </IconComponentProvider>
  );
};