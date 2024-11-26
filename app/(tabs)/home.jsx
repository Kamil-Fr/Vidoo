import { Text, View, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        keyExctractor={(item) => item.$id}
        renderItem={({ item }) => <Text classname="text-3xl">{item.id}</Text>}
      />
    </SafeAreaView>
  );
};

export default Home;
