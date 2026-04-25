import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { conditions } from '../data/conditions';
import { RootStackParamList } from '../App';

type Nav = NativeStackNavigationProp<RootStackParamList, 'ConditionsCategory'>;

const TILES = [
  {
    label: 'All Conditions',
    acuityFilter: undefined as undefined,
    color: '#2f81f7',
    bg: '#1c2d4a',
    border: '#2f81f7',
    icon: 'list' as const,
  },
  {
    label: 'High Acuity',
    acuityFilter: 'High' as const,
    color: '#f85149',
    bg: '#3a1a1a',
    border: '#f85149',
    icon: 'alert-circle' as const,
  },
  {
    label: 'Moderate Acuity',
    acuityFilter: 'Moderate' as const,
    color: '#e3b341',
    bg: '#3a2e0a',
    border: '#e3b341',
    icon: 'warning' as const,
  },
  {
    label: 'Low Acuity',
    acuityFilter: 'Low' as const,
    color: '#3fb950',
    bg: '#1a3a1a',
    border: '#3fb950',
    icon: 'checkmark-circle' as const,
  },
];

export default function ConditionsCategoryScreen() {
  const navigation = useNavigation<Nav>();

  return (
    <View style={styles.root}>
      {TILES.map(({ label, acuityFilter, color, bg, border, icon }) => {
        const count = acuityFilter
          ? conditions.filter(c => c.acuity === acuityFilter).length
          : conditions.length;

        return (
          <TouchableOpacity
            key={label}
            style={[styles.tile, { backgroundColor: bg, borderColor: border }]}
            activeOpacity={0.75}
            onPress={() => navigation.navigate('Conditions', { acuityFilter })}
          >
            <View style={[styles.iconWrap, { backgroundColor: border + '33' }]}>
              <Ionicons name={icon} size={22} color={color} />
            </View>
            <View style={styles.tileBody}>
              <Text style={[styles.tileLabel, { color }]}>{label}</Text>
              <Text style={styles.tileCount}>{count} condition{count !== 1 ? 's' : ''}</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color={color + 'aa'} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#0d1117',
    padding: 16,
    gap: 12,
  },
  tile: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 14,
    padding: 18,
    gap: 16,
  },
  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tileBody: { flex: 1 },
  tileLabel: { fontSize: 17, fontWeight: '700' },
  tileCount: { fontSize: 13, color: '#8b949e', marginTop: 2 },
});
