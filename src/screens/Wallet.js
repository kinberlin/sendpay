import React from 'react'
import * as Reacts from 'react-native'
//import Button from '../components/Button'
import { Avatar,Card, Text, Button } from 'react-native-paper'

export default function Wallet({ navigation }) {
    const [visible, setVisible] = React.useState('eye');
    const [hide, setHide] = React.useState(true);
    const LeftContent = props => <Avatar.Icon size={44} icon='wallet' />
    const RightContent = props => <Button icon='account'/> 
    const [montanttxt, setMontanttxt] = React.useState('100 000 XAF'); 


    return (

    <Reacts.View style={styles.screen}>
        <Card style={[{ }]}>
            <Card.Title title="Compte Principal" subtitle="Solde et service de compte" left={LeftContent} right={RightContent} />
        </Card>

        <Card style={[{marginTop : 30}]}>
            <Card.Content>
              <Reacts.View style={styles.cardMontant}>
                <Button icon={visible} style={[{marginRight : -15}]} onPress={()=>{setHide(!hide) ; if(hide){setVisible('eye-off'); setMontanttxt('AFFICHER LE SOLDE')} else{setVisible('eye'); setMontanttxt('100 000 XAF')} }} /> 
                <Text variant="bodyMedium" style={[{color : 'orange', marginRight : -15}]}>{montanttxt}</Text>
              </Reacts.View>
            </Card.Content>
        </Card>
    </Reacts.View>

  )
};

const styles = Reacts.StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: '#f2f2fC',
    },
    cardMontant : {
      borderRadius : 20,
      flexDirection : 'row',
      justifyContent : 'center',
      alignContent : 'center'
    },
  });

