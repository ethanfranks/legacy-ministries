import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { ViewStyle, TextStyle, View } from "react-native"
import { Button, Text } from "app/components"
import { colors, spacing } from "../theme"
import { MainTabScreenProps } from "app/navigators/MainTabNavigator"
import { SafeAreaView } from "react-native-safe-area-context"
import { useAppDispatch, useAppSelector } from "app/store/store"
import { decrement, increment } from "app/store/counterSlice"

// TODO: replace hard coded content with headless CMS - 

export const AboutScreen: FC<MainTabScreenProps<"About">> = observer(function AboutScreen() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <View style={$container}>
      <SafeAreaView>
        <Text
          testID="about-heading"
          style={$marginLg}
          tx="aboutScreen.heading"
          preset="heading"
        />
        <Text
          testID="about-subheading"
          style={$marginLg}
          tx="aboutScreen.subheading"
          preset="subheading"
        />
        <Button text="Increment" onPress={() => dispatch(increment())} />
        <Button text="Decrement" onPress={() => dispatch(decrement())} />
        <Text text={`Count: ${count}`} />
      </SafeAreaView>
    </View>
  )
})

const $marginLg: TextStyle = {
  margin: spacing.lg,
}

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
}
