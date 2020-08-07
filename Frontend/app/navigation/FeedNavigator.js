import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import RecordsScreen from "../screens/RecordsScreen";
import RecoordDetailsScreen from "../screens/RecordDetailsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Records" component={RecordsScreen} />
    <Stack.Screen name="RecordDetails" component={RecoordDetailsScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
