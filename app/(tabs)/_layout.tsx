import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";



export default function TabsLayout() {
  const primary = "#6a57e8";

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#ffffff",
          height: 60,
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
        tabBarInactiveTintColor: primary,
        tabBarActiveTintColor: "#ffffff",
        tabBarActiveBackgroundColor: primary,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name="home-outline"
              size={22}
              color={focused ? "#ffffff" : primary}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="report"
        options={{
          headerShown: false,
          title: "Reports",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name="bar-chart-outline"
              size={22}
              color={focused ? "#ffffff" : primary}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="me"
        options={{
          headerShown: false,
          title: "Me",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name="person-circle-outline"
              size={24}
              color={focused ? "#ffffff" : primary}
            />
          ),
        }}
      />
    </Tabs>
  );
}

