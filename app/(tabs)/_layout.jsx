import { Image, Text, View } from "react-native";
import { Tabs, Redirect } from "expo-router";
import { icons } from "../../constants";
import { StatusBar } from "expo-status-bar";
import { Loader } from "../../components/Loader";
import { useGlobalContext } from "../../context/GlobalProvider";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="flex items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabLayout = () => {
  const { loading, isLogged } = useGlobalContext();

  if (!loading && !isLogged) return <Redirect href="/sign-in" />;

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 84,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.bookmark}
                color={color}
                name="Bookmark"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.plus}
                color={color}
                name="Create"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>

      <Loader isLoading={loading} />
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default TabLayout;

// import { Image, Text, View } from "react-native";
// import React from "react";
// import { Tabs, Redirect } from "expo-router";
// //import { icons } from "../../constants";
// import { StatusBar } from "expo-status-bar";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// const icons = {
//   home: require("../../assets/icons/home.png"),
//   bookmark: require("../../assets/icons/bookmark.png"),
//   plus: require("../../assets/icons/plus.png"),
//   profile: require("../../assets/icons/profile.png"),
// };

// const Tab = createBottomTabNavigator();

// const TabIcon = ({ icon, color, name, focused }) => {
//   return (
//     <View className="flex items-center justify-center gap-2">
//       <Image
//         source={icon}
//         resizeMode="contain"
//         tintColor={color}
//         className="w-6 h-6"
//       />
//       <Text
//         className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
//         style={{ color: color }}
//       >
//         {name}
//       </Text>
//     </View>
//   );
// };

// const TabsLayout = () => {
//   return (
//     <>
//       <Tabs
//         screenOptions={{
//           tabBarShowLabel: false,
//           tabBarActiveTintColor: "#FFA001",
//           tabBarInactiveTintColor: "#CdCDE0",
//           tabBarStyle: {
//             backgroundColor: "#161622",
//             borderTopWidth: 1,
//             borderTopColor: "#232533",
//             height: 70,
//           },
//         }}
//       >
//         <Tab.Navigator>
//           <Tabs.Screen
//             name="home"
//             options={{
//               title: "Home",
//               headerShown: false,
//               tabBarIcon: ({ color, focused }) => (
//                 <TabIcon
//                   icon={icons.home}
//                   color={color}
//                   name="Home"
//                   focused={focused}
//                 />
//               ),
//             }}
//           />
//           <Tabs.Screen
//             name="bookmark"
//             options={{
//               title: "Bookmark",
//               headerShown: false,
//               tabBarIcon: ({ color, focused }) => (
//                 <TabIcon
//                   icon={icons.bookmark}
//                   color={color}
//                   name="Bookmark"
//                   focused={focused}
//                 />
//               ),
//             }}
//           />
//           <Tabs.Screen
//             name="create"
//             options={{
//               title: "Create",
//               headerShown: false,
//               tabBarIcon: ({ color, focused }) => (
//                 <TabIcon
//                   icon={icons.plus}
//                   color={color}
//                   name="Create"
//                   focused={focused}
//                 />
//               ),
//             }}
//           />
//           <Tabs.Screen
//             name="profile"
//             options={{
//               title: "Profile",
//               headerShown: false,
//               tabBarIcon: ({ color, focused }) => (
//                 <TabIcon
//                   icon={icons.profile}
//                   color={color}
//                   name="Profile"
//                   focused={focused}
//                 />
//               ),
//             }}
//           />
//         </Tab.Navigator>
//       </Tabs>
//       <StatusBar backgroundColor="#161622" style="light" />
//     </>
//   );
// };

// export default TabsLayout;
