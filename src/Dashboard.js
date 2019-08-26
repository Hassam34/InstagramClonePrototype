import React from 'react';
import { Text,View, Image } from 'react-native';
import { Button, CardSection } from './components/common'

import { DrawerActions } from 'react-navigation';

class Dashboard extends React.Component {
   
    render() {
        return (<View style={styles.styling}><CardSection >
            <Text>DashBoard</Text>
        </CardSection></View>);
    }
}
export default Dashboard;

const styles={
    styling:{
        marginTop:200,
        alignSelf:'center',
        flex:1
    }
}