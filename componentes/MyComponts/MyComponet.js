import React from "react";
import { Text } from "react-native";
import style from "./styles";
import { defaultProps } from "../../node_modules/react-native/Libraries/Components/Picker/Picker";

const MyComponent = function (props){
    return (
        <Text style={style.texto}>
            {props.txt}
        </Text>
    )
}

export default MyComponent