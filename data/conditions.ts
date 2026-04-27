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

  // ─── Cardiovascular (Moderate) ───────────────────────────────────────────────

  {
    id: 'nstemi',
    name: 'NSTEMI / Unstable Angina',
    aliases: ['NSTEMI', 'UA', 'Non-ST Elevation MI', 'ACS'],
    system: 'Cardiovascular',
    acuity: 'Moderate',
    tags: ['chest pain', 'acs', 'troponin', 'ecg'],
    overview: 'Partial or dynamic coronary obstruction causing myocardial ischemia without complete transmural infarction. NSTEMI = positive troponin; UA = negative troponin. Risk-stratify early to guide timing of catheterization.',
    presentation: {
      symptoms: ['Chest pain or pressure (can radiate to arm or jaw)', 'Dyspnea', 'Diaphoresis', 'Nausea', 'Atypical: epigastric pain, fatigue (women, diabetics, elderly)'],
      signs: ['May be normal', 'Diaphoresis', 'S3 or S4 gallop if LV dysfunction', 'New MR murmur'],
      redFlags: ['Ongoing pain at rest', 'Hemodynamic instability', 'New ST depression or T-wave inversions', 'EF < 40%'],
    },
    workup: {
      labs: ['Serial troponin (0 h, 3 h, 6 h — or high-sensitivity 0/1/3 h protocol)', 'BMP', 'CBC', 'Coagulation studies', 'BNP', 'Lipid panel', 'HbA1c'],
      imaging: ['12-lead ECG (ST depression, T-wave inversions, LBBB)', 'CXR', 'Echo if LV function unknown'],
    },
    treatment: [
      { step: 'Aspirin 325 mg PO chewed + P2Y12 inhibitor', detail: 'Ticagrelor 180 mg PO or clopidogrel 600 mg PO (discuss with cardiology before giving if CABG possible)' },
      { step: 'Anticoagulation', detail: 'Heparin IV weight-based or enoxaparin 1 mg/kg SQ q12h' },
      { step: 'Nitroglycerin SL for active pain; IV nitroglycerin if refractory', detail: 'Avoid if hypotensive or RV infarct suspected' },
      { step: 'Beta-blocker PO if no contraindications', detail: 'Metoprolol 25–50 mg PO; avoid if HR < 60, HF, shock, 2°/3° block' },
      { step: 'High-intensity statin', detail: 'Atorvastatin 80 mg PO' },
      { step: 'Cardiology consult; risk-stratify with GRACE or TIMI score', detail: 'Early invasive (< 24 h) for: refractory ischemia, hemodynamic instability, elevated troponin, new ST changes. Conservative strategy if low-risk.' },
    ],
    disposition: 'Admit to cardiac monitored unit. Cardiology consult for timing of catheterization. CCU if high-risk or hemodynamically unstable.',
    pearls: [
      'Demand ischemia (Type 2 MI): sepsis, tachycardia, severe anemia — treat underlying cause, not the same as ACS',
      'Women, diabetics, and elderly often present atypically — maintain low threshold for troponin',
      'New LBBB + chest pain = treat as STEMI equivalent',
      'GRACE score predicts 6-month mortality and guides invasive vs. conservative strategy',
      'Hold P2Y12 inhibitors if CABG planned within 5 days (ticagrelor) or 7 days (clopidogrel)',
    ],
  },

  {
    id: 'hypertensive-urgency',
    name: 'Hypertensive Urgency',
    system: 'Cardiovascular',
    acuity: 'Moderate',
    tags: ['hypertension', 'blood pressure', 'headache'],
    overview: 'Severe BP elevation (> 180/120 mmHg) WITHOUT acute target organ damage. Distinguished from hypertensive emergency by the absence of end-organ injury. Gradual oral treatment over 24–48 h is the goal.',
    presentation: {
      symptoms: ['Headache', 'Nausea', 'Dizziness', 'Epistaxis', 'Anxiety', 'Blurred vision'],
      signs: ['BP > 180/120 on two readings', 'No focal neurological deficit', 'No papilledema', 'No S3, no pulmonary edema'],
      redFlags: ['Papilledema or visual changes → emergency', 'New neurological deficit → emergency', 'Chest pain → rule out aortic dissection', 'Pulmonary edema → emergency'],
    },
    workup: {
      labs: ['BMP (creatinine, potassium)', 'UA (proteinuria, casts)'],
      imaging: ['ECG', 'CXR (cardiomegaly, pulmonary edema would suggest emergency)'],
    },
    treatment: [
      { step: 'Oral antihypertensive — choose one', detail: 'Amlodipine 5–10 mg PO, labetalol 200 mg PO, or clonidine 0.1–0.2 mg PO' },
      { step: 'Goal: reduce MAP by 25% over 24–48 h, then normalize over days', detail: 'Do NOT rapidly normalize BP — risk of watershed infarcts and end-organ ischemia' },
      { step: 'Address non-adherence: resume or optimize home medications' },
      { step: 'Oral hydration if volume-depleted' },
    ],
    disposition: 'Outpatient with 24–72 h PCP follow-up in most cases. Discharge with medications and BP monitoring instructions.',
    pearls: [
      'Rapid BP normalization can cause strokes — the goal is gradual reduction over 24–48 h, not to the ED',
      'Confirm BP with correct cuff size — too small a cuff falsely elevates reading',
      'Sublingual nifedipine: DO NOT USE — causes unpredictable precipitous drops, associated with MI and stroke',
      'Most cases are undertreated chronic hypertension with non-adherence — the underlying condition needs long-term management',
      'If end-organ damage found on workup → reclassify as hypertensive emergency and manage accordingly',
    ],
  },

  {
    id: 'dvt',
    name: 'Deep Vein Thrombosis (DVT)',
    aliases: ['DVT', 'Deep venous thrombosis'],
    system: 'Cardiovascular',
    acuity: 'Moderate',
    tags: ['leg swelling', 'thrombosis', 'blood clot', 'anticoagulation'],
    overview: 'Thrombosis in the deep venous system, most commonly proximal lower extremity. Proximal DVT (above knee) carries significant PE risk. Part of the VTE spectrum — PE is covered separately under High Acuity.',
    presentation: {
      symptoms: ['Unilateral leg swelling', 'Pain or tenderness', 'Warmth', 'Erythema', 'May be asymptomatic'],
      signs: ['Calf or thigh swelling > 3 cm vs. contralateral leg', 'Warmth and erythema', 'Tenderness along deep venous course'],
      redFlags: ['Dyspnea + pleuritic chest pain + tachycardia = suspected PE (see High Acuity)', 'Phlegmasia cerulea dolens (massive DVT with venous gangrene) = surgical emergency'],
    },
    workup: {
      labs: ['CBC', 'BMP', 'Coagulation studies', 'D-dimer (only if Wells < 2 to rule out; skip to US if Wells ≥ 2)'],
      imaging: ['Compression duplex ultrasound lower extremity (gold standard)', 'CT venography or MRI venography for iliac/pelvic DVT if US equivocal'],
      other: ['Wells DVT Score: ≥ 2 = high probability → go straight to US; < 2 → D-dimer first'],
    },
    treatment: [
      { step: 'Start anticoagulation — DOACs are first-line', detail: 'Apixaban 10 mg PO BID × 7 days then 5 mg BID; OR rivaroxaban 15 mg BID × 21 days then 20 mg daily — no bridging needed' },
      { step: 'Alternative: LMWH (enoxaparin 1 mg/kg SQ q12h)', detail: 'Preferred in pregnancy and cancer-associated VTE; bridge to warfarin if DOAC not available' },
      { step: 'Duration: provoked (surgery/trauma) → 3 months; unprovoked → 3–6 months minimum; recurrent or cancer → indefinite' },
      { step: 'Compression stockings (30–40 mmHg) to reduce post-thrombotic syndrome' },
      { step: 'Mobilization: walking encouraged — bed rest not required' },
    ],
    disposition: 'Most proximal DVTs can be managed outpatient if: no significant comorbidities, can start anticoagulation same-day, reliable follow-up in 1–2 days. Admit if: bilateral DVT, massive iliofemoral DVT, significant bleeding risk, unreliable follow-up.',
    pearls: [
      'Wells ≥ 2 → skip D-dimer and go straight to ultrasound — high pre-test probability makes negative D-dimer less useful',
      'DOAC monotherapy (apixaban or rivaroxaban) has replaced warfarin + LMWH bridging for most DVTs',
      'Cancer-associated VTE: LMWH or DOACs (rivaroxaban/edoxaban) preferred over warfarin',
      'Upper extremity DVT (subclavian/axillary): often line-associated; treat the same as lower extremity DVT',
      'Phlegmasia cerulea dolens: massive proximal DVT → limb-threatening → emergent catheter-directed thrombolysis or surgical thrombectomy',
    ],
  },

  // ─── Pulmonary (Moderate) ─────────────────────────────────────────────────────

  {
    id: 'cap',
    name: 'Community-Acquired Pneumonia',
    aliases: ['CAP', 'Pneumonia'],
    system: 'Pulmonary',
    acuity: 'Moderate',
    tags: ['cough', 'fever', 'infiltrate', 'dyspnea', 'infection'],
    overview: 'Acute lower respiratory tract infection acquired outside the hospital. CURB-65 or PSI/PORT score guides outpatient vs. inpatient vs. ICU disposition. Streptococcus pneumoniae is the most common bacterial cause.',
    presentation: {
      symptoms: ['Productive cough', 'Fever', 'Dyspnea', 'Pleuritic chest pain', 'Fatigue', 'Rigors'],
      signs: ['Fever', 'Tachycardia', 'Tachypnea', 'Dullness to percussion', 'Decreased breath sounds', 'Crackles or bronchial breathing'],
      redFlags: ['SpO2 < 90%', 'RR > 30', 'BP < 90/60', 'Confusion (CURB-65 ≥ 3 → ICU consideration)'],
    },
    workup: {
      labs: ['CBC (leukocytosis)', 'BMP', 'Blood cultures × 2 before antibiotics (if admitted)', 'Sputum culture (if admitted)', 'Procalcitonin', 'Urinary Legionella antigen (severe CAP)', 'Urinary pneumococcal antigen'],
      imaging: ['PA and lateral CXR (lobar consolidation, interstitial infiltrates)', 'CT chest if CXR equivocal or failure to improve'],
      other: ['CURB-65: Confusion, Urea > 7 mmol/L, RR > 30, BP < 90/60, Age ≥ 65. 0–1 = outpatient; 2 = admit; ≥ 3 = consider ICU'],
    },
    treatment: [
      { step: 'Supplemental O2 to SpO2 ≥ 94%' },
      { step: 'Outpatient (CURB-65 0–1)', detail: 'Amoxicillin-clavulanate 875 mg BID + azithromycin 500 mg × 1 then 250 mg × 4 days; OR doxycycline 100 mg BID × 5 days' },
      { step: 'Inpatient non-ICU (CURB-65 2)', detail: 'Ceftriaxone 1–2 g IV q24h + azithromycin 500 mg IV/PO q24h; OR respiratory fluoroquinolone (levofloxacin 750 mg daily)' },
      { step: 'ICU / severe (CURB-65 ≥ 3)', detail: 'Ceftriaxone + azithromycin; add vancomycin if MRSA risk factors (post-influenza, cavitary lesion, injection drug use)' },
      { step: 'Duration: 5 days total (step down to PO when afebrile and improving)' },
    ],
    disposition: 'CURB-65 0–1: discharge with oral antibiotics and follow-up. CURB-65 2: admit. ≥ 3: admit with ICU consideration.',
    pearls: [
      'Atypicals (Mycoplasma, Chlamydophila, Legionella): younger, insidious onset, non-productive cough, extrapulmonary features — require macrolide or doxycycline coverage',
      'Legionella: hyponatremia + severe CAP + hotel/travel/cooling tower exposure — urinary antigen test',
      'CXR may lag 24–48 h behind clinical presentation — treat clinically if high suspicion',
      'Blood cultures positive in only ~10% of CAP — still guide de-escalation if positive',
      'COVID-19 can mimic CAP with bilateral ground-glass opacities — check respiratory viral panel',
    ],
  },

  {
    id: 'copd-exacerbation',
    name: 'COPD Exacerbation',
    aliases: ['AECOPD', 'COPD flare'],
    system: 'Pulmonary',
    acuity: 'Moderate',
    tags: ['dyspnea', 'wheeze', 'cough', 'COPD', 'smoking', 'hypercapnia'],
    overview: 'Acute worsening of COPD symptoms beyond normal day-to-day variation. Usually triggered by respiratory infection. Core management: bronchodilators, controlled O2, systemic steroids, and antibiotics if purulent sputum.',
    presentation: {
      symptoms: ['Increased dyspnea', 'Increased sputum production (change in color or volume)', 'Wheeze', 'Cough', 'Fatigue'],
      signs: ['Tachycardia', 'Tachypnea', 'Barrel chest', 'Pursed-lip breathing', 'Accessory muscle use', 'Prolonged expiration', 'Diminished breath sounds'],
      redFlags: ['RR > 30', 'SpO2 < 88% despite O2', 'AMS', 'Inability to speak in full sentences', 'Silent chest', 'PaCO2 rising with normal or low pH'],
    },
    workup: {
      labs: ['ABG or VBG (pH, PaCO2, PaO2)', 'BMP', 'CBC', 'BNP (exclude CHF)', 'Procalcitonin'],
      imaging: ['CXR (hyperinflation, r/o pneumonia or pneumothorax)', 'ECG'],
      other: ['Peak flow (if obtainable)', 'Sputum culture if purulent'],
    },
    treatment: [
      { step: 'Controlled O2: target SpO2 88–92%', detail: 'Avoid high-flow O2 — worsens hypercapnia (Haldane effect + loss of hypoxic drive)' },
      { step: 'SABA: albuterol 2.5 mg nebulized q20min × 3, then q1–4h' },
      { step: 'SAMA: ipratropium 0.5 mg nebulized combined with albuterol' },
      { step: 'Systemic corticosteroids', detail: 'Prednisone 40 mg PO or methylprednisolone 40–60 mg IV × 5 days (REDUCE trial: 5 days = 14 days)' },
      { step: 'Antibiotics if purulent sputum + increased volume or dyspnea (Anthonisen criteria)', detail: 'Azithromycin 500 mg × 1 then 250 mg × 4 days; OR doxycycline 100 mg BID × 5 days; OR amoxicillin-clavulanate' },
      { step: 'NIPPV (BiPAP) if pH < 7.35 + PaCO2 > 45, RR > 25, or moderate–severe dyspnea', detail: 'Reduces intubation rate and mortality — Level A evidence (GOLD guidelines)' },
      { step: 'Intubation if NIPPV fails, severe acidosis (pH < 7.25), AMS, or respiratory arrest' },
    ],
    disposition: 'Discharge if responds to treatment and SpO2 ≥ 92% on home O2 or room air. Admit if moderate–severe, first presentation without established diagnosis, or inadequate home support.',
    pearls: [
      'Target SpO2 88–92%, NOT > 94% — hyperoxia drives up PaCO2 in COPD patients',
      'Normal PaCO2 in a tachypneic COPD patient = tiring out — prepare for BiPAP or intubation',
      'BiPAP is evidence-based and should be offered early — avoids intubation in majority',
      'Antibiotics reduce treatment failure even in presumed viral exacerbations when sputum is purulent',
      'Discharge teaching: inhaler technique, smoking cessation, flu + pneumococcal vaccines, COPD action plan',
    ],
  },

  {
    id: 'pneumothorax',
    name: 'Spontaneous Pneumothorax',
    aliases: ['PTX', 'Primary spontaneous pneumothorax', 'PSP'],
    system: 'Pulmonary',
    acuity: 'Moderate',
    tags: ['chest pain', 'dyspnea', 'pleuritic', 'young male', 'tall'],
    overview: 'Accumulation of air in the pleural space without trauma. Primary (no underlying lung disease) occurs in tall thin young males; secondary occurs with underlying lung disease (COPD, cystic fibrosis). Tension PTX is a separate High Acuity condition.',
    presentation: {
      symptoms: ['Sudden pleuritic chest pain', 'Dyspnea (mild to moderate)', 'Dry cough'],
      signs: ['Decreased breath sounds ipsilaterally', 'Hyperresonance to percussion', 'Mildly reduced SpO2', 'Tachycardia'],
      redFlags: ['Hemodynamic instability', 'Tracheal deviation', 'Severe hypoxia', 'Bilateral involvement → tension pneumothorax (see High Acuity)'],
    },
    workup: {
      labs: ['ABG if moderate symptoms'],
      imaging: ['Upright PA and lateral CXR (visible pleural line, absent lung markings peripherally)', 'US (absent lung sliding at apex)', 'CT chest if small or uncertain on CXR'],
      other: ['Size: small < 2 cm rim at apex (PA CXR); large ≥ 2 cm'],
    },
    treatment: [
      { step: 'All patients: supplemental O2 at 100%', detail: 'Accelerates nitrogen reabsorption from pleural space by 4×, speeding resolution' },
      { step: 'Small primary PTX (< 2 cm, minimally symptomatic): observation × 3–6 h + repeat CXR', detail: 'Discharge if stable with follow-up CXR in 24–48 h' },
      { step: 'Large primary PTX (≥ 2 cm) or symptomatic: needle aspiration first', detail: '14–16g catheter, 2nd ICS MCL; if lung re-expands on CXR at 1 h → success, discharge. If not → chest tube.' },
      { step: 'Secondary PTX (underlying lung disease): lower threshold for admission and chest tube regardless of size' },
      { step: 'Recurrent PTX: referral to thoracic surgery for pleurodesis or VATS bullectomy' },
    ],
    disposition: 'Small and asymptomatic: discharge after observation with close follow-up. Large or symptomatic: admit. Secondary PTX: always admit.',
    pearls: [
      'Most common in tall, thin males age 20–40 — often related to apical subpleural blebs',
      'Recurrence rate: ~30% after first episode, ~50% after second — counsel about smoking cessation and risk',
      '100% O2 promotes nitrogen absorption from pleural space — use even in primary PTX',
      'After needle aspiration: check CXR at 1 h — full re-expansion = success; failure = chest tube',
      'Avoid air travel and scuba diving until fully resolved + at least 6 weeks',
    ],
  },

  // ─── Neurological (Moderate) ──────────────────────────────────────────────────

  {
    id: 'tia',
    name: 'Transient Ischemic Attack (TIA)',
    aliases: ['TIA', 'Mini-stroke'],
    system: 'Neurological',
    acuity: 'Moderate',
    tags: ['focal deficit', 'neuro', 'stroke risk', 'speech', 'weakness', 'transient'],
    overview: 'Transient neurological dysfunction from focal brain ischemia without infarction, resolving within 24 h (usually < 1 h). High short-term stroke risk — 10–15% within 90 days, highest in the first 48 h. Rapid evaluation and treatment are essential.',
    presentation: {
      symptoms: ['Sudden focal neurological deficit that resolves: hemiparesis, hemisensory loss, aphasia, dysarthria, visual field defect, diplopia, ataxia'],
      signs: ['Often NORMAL at presentation (deficit has resolved)', 'Assess for carotid bruit, arrhythmia, BP discrepancy between arms'],
      redFlags: ['ABCD2 ≥ 4 = high early stroke risk', 'Crescendo TIAs (multiple within hours) = near-emergency'],
    },
    workup: {
      labs: ['CBC', 'BMP', 'Glucose (stat)', 'HbA1c', 'Lipids', 'Coags', 'ESR/CRP if vasculitis suspected', 'Hypercoagulable panel if young or unprovoked'],
      imaging: ['Non-contrast CT head (rule out hemorrhage)', 'MRI-DWI (gold standard — detects small infarcts; DWI positive = stroke, not TIA)', 'CTA or MRA head and neck (carotid stenosis, intracranial disease)'],
      other: ['Cardiac telemetry × 24–48 h (AF)', '30-day event monitor if paroxysmal AF suspected', 'Echocardiogram (cardioembolic source)', 'ABCD2 score (0–7): A age ≥ 60 (+1), B BP ≥ 140/90 (+1), C unilateral weakness (+2) or speech only (+1), D duration ≥ 60 min (+2) or 10–59 min (+1), D diabetes (+1)'],
    },
    treatment: [
      { step: 'Antiplatelet — dual antiplatelet therapy (DAPT)', detail: 'Aspirin 162–325 mg + clopidogrel 300–600 mg load then 75 mg daily × 21 days (POINT/CHANCE trials), then aspirin alone' },
      { step: 'High-intensity statin', detail: 'Atorvastatin 40–80 mg PO' },
      { step: 'Blood pressure control: start or optimize antihypertensives', detail: 'Target < 130/80 long-term; avoid aggressive acute lowering in first 24–48 h' },
      { step: 'AF detected: anticoagulation', detail: 'DOAC (apixaban, rivaroxaban) preferred over warfarin for non-valvular AF' },
      { step: 'Carotid stenosis ≥ 70%: urgent carotid endarterectomy (CEA) within 2 weeks', detail: 'Greatest benefit of CEA is within 2 weeks of TIA' },
    ],
    disposition: 'ABCD2 ≥ 4 or high-risk features: admit for expedited workup. Low-risk (ABCD2 ≤ 3): rapid TIA clinic with same-day or next-day MRI, telemetry, and echo.',
    pearls: [
      'Stroke risk is highest in the first 48 h — do NOT send patient home with a "follow up next week" plan',
      'DWI positive on MRI = ischemic stroke, not TIA — changes prognosis and treatment',
      'ABCD2 score ≥ 4 warrants urgent admission or same-day evaluation',
      'Amaurosis fugax (monocular transient vision loss) = ophthalmic artery TIA — treat identically',
      'Dual antiplatelet (aspirin + clopidogrel) × 21 days ↓ 90-day stroke risk by ~30% (POINT/CHANCE)',
    ],
  },

  {
    id: 'migraine',
    name: 'Migraine',
    aliases: ['Migraine headache', 'Refractory migraine', 'Status migrainosus'],
    system: 'Neurological',
    acuity: 'Moderate',
    tags: ['headache', 'nausea', 'photophobia', 'aura', 'unilateral'],
    overview: 'Episodic severe headache with neurological symptoms. ED presentation typically represents a severe or refractory attack. The primary task is to rule out secondary causes (SAH, meningitis, mass), then treat aggressively with non-opioid abortive therapy.',
    presentation: {
      symptoms: ['Unilateral throbbing headache (may be bilateral)', 'Nausea and vomiting', 'Photophobia', 'Phonophobia', 'Visual aura (scotoma, scintillations) in 25–30%'],
      signs: ['Photophobia and phonophobia on exam', 'No fever', 'No meningismus', 'No focal neurological deficit in uncomplicated migraine'],
      redFlags: ['Thunderclap (10/10, maximal at onset) = SAH until proven otherwise', 'Fever + meningismus = meningitis', 'New neurological deficit', 'First or worst headache of life', 'Age > 50 (new headache)'],
    },
    workup: {
      labs: ['BMP', 'CBC — only if atypical or red flags present'],
      imaging: ['Non-contrast CT head if any red flag present (r/o hemorrhage, mass, hydrocephalus)'],
      other: ['LP: only if CT negative + thunderclap onset or fever/meningismus', 'No workup needed for typical recurrent migraine presentation'],
    },
    treatment: [
      { step: 'IV fluids: 1 L NS if vomiting or dehydrated', detail: 'Dark quiet room; dim lights' },
      { step: 'Dopamine antagonist (first-line abortive)', detail: 'Prochlorperazine (Compazine) 10 mg IV + diphenhydramine 25 mg IV (prevents akathisia); OR metoclopramide 10–20 mg IV' },
      { step: 'NSAID', detail: 'Ketorolac 15–30 mg IV; ibuprofen 600–800 mg PO if able to tolerate' },
      { step: 'Triptan (if no contraindications)', detail: 'Sumatriptan 6 mg SC or 50–100 mg PO; avoid in CV disease, uncontrolled HTN, basilar/hemiplegic migraine' },
      { step: 'Magnesium sulfate 1–2 g IV', detail: 'Especially effective for migraine with aura or menstrual migraine' },
      { step: 'Avoid opioids', detail: 'Less effective than dopamine antagonists; promote medication overuse headache (MOH)' },
    ],
    disposition: 'Discharge when pain < 3/10, tolerating PO, able to ambulate. Prescribe triptan + NSAID for home use. Neurology referral if > 4 attacks/month for preventive therapy.',
    pearls: [
      'Prochlorperazine + diphenhydramine is more effective than opioids and is the standard of care for ED migraine',
      'Opioids promote medication overuse headache — avoid as first-line treatment',
      '"Thunderclap headache" = maximal at onset → always CT head; if negative → LP for xanthochromia (SAH)',
      'Diphenhydramine co-administration prevents akathisia and restlessness from prochlorperazine',
      'IV magnesium is particularly effective in menstrual migraine and migraine with aura',
    ],
  },

  // ─── Gastrointestinal (Moderate) ─────────────────────────────────────────────

  {
    id: 'appendicitis',
    name: 'Acute Appendicitis',
    system: 'Gastrointestinal',
    acuity: 'Moderate',
    tags: ['abdominal pain', 'RLQ', 'nausea', 'fever', 'surgical'],
    overview: 'Inflammation of the vermiform appendix from luminal obstruction. Most common cause of acute abdominal surgery. Perforation risk increases with delay — approximately 20% at 24 h.',
    presentation: {
      symptoms: ['Periumbilical pain migrating to RLQ (McBurney point)', 'Anorexia', 'Nausea and vomiting', 'Low-grade fever', 'Constipation or diarrhea'],
      signs: ['RLQ tenderness at McBurney point', 'Guarding and rigidity', 'Rovsing sign (LLQ pressure causes RLQ pain)', 'Psoas sign (right hip extension pain)', 'Obturator sign (internal rotation of right hip)'],
      redFlags: ['High fever > 39°C', 'Diffuse peritonitis (perforation)', 'Prolonged duration > 48–72 h', 'Immunocompromised or elderly (atypical presentations)'],
    },
    workup: {
      labs: ['CBC (WBC > 10,000 in 70–80%; > 15,000 suggests perforation)', 'BMP', 'CRP', 'LFTs (r/o biliary)', 'β-hCG in all women of reproductive age (r/o ectopic pregnancy)'],
      imaging: ['CT abdomen/pelvis with IV contrast (gold standard — 94% sensitive, 95% specific)', 'US (pregnant women and children — 75–90% sensitive; limited by body habitus)', 'MRI if pregnant and US equivocal'],
      other: ['Alvarado score (0–10): ≥ 7 = high likelihood surgical appendicitis'],
    },
    treatment: [
      { step: 'NPO, IV fluids, IV analgesia', detail: 'IV opioids or ketorolac — do NOT withhold analgesia; does not mask diagnosis' },
      { step: 'Pre-operative antibiotics', detail: 'Ceftriaxone 2 g IV + metronidazole 500 mg IV; or piperacillin-tazobactam 3.375 g IV' },
      { step: 'Surgical consult immediately' },
      { step: 'Laparoscopic appendectomy (standard of care)' },
      { step: 'Non-operative management (select patients)', detail: 'CODA trial: antibiotics alone (cefdinir + metronidazole PO × 10 days) is an option for uncomplicated appendicitis — discuss with surgeon' },
    ],
    disposition: 'Admit for surgical management. Perforated appendicitis → emergent surgery or IR drainage of abscess with interval appendectomy.',
    pearls: [
      'β-hCG FIRST in any woman of reproductive age with RLQ pain — ectopic pregnancy is a different surgical emergency',
      'Analgesia does NOT mask appendicitis — administer early and generously',
      'Retrocecal appendix: pain may be posterior or minimal — diagnosis more difficult, CT is crucial',
      'CT preferred over US in adults — IV contrast adds detail; oral contrast adds little',
      'Non-operative management is a valid option for uncomplicated appendicitis but requires discussion with the patient about recurrence risk (~30%)',
    ],
  },

  {
    id: 'cholecystitis',
    name: 'Acute Cholecystitis',
    aliases: ['Gallbladder inflammation'],
    system: 'Gastrointestinal',
    acuity: 'Moderate',
    tags: ['RUQ pain', 'gallbladder', 'fever', 'gallstones', 'Murphy sign', 'fatty meals'],
    overview: 'Acute inflammation of the gallbladder, most commonly from cystic duct obstruction by a gallstone (calculous). Murphy sign is pathognomonic. Early laparoscopic cholecystectomy reduces morbidity and length of stay.',
    presentation: {
      symptoms: ['RUQ or epigastric pain (constant, worsens after fatty meals)', 'Nausea and vomiting', 'Fever', 'Right shoulder tip pain (referred via phrenic nerve)'],
      signs: ['RUQ tenderness', 'Murphy sign (arrest of inspiration with RUQ palpation)', 'Low-grade fever', 'Mild jaundice if CBD involvement'],
      redFlags: ["Charcot's triad (fever + RUQ pain + jaundice) = ascending cholangitis", "Reynold's pentad adds AMS + hypotension = emergency", 'Septic appearance'],
    },
    workup: {
      labs: ['CBC (leukocytosis)', 'BMP', 'LFTs (↑ ALT/AST if hepatic; ↑ bilirubin if CBD stone)', 'Lipase (r/o pancreatitis)', 'Blood cultures if septic', 'β-hCG'],
      imaging: ['RUQ ultrasound (first-line): gallstones, wall thickening > 4 mm, pericholecystic fluid, sonographic Murphy sign (88% sensitive)', 'CT abdomen if US equivocal or complications suspected', 'HIDA scan if US negative but clinical suspicion high'],
    },
    treatment: [
      { step: 'NPO, IV fluids, IV analgesia', detail: 'IV opioids are safe (morphine does not worsen Oddi spasm — prior teaching has been refuted); ketorolac IV' },
      { step: 'Antibiotics', detail: 'Ceftriaxone 1–2 g IV q24h + metronidazole 500 mg IV q8h; or piperacillin-tazobactam 3.375 g IV q6h' },
      { step: 'Surgery consult: laparoscopic cholecystectomy (definitive)' },
      { step: 'Early laparoscopic cholecystectomy preferred (within 24–72 h)', detail: 'Early > interval — ↓ complications, ↓ length of stay, equivalent safety (Tokyo Guidelines)' },
      { step: 'Cholangitis: urgent ERCP for CBD stone extraction + ICU if septic' },
    ],
    disposition: "Admit for IV antibiotics, analgesia, and surgical planning. Ascending cholangitis → ICU.",
    pearls: [
      "Tokyo Guidelines 2018: Grade I (mild), II (moderate), III (severe) — guides urgency of surgery",
      "Charcot's triad is present in only 50–70% of cholangitis — maintain suspicion with fever + jaundice alone",
      'Acalculous cholecystitis: no gallstones — occurs in critically ill (ICU, post-surgery, trauma, TPN); percutaneous cholecystostomy if too sick for surgery',
      'Choledocholithiasis (CBD stone): obstructive jaundice + dilated CBD on US → ERCP before cholecystectomy',
      'Cholecystitis in pregnancy: laparoscopic cholecystectomy is safe in all trimesters; delay increases risk of preterm labor',
    ],
  },

  {
    id: 'pancreatitis',
    name: 'Acute Pancreatitis',
    system: 'Gastrointestinal',
    acuity: 'Moderate',
    tags: ['epigastric pain', 'lipase', 'nausea', 'gallstone', 'alcohol', 'back pain'],
    overview: 'Acute inflammation of the pancreas from premature activation of digestive enzymes. Gallstones (40%) and alcohol (30%) are the leading causes. Ranges from mild/self-limited to severe with necrosis and multiorgan failure.',
    presentation: {
      symptoms: ['Severe epigastric pain radiating to the back', 'Nausea and vomiting', 'Fever', 'Anorexia', 'Pain worsened by eating'],
      signs: ['Epigastric tenderness', 'Abdominal guarding', 'Diminished bowel sounds', 'Tachycardia', 'Cullen sign (periumbilical bruising) and Grey Turner sign (flank bruising) = hemorrhagic pancreatitis (late)'],
      redFlags: ['SIRS criteria', 'Hypotension', 'SpO2 < 95%', 'Rising creatinine', 'BISAP ≥ 3 or Ranson ≥ 3 = severe disease'],
    },
    workup: {
      labs: ['Lipase (> 3× ULN = diagnostic; more specific than amylase)', 'Amylase', 'LFTs (ALT > 3× ULN → gallstone etiology)', 'BMP', 'CBC', 'Triglycerides (if no gallstones/alcohol)', 'Calcium', 'ABG if severe'],
      imaging: ['RUQ ultrasound (gallstones as etiology; CBD dilation)', 'CT abdomen with contrast (NOT needed acutely unless diagnosis uncertain or no improvement by 48–72 h — detects necrosis)'],
      other: ['BISAP score: BUN > 25, Impaired mentation, SIRS, Age > 60, Pleural effusion. ≥ 3 = severe.', 'Ranson criteria at admission and 48 h'],
    },
    treatment: [
      { step: 'NPO initially; early enteral nutrition within 24–48 h in mild–moderate disease', detail: 'Early enteral feeding ↓ infectious complications; enteral > parenteral' },
      { step: 'Aggressive IV fluid resuscitation', detail: 'Lactated Ringer preferred over NS (↓ SIRS, ↓ mortality — WATERFALL trial); 250–500 mL/h initially; reassess frequently' },
      { step: 'Analgesia: IV opioids (morphine, fentanyl), ketorolac', detail: 'Morphine does NOT worsen pancreatitis — prior teaching was wrong' },
      { step: 'Antiemetics: ondansetron, prochlorperazine' },
      { step: 'Antibiotics: NOT routinely indicated', detail: 'Only if: infected necrosis suspected (worsening after 7–10 days, gas in pancreas on CT) or concurrent cholangitis' },
      { step: 'Gallstone pancreatitis: early ERCP if cholangitis or CBD obstruction; cholecystectomy before discharge (same admission if mild) to prevent recurrence' },
    ],
    disposition: 'Mild (BISAP 0–2): general medical ward with IV fluids and analgesia. Severe (BISAP ≥ 3): ICU. Monitor for pseudocyst, abscess, and necrosis.',
    pearls: [
      'Lactated Ringer > Normal Saline — NS causes hyperchloremic acidosis and worsens SIRS',
      'CT in first 72 h overestimates severity — necrosis not apparent early; reserve for diagnostic uncertainty or failure to improve',
      'Most pancreatitis is mild and self-limited — aggressive supportive care is the treatment',
      'Hypertriglyceridemia-induced pancreatitis (TG > 1,000 mg/dL): insulin infusion or plasmapheresis may be needed',
      'Infected pancreatic necrosis: fever + worsening after day 7 → CT-guided aspiration for culture → targeted antibiotics; late surgical/endoscopic debridement',
    ],
  },

  // ─── Renal & GU (Moderate) ───────────────────────────────────────────────────

  {
    id: 'pyelonephritis',
    name: 'Pyelonephritis',
    aliases: ['Kidney infection', 'Upper UTI'],
    system: 'Renal & GU',
    acuity: 'Moderate',
    tags: ['flank pain', 'fever', 'dysuria', 'UTI', 'CVA tenderness', 'infection'],
    overview: 'Bacterial infection of the renal parenchyma and collecting system. E. coli causes 80–85% of cases. CVA tenderness with fever and lower urinary symptoms is the classic triad. Complicated pyelonephritis has higher morbidity.',
    presentation: {
      symptoms: ['Fever and chills', 'Unilateral flank or back pain', 'Costovertebral angle (CVA) tenderness', 'Dysuria', 'Frequency and urgency', 'Nausea and vomiting'],
      signs: ['CVA tenderness (key finding)', 'Fever', 'Tachycardia'],
      redFlags: ['Sepsis criteria (MAP < 65, lactate > 2)', 'Inability to tolerate PO', 'Obstructed ureter (stone + infection = emergency)', 'Pregnancy', 'Immunocompromise', 'Anatomical abnormality'],
    },
    workup: {
      labs: ['CBC (leukocytosis)', 'BMP (Cr)', 'Blood cultures × 2 if septic or hospitalized', 'UA (pyuria, bacteriuria, nitrites, WBC casts)', 'Urine culture + sensitivity BEFORE antibiotics'],
      imaging: ['CT abdomen/pelvis without contrast if: obstruction suspected, failure to improve, abscess concern', 'RUQ or renal US in pregnant patients'],
    },
    treatment: [
      { step: 'Urine culture before starting antibiotics', detail: 'Critical for de-escalation and detecting resistance' },
      { step: 'Uncomplicated outpatient (afebrile, tolerating PO, no sepsis)', detail: 'Ciprofloxacin 500 mg PO BID × 7 days (check local fluoroquinolone resistance rate); or TMP-SMX DS BID × 14 days if susceptible; or ceftriaxone 1 g IM × 1 then oral step-down' },
      { step: 'Inpatient IV antibiotics', detail: 'Ceftriaxone 1–2 g IV q24h; or ciprofloxacin 400 mg IV q12h; de-escalate to oral based on culture/sensitivities' },
      { step: 'IV fluids if dehydrated or vomiting' },
      { step: 'Analgesia: NSAIDs + opioids for flank pain' },
      { step: 'Urology consult if: obstruction, abscess, emphysematous pyelonephritis, bilateral involvement' },
    ],
    disposition: 'Outpatient if: healthy, tolerating PO, able to follow up in 24–48 h. Admit if: sepsis, unable to tolerate PO, pregnancy, DM, obstruction, immunocompromise, failure to improve.',
    pearls: [
      'Always send urine culture BEFORE antibiotics — culture guides de-escalation and resistance detection',
      'Fluoroquinolone resistance in E. coli is 15–25% in many regions — check your local antibiogram',
      'Perinephric abscess: failure to improve after 72 h of antibiotics → CT → percutaneous drainage',
      'Emphysematous pyelonephritis: gas in renal parenchyma on CT — diabetics, life-threatening — urgent urology',
      'Complicated pyelonephritis = male, pregnant, DM, immunocompromised, anatomical abnormality, hospital-acquired',
    ],
  },

  {
    id: 'nephrolithiasis',
    name: 'Nephrolithiasis (Renal Colic)',
    aliases: ['Kidney stone', 'Ureterolithiasis', 'Renal colic'],
    system: 'Renal & GU',
    acuity: 'Moderate',
    tags: ['flank pain', 'hematuria', 'colic', 'kidney stone', 'CVA', 'ureter'],
    overview: 'Urinary calculi causing ureteral obstruction and severe colicky flank pain. Calcium oxalate stones account for ~80%. Most stones < 5 mm pass spontaneously. Key priorities: analgesia, exclude infection/obstruction, and urological triage by stone size.',
    presentation: {
      symptoms: ['Sudden severe colicky unilateral flank pain radiating to groin, testicle, or labia', 'Nausea and vomiting', 'Restlessness (unable to find comfortable position — distinguishes from peritoneal irritation)', 'Gross or microscopic hematuria'],
      signs: ['CVA tenderness', 'Restlessness and agitation', 'Fever ONLY if concomitant infection', 'Normal abdominal exam between spasms'],
      redFlags: ['Fever + obstruction = urologic emergency (infected hydronephrosis)', 'Single functioning kidney with complete obstruction', 'Bilateral obstruction', 'Hypotension or anuria'],
    },
    workup: {
      labs: ['BMP (Cr — baseline renal function and degree of obstruction)', 'CBC', 'UA (hematuria in 85–90%; absence does NOT exclude stone)', 'Urine culture if UA abnormal', 'β-hCG'],
      imaging: ['CT KUB without contrast (gold standard — 97% sensitive, 96% specific; identifies size and location)', 'US (first-line in pregnant women, children, and known stone formers — identifies hydronephrosis, limited for small ureteral stones)'],
    },
    treatment: [
      { step: 'Analgesia: IV NSAIDs first-line', detail: 'Ketorolac 15–30 mg IV — as effective as opioids for ureteral colic plus anti-spasmodic; IV opioids (morphine, fentanyl) for severe pain or NSAID failure' },
      { step: 'Antiemetics: ondansetron or prochlorperazine' },
      { step: 'IV fluids if dehydrated or vomiting', detail: 'Do NOT give excess fluids to "flush the stone" — no evidence for this practice' },
      { step: 'Medical expulsive therapy (MET): tamsulosin 0.4 mg PO daily × 4 weeks', detail: 'For distal ureteral stones 5–10 mm — ↑ spontaneous passage rate; modest benefit per recent trials' },
      { step: 'Strain urine to capture stone for analysis' },
      { step: 'Urgent urology if: obstruction + infection, single kidney with obstruction, intractable pain, stone > 10 mm' },
    ],
    disposition: 'Discharge if pain controlled, tolerating PO, no infection, no obstruction requiring immediate intervention. Urology follow-up within 1 week.',
    pearls: [
      'Infected hydronephrosis (stone + fever + obstruction) = urologic emergency → IV antibiotics + urgent ureteral stent or percutaneous nephrostomy',
      'Stone size predicts spontaneous passage: < 4 mm → 80%; 4–6 mm → 60%; > 6 mm → 20%; > 10 mm → surgical',
      'NSAIDs reduce ureteral smooth muscle spasm and are superior to opioids alone — use both in severe colic',
      'Absence of hematuria does NOT exclude nephrolithiasis (absent in 10–15% of cases)',
      'Calcium stones (80%) are radiopaque on plain XR; uric acid stones are radiolucent — only visible on CT',
    ],
  },

  // ─── Musculoskeletal (Moderate) ───────────────────────────────────────────────

  {
    id: 'gout',
    name: 'Acute Gout',
    aliases: ['Gouty arthritis', 'Gout flare', 'Podagra'],
    system: 'Musculoskeletal',
    acuity: 'Moderate',
    tags: ['joint pain', 'swelling', 'uric acid', 'big toe', 'monoarthritis', 'warm joint'],
    overview: 'Acute inflammatory arthritis from monosodium urate crystal deposition in synovial joints. Most common cause of acute monoarthritis in adults. 1st MTP joint (podagra) is classic. Precipitated by dietary excess, alcohol, dehydration, medications, or intercurrent illness.',
    presentation: {
      symptoms: ['Sudden-onset severe joint pain (often overnight)', 'Swelling, warmth, erythema — debilitating within hours', 'Low-grade fever and malaise'],
      signs: ['Exquisitely tender, warm, erythematous, swollen joint', 'Most common: 1st MTP, ankle, knee, wrist', 'Tophi (chalky deposits) on ears, hands, elbows in chronic gout'],
      redFlags: ['Fever > 38.5°C + severe joint inflammation → joint aspiration to rule out septic arthritis', 'Polyarticular involvement or prosthetic joint'],
    },
    workup: {
      labs: ['Uric acid (may be NORMAL during acute attack — low sensitivity; elevated level supports diagnosis but is not diagnostic)', 'CBC (leukocytosis)', 'CRP/ESR', 'BMP', 'LFTs (before NSAID/colchicine)'],
      imaging: ['XR (acute: soft tissue swelling; chronic: "rat bite" erosions with overhanging cortical margin)', 'US (double contour sign = urate on cartilage surface)', 'DECT (dual energy CT — confirms urate deposits without aspiration)'],
      other: ['Joint aspiration (GOLD STANDARD): negatively birefringent needle-shaped crystals under polarized microscopy. Send for WBC, crystal analysis, gram stain, culture (to exclude septic arthritis)'],
    },
    treatment: [
      { step: 'Anti-inflammatory therapy — choose one (all equally effective):' },
      { step: 'NSAIDs (first-line if no contraindications)', detail: 'Indomethacin 25–50 mg TID; or naproxen 500 mg BID; or ibuprofen 600–800 mg TID — continue until flare resolves (5–7 days). Avoid with CKD, GI bleed, CV disease.' },
      { step: 'Colchicine (if NSAIDs contraindicated)', detail: '1.2 mg PO then 0.6 mg 1 h later (low-dose protocol — as effective as high-dose, fewer GI side effects). Ongoing 0.6 mg daily for 3–6 months as prophylaxis.' },
      { step: 'Corticosteroids (if NSAIDs and colchicine contraindicated)', detail: 'Prednisone 30–40 mg PO × 3–5 days, taper; OR triamcinolone 40 mg IA (intra-articular injection) for monoarticular flare' },
      { step: 'Ice, elevation, rest' },
      { step: 'Do NOT start urate-lowering therapy (allopurinol) during acute flare', detail: 'Can prolong or worsen attack — start 2–4 weeks after flare resolves' },
    ],
    disposition: 'Outpatient management in most cases. Admit only if: unable to tolerate PO, septic arthritis not excluded, severe systemic illness.',
    pearls: [
      'Uric acid may be NORMAL or LOW during an acute flare — do not use to diagnose or exclude acute gout',
      'Always aspirate if septic arthritis is in the differential — you cannot distinguish by clinical exam alone',
      'Do NOT start allopurinol during a flare — it can precipitate or prolong the attack',
      'Colchicine: dose-reduce in renal impairment; avoid with strong CYP3A4 inhibitors (clarithromycin) — risk of fatal toxicity',
      'Common medication precipitants: diuretics (thiazide, loop), low-dose aspirin, cyclosporine, niacin, pyrazinamide',
    ],
  },

  // ─── Toxicology (Moderate) ───────────────────────────────────────────────────

  {
    id: 'alcohol-withdrawal',
    name: 'Alcohol Withdrawal',
    aliases: ['AWS', 'DTs', 'Delirium tremens', 'Ethanol withdrawal'],
    system: 'Toxicology',
    acuity: 'Moderate',
    tags: ['alcohol', 'withdrawal', 'seizure', 'tremor', 'CIWA', 'benzodiazepine', 'DTs'],
    overview: 'Neurological hyperexcitability syndrome from abrupt cessation or reduction of alcohol in chronic heavy drinkers. Spectrum: mild tremor → moderate (anxiety, diaphoresis, tachycardia) → severe (seizures, delirium tremens). Most dangerous at 48–72 h.',
    presentation: {
      symptoms: ['Tremor', 'Anxiety and agitation', 'Diaphoresis', 'Nausea and vomiting', 'Insomnia', 'Headache', 'Seizures (6–48 h after last drink)', 'Hallucinations (visual/auditory/tactile, 12–48 h)'],
      signs: ['Tachycardia', 'Hypertension', 'Diaphoresis', 'Tremor', 'Hyperreflexia', 'Delirium tremens (DTs): hyperthermia + autonomic instability + confusion'],
      redFlags: ['Temperature > 38.5°C', 'New seizures', 'Delirium', 'HR > 120 or BP > 180/100', 'CIWA-Ar > 15'],
    },
    workup: {
      labs: ['BMP (Na, K, Mg, glucose, Cr, phosphate)', 'LFTs', 'CBC (MCV elevated in chronic alcoholism)', 'Coags (INR reflects liver function)', 'Urine tox screen', 'Blood alcohol level', 'Thiamine status (clinical)'],
      imaging: ['CT head if: head trauma, focal neurological deficit, first seizure — r/o intracranial bleed'],
      other: ['CIWA-Ar score (0–67): < 8 = mild; 8–15 = moderate; > 15 = severe; > 20 = ICU-level care'],
    },
    treatment: [
      { step: 'Thiamine 100 mg IV BEFORE any glucose', detail: 'Prevents Wernicke encephalopathy — glucose metabolism depletes remaining thiamine. Always thiamine first.' },
      { step: 'Dextrose if hypoglycemic (after thiamine given)' },
      { step: 'Benzodiazepines — first-line; use symptom-triggered dosing (CIWA protocol):' },
      { step: 'Diazepam 5–10 mg IV q5–10 min (preferred — long-acting, sustained coverage)', detail: 'OR lorazepam 2–4 mg IV q15–30 min (preferred in liver failure — no active metabolites)' },
      { step: 'Magnesium sulfate 2 g IV (replace — commonly deficient, ↓ seizure threshold)' },
      { step: 'Folate 1 mg PO, multivitamin' },
      { step: 'Phenobarbital: adjunct for refractory withdrawal or severe cases', detail: 'Propofol infusion if DTs in ICU' },
    ],
    disposition: 'Mild (CIWA < 8): outpatient with chlordiazepoxide + follow-up in 24 h. Moderate (8–15): observation unit or admit. Severe (> 15) or DTs: ICU.',
    pearls: [
      'THIAMINE BEFORE GLUCOSE — this is the rule; glucose without thiamine can precipitate Wernicke encephalopathy',
      "Wernicke encephalopathy: confusion + ophthalmoplegia + ataxia (triad often incomplete) → thiamine 500 mg IV TID × 3 days",
      'Delirium tremens (DTs): onset 48–96 h after last drink; untreated mortality 5–15%; ICU care required',
      'Benzodiazepine-refractory withdrawal: add phenobarbital 30 mg IV q15–30 min PRN',
      'CIWA-Ar score guides dosing — symptom-triggered protocol uses less total benzodiazepine than fixed schedules',
    ],
  },

  // ─── OB/GYN (Moderate) ───────────────────────────────────────────────────────

  {
    id: 'ectopic-pregnancy',
    name: 'Ectopic Pregnancy',
    aliases: ['Tubal pregnancy', 'Ectopic'],
    system: 'OB/GYN',
    acuity: 'Moderate',
    tags: ['pregnancy', 'pelvic pain', 'vaginal bleeding', 'bhcg', 'adnexal'],
    overview: 'Implantation of the fertilized ovum outside the uterine cavity — 95% in the fallopian tube. Leading cause of first-trimester maternal death. A stable ectopic is Moderate acuity; a ruptured ectopic with hemodynamic instability is a surgical emergency (High acuity).',
    presentation: {
      symptoms: ['Amenorrhea + vaginal bleeding + unilateral pelvic pain (classic triad)', 'Shoulder tip pain (diaphragmatic irritation from hemoperitoneum)', 'Nausea', 'Syncope or presyncope'],
      signs: ['Adnexal tenderness', 'Cervical motion tenderness', 'Uterus smaller than expected for dates', 'Adnexal mass', 'Vital signs may be normal (stable) or show hemodynamic instability (ruptured)'],
      redFlags: ['Hypotension + tachycardia = ruptured ectopic → immediate surgical emergency', 'Rebound tenderness', 'Syncope', 'Shoulder tip pain (hemoperitoneum)'],
    },
    workup: {
      labs: ['Quantitative β-hCG (always check in women of reproductive age with abdominal pain or vaginal bleeding)', 'CBC (Hgb/Hct)', 'Blood type and screen (Rh status)', 'BMP', 'Coagulation studies'],
      imaging: ['Transvaginal pelvic ultrasound (preferred — more sensitive than transabdominal)', 'Empty uterus + adnexal mass + free fluid in pouch of Douglas = ectopic until proven otherwise', 'Discriminatory zone: β-hCG > 1,500–2,000 mIU/mL → IUP should be visible on TVUS; if not = ectopic concern'],
      other: ['Serial β-hCG: normal IUP doubles every 48 h; ectopic = abnormally slow rise or plateau (< 66% rise in 48 h)'],
    },
    treatment: [
      { step: 'OB/GYN consult immediately regardless of hemodynamic status' },
      { step: 'Hemodynamically stable: methotrexate (MTX) if criteria met', detail: 'Single dose MTX 50 mg/m² IM: criteria = stable, β-hCG < 5,000, no cardiac activity, no ruptured tube on US, normal LFTs/CBC, reliable follow-up. Monitor β-hCG days 4 and 7 (must fall ≥ 15%).' },
      { step: 'Surgical management: laparoscopic salpingostomy or salpingectomy', detail: 'Indications: MTX failure, β-hCG > 5,000, cardiac activity, large ectopic, patient preference, hemodynamic instability' },
      { step: 'Rh-negative patients: RhoGAM (Rh immunoglobulin)', detail: '50 mcg IM if < 12 weeks; 300 mcg IM if > 12 weeks' },
      { step: 'Ruptured ectopic: immediate OR, MTP if hemorrhagic shock, aggressive resuscitation' },
    ],
    disposition: 'Admit for surgical management or MTX monitoring with serial β-hCG. Strict return precautions for all ectopic patients.',
    pearls: [
      'β-hCG in EVERY woman of reproductive age with abdominal pain or vaginal bleeding — do not wait for imaging',
      'Heterotopic pregnancy (IUP + ectopic simultaneously): rare normally, more common with IVF — an IUP on US does NOT exclude a concurrent ectopic',
      'Rh-negative women: give RhoGAM regardless of outcome (threatened miscarriage, ectopic, or abortion)',
      'Ruptured ectopic: sudden severe pain that may briefly improve (hematoma forms, then re-bleeds) — can be deceptively reassuring',
      'Interstitial (cornual) ectopic: implants in uterine wall — ruptures later (8–12 weeks), higher blood loss, harder to see on US',
    ],
  },

  // ─── Hematology & Oncology ────────────────────────────────────────────────────

  // TODO: Add conditions

  // ─── Dermatology ──────────────────────────────────────────────────────────────

  {
    id: 'urticaria',
    name: 'Urticaria',
    aliases: ['Hives', 'Allergic Rash'],
    system: 'Dermatology',
    acuity: 'Low',
    tags: ['rash', 'allergy', 'itching'],
    overview: 'Transient, pruritic wheals caused by mast cell histamine release. Usually self-limited. Ensure no anaphylaxis features.',
    presentation: {
      symptoms: ['Itchy raised welts', 'Burning or stinging skin', 'Dermographism'],
      signs: ['Erythematous wheals of varying size', 'Blanching on pressure'],
      redFlags: ['Angioedema', 'Stridor', 'Wheezing', 'Hypotension — escalate to anaphylaxis protocol'],
    },
    workup: {
      labs: [],
      imaging: [],
      other: ['Clinical diagnosis', 'Identify trigger if possible'],
    },
    treatment: [
      { step: 'Diphenhydramine 25–50 mg PO/IV', detail: 'First-line antihistamine' },
      { step: 'Cetirizine 10 mg PO', detail: 'Non-sedating alternative or add-on' },
      { step: 'Prednisone 40 mg PO × 3–5 days if severe or recurrent' },
      { step: 'Epinephrine 0.3 mg IM if any anaphylaxis features' },
    ],
    disposition: 'Discharge with antihistamines; prescribe EpiPen if recurrent or severe',
    pearls: [
      'Always check for angioedema of tongue/lips/airway',
      'Common triggers: NSAIDs, ACE inhibitors, antibiotics, foods',
    ],
  },

  {
    id: 'cellulitis-mild',
    name: 'Cellulitis (Mild)',
    aliases: ['Skin Infection'],
    system: 'Dermatology',
    acuity: 'Low',
    tags: ['skin', 'infection', 'redness'],
    overview: 'Bacterial infection of the dermis and subcutaneous tissue. Most commonly Strep or Staph. Rule out abscess, necrotizing fasciitis.',
    presentation: {
      symptoms: ['Redness', 'Warmth', 'Swelling', 'Pain at site'],
      signs: ['Non-fluctuant erythema with ill-defined borders', 'Tenderness on palpation', 'Low-grade fever'],
      redFlags: ['Rapidly spreading borders', 'Bullae', 'Crepitus', 'Severe pain out of proportion — necrotizing fasciitis'],
    },
    workup: {
      labs: ['CBC, BMP if systemic symptoms', 'Blood cultures only if sepsis suspected'],
      imaging: ['Ultrasound to rule out abscess if fluctuance present'],
    },
    treatment: [
      { step: 'Mark the border with skin marker to track spread' },
      { step: 'Cephalexin 500 mg PO QID × 5 days', detail: 'First-line for non-purulent cellulitis' },
      { step: 'If MRSA risk: TMP-SMX DS 1 tab BID or Doxycycline 100 mg BID' },
      { step: 'Elevate affected limb' },
    ],
    disposition: 'Discharge with oral antibiotics; return precautions if borders spreading',
    pearls: [
      'Bilateral lower extremity "cellulitis" is almost never cellulitis — consider stasis dermatitis',
      'Any fluctuance = incision and drainage needed',
    ],
  },

  // ─── Ophthalmology ────────────────────────────────────────────────────────────

  {
    id: 'conjunctivitis',
    name: 'Conjunctivitis',
    aliases: ['Pink Eye'],
    system: 'Ophthalmology',
    acuity: 'Low',
    tags: ['eye', 'red eye', 'discharge'],
    overview: 'Inflammation of the conjunctiva — viral (most common), bacterial, or allergic. Usually self-limited.',
    presentation: {
      symptoms: ['Red eye', 'Discharge (watery or purulent)', 'Foreign body sensation', 'Itching (allergic)'],
      signs: ['Conjunctival injection', 'Watery/mucoid discharge (viral), purulent (bacterial)', 'Pre-auricular lymphadenopathy (viral)'],
      redFlags: ['Photophobia', 'Decreased vision', 'Severe pain — consider keratitis, iritis, glaucoma'],
    },
    workup: {
      labs: [],
      imaging: [],
      other: ['Clinical diagnosis', 'Fluorescein staining if corneal involvement suspected'],
    },
    treatment: [
      { step: 'Viral: supportive — cool compresses, artificial tears' },
      { step: 'Bacterial: erythromycin ophthalmic ointment or tobramycin drops' },
      { step: 'Allergic: olopatadine drops, oral antihistamine' },
      { step: 'Contact lens wearers: treat as bacterial, avoid contacts until resolved' },
    ],
    disposition: 'Discharge; ophthalmology follow-up if no improvement in 48–72 h',
    pearls: [
      'Viral conjunctivitis is highly contagious — counsel on hand hygiene',
      'Neonatal conjunctivitis in first week of life is a different entity — refer urgently',
    ],
  },

  // ─── ENT ──────────────────────────────────────────────────────────────────────

  {
    id: 'pharyngitis',
    name: 'Pharyngitis',
    aliases: ['Sore Throat', 'Strep Throat'],
    system: 'ENT',
    acuity: 'Low',
    tags: ['sore throat', 'strep', 'exudate'],
    overview: 'Inflammation of the pharynx. Viral in ~70% of cases. Group A Strep is the key bacterial cause to identify and treat.',
    presentation: {
      symptoms: ['Sore throat', 'Odynophagia', 'Fever', 'Headache'],
      signs: ['Tonsillar erythema ± exudate', 'Anterior cervical lymphadenopathy', 'Fever'],
      redFlags: ['Drooling', 'Stridor', 'Trismus', 'Uvular deviation — consider peritonsillar abscess or epiglottitis'],
    },
    workup: {
      labs: ['Rapid strep test', 'Throat culture if rapid negative with high suspicion'],
      imaging: [],
      other: ['Centor/McIsaac score to guide testing'],
    },
    treatment: [
      { step: 'Viral: supportive — analgesics, fluids, salt water gargles' },
      { step: 'GAS confirmed: Amoxicillin 500 mg PO BID × 10 days' },
      { step: 'Penicillin allergy: Azithromycin 500 mg day 1, then 250 mg × 4 days' },
      { step: 'Dexamethasone 10 mg IV/IM once for severe pain or swelling' },
    ],
    disposition: 'Discharge; return if unable to swallow, drooling, or worsening',
    pearls: [
      'Centor score ≥ 3: test or treat empirically',
      'Avoid amoxicillin if mono suspected — causes diffuse maculopapular rash',
    ],
  },

  {
    id: 'otitis-media',
    name: 'Acute Otitis Media',
    aliases: ['AOM', 'Ear Infection'],
    system: 'ENT',
    acuity: 'Low',
    tags: ['ear', 'ear pain', 'otalgia'],
    overview: 'Bacterial or viral middle ear infection, most common in children. S. pneumoniae, H. influenzae, M. catarrhalis are key pathogens.',
    presentation: {
      symptoms: ['Ear pain (otalgia)', 'Fever', 'Hearing loss', 'Ear pulling in children'],
      signs: ['Erythematous, bulging tympanic membrane', 'Decreased TM mobility', 'Otorrhea if perforated'],
      redFlags: ['Mastoid tenderness or erythema', 'Facial nerve palsy', 'Meningismus'],
    },
    workup: {
      labs: [],
      imaging: ['CT mastoids if mastoiditis suspected'],
      other: ['Otoscopy — key finding is bulging TM'],
    },
    treatment: [
      { step: 'Amoxicillin 500 mg PO TID × 5–7 days (adults), 90 mg/kg/day (children)' },
      { step: 'Penicillin allergy: Azithromycin or Cefdinir' },
      { step: 'Analgesia: ibuprofen or acetaminophen' },
      { step: 'Watchful waiting acceptable in mild cases in children > 2 years' },
    ],
    disposition: 'Discharge; ENT follow-up if recurrent or no improvement in 48–72 h',
    pearls: ['Perforated TM with drainage does not worsen prognosis and often gives pain relief'],
  },

  {
    id: 'sinusitis',
    name: 'Acute Sinusitis',
    aliases: ['Sinus Infection', 'Rhinosinusitis'],
    system: 'ENT',
    acuity: 'Low',
    tags: ['sinus', 'facial pain', 'congestion'],
    overview: 'Inflammation of the paranasal sinuses. Viral in ~98% of cases. Bacterial sinusitis if symptoms persist > 10 days or worsen after initial improvement.',
    presentation: {
      symptoms: ['Facial pain/pressure', 'Nasal congestion', 'Purulent nasal discharge', 'Headache', 'Anosmia'],
      signs: ['Sinus tenderness on palpation', 'Purulent discharge on exam'],
      redFlags: ['Periorbital edema', 'Visual changes', 'High fever', 'Meningismus — orbital or intracranial extension'],
    },
    workup: {
      labs: [],
      imaging: ['CT sinuses only if complications suspected'],
      other: ['Clinical diagnosis — imaging rarely needed for uncomplicated sinusitis'],
    },
    treatment: [
      { step: 'Viral (< 10 days): supportive — saline irrigation, decongestants, analgesics' },
      { step: 'Bacterial: Amoxicillin-clavulanate 875/125 mg PO BID × 5–7 days' },
      { step: 'Nasal corticosteroids (fluticasone) for symptom relief' },
      { step: 'Avoid routine imaging or antibiotics for viral sinusitis' },
    ],
    disposition: 'Discharge; return if vision changes, severe headache, or worsening after antibiotics',
    pearls: ['Maxillary toothache can be caused by sinusitis', 'Antibiotics provide only marginal benefit in bacterial sinusitis'],
  },

  // ─── Psychiatry ───────────────────────────────────────────────────────────────

  // TODO: Add conditions

  // ─── Pulmonary (Low) ──────────────────────────────────────────────────────────

  {
    id: 'viral-uri',
    name: 'Viral Upper Respiratory Infection',
    aliases: ['Common Cold', 'URI'],
    system: 'Pulmonary',
    acuity: 'Low',
    tags: ['cold', 'runny nose', 'cough', 'congestion'],
    overview: 'Self-limited viral illness of the upper respiratory tract. Rhinovirus most common. No antibiotics indicated.',
    presentation: {
      symptoms: ['Rhinorrhea', 'Nasal congestion', 'Sore throat', 'Mild cough', 'Low-grade fever', 'Malaise'],
      signs: ['Clear or white nasal discharge', 'Mild pharyngeal erythema'],
      redFlags: ['High fever > 39.5°C', 'Persistent symptoms > 10 days', 'Focal lung findings — consider pneumonia'],
    },
    workup: {
      labs: [],
      imaging: [],
      other: ['Clinical diagnosis', 'CXR only if pneumonia suspected'],
    },
    treatment: [
      { step: 'Supportive care: rest, fluids, analgesics' },
      { step: 'Decongestants (pseudoephedrine) or nasal saline for congestion' },
      { step: 'Dextromethorphan for cough suppression' },
      { step: 'No antibiotics — viral etiology' },
    ],
    disposition: 'Discharge; return if fever > 48 h, dyspnea, or worsening',
    pearls: ['Honey 1–2 tsp is effective for cough in adults', 'Zinc lozenges within 24 h of onset may shorten duration'],
  },

  // ─── Gastrointestinal (Low) ───────────────────────────────────────────────────

  {
    id: 'viral-gastroenteritis',
    name: 'Viral Gastroenteritis',
    aliases: ['Stomach Bug', 'Stomach Flu'],
    system: 'Gastrointestinal',
    acuity: 'Low',
    tags: ['vomiting', 'diarrhea', 'nausea'],
    overview: 'Self-limited viral infection of the GI tract. Norovirus and rotavirus most common. Goal is hydration and symptom management.',
    presentation: {
      symptoms: ['Nausea', 'Vomiting', 'Watery diarrhea', 'Abdominal cramping', 'Low-grade fever'],
      signs: ['Mild diffuse abdominal tenderness', 'Signs of dehydration if severe'],
      redFlags: ['Bloody diarrhea', 'High fever', 'Severe dehydration', 'Symptoms > 7 days — consider bacterial cause'],
    },
    workup: {
      labs: ['BMP if dehydration signs present'],
      imaging: [],
      other: ['Clinical diagnosis; stool cultures only if bloody diarrhea or immunocompromised'],
    },
    treatment: [
      { step: 'Oral rehydration therapy — Pedialyte or diluted sports drinks' },
      { step: 'IV fluids (NS 1–2 L) if unable to tolerate PO' },
      { step: 'Ondansetron 4 mg PO/IV for nausea' },
      { step: 'Loperamide for non-bloody diarrhea' },
    ],
    disposition: 'Discharge when tolerating PO; admit if severe dehydration or unable to keep fluids down',
    pearls: ['Avoid antidiarrheals in bloody diarrhea or suspected bacterial cause', 'Highly contagious — counsel on hand hygiene'],
  },

  {
    id: 'gerd',
    name: 'GERD',
    aliases: ['Acid Reflux', 'Heartburn', 'Gastroesophageal Reflux Disease'],
    system: 'Gastrointestinal',
    acuity: 'Low',
    tags: ['heartburn', 'reflux', 'chest burning'],
    overview: 'Retrograde flow of gastric acid causing esophageal irritation. Chronic condition; ED visits usually for symptom exacerbation or to rule out cardiac cause.',
    presentation: {
      symptoms: ['Burning chest/epigastric pain', 'Regurgitation', 'Worse after meals or lying down', 'Sour taste', 'Chronic cough'],
      signs: ['Often unremarkable exam', 'Epigastric tenderness'],
      redFlags: ['Dysphagia', 'Weight loss', 'Hematemesis', 'Chest pain not clearly reflux — rule out ACS'],
    },
    workup: {
      labs: ['ECG and troponin to exclude cardiac cause if atypical presentation'],
      imaging: [],
      other: ['Clinical diagnosis; endoscopy as outpatient if refractory'],
    },
    treatment: [
      { step: 'GI cocktail (antacid + viscous lidocaine ± antispasmodic) for immediate relief' },
      { step: 'Omeprazole 20–40 mg PO daily × 4–8 weeks' },
      { step: 'Dietary counseling: avoid fatty foods, alcohol, caffeine, late meals' },
      { step: 'Elevate head of bed 30°' },
    ],
    disposition: 'Discharge with PPI; GI follow-up if refractory or alarm symptoms',
    pearls: ['Classic relief with antacids supports diagnosis', 'H. pylori testing in young patients with new dyspepsia'],
  },

  // ─── Renal & GU (Low) ────────────────────────────────────────────────────────

  {
    id: 'uti-uncomplicated',
    name: 'Uncomplicated UTI',
    aliases: ['Cystitis', 'Bladder Infection'],
    system: 'Renal & GU',
    acuity: 'Low',
    tags: ['uti', 'dysuria', 'frequency', 'urinary'],
    overview: 'Bacterial infection confined to the bladder in a non-pregnant, immunocompetent woman with no structural abnormalities. Most commonly E. coli.',
    presentation: {
      symptoms: ['Dysuria', 'Urinary frequency', 'Urgency', 'Suprapubic discomfort', 'Hematuria'],
      signs: ['Suprapubic tenderness', 'No CVA tenderness (distinguishes from pyelonephritis)'],
      redFlags: ['CVA tenderness', 'Fever > 38°C', 'Rigors — consider pyelonephritis or urosepsis'],
    },
    workup: {
      labs: ['Urinalysis (pyuria, bacteriuria, nitrites)', 'Urine culture if recurrent or treatment failure'],
      imaging: [],
    },
    treatment: [
      { step: 'Nitrofurantoin 100 mg PO BID × 5 days', detail: 'First-line; avoid if GFR < 30' },
      { step: 'TMP-SMX DS PO BID × 3 days', detail: 'Alternative; check local resistance patterns' },
      { step: 'Fosfomycin 3 g PO single dose', detail: 'Good option for compliance' },
      { step: 'Phenazopyridine 200 mg TID × 2 days for dysuria relief' },
    ],
    disposition: 'Discharge with antibiotics; return if fever, worsening, or no improvement in 48 h',
    pearls: ['Male UTI is considered complicated — work up for structural abnormality', 'Asymptomatic bacteriuria does not require treatment except in pregnancy'],
  },

  // ─── Musculoskeletal (Low) ────────────────────────────────────────────────────

  {
    id: 'ankle-sprain',
    name: 'Ankle Sprain',
    aliases: ['Lateral Ankle Sprain'],
    system: 'Musculoskeletal',
    acuity: 'Low',
    tags: ['ankle', 'sprain', 'twist', 'injury'],
    overview: 'Stretch or tear of ankle ligaments, most commonly the anterior talofibular ligament (ATFL). Graded I–III by severity.',
    presentation: {
      symptoms: ['Ankle pain', 'Swelling', 'Difficulty weight-bearing'],
      signs: ['Swelling over lateral malleolus', 'ATFL tenderness', 'Anterior drawer test positive in Grade II/III'],
      redFlags: ['Bony tenderness over malleolus tips or base of 5th metatarsal — apply Ottawa rules'],
    },
    workup: {
      labs: [],
      imaging: ['X-ray if Ottawa Ankle Rules positive (bony tenderness, inability to bear weight)'],
    },
    treatment: [
      { step: 'RICE: Rest, Ice, Compression, Elevation' },
      { step: 'NSAIDs for pain and swelling (ibuprofen 400–600 mg TID)' },
      { step: 'Air stirrup brace or elastic bandage' },
      { step: 'Early mobilization and physiotherapy referral' },
    ],
    disposition: 'Discharge with brace; orthopedic/physio follow-up for Grade III',
    pearls: ['Ottawa Ankle Rules are highly sensitive for fracture', 'Grade III sprains may need surgical evaluation'],
  },

  {
    id: 'low-back-pain',
    name: 'Acute Low Back Pain',
    aliases: ['Lumbalgia', 'Backache', 'LBP'],
    system: 'Musculoskeletal',
    acuity: 'Low',
    tags: ['back pain', 'back', 'lumbar'],
    overview: 'Acute musculoskeletal pain in the lumbar region, usually self-limiting. Rule out serious causes (cauda equina, fracture, aortic pathology).',
    presentation: {
      symptoms: ['Lumbar pain', 'Muscle spasm', 'Limited range of motion', 'Pain with movement'],
      signs: ['Paraspinal muscle tenderness', 'Reduced lumbar flexion'],
      redFlags: ['Saddle anesthesia', 'Bowel/bladder dysfunction', 'New neurological deficits', 'Fever + back pain', 'History of malignancy'],
    },
    workup: {
      labs: [],
      imaging: ['X-ray if fracture suspected (trauma, osteoporosis)', 'MRI if cauda equina or cord compression suspected'],
    },
    treatment: [
      { step: 'NSAIDs first-line: ibuprofen 600 mg TID or naproxen 500 mg BID' },
      { step: 'Muscle relaxants (cyclobenzaprine 5–10 mg TID) for spasm' },
      { step: 'Encourage early activity — bed rest worsens outcomes' },
      { step: 'Heat application for muscle spasm' },
    ],
    disposition: 'Discharge; primary care follow-up; immediate return if red flags develop',
    pearls: [
      'Cauda equina syndrome is a surgical emergency — MRI emergently if suspected',
      'Opioids have poor evidence for acute LBP and high harm potential',
    ],
  },

];

export const conditionsBySystem = conditions.reduce<Record<string, Condition[]>>(
  (acc, condition) => {
    if (!acc[condition.system]) acc[condition.system] = [];
    acc[condition.system].push(condition);
    return acc;
  },
  {}
);
