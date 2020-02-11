import React from "react";
import { View } from "react-native";
import style from "./style";
import { Text } from "react-native";

export default function () {
    return (
    <View style={style.container}>
        <Text style={[style.title, style.titleBold]}>Healty 
            <Text style={[style.title]}> Food 
            </Text>
        </Text>
    </View>
    )
}