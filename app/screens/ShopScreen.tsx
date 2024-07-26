import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { SafeAreaView, View, ViewStyle } from "react-native"
import { colors, spacing } from "../theme"
import { MainTabScreenProps } from "app/navigators/MainTabNavigator"
import { FlashList } from "@shopify/flash-list"
import PLPCard from "app/components/PLPCard"
import { Product, products } from "../../data-temp/products"

export const ShopScreen: FC<MainTabScreenProps<"Shop">> = observer(function ShopScreen() {
  return (
    <SafeAreaView style={$container}>
      <FlashList renderItem={(product) => PLPCard(product as unknown as Product)} data={products} estimatedItemSize={100} contentContainerStyle={$flashList} ItemSeparatorComponent={() => <View style={$separator} />} />
    </SafeAreaView>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.palette.neutral100,
}

const $flashList: ViewStyle = {
  padding: spacing.md,
}

const $separator: ViewStyle = {
  height: 10,
}
