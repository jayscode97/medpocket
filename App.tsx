import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
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

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <PinsProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#161b22' },
              headerTintColor: '#e6edf3',
              headerTitleStyle: { fontWeight: '600', fontSize: 17 },
              contentStyle: { backgroundColor: '#0d1117' },
            }}
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
  );
}
