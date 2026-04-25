export type OrganSystem =
  | 'Cardiovascular'
  | 'Pulmonary'
  | 'Neurological'
  | 'Gastrointestinal'
  | 'Renal & GU'
  | 'Musculoskeletal'
  | 'Infectious Disease'
  | 'Hematology & Oncology'
  | 'Endocrine & Metabolic'
  | 'Toxicology'
  | 'Dermatology'
  | 'Ophthalmology'
  | 'ENT'
  | 'Psychiatry'
  | 'Trauma'
  | 'OB/GYN';

export type Acuity = 'High' | 'Moderate' | 'Low';

export type Condition = {
  id: string;
  name: string;
  aliases?: string[];
  system: OrganSystem;
  acuity: Acuity;
  tags?: string[];

  overview: string;

  presentation: {
    symptoms: string[];
    signs: string[];
    redFlags?: string[];
  };

  workup: {
    labs?: string[];
    imaging?: string[];
    other?: string[];
  };

  treatment: {
    step: string;
    detail?: string;
  }[];

  disposition: string;
  pearls?: string[];
};

// ─── Drug Types ───────────────────────────────────────────────────────────────

export type DrugCategory =
  | 'Antihypertensives'
  | 'Antiarrhythmics'
  | 'Anticoagulants'
  | 'Antiplatelets'
  | 'Diuretics'
  | 'Vasopressors & Inotropes'
  | 'Antibiotics'
  | 'Analgesics & Sedation'
  | 'Anti-Asthma & COPD'
  | 'Corticosteroids'
  | 'Antihistamines'
  | 'Antiemetics'
  | 'Antiepileptics'
  | 'Endocrine';

// ─── Procedure Types ──────────────────────────────────────────────────────────

export type ProcedureCategory =
  | 'Airway Management'
  | 'Genitourinary'
  | 'Abdominal'
  | 'Spinal & Neurological'
  | 'Emergency Protocols';

export type ProcedureStep = {
  step: string;
  detail?: string;
};

export type ProcedurePhase = {
  title: string;
  steps: ProcedureStep[];
};

export type Procedure = {
  id: string;
  name: string;
  aliases?: string[];
  category: ProcedureCategory;
  overview: string;
  indications: string[];
  contraindications?: string[];
  equipment?: string[];
  positioning?: string;
  phases: ProcedurePhase[];
  complications?: string[];
  pearls?: string[];
};

export type Drug = {
  id: string;
  name: string;
  brandNames?: string[];
  category: DrugCategory;
  drugClass: string;
  mechanism: string;
  indications: string[];
  dosing: {
    indication: string;
    route: string;
    dose: string;
    notes?: string;
  }[];
  contraindications: string[];
  sideEffects: string[];
  monitoring?: string[];
  interactions?: string[];
  pearls?: string[];
  pregnancy?: string;
};
