import { Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { ScreenStack } from "react-native-screens";
import { StatusBar } from "expo-status-bar";
import GlobalProvider from "../../context/GlobalProvider";

const AuthLayout = () => {
  return (
    <GlobalProvider>
      <Stack>
        <ScreenStack name="sign-in" options={{ headerShown: false }} />
        <ScreenStack name="sign-up" options={{ headerShown: false }} />
      </Stack>
      <StatusBar backgroundColor="#161622" style="light" />
    </GlobalProvider>
  );
};

export default AuthLayout;
