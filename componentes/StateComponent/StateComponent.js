import React from "react";
import { View } from "react-native";
import style from "./style";
import { Text } from "react-native";

export default class StatComponent extends React.Compnent{
    state ={
        contador: 0
    }


    render(){
        return  (
        <View style={style.container}>
        <Text style={[style.title, style.titleBold]}>Healty 
            <Text style={[style.title]}> Cliques</Text>
         </Text>

         <Button title="Incrementar" onPress={() =>{
             this.setState({
                 contador: this.state.contador + 1
             })
         }} />
         <Button title="Decrementar" onPress={() =>{
             this.setState({
                 contador: this.state.contador - 1
             })
         }} />
        </View>
        )
    }
}