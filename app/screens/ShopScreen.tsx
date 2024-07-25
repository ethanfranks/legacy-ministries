import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { SafeAreaView, TextStyle, View, ViewStyle } from "react-native"
import { colors, spacing } from "../theme"
import { Text } from "app/components"
import { MainTabScreenProps } from "app/navigators/MainTabNavigator"

export const ShopScreen: FC<MainTabScreenProps<"Shop">> = observer(function ShopScreen() {
  return (
    <View style={$container}>
      <SafeAreaView>
        <Text
          testID="shop-heading"
          style={$marginLg}
          tx="shopScreen.heading"
          preset="heading"
        />
        <Text
          testID="shop-subheading"
          style={$marginLg}
          tx="shopScreen.subheading"
          preset="subheading"
        />
      </SafeAreaView>
    </View>
  )
})

const $marginLg: TextStyle = {
  margin: spacing.lg,
}

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.palette.neutral100,
}
