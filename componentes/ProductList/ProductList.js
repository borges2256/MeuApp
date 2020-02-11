import React from "react";
import { View } from "react-native";
import style from "../ProductList/style";
import ProductCard from "../ProductCard/ProductCard";

export default function () {
    return (
    <View style={style.containerContent}>
      <ProductCard />
      <ProductCard />
    </View>
    )
}