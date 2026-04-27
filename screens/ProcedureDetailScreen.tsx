import { useLayoutEffect } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../App';
import { procedures } from '../data/procedures';
import { usePins } from '../contexts/PinsContext';

type Route = RouteProp<RootStackParamList, 'ProcedureDetail'>;

export default function ProcedureDetailScreen() {
  const { params } = useRoute<Route>();
  const navigation = useNavigation();
  const { isPinned, togglePin } = usePins();

  const procedure = procedures.find(p => p.id === params.procedureId);
  const pinned = procedure ? isPinned('procedure', procedure.id) : false;

  useLayoutEffect(() => {
    if (!procedure) return;
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          onPress={() => togglePin({ kind: 'procedure', id: procedure.id, name: procedure.name, sub: procedure.category })}
          style={{ width: 36, height: 36, alignItems: 'center', justifyContent: 'center' }}
        >
          <Ionicons name={pinned ? 'star' : 'star-outline'} size={22} color={pinned ? '#e3b341' : '#8b949e'} />
        </Pressable>
      ),
    });
  }, [pinned, procedure?.id]);

  if (!procedure) {
    return (
      <View style={styles.notFound}>
        <Text style={styles.notFoundText}>Procedure not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.root} contentContainerStyle={styles.content}>

      <Text style={styles.name}>{procedure.name}</Text>
      {procedure.aliases && procedure.aliases.length > 0 && (
        <Text style={styles.aliases}>{procedure.aliases.join(' · ')}</Text>
      )}
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{procedure.category}</Text>
      </View>

      <Card title="Overview">
        <Text style={styles.bodyText}>{procedure.overview}</Text>
      </Card>

      <Card title="Indications">
        {procedure.indications.map((item, i) => (
          <BulletRow key={i} text={item} />
        ))}
      </Card>

      {procedure.contraindications && procedure.contraindications.length > 0 && (
        <Card title="Contraindications">
          {procedure.contraindications.map((item, i) => (
            <BulletRow key={i} text={item} accent />
          ))}
        </Card>
      )}

      {procedure.equipment && procedure.equipment.length > 0 && (
        <Card title="Equipment">
          {procedure.equipment.map((item, i) => (
            <BulletRow key={i} text={item} />
          ))}
        </Card>
      )}

      {procedure.positioning && (
        <Card title="Positioning">
          <Text style={styles.bodyText}>{procedure.positioning}</Text>
        </Card>
      )}

      {procedure.phases.map((phase, phaseIndex) => (
        <View key={phaseIndex} style={styles.phaseBlock}>
          <View style={styles.phaseHeader}>
            <View style={styles.phaseNumberBadge}>
              <Text style={styles.phaseNumber}>{phaseIndex + 1}</Text>
            </View>
            <Text style={styles.phaseTitle}>{phase.title}</Text>
          </View>
          <View style={styles.phaseCard}>
            {phase.steps.map((step, stepIndex) => (
              <View key={stepIndex} style={styles.stepRow}>
                <View style={styles.stepLeft}>
                  <View style={styles.stepDot} />
                  {stepIndex < phase.steps.length - 1 && <View style={styles.stepLine} />}
                </View>
                <View style={styles.stepBody}>
                  <Text style={styles.stepText}>{step.step}</Text>
                  {step.detail && (
                    <Text style={styles.stepDetail}>{step.detail}</Text>
                  )}
                </View>
              </View>
            ))}
          </View>
        </View>
      ))}

      {procedure.complications && procedure.complications.length > 0 && (
        <Card title="Complications">
          {procedure.complications.map((item, i) => (
            <BulletRow key={i} text={item} accent />
          ))}
        </Card>
      )}

      {procedure.pearls && procedure.pearls.length > 0 && (
        <Card title="💎 Pearls">
          {procedure.pearls.map((p, i) => (
            <BulletRow key={i} text={p} />
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

function BulletRow({ text, accent }: { text: string; accent?: boolean }) {
  return (
    <View style={styles.bulletRow}>
      <Text style={[styles.bullet, accent && styles.bulletRed]}>•</Text>
      <Text style={[styles.bulletText, accent && styles.bulletTextRed]}>{text}</Text>
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
  green:   '#3fb950',
};

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: C.bg },
  content: { padding: 20, paddingBottom: 60 },

  notFound: { flex: 1, backgroundColor: C.bg, alignItems: 'center', justifyContent: 'center' },
  notFoundText: { color: C.muted, fontSize: 16 },

  name: { fontSize: 26, fontWeight: '700', color: C.text, marginBottom: 4 },
  aliases: { fontSize: 13, color: C.muted, marginBottom: 12 },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#1c3a2a',
    borderWidth: 1,
    borderColor: C.green,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginBottom: 24,
  },
  badgeText: { fontSize: 12, color: C.green, fontWeight: '600' },

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

  bulletRow: { flexDirection: 'row', marginBottom: 5 },
  bullet: { color: C.muted, marginRight: 8, fontSize: 15, lineHeight: 22 },
  bulletRed: { color: C.red },
  bulletText: { flex: 1, fontSize: 15, color: C.text, lineHeight: 22 },
  bulletTextRed: { color: '#ffa198' },

  phaseBlock: { marginBottom: 14 },
  phaseHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 10,
  },
  phaseNumberBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: C.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  phaseNumber: { fontSize: 13, fontWeight: '700', color: '#fff' },
  phaseTitle: { flex: 1, fontSize: 15, fontWeight: '700', color: C.text },

  phaseCard: {
    backgroundColor: C.surface,
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 12,
    padding: 14,
  },
  stepRow: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  stepLeft: {
    width: 20,
    alignItems: 'center',
    marginRight: 10,
  },
  stepDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: C.accent,
    marginTop: 8,
  },
  stepLine: {
    flex: 1,
    width: 1,
    backgroundColor: C.border,
    marginTop: 3,
    marginBottom: -3,
    alignSelf: 'center',
  },
  stepBody: {
    flex: 1,
    paddingBottom: 12,
  },
  stepText: { fontSize: 15, color: C.text, lineHeight: 22, fontWeight: '500' },
  stepDetail: { fontSize: 13, color: C.muted, lineHeight: 19, marginTop: 3 },
});
