import React, {Component} from 'react';
import {Text, View, Alert } from 'react-native';
import {Input} from "./Input";
import Button from "./Button";

class Form extends Component{
    state={username:'',password:''};

    onButtonPress(){
        console.log('State:');
        fetch('http://localhost:3000/passUser',{
            method:'POST',
            headers:{
              'Accept':'application/json',
              'Content-Type': 'application/json'
            },
            body:JSON.stringify({
              username: this.state.username,
              password: this.state.password
            })
        }).then((response) => response.json()).then((responseJson) => {
                Alert.alert(responseJson);
            }).catch((err)=>{
            console.log(err);
        })
    }

    render(){
        return(
            <View>
                <Text> Username: </Text>
                <Input placeholder='Username'
                       onChangeText={username=>this.setState({username})}
                       value={this.state.username}
                />

                <Text> Password: </Text>
                <Input
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={password=>this.setState({password})}
                    value={this.state.password}
                />

                <Button title='Log In' onPress={this.onButtonPress.bind(this)}/>
            </View>
        );
    }
}

export  default Form;