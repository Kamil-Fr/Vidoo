import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";
import { CustomButton, Loader } from "../components";
import { useGlobalContext } from "../context/GlobalProvider";

const Welcome = () => {
  const { loading, isLogged } = useGlobalContext();

  if (!loading && isLogged) return <Redirect href="/home" />;

  return (
    <SafeAreaView className="bg-primary h-full">
      <Loader isLoading={loading} />

      <ScrollView>
        <View className="w-full flex justify-center items-center h-full px-4">
          <Image
            source={images.logo}
            className="w-[230px] h-[200px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[298px]"
            resizeMode="contain"
          />

          <View className="mt-5 flex items-center">
            <Text className="text-3xl text-white font-bold text-center">
              Experience Infinite{"\n"}
              Discoveries with{"\n"}
              <Text className="text-secondary-200">Vidoo</Text>
            </Text>

            <Image
              source={images.path}
              className="w-[136px] h-[15px] mt-2"
              resizeMode="contain"
            />
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where Imagination Meets Innovation: Start Your Limitless Journey
            with Vidoo
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Welcome;
