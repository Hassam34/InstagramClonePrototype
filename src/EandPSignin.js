import React from 'react';
import { View, Text, Image, Linking, StyleSheet, TextInput, TouchableOpacity, Dimensions, KeyboardAvoidingView, Picker } from 'react-native';
import { Button, CardSection } from './components/common';
import Icon from 'react-native-vector-icons/EvilIcons'
import ButtonNew from './components/ButtonNew'
//import {Icon} from'react-native-elements'
const WIDTH = Math.round(Dimensions.get('window').width); a = 2;

class EandPSignin extends React.Component {
    static navigationOptions=({navigation})=>{
        return{
            header:null
        }
    }

    state = { phone: true, email: null }
    showView() {
        if (this.state.phone) {
            return (
                <View>
                    <View >
                        <TextInput
                            placeholder='Phone'
                            placeholderTextColor={'gray'}
                            underlineColorAndroid='transparent'
                            style={styles.inputStyle} />
                    </View>
                    <CardSection>
                    <Button>Next</Button>
                    </CardSection>
                   
                </View>
            )
        }
        if (this.state.email) {
            return (
                <View >
                    <View >
                        <TextInput
                            placeholder='user@gmail.com'
                            placeholderTextColor={'gray'}
                            underlineColorAndroid='transparent'
                            style={styles.inputStyle} />
                    </View>
                    <CardSection>
                    <Button>Next</Button>
                    </CardSection>
                </View>
            )
        }
    }
    render() {
        return (
            <View style={styles.MainContainer}>
                <View>
                 <View style={styles.logoStyle}>
                    <Icon name='user' size={150} />
                </View>
                <View style={{flexDirection:'row',borderBottomWidth:.1,borderBottomColor:'gray',marginBottom:3,}}>
               
                    
                    <ButtonNew customStyle={{borderBottomWidth:this.state.phone?2:.3}}  onPress={() => this.setState({ phone: true, email: false })  }>PHONE</ButtonNew>
                    
                    <ButtonNew  customStyle={{borderBottomWidth:this.state.email?2:.3}} onPress={() => this.setState({ email: true, phone: false })}>EMAIL</ButtonNew>
                
              
                </View>

                </View>
                 
                <View >
                    {this.showView()}
                </View> 
            <View style={styles.bottomView}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                <Text style={{ color: 'gray', fontSize: 12 }}>
                    Already have an account? Log in.
                    </Text>
                    </TouchableOpacity>
            </View>
        </View>

        )
    }
}

export default EandPSignin;

const styles = StyleSheet.create({
    MainContainer:
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
    },
    backgroundImageStyle: {
        flex: 1,
        width: null,
        height: null,
        // justifyContent:'center',
        alignItems: 'center'
    },
    logoStyle: {
        marginTop: -180,
        marginBottom: 10,
        width: 175,
        height: 170,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputStyle: {
        marginTop: 10,
        paddingLeft: 10,
        width: WIDTH - 55,
        height: 40,
        fontSize: 15,
        backgroundColor: 'rgba(0,0,0,0.02)',
        color: 'black',
        borderColor: 'gray',
        shadowOpacity: 2,
        borderRadius: 3,
        borderWidth: 0.3,
        marginHorizontal: 25
    },
    loginButtonStyle: {
        paddingLeft: 10,
        paddingRight: 10
    },
    textStyle: {
        //alignSelf: 'center',
        marginLeft: 25,
        color: 'white',
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 15,
        fontWeight: 'bold'
    },
    buttonStyle: {
        marginTop: 10,
        flex: 1,
        alignSelf: 'stretch',
        // borderColor:'#007aff',
        backgroundColor: '#3b5998',
        // backgroundColor:'white',
        // borderWidth:1,
        marginLeft: 25,
        marginRight: 25,
        borderRadius: 5,
    },
    bottomView:{
        width: '100%', 
        height: 40, 
        borderTopWidth:0.3,
        borderColor:'gray',
       // backgroundColor: '#FF9800', 
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
      },
})
