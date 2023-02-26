import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import Wallet from './Wallet'
import { BottomNavigation, Text } from 'react-native-paper'

export default function Dashboard({ navigation }) {
  const Walletroute = () => <Text>Wallet</Text>;
  const Signoutroute = () => <Text>Signout</Text>;
  const Budgetroute = () => <Text>Budget</Text>;
  const Cotisationroute = () => <Text>Cotisations</Text>;

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      {key : 'Account', title : 'Account', focusedIcon : 'wallet', unfocusedIcon : 'wallet-outline'},
      {key : 'Budget', title : 'Budget', focusedIcon : 'account-cash', unfocusedIcon : 'account-cash-outline'},
      {key : 'Cotisation', title : 'Cotisation', focusedIcon : 'cash', unfocusedIcon : 'cash-outline'},
      {key : 'Signout', title : 'Signout', focusedIcon : 'logout', unfocusedIcon : 'logout-outline'}
    ]);

  const renderScene = BottomNavigation.SceneMap({
    Account : Wallet,
    Budget : Budgetroute,
    Cotisation : Cotisationroute,
    Signout : Signoutroute
  })
  return (

    <BottomNavigation
    navigationState={{index, routes}}
    onIndexChange = {setIndex}
    renderScene = {renderScene}
    />
  )
}
//export default MyMenus;

//comments
/*
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Logout
      </Button>
       */
