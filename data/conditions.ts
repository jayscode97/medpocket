import { Condition } from './types';

export const conditions: Condition[] = [

  // ─── Cardiovascular ──────────────────────────────────────────────────────────

  {
    id: 'stemi',
    name: 'STEMI',
    aliases: ['ST-Elevation MI', 'Acute MI'],
    system: 'Cardiovascular',
    acuity: 'High',
    tags: ['chest pain', 'acs', 'ecg'],
    overview: 'Complete occlusion of a coronary artery causing full-thickness myocardial infarction. Time-sensitive — door-to-balloon < 90 min.',
    presentation: {
      symptoms: ['Crushing chest pain', 'Radiation to left arm or jaw', 'Diaphoresis', 'Nausea', 'Dyspnea'],
      signs: ['Diaphoresis', 'S3 or S4 gallop', 'New MR murmur'],
      redFlags: ['Hemodynamic instability', 'Signs of cardiogenic shock', 'New LBBB'],
    },
    workup: {
      labs: ['Troponin (serial)', 'BMP', 'CBC', 'Coagulation studies', 'BNP'],
      imaging: ['12-lead ECG (stat)', 'CXR', 'Echo if diagnosis unclear'],
    },
    treatment: [
      { step: 'Activate cath lab immediately' },
      { step: 'Aspirin 325 mg PO' },
      { step: 'P2Y12 inhibitor', detail: 'Ticagrelor 180 mg or Clopidogrel 600 mg PO' },
      { step: 'Anticoagulation', detail: 'Heparin IV per weight-based protocol' },
      { step: 'Nitroglycerin SL', detail: 'Avoid if hypotensive or RV infarct suspected' },
      { step: 'Morphine 2–4 mg IV PRN pain (use cautiously)' },
    ],
    disposition: 'Cath lab → CCU admission',
    pearls: [
      'Check posterior leads (V7–V9) if inferior STEMI to rule out posterior MI',
      'RV infarct: avoid nitrates and diuretics, give fluids',
      'New LBBB with symptoms = treat as STEMI',
    ],
  },

  {
    id: 'afib-rvr',
    name: 'Atrial Fibrillation with RVR',
    aliases: ['AF', 'A-fib'],
    system: 'Cardiovascular',
    acuity: 'High',
    tags: ['arrhythmia', 'palpitations', 'tachycardia'],
    overview: 'Irregularly irregular supraventricular arrhythmia. Manage rate vs. rhythm based on stability and duration.',
    presentation: {
      symptoms: ['Palpitations', 'Dyspnea', 'Chest discomfort', 'Fatigue', 'Lightheadedness'],
      signs: ['Irregularly irregular pulse', 'Tachycardia', 'Variable BP'],
      redFlags: ['Hemodynamic instability', 'Chest pain', 'Altered mental status'],
    },
    workup: {
      labs: ['BMP', 'Mg', 'TSH', 'Troponin', 'CBC'],
      imaging: ['12-lead ECG', 'CXR', 'Echo if new diagnosis'],
    },
    treatment: [
      { step: 'Unstable → synchronized cardioversion 200J biphasic' },
      { step: 'Rate control (stable)', detail: 'Metoprolol 5 mg IV q5min × 3, or Diltiazem 0.25 mg/kg IV' },
      { step: 'Rhythm control if < 48 h or anticoagulated', detail: 'Amiodarone or electrical cardioversion' },
      { step: 'Anticoagulation', detail: 'Heparin IV bridge; DOAC for long-term based on CHA₂DS₂-VASc' },
    ],
    disposition: 'Admit if new-onset, unstable, or unclear duration. Discharge if chronic, rate-controlled, and anticoagulated.',
    pearls: [
      'Duration < 48 h or > 48 h changes cardioversion safety',
      'Pre-excitation (WPW) + AF: avoid AV nodal blockers — use procainamide',
      'Correct electrolytes before cardioversion',
    ],
  },

  // ─── Pulmonary ────────────────────────────────────────────────────────────────

  {
    id: 'pe',
    name: 'Pulmonary Embolism',
    aliases: ['PE', 'DVT/PE'],
    system: 'Pulmonary',
    acuity: 'High',
    tags: ['dyspnea', 'chest pain', 'hypoxia', 'dvt'],
    overview: 'Thrombotic occlusion of pulmonary vasculature. Risk-stratify with Wells score and PERC rule.',
    presentation: {
      symptoms: ['Sudden dyspnea', 'Pleuritic chest pain', 'Cough', 'Leg swelling or pain'],
      signs: ['Tachycardia', 'Tachypnea', 'Hypoxia', 'Unilateral leg swelling'],
      redFlags: ['Hypotension', 'Syncope', 'Cyanosis — massive PE'],
    },
    workup: {
      labs: ['D-dimer (if low probability)', 'BNP', 'Troponin', 'BMP', 'ABG'],
      imaging: ['CT-PA (gold standard)', 'V/Q scan if contrast contraindicated', 'Bedside echo (RV strain)'],
    },
    treatment: [
      { step: 'Anticoagulation', detail: 'Heparin 80 units/kg IV bolus then 18 units/kg/h' },
      { step: 'Massive PE with instability → systemic thrombolytics', detail: 'tPA 100 mg IV over 2 h' },
      { step: 'Submassive PE → consider catheter-directed therapy' },
      { step: 'Supplemental O₂, IV access, hemodynamic support' },
    ],
    disposition: 'Massive/submassive: ICU. Low-risk (PESI I-II): consider discharge with DOAC.',
    pearls: [
      'PERC rule: if all 8 criteria met, no further workup needed',
      'S1Q3T3 is classic but insensitive; sinus tach is most common ECG finding',
      'RV dilation on echo = poor prognosis',
    ],
  },

  {
    id: 'asthma-exacerbation',
    name: 'Acute Asthma Exacerbation',
    aliases: ['Status asthmaticus'],
    system: 'Pulmonary',
    acuity: 'High',
    tags: ['wheeze', 'dyspnea', 'bronchospasm'],
    overview: 'Reversible airway obstruction from inflammation and bronchospasm. Severity guides stepwise management.',
    presentation: {
      symptoms: ['Dyspnea', 'Wheezing', 'Chest tightness', 'Cough'],
      signs: ['Expiratory wheeze', 'Prolonged expiration', 'Accessory muscle use', 'Pulsus paradoxus'],
      redFlags: ['Silent chest', 'Cyanosis', 'Fatigue/AMS — impending respiratory failure'],
    },
    workup: {
      labs: ['ABG if severe', 'BMP'],
      imaging: ['CXR to rule out pneumothorax or pneumonia'],
      other: ['Peak flow', 'SpO₂'],
    },
    treatment: [
      { step: 'Albuterol 2.5 mg nebulized q20min × 3, then continuous if severe' },
      { step: 'Ipratropium 0.5 mg nebulized with albuterol' },
      { step: 'Systemic corticosteroids', detail: 'Methylprednisolone 125 mg IV or Prednisone 40–60 mg PO' },
      { step: 'Magnesium sulfate 2 g IV over 20 min (moderate–severe)' },
      { step: 'Heliox if refractory' },
      { step: 'Intubate if deteriorating — RSI preferred' },
    ],
    disposition: 'Discharge if peak flow > 70% predicted after treatment. Admit if < 50% or poor response.',
    pearls: [
      'Normal PaCO₂ in a tachypneic asthmatic is a warning sign — they are tiring',
      'Avoid ketamine for sedation concerns in reactive airway (actually may be bronchodilatory)',
      'NIPPV can be used as bridge before intubation',
    ],
  },

  // ─── Neurological ─────────────────────────────────────────────────────────────

  {
    id: 'ischemic-stroke',
    name: 'Ischemic Stroke',
    aliases: ['CVA', 'Cerebrovascular accident'],
    system: 'Neurological',
    acuity: 'High',
    tags: ['focal deficit', 'slurred speech', 'face droop', 'tpa'],
    overview: 'Focal neurological deficit from arterial occlusion. Time is brain — tPA window 3–4.5 h, thrombectomy up to 24 h.',
    presentation: {
      symptoms: ['Sudden focal weakness', 'Speech difficulty', 'Vision changes', 'Headache', 'Ataxia'],
      signs: ['Facial droop', 'Arm drift', 'Dysarthria', 'Neglect', 'Gaze deviation'],
      redFlags: ['GCS decline', 'Herniation signs', 'Hemorrhagic transformation'],
    },
    workup: {
      labs: ['BMP', 'CBC', 'Coags', 'Glucose (stat)', 'Lipids', 'HbA1c'],
      imaging: ['Non-contrast CT head (stat)', 'CT-A head & neck', 'MRI-DWI if CT negative'],
    },
    treatment: [
      { step: 'Activate stroke team immediately' },
      { step: 'IV tPA 0.9 mg/kg (max 90 mg)', detail: '10% bolus over 1 min, remainder over 1 h. Check eligibility.' },
      { step: 'Mechanical thrombectomy if large vessel occlusion and within window' },
      { step: 'BP management', detail: 'Allow permissive HTN < 220/120 if no tPA. If tPA given, keep < 180/105.' },
      { step: 'Aspirin 325 mg PO (after tPA exclusion window)' },
    ],
    disposition: 'Stroke unit or ICU admission. Neurology consult.',
    pearls: [
      'Check glucose before anything — hypoglycemia mimics stroke',
      'Posterior circulation strokes may have normal CT',
      'NIHSS guides tPA eligibility and severity',
    ],
  },

  // ─── Gastrointestinal ─────────────────────────────────────────────────────────

  {
    id: 'ugib',
    name: 'Upper GI Bleed',
    aliases: ['UGIB', 'Hematemesis', 'Melena'],
    system: 'Gastrointestinal',
    acuity: 'High',
    tags: ['bleeding', 'hematemesis', 'melena', 'peptic ulcer'],
    overview: 'Hemorrhage proximal to the ligament of Treitz. Peptic ulcer disease is the most common cause.',
    presentation: {
      symptoms: ['Hematemesis', 'Coffee-ground emesis', 'Melena', 'Syncope', 'Weakness'],
      signs: ['Tachycardia', 'Hypotension', 'Pallor', 'Guaiac-positive stool'],
      redFlags: ['Hemodynamic instability', 'Active hematemesis', 'Altered mental status'],
    },
    workup: {
      labs: ['CBC', 'BMP', 'Coags', 'Type & Screen/Crossmatch', 'LFTs', 'BUN (BUN:Cr > 20:1 suggests UGIB)'],
      imaging: ['CXR', 'CT angiography if brisk bleed'],
      other: ['NGT lavage if diagnosis unclear'],
    },
    treatment: [
      { step: '2 large-bore IVs, aggressive resuscitation with crystalloid then PRBC' },
      { step: 'PPI', detail: 'Pantoprazole 80 mg IV bolus then 8 mg/h infusion' },
      { step: 'Octreotide if variceal bleed', detail: '50 mcg IV bolus then 50 mcg/h infusion' },
      { step: 'Ceftriaxone 1 g IV if cirrhosis (SBP prophylaxis)' },
      { step: 'Urgent GI consult for endoscopy' },
    ],
    disposition: 'ICU or monitored bed. Stratify with Glasgow-Blatchford score.',
    pearls: [
      'Transfuse to Hgb > 7 (> 9 if ACS or poor cardiopulmonary reserve)',
      'BUN:Cr ratio > 20:1 suggests UGIB vs. LGIB',
      'Avoid FFP unless active coagulopathy — does not prevent rebleeding',
    ],
  },

  // ─── Renal & GU ───────────────────────────────────────────────────────────────

  {
    id: 'hyperkalemia',
    name: 'Hyperkalemia',
    system: 'Renal & GU',
    acuity: 'High',
    tags: ['potassium', 'ecg changes', 'renal failure', 'arrhythmia'],
    overview: 'Serum K⁺ > 5.5 mEq/L. ECG changes guide urgency of treatment.',
    presentation: {
      symptoms: ['Weakness', 'Fatigue', 'Palpitations', 'Nausea'],
      signs: ['Bradycardia', 'ECG changes', 'Paralysis (severe)'],
      redFlags: ['Wide complex arrhythmia', 'Sine wave pattern', 'Cardiac arrest'],
    },
    workup: {
      labs: ['BMP (repeat if hemolyzed)', 'ABG', 'Digoxin level if on digoxin'],
      imaging: [],
      other: ['12-lead ECG (peaked T-waves → PR prolongation → wide QRS → sine wave)'],
    },
    treatment: [
      { step: 'ECG changes or K⁺ > 6.5 → Calcium gluconate 1–3 g IV', detail: 'Membrane stabilization. Onset 1–3 min.' },
      { step: 'Insulin 10 units IV + Dextrose 50 g IV', detail: 'Shifts K⁺ intracellularly. Onset 15–30 min.' },
      { step: 'Albuterol 10–20 mg nebulized', detail: 'Shifts K⁺ intracellularly. Additive to insulin.' },
      { step: 'Sodium bicarbonate 1–2 mEq/kg IV if acidotic' },
      { step: 'Remove K⁺: Furosemide, Kayexalate, or dialysis for refractory cases' },
    ],
    disposition: 'Admit for monitoring. ICU if arrhythmia or severe.',
    pearls: [
      'Calcium stabilizes the membrane but does NOT lower K⁺',
      'Dialysis is the definitive treatment for severe or refractory hyperkalemia',
      'Pseudohyperkalemia: hemolyzed sample — always repeat',
    ],
  },

  // ─── Infectious Disease ───────────────────────────────────────────────────────

  {
    id: 'sepsis',
    name: 'Sepsis / Septic Shock',
    system: 'Infectious Disease',
    acuity: 'High',
    tags: ['fever', 'hypotension', 'infection', 'lactate', 'shock'],
    overview: 'Life-threatening organ dysfunction from dysregulated host response to infection. Septic shock = sepsis + vasopressors + lactate > 2.',
    presentation: {
      symptoms: ['Fever or hypothermia', 'Chills', 'Altered mental status', 'Decreased urine output'],
      signs: ['Tachycardia', 'Tachypnea', 'Hypotension', 'Mottling', 'Warm/flushed skin (early)'],
      redFlags: ['Lactate > 4', 'SBP < 90 despite fluids', 'AMS'],
    },
    workup: {
      labs: ['Blood cultures × 2 (before abx)', 'CBC', 'BMP', 'LFTs', 'Coags', 'Lactate', 'UA + culture', 'Procalcitonin'],
      imaging: ['CXR', 'CT based on source'],
    },
    treatment: [
      { step: 'Blood cultures × 2 BEFORE antibiotics' },
      { step: 'Broad-spectrum antibiotics within 1 hour', detail: 'Vancomycin + Pip-Tazo or Cefepime. Adjust per source.' },
      { step: 'IV fluid resuscitation', detail: '30 mL/kg crystalloid bolus within 3 h' },
      { step: 'Vasopressors if MAP < 65 after fluids', detail: 'Norepinephrine first-line via central line' },
      { step: 'Source control (drainage, debridement as needed)' },
    ],
    disposition: 'ICU admission for septic shock. Step-down if sepsis without shock and improving.',
    pearls: [
      'Lactate ≥ 2 = sepsis; ≥ 4 = septic shock even with normal BP',
      'Norepinephrine is first-line vasopressor',
      'Do not delay antibiotics for cultures if patient is deteriorating',
    ],
  },

  // ─── Endocrine & Metabolic ────────────────────────────────────────────────────

  {
    id: 'dka',
    name: 'Diabetic Ketoacidosis',
    aliases: ['DKA'],
    system: 'Endocrine & Metabolic',
    acuity: 'High',
    tags: ['diabetes', 'ketosis', 'acidosis', 'hyperglycemia'],
    overview: 'Insulin deficiency → hyperglycemia + ketoacidosis. Triad: glucose > 250, pH < 7.3, ketonemia.',
    presentation: {
      symptoms: ['Polyuria', 'Polydipsia', 'Nausea/vomiting', 'Abdominal pain', 'Weakness'],
      signs: ['Kussmaul breathing', 'Fruity breath', 'Dehydration', 'AMS in severe cases'],
      redFlags: ['GCS < 14', 'pH < 7.0', 'K⁺ < 3.5 (hold insulin)'],
    },
    workup: {
      labs: ['BMP q2–4h', 'ABG or VBG', 'CBC', 'Urinalysis + ketones', 'Phosphate', 'Mg', 'HbA1c', 'Blood cultures if febrile'],
      imaging: ['CXR (look for precipitant)'],
    },
    treatment: [
      { step: 'IV fluids', detail: 'NS 1 L bolus, then 250–500 mL/h. Switch to D5 ½NS when glucose < 250.' },
      { step: 'Potassium replacement', detail: 'Hold insulin if K⁺ < 3.5. Replace to > 3.5 before starting insulin.' },
      { step: 'Insulin', detail: 'Regular insulin 0.1 units/kg/h IV infusion (after K⁺ ≥ 3.5)' },
      { step: 'Treat precipitant (infection, missed insulin, etc.)' },
      { step: 'Bicarbonate only if pH < 6.9' },
    ],
    disposition: 'ICU or step-down. Monitor q1–2h labs until anion gap closes.',
    pearls: [
      'ALWAYS check potassium before starting insulin — insulin drives K⁺ intracellularly',
      'Anion gap closure (not glucose normalization) defines DKA resolution',
      'Euglycemic DKA: glucose may be < 250 (seen with SGLT-2 inhibitors)',
    ],
  },

  // ─── Toxicology ───────────────────────────────────────────────────────────────

  {
    id: 'acetaminophen-overdose',
    name: 'Acetaminophen Overdose',
    aliases: ['Tylenol OD', 'APAP toxicity', 'Paracetamol OD'],
    system: 'Toxicology',
    acuity: 'High',
    tags: ['overdose', 'liver failure', 'nac', 'intentional ingestion'],
    overview: 'Leading cause of acute liver failure. Early symptoms are mild — high clinical suspicion required. NAC is highly effective if given early.',
    presentation: {
      symptoms: ['Phase I (0–24h): Nausea, vomiting, malaise', 'Phase II (24–72h): RUQ pain, elevated LFTs', 'Phase III (72–96h): Liver failure'],
      signs: ['RUQ tenderness', 'Jaundice (late)', 'Encephalopathy (severe)'],
      redFlags: ['INR > 2', 'Creatinine rising', 'AMS'],
    },
    workup: {
      labs: ['APAP level at 4 h post-ingestion', 'LFTs', 'INR/PT', 'BMP', 'BHCg'],
      other: ['Rumack-Matthew nomogram to guide NAC decision'],
    },
    treatment: [
      { step: 'Activated charcoal 1 g/kg PO if < 2 h from ingestion and airway intact' },
      { step: 'N-acetylcysteine (NAC)', detail: 'IV: 150 mg/kg over 1 h, then 50 mg/kg over 4 h, then 100 mg/kg over 16 h. Or 70 mg/kg PO q4h × 17 doses.' },
      { step: 'Hepatology/transplant consult if severe hepatotoxicity' },
    ],
    disposition: 'Admit if NAC indicated. Psych consult if intentional ingestion.',
    pearls: [
      'Plot APAP level on Rumack-Matthew nomogram at 4 h — this guides treatment, not dose alone',
      'If exact time of ingestion unknown, treat empirically with NAC',
      'King\'s College Criteria for transplant listing',
    ],
  },

  // ─── Trauma ───────────────────────────────────────────────────────────────────

  {
    id: 'tension-pneumothorax',
    name: 'Tension Pneumothorax',
    system: 'Trauma',
    acuity: 'High',
    tags: ['chest trauma', 'respiratory failure', 'needle decompression', 'arrest'],
    overview: 'Air trapped under pressure in pleural space → mediastinal shift → obstructive shock. Clinical diagnosis — do not wait for imaging.',
    presentation: {
      symptoms: ['Severe dyspnea', 'Chest pain'],
      signs: ['Tracheal deviation (late)', 'Absent breath sounds unilaterally', 'Hypotension', 'JVD', 'Hypoxia'],
      redFlags: ['PEA arrest', 'Rapid deterioration after intubation'],
    },
    workup: {
      labs: [],
      imaging: ['Clinical diagnosis — CXR only if stable and diagnosis uncertain'],
    },
    treatment: [
      { step: 'Needle decompression (immediate)', detail: '14–16g needle, 2nd ICS midclavicular line OR 4th/5th ICS anterior axillary line' },
      { step: 'Finger thoracostomy if intubated or penetrating trauma' },
      { step: 'Chest tube placement (28–32 Fr) after initial decompression' },
    ],
    disposition: 'ICU or OR.',
    pearls: [
      'Do not delay treatment for imaging — this is a clinical diagnosis',
      'PEA + absent breath sounds + JVD = tension pneumo until proven otherwise',
      '4th/5th ICS AAL is preferred over 2nd ICS MCL in obese patients',
    ],
  },

  // ─── Musculoskeletal ──────────────────────────────────────────────────────────

  // TODO: Add conditions

  // ─── Hematology & Oncology ────────────────────────────────────────────────────

  // TODO: Add conditions

  // ─── Dermatology ──────────────────────────────────────────────────────────────

  // TODO: Add conditions

  // ─── Ophthalmology ────────────────────────────────────────────────────────────

  // TODO: Add conditions

  // ─── ENT ──────────────────────────────────────────────────────────────────────

  // TODO: Add conditions

  // ─── Psychiatry ───────────────────────────────────────────────────────────────

  // TODO: Add conditions

  // ─── OB/GYN ───────────────────────────────────────────────────────────────────

  // TODO: Add conditions

];

export const conditionsBySystem = conditions.reduce<Record<string, Condition[]>>(
  (acc, condition) => {
    if (!acc[condition.system]) acc[condition.system] = [];
    acc[condition.system].push(condition);
    return acc;
  },
  {}
);
