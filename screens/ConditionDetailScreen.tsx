import { useLayoutEffect } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../App';
import { conditions } from '../data/conditions';
import { usePins } from '../contexts/PinsContext';

type Route = RouteProp<RootStackParamList, 'ConditionDetail'>;

function acuityBadgeStyle(acuity: string) {
  if (acuity === 'High')     return { backgroundColor: '#3a1a1a', borderColor: '#f85149' };
  if (acuity === 'Moderate') return { backgroundColor: '#3a2e0a', borderColor: '#e3b341' };
  return { backgroundColor: '#1a3a1a', borderColor: '#3fb950' };
}

function acuityTextStyle(acuity: string) {
  if (acuity === 'High')     return { color: '#f85149' };
  if (acuity === 'Moderate') return { color: '#e3b341' };
  return { color: '#3fb950' };
}

export default function ConditionDetailScreen() {
  const { params } = useRoute<Route>();
  const navigation = useNavigation();
  const { isPinned, togglePin } = usePins();

  const condition = conditions.find(c => c.id === params.conditionId);
  const pinned = condition ? isPinned('condition', condition.id) : false;

  useLayoutEffect(() => {
    if (!condition) return;
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          onPress={() => togglePin({ kind: 'condition', id: condition.id, name: condition.name, sub: condition.system })}
          style={{ width: 36, height: 36, alignItems: 'center', justifyContent: 'center' }}
        >
          <Ionicons name={pinned ? 'star' : 'star-outline'} size={22} color={pinned ? '#e3b341' : '#8b949e'} />
        </Pressable>
      ),
    });
  }, [pinned, condition?.id]);

  if (!condition) {
    return (
      <View style={styles.notFound}>
        <Text style={styles.notFoundText}>Condition not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.root} contentContainerStyle={styles.content}>

      <Text style={styles.name}>{condition.name}</Text>
      {condition.aliases && (
        <Text style={styles.aliases}>{condition.aliases.join(' · ')}</Text>
      )}
      <View style={styles.badgeRow}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{condition.system}</Text>
        </View>
        <View style={[styles.badge, acuityBadgeStyle(condition.acuity)]}>
          <Text style={[styles.badgeText, acuityTextStyle(condition.acuity)]}>
            {condition.acuity} Acuity
          </Text>
        </View>
      </View>

      <Card title="Overview">
        <Text style={styles.bodyText}>{condition.overview}</Text>
      </Card>

      <Card title="Presentation">
        <Section label="Symptoms" items={condition.presentation.symptoms} />
        <Section label="Signs" items={condition.presentation.signs} />
        {condition.presentation.redFlags && (
          <Section label="🚩 Red Flags" items={condition.presentation.redFlags} accent />
        )}
      </Card>

      <Card title="Workup">
        {condition.workup.labs && condition.workup.labs.length > 0 && (
          <Section label="Labs" items={condition.workup.labs} />
        )}
        {condition.workup.imaging && condition.workup.imaging.length > 0 && (
          <Section label="Imaging" items={condition.workup.imaging} />
        )}
        {condition.workup.other && condition.workup.other.length > 0 && (
          <Section label="Other" items={condition.workup.other} />
        )}
      </Card>

      <Card title="Treatment">
        {condition.treatment.map((t, i) => (
          <View key={i} style={styles.treatmentStep}>
            <View style={styles.stepBadge}>
              <Text style={styles.stepNumber}>{i + 1}</Text>
            </View>
            <View style={styles.stepBody}>
              <Text style={styles.stepText}>{t.step}</Text>
              {t.detail && <Text style={styles.stepDetail}>{t.detail}</Text>}
            </View>
          </View>
        ))}
      </Card>

      <Card title="Disposition">
        <Text style={styles.bodyText}>{condition.disposition}</Text>
      </Card>

      {condition.pearls && condition.pearls.length > 0 && (
        <Card title="💎 Pearls">
          {condition.pearls.map((p, i) => (
            <View key={i} style={styles.bulletRow}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>{p}</Text>
            </View>
          ))}
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

function Section({ label, items, accent }: { label: string; items: string[]; accent?: boolean }) {
  return (
    <View style={styles.section}>
      <Text style={[styles.sectionLabel, accent && styles.sectionLabelAccent]}>{label}</Text>
      {items.map((item, i) => (
        <View key={i} style={styles.bulletRow}>
          <Text style={[styles.bullet, accent && styles.bulletAccent]}>•</Text>
          <Text style={[styles.bulletText, accent && styles.bulletTextAccent]}>{item}</Text>
        </View>
      ))}
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
};

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: C.bg },
  content: { padding: 20, paddingBottom: 60 },

  notFound: { flex: 1, backgroundColor: C.bg, alignItems: 'center', justifyContent: 'center' },
  notFoundText: { color: C.muted, fontSize: 16 },

  name: { fontSize: 28, fontWeight: '700', color: C.text, marginBottom: 4 },
  aliases: { fontSize: 14, color: C.muted, marginBottom: 12 },
  badgeRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 24 },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#1c2d4a',
    borderWidth: 1,
    borderColor: '#2f81f7',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  badgeText: { fontSize: 12, color: C.accent, fontWeight: '600' },

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

  section: { marginBottom: 12 },
  sectionLabel: { fontSize: 13, fontWeight: '600', color: C.muted, marginBottom: 6 },
  sectionLabelAccent: { color: C.red },

  bulletRow: { flexDirection: 'row', marginBottom: 4 },
  bullet: { color: C.muted, marginRight: 8, fontSize: 15, lineHeight: 22 },
  bulletAccent: { color: C.red },
  bulletText: { flex: 1, fontSize: 15, color: C.text, lineHeight: 22 },
  bulletTextAccent: { color: '#ffa198' },

  treatmentStep: { flexDirection: 'row', marginBottom: 12, alignItems: 'flex-start' },
  stepBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: C.accent,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    marginTop: 1,
  },
  stepNumber: { fontSize: 12, fontWeight: '700', color: '#fff' },
  stepBody: { flex: 1 },
  stepText: { fontSize: 15, color: C.text, fontWeight: '600', lineHeight: 22 },
  stepDetail: { fontSize: 14, color: C.muted, marginTop: 2, lineHeight: 20 },
});
