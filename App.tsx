import { Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { PinsProvider } from './contexts/PinsContext';
import HomeScreen from './screens/HomeScreen';
import ConditionsScreen from './screens/ConditionsScreen';
import ConditionDetailScreen from './screens/ConditionDetailScreen';
import DrugsScreen from './screens/DrugsScreen';
import DrugDetailScreen from './screens/DrugDetailScreen';
import ProceduresScreen from './screens/ProceduresScreen';
import ProcedureDetailScreen from './screens/ProcedureDetailScreen';
import ConditionsCategoryScreen from './screens/ConditionsCategoryScreen';

export type RootStackParamList = {
  Home: undefined;
  ConditionsCategory: undefined;
  Conditions: { acuityFilter?: 'High' | 'Moderate' | 'Low' };
  ConditionDetail: { conditionId: string };
  Drugs: undefined;
  DrugDetail: { drugId: string };
  Procedures: undefined;
  ProcedureDetail: { procedureId: string };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <PinsProvider>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={({ navigation }) => ({
                headerStyle: { backgroundColor: '#161b22' },
                headerTintColor: '#e6edf3',
                headerTitleStyle: { fontWeight: '600', fontSize: 17 },
                cardStyle: { backgroundColor: '#0d1117' },
                headerLeft: ({ canGoBack }) =>
                  canGoBack ? (
                    <Pressable
                      onPress={() => navigation.goBack()}
                      style={{ width: 44, height: 44, alignItems: 'center', justifyContent: 'center', marginLeft: 4 }}
                    >
                      <Ionicons name="chevron-back" size={26} color="#e6edf3" />
                    </Pressable>
                  ) : null,
              })}
            >
              <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
              <Stack.Screen name="ConditionsCategory" component={ConditionsCategoryScreen} options={{ title: 'Conditions' }} />
              <Stack.Screen name="Conditions" component={ConditionsScreen} />
              <Stack.Screen name="ConditionDetail" component={ConditionDetailScreen} options={{ title: '' }} />
              <Stack.Screen name="Drugs" component={DrugsScreen} />
              <Stack.Screen name="DrugDetail" component={DrugDetailScreen} options={{ title: '' }} />
              <Stack.Screen name="Procedures" component={ProceduresScreen} />
              <Stack.Screen name="ProcedureDetail" component={ProcedureDetailScreen} options={{ title: '' }} />
            </Stack.Navigator>
          </NavigationContainer>
        </PinsProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
