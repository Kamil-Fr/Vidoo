import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs, Redirect } from "expo-router";
import { icons } from '../../constants';

const TabIcon = ({ icon, color, name, focused }) => {
  return (
  <View>
    <Image source={} 
    />
  </View>
  )
  }

const TabsLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen name="home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon 
            icon={icons.home}
            color={color}
            />
          )
        }} />
      </Tabs>
    </>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
