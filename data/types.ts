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

export type Condition = {
  id: string;
  name: string;
  aliases?: string[];
  system: OrganSystem;
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
