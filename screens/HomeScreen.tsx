import { useMemo, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { conditions } from '../data/conditions';
import { drugs } from '../data/drugs';
import { procedures } from '../data/procedures';
import { usePins, PinEntry } from '../contexts/PinsContext';

type HomeNavProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

type SearchResult =
  | { kind: 'condition'; id: string; name: string; sub: string }
  | { kind: 'drug';      id: string; name: string; sub: string }
  | { kind: 'procedure'; id: string; name: string; sub: string };

const KIND_META = {
  condition: { label: 'Condition', icon: '🫀', color: '#2f81f7' },
  drug:      { label: 'Drug',      icon: '💊', color: '#bc8cff' },
  procedure: { label: 'Procedure', icon: '🩺', color: '#3fb950' },
} as const;

const NAV_ITEMS = [
  { label: 'Conditions', icon: '🫀', screen: 'ConditionsCategory' as const },
  { label: 'Drugs',      icon: '💊', screen: 'Drugs'              as const },
  { label: 'Procedures', icon: '🩺', screen: 'Procedures'         as const },
];

const COLORS = {
  bg:      '#0d1117',
  surface: '#161b22',
  border:  '#21262d',
  accent:  '#2f81f7',
  text:    '#e6edf3',
  muted:   '#8b949e',
  gold:    '#e3b341',
};

export default function HomeScreen() {
  const navigation = useNavigation<HomeNavProp>();
  const [query, setQuery] = useState('');
  const { pins } = usePins();

  const results = useMemo<SearchResult[]>(() => {
    const q = query.toLowerCase().trim();
    if (!q) return [];

    const out: SearchResult[] = [];

    conditions.forEach(c => {
      if (
        c.name.toLowerCase().includes(q) ||
        c.aliases?.some(a => a.toLowerCase().includes(q)) ||
        c.tags?.some(t => t.toLowerCase().includes(q)) ||
        c.system.toLowerCase().includes(q)
      ) {
        out.push({ kind: 'condition', id: c.id, name: c.name, sub: c.system });
      }
    });

    drugs.forEach(d => {
      if (
        d.name.toLowerCase().includes(q) ||
        d.brandNames?.some(b => b.toLowerCase().includes(q)) ||
        d.drugClass.toLowerCase().includes(q) ||
        d.indications.some(i => i.toLowerCase().includes(q))
      ) {
        out.push({ kind: 'drug', id: d.id, name: d.name, sub: d.drugClass });
      }
    });

    procedures.forEach(p => {
      if (
        p.name.toLowerCase().includes(q) ||
        p.aliases?.some(a => a.toLowerCase().includes(q)) ||
        p.category.toLowerCase().includes(q) ||
        p.indications.some(i => i.toLowerCase().includes(q))
      ) {
        out.push({ kind: 'procedure', id: p.id, name: p.name, sub: p.category });
      }
    });

    // Exact name-starts-with matches float to top
    return out.sort((a, b) => {
      const aStarts = a.name.toLowerCase().startsWith(q) ? 0 : 1;
      const bStarts = b.name.toLowerCase().startsWith(q) ? 0 : 1;
      return aStarts - bStarts;
    });
  }, [query]);

  function handleResultPress(result: SearchResult) {
    setQuery('');
    if (result.kind === 'condition') {
      navigation.navigate('ConditionDetail', { conditionId: result.id });
    } else if (result.kind === 'drug') {
      navigation.navigate('DrugDetail', { drugId: result.id });
    } else {
      navigation.navigate('ProcedureDetail', { procedureId: result.id });
    }
  }

  function handlePinPress(pin: PinEntry) {
    if (pin.kind === 'condition') {
      navigation.navigate('ConditionDetail', { conditionId: pin.id });
    } else if (pin.kind === 'drug') {
      navigation.navigate('DrugDetail', { drugId: pin.id });
    } else {
      navigation.navigate('ProcedureDetail', { procedureId: pin.id });
    }
  }

  const showResults = query.trim().length > 0;

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Text style={styles.appName}>MedPocket</Text>
        <Text style={styles.tagline}>Emergency Medicine Reference</Text>
      </View>

      <View style={styles.searchBar}>
        <Ionicons name="search" size={18} color={COLORS.muted} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search conditions, drugs, procedures…"
          placeholderTextColor={COLORS.muted}
          value={query}
          onChangeText={setQuery}
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="search"
        />
        {query.length > 0 && (
          <TouchableOpacity onPress={() => setQuery('')} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
            <Ionicons name="close-circle" size={18} color={COLORS.muted} />
          </TouchableOpacity>
        )}
      </View>

      {showResults ? (
        <ScrollView
          style={styles.results}
          contentContainerStyle={styles.resultsList}
          keyboardShouldPersistTaps="handled"
        >
          {results.length === 0 ? (
            <Text style={styles.noResults}>No results for "{query}"</Text>
          ) : (
            results.map((r, i) => {
              const meta = KIND_META[r.kind];
              return (
                <TouchableOpacity
                  key={`${r.kind}-${r.id}`}
                  style={[
                    styles.resultRow,
                    i === 0 && styles.resultFirst,
                    i === results.length - 1 && styles.resultLast,
                  ]}
                  activeOpacity={0.75}
                  onPress={() => handleResultPress(r)}
                >
                  <Text style={styles.resultIcon}>{meta.icon}</Text>
                  <View style={styles.resultBody}>
                    <Text style={styles.resultName}>{r.name}</Text>
                    <Text style={styles.resultSub}>{r.sub}</Text>
                  </View>
                  <View style={[styles.kindBadge, { borderColor: meta.color }]}>
                    <Text style={[styles.kindBadgeText, { color: meta.color }]}>{meta.label}</Text>
                  </View>
                </TouchableOpacity>
              );
            })
          )}
        </ScrollView>
      ) : (
        <ScrollView
          style={styles.scrollArea}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.speedDialSection}>
            <View style={styles.sectionHeaderRow}>
              <Ionicons name="star" size={13} color={COLORS.gold} />
              <Text style={styles.sectionHeaderText}>Favorites</Text>
            </View>
            {pins.length === 0 ? (
              <View style={styles.emptyFavorites}>
                <Text style={styles.emptyFavoritesText}>
                  Tap ⭐ on any condition, drug, or procedure to add it here.
                </Text>
              </View>
            ) : (
              pins.map((pin, i) => {
                const meta = KIND_META[pin.kind];
                return (
                  <TouchableOpacity
                    key={`${pin.kind}-${pin.id}`}
                    style={[
                      styles.resultRow,
                      i === 0 && styles.resultFirst,
                      i === pins.length - 1 && styles.resultLast,
                    ]}
                    activeOpacity={0.75}
                    onPress={() => handlePinPress(pin)}
                  >
                    <Text style={styles.resultIcon}>{meta.icon}</Text>
                    <View style={styles.resultBody}>
                      <Text style={styles.resultName}>{pin.name}</Text>
                      <Text style={styles.resultSub}>{pin.sub}</Text>
                    </View>
                    <View style={[styles.kindBadge, { borderColor: meta.color }]}>
                      <Text style={[styles.kindBadgeText, { color: meta.color }]}>{meta.label}</Text>
                    </View>
                  </TouchableOpacity>
                );
              })
            )}
          </View>

          <View style={styles.navList}>
            {NAV_ITEMS.map(({ label, icon, screen }, i) => (
              <TouchableOpacity
                key={label}
                style={[styles.navItem, i < NAV_ITEMS.length - 1 && styles.navItemBorder]}
                activeOpacity={0.75}
                onPress={() => navigation.navigate(screen)}
              >
                <Text style={styles.navIcon}>{icon}</Text>
                <Text style={styles.navLabel}>{label}</Text>
                <Ionicons name="chevron-forward" size={18} color={COLORS.muted} />
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.spacer} />
          <Text style={styles.signature}>made by Jean Serhan</Text>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: COLORS.bg },

  header: {
    alignItems: 'center',
    paddingTop: 36,
    paddingBottom: 28,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  appName: { fontSize: 36, fontWeight: '700', color: COLORS.accent, letterSpacing: 1 },
  tagline: { marginTop: 6, fontSize: 13, color: COLORS.muted, letterSpacing: 0.5, textTransform: 'uppercase' },

  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    marginHorizontal: 20,
    marginTop: 24,
    paddingHorizontal: 14,
    gap: 10,
    height: 48,
  },
  searchInput: { flex: 1, color: COLORS.text, fontSize: 15 },

  // ── Results ──────────────────────────────────────────────────────────────────
  results: { flex: 1, marginTop: 12 },
  resultsList: { paddingHorizontal: 20, paddingBottom: 40 },
  noResults: { color: COLORS.muted, textAlign: 'center', marginTop: 40, fontSize: 15 },

  resultRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 0,
    borderColor: COLORS.border,
    gap: 12,
  },
  resultFirst: { borderTopLeftRadius: 12, borderTopRightRadius: 12 },
  resultLast:  { borderBottomWidth: 1, borderBottomLeftRadius: 12, borderBottomRightRadius: 12 },

  resultIcon: { fontSize: 20, width: 28, textAlign: 'center' },
  resultBody: { flex: 1 },
  resultName: { fontSize: 15, fontWeight: '600', color: COLORS.text },
  resultSub:  { fontSize: 12, color: COLORS.muted, marginTop: 1 },

  kindBadge: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 7,
    paddingVertical: 2,
  },
  kindBadgeText: { fontSize: 11, fontWeight: '600' },

  // ── Home scroll area ──────────────────────────────────────────────────────────
  scrollArea: { flex: 1 },
  scrollContent: { paddingBottom: 40 },

  // ── Favorites ─────────────────────────────────────────────────────────────────
  speedDialSection: { marginTop: 24, marginHorizontal: 20 },
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 8,
    marginLeft: 2,
  },
  sectionHeaderText: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.gold,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  emptyFavorites: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  emptyFavoritesText: {
    fontSize: 13,
    color: COLORS.muted,
    textAlign: 'center',
    lineHeight: 20,
  },

  // ── Nav tiles ─────────────────────────────────────────────────────────────────
  navList: {
    marginTop: 24,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 16,
    overflow: 'hidden',
  },
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    paddingVertical: 20,
    paddingHorizontal: 20,
    gap: 16,
  },
  navItemBorder: { borderBottomWidth: 1, borderBottomColor: COLORS.border },
  navIcon:  { fontSize: 26, lineHeight: 32, width: 34, textAlign: 'center' },
  navLabel: { flex: 1, fontSize: 17, fontWeight: '600', color: COLORS.text },

  spacer: { flex: 1, minHeight: 24 },
  signature: { textAlign: 'center', color: COLORS.muted, fontSize: 14, paddingBottom: 16 },
});
