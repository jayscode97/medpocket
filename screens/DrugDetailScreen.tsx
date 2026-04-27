import { useLayoutEffect } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../App';
import { drugs } from '../data/drugs';
import { usePins } from '../contexts/PinsContext';

type Route = RouteProp<RootStackParamList, 'DrugDetail'>;

export default function DrugDetailScreen() {
  const { params } = useRoute<Route>();
  const navigation = useNavigation();
  const { isPinned, togglePin } = usePins();

  const drug = drugs.find(d => d.id === params.drugId);
  const pinned = drug ? isPinned('drug', drug.id) : false;

  useLayoutEffect(() => {
    if (!drug) return;
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => togglePin({ kind: 'drug', id: drug.id, name: drug.name, sub: drug.drugClass })}
          style={{ width: 36, height: 36, alignItems: 'center', justifyContent: 'center' }}
        >
          <Ionicons name={pinned ? 'star' : 'star-outline'} size={22} color={pinned ? '#e3b341' : '#8b949e'} />
        </TouchableOpacity>
      ),
    });
  }, [pinned, drug?.id]);

  if (!drug) {
    return (
      <View style={styles.notFound}>
        <Text style={styles.notFoundText}>Drug not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.root} contentContainerStyle={styles.content}>

      <Text style={styles.name}>{drug.name}</Text>
      {drug.brandNames && drug.brandNames.length > 0 && (
        <Text style={styles.brands}>{drug.brandNames.join(' · ')}</Text>
      )}
      <View style={styles.badgeRow}>
        <View style={[styles.badge, styles.badgeBlue]}>
          <Text style={[styles.badgeText, styles.badgeTextBlue]}>{drug.category}</Text>
        </View>
        <View style={[styles.badge, styles.badgePurple]}>
          <Text style={[styles.badgeText, styles.badgeTextPurple]}>{drug.drugClass}</Text>
        </View>
      </View>

      <Card title="Mechanism">
        <Text style={styles.bodyText}>{drug.mechanism}</Text>
      </Card>

      <Card title="Indications">
        {drug.indications.map((item, i) => (
          <BulletRow key={i} text={item} />
        ))}
      </Card>

      <Card title="Dosing">
        {drug.dosing.map((d, i) => (
          <View key={i} style={styles.dosingRow}>
            <View style={styles.dosingHeader}>
              <Text style={styles.dosingIndication}>{d.indication}</Text>
              <View style={styles.routeBadge}>
                <Text style={styles.routeText}>{d.route}</Text>
              </View>
            </View>
            <Text style={styles.dosingDose}>{d.dose}</Text>
            {d.notes && <Text style={styles.dosingNotes}>{d.notes}</Text>}
          </View>
        ))}
      </Card>

      <Card title="Contraindications">
        {drug.contraindications.map((item, i) => (
          <BulletRow key={i} text={item} accent />
        ))}
      </Card>

      <Card title="Side Effects">
        {drug.sideEffects.map((item, i) => (
          <BulletRow key={i} text={item} />
        ))}
      </Card>

      {drug.monitoring && drug.monitoring.length > 0 && (
        <Card title="Monitoring">
          {drug.monitoring.map((item, i) => (
            <BulletRow key={i} text={item} />
          ))}
        </Card>
      )}

      {drug.interactions && drug.interactions.length > 0 && (
        <Card title="Interactions">
          {drug.interactions.map((item, i) => (
            <BulletRow key={i} text={item} warn />
          ))}
        </Card>
      )}

      {drug.pearls && drug.pearls.length > 0 && (
        <Card title="💎 Pearls">
          {drug.pearls.map((p, i) => (
            <BulletRow key={i} text={p} />
          ))}
        </Card>
      )}

      {drug.pregnancy && (
        <Card title="Pregnancy">
          <Text style={styles.bodyText}>{drug.pregnancy}</Text>
        </Card>
      )}

    </ScrollView>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <View style={styles.cardDivider} />
      {children}
    </View>
  );
}

function BulletRow({ text, accent, warn }: { text: string; accent?: boolean; warn?: boolean }) {
  return (
    <View style={styles.bulletRow}>
      <Text style={[styles.bullet, accent && styles.bulletRed, warn && styles.bulletYellow]}>•</Text>
      <Text style={[styles.bulletText, accent && styles.bulletTextRed, warn && styles.bulletTextYellow]}>{text}</Text>
    </View>
  );
}

const C = {
  bg:      '#0d1117',
  surface: '#161b22',
  border:  '#21262d',
  accent:  '#2f81f7',
  text:    '#e6edf3',
  muted:   '#8b949e',
  red:     '#f85149',
  yellow:  '#e3b341',
  purple:  '#bc8cff',
};

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: C.bg },
  content: { padding: 20, paddingBottom: 60 },

  notFound: { flex: 1, backgroundColor: C.bg, alignItems: 'center', justifyContent: 'center' },
  notFoundText: { color: C.muted, fontSize: 16 },

  name: { fontSize: 28, fontWeight: '700', color: C.text, marginBottom: 4 },
  brands: { fontSize: 14, color: C.muted, marginBottom: 12 },

  badgeRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 24 },
  badge: {
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  badgeBlue: { backgroundColor: '#1c2d4a', borderColor: C.accent },
  badgeTextBlue: { fontSize: 12, color: C.accent, fontWeight: '600' },
  badgePurple: { backgroundColor: '#2d1f47', borderColor: C.purple },
  badgeTextPurple: { fontSize: 12, color: C.purple, fontWeight: '600' },
  badgeText: {},

  card: {
    backgroundColor: C.surface,
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
  },
  cardTitle: { fontSize: 13, fontWeight: '700', color: C.muted, textTransform: 'uppercase', letterSpacing: 0.8 },
  cardDivider: { height: 1, backgroundColor: C.border, marginVertical: 10 },

  bodyText: { fontSize: 15, color: C.text, lineHeight: 22 },

  bulletRow: { flexDirection: 'row', marginBottom: 4 },
  bullet: { color: C.muted, marginRight: 8, fontSize: 15, lineHeight: 22 },
  bulletRed: { color: C.red },
  bulletYellow: { color: C.yellow },
  bulletText: { flex: 1, fontSize: 15, color: C.text, lineHeight: 22 },
  bulletTextRed: { color: '#ffa198' },
  bulletTextYellow: { color: '#f0c060' },

  dosingRow: {
    backgroundColor: '#0d1117',
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 10,
    padding: 12,
    marginBottom: 8,
  },
  dosingHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 },
  dosingIndication: { flex: 1, fontSize: 14, fontWeight: '600', color: C.text, marginRight: 8 },
  routeBadge: {
    backgroundColor: '#1c3a2a',
    borderWidth: 1,
    borderColor: '#2ea043',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  routeText: { fontSize: 11, color: '#3fb950', fontWeight: '600' },
  dosingDose: { fontSize: 15, color: C.accent, fontWeight: '600', lineHeight: 22 },
  dosingNotes: { fontSize: 13, color: C.muted, marginTop: 4, lineHeight: 18 },
});
