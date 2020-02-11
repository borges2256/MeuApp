import React from "react";
import { View, Image, Text } from "react-native";
import style from "../ProductCard/style";
import { Entypo } from "@expo/vector-icons";


export default function() {
    return (
    <View style={style.container}>
        <Image style={style.cardImage}
            source={
                {
                uri: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/5/17/0/FNK_PAN-FRIED-SALMON-H_s4x3.jpg.rend.hgtvcom.826.620.suffix/1558115714985.jpeg'
            }
        }
           />
        <View>
            <Text style={style.product}>Salmon Bowl</Text>
            <Text style={style.price}>R$ 24,50</Text>
        </View>

        <Entypo name='plus' size={24} colo='black' />
    </View>
    )
}