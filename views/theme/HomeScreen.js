import React,{ Component } from 'react';
import { View,Text,StyleSheet,Button,ScrollView,TouchableOpacity } from 'react-native';
import normalize from 'react-native-normalize';
import Icon from 'react-native-vector-icons/AntDesign';
class HomeScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    componentDidMount(){
        
    }
    render(){
        return <View>
            <View style={styles.card}><Text>1</Text></View>
        </View>
    }
}
const styles = StyleSheet.create({
    card:{
        width:'100%',
        height:normalize(60,'height'),
        backgroundColor:'#FFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 12,
    }
})
export default HomeScreen