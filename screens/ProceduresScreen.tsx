import { useMemo, useState } from 'react';
import { SectionList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { procedures } from '../data/procedures';
import { Procedure } from '../data/types';
import { RootStackParamList } from '../App';

type Nav = StackNavigationProp<RootStackParamList, 'Procedures'>;

export default function ProceduresScreen() {
  const navigation = useNavigation<Nav>();
  const [query, setQuery] = useState('');

  const sections = useMemo(() => {
    const q = query.toLowerCase().trim();
    const filtered = q
      ? procedures.filter(p =>
          p.name.toLowerCase().includes(q) ||
          p.aliases?.some(a => a.toLowerCase().includes(q)) ||
          p.indications.some(i => i.toLowerCase().includes(q)) ||
          p.category.toLowerCase().includes(q)
        )
      : procedures;

    const grouped = filtered.reduce<Record<string, Procedure[]>>((acc, p) => {
      if (!acc[p.category]) acc[p.category] = [];
      acc[p.category].push(p);
      return acc;
    }, {});

    return Object.entries(grouped).map(([title, data]) => ({ title, data }));
  }, [query]);

  return (
    <View style={styles.root}>
      <View style={styles.searchBar}>
        <Ionicons name="search" size={16} color="#8b949e" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search procedures..."
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
          const isLast = index === section.data.length - 1;
          return (
            <TouchableOpacity
              style={[styles.row, isFirst && styles.rowFirst, isLast && styles.rowLast]}
              activeOpacity={0.75}
              onPress={() => navigation.navigate('ProcedureDetail', { procedureId: item.id })}
            >
              <View style={styles.rowBody}>
                <Text style={styles.rowText}>{item.name}</Text>
                <Text style={styles.rowSub}>{item.phases.length} phases · {item.indications.length} indications</Text>
              </View>
              <Ionicons name="chevron-forward" size={16} color="#8b949e" />
            </TouchableOpacity>
          );
        }}
        ListEmptyComponent={
          <Text style={styles.empty}>No procedures match "{query}"</Text>
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
    paddingVertical: 12,
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
  rowBody: { flex: 1 },
  rowText: {
    fontSize: 16,
    color: '#e6edf3',
    fontWeight: '500',
  },
  rowSub: {
    fontSize: 12,
    color: '#8b949e',
    marginTop: 2,
  },
  empty: {
    color: '#8b949e',
    textAlign: 'center',
    marginTop: 60,
    fontSize: 15,
  },
});
