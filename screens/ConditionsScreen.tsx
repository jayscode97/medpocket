import { useEffect, useMemo, useState } from 'react';
import { SectionList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { conditions } from '../data/conditions';
import { Acuity, Condition } from '../data/types';
import { RootStackParamList } from '../App';

type Nav   = NativeStackNavigationProp<RootStackParamList, 'Conditions'>;
type Route = RouteProp<RootStackParamList, 'Conditions'>;

const ACUITY_COLOR: Record<Acuity, string> = {
  High:     '#f85149',
  Moderate: '#e3b341',
  Low:      '#3fb950',
};

function AcuityDot({ acuity }: { acuity: Acuity }) {
  return (
    <View style={[dotStyles.dot, { backgroundColor: ACUITY_COLOR[acuity] }]} />
  );
}

const dotStyles = StyleSheet.create({
  dot: { width: 8, height: 8, borderRadius: 4, marginLeft: 10 },
});

export default function ConditionsScreen() {
  const navigation = useNavigation<Nav>();
  const { params }  = useRoute<Route>();
  const acuityFilter = params?.acuityFilter;

  const [query, setQuery] = useState('');

  useEffect(() => {
    if (acuityFilter) {
      navigation.setOptions({ title: `${acuityFilter} Acuity` });
    } else {
      navigation.setOptions({ title: 'Conditions' });
    }
  }, [acuityFilter]);

  const sections = useMemo(() => {
    const q = query.toLowerCase().trim();

    let pool = acuityFilter
      ? conditions.filter(c => c.acuity === acuityFilter)
      : conditions;

    if (q) {
      pool = pool.filter(c =>
        c.name.toLowerCase().includes(q) ||
        c.aliases?.some(a => a.toLowerCase().includes(q)) ||
        c.tags?.some(t => t.toLowerCase().includes(q))
      );
    }

    const grouped = pool.reduce<Record<string, Condition[]>>((acc, c) => {
      if (!acc[c.system]) acc[c.system] = [];
      acc[c.system].push(c);
      return acc;
    }, {});

    return Object.entries(grouped).map(([title, data]) => ({ title, data }));
  }, [query, acuityFilter]);

  return (
    <View style={styles.root}>
      <View style={styles.searchBar}>
        <Ionicons name="search" size={16} color="#8b949e" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search conditions..."
          placeholderTextColor="#8b949e"
          value={query}
          onChangeText={setQuery}
          autoCorrect={false}
          autoCapitalize="none"
        />
        {query.length > 0 && (
          <TouchableOpacity onPress={() => setQuery('')}>
            <Ionicons name="close-circle" size={16} color="#8b949e" />
          </TouchableOpacity>
        )}
      </View>

      <SectionList
        sections={sections}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        stickySectionHeadersEnabled={false}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
        renderItem={({ item, index, section }) => {
          const isFirst = index === 0;
          const isLast  = index === section.data.length - 1;
          return (
            <TouchableOpacity
              style={[styles.row, isFirst && styles.rowFirst, isLast && styles.rowLast]}
              activeOpacity={0.75}
              onPress={() => navigation.navigate('ConditionDetail', { conditionId: item.id })}
            >
              <Text style={styles.rowText}>{item.name}</Text>
              {!acuityFilter && <AcuityDot acuity={item.acuity} />}
              <Ionicons name="chevron-forward" size={16} color="#8b949e" style={{ marginLeft: 6 }} />
            </TouchableOpacity>
          );
        }}
        ListEmptyComponent={
          <Text style={styles.empty}>
            {query ? `No conditions match "${query}"` : 'No conditions in this category yet.'}
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#0d1117',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#161b22',
    borderWidth: 1,
    borderColor: '#21262d',
    borderRadius: 10,
    margin: 16,
    paddingHorizontal: 12,
    gap: 8,
    height: 42,
  },
  searchInput: {
    flex: 1,
    color: '#e6edf3',
    fontSize: 15,
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  sectionHeader: {
    fontSize: 12,
    fontWeight: '600',
    color: '#8b949e',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginTop: 24,
    marginBottom: 6,
    marginLeft: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#161b22',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 0,
    borderColor: '#21262d',
  },
  rowFirst: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  rowLast: {
    borderBottomWidth: 1,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  rowText: {
    flex: 1,
    fontSize: 16,
    color: '#e6edf3',
  },
  empty: {
    color: '#8b949e',
    textAlign: 'center',
    marginTop: 60,
    fontSize: 15,
  },
});
