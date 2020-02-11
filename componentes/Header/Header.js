import React from "react";
import { View } from "react-native";
import style from "./style";
import { MaterialIcons, MaterialCommunityIcons, Octicons  } from "@expo/vector-icons";

export default function () {
    return (
    <View style={style.container}>
        <MaterialIcons  name="arrow-back" size={32} color="white" />
    

    <View style={style.container2}>
         <MaterialCommunityIcons name="blackberry" size={32} color="white" />
         <Octicons name="check" size={32} color="white" />
        </View>
    </View>
    )
}