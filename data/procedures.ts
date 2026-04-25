import { Procedure } from './types';

export const procedures: Procedure[] = [

  // ─── Airway Management ────────────────────────────────────────────────────────

  {
    id: 'rsi',
    name: 'Rapid Sequence Intubation (RSI)',
    aliases: ['RSI', 'Endotracheal intubation', 'ETI'],
    category: 'Airway Management',
    overview: 'Simultaneous induction of unconsciousness and neuromuscular blockade to facilitate endotracheal intubation while minimizing aspiration risk. The standard emergency airway technique.',
    indications: [
      'Respiratory failure (hypoxic or hypercapnic)',
      'Airway protection (GCS ≤ 8, vomiting, massive hemorrhage)',
      'Anticipated clinical deterioration',
      'Status epilepticus refractory to medications',
      'Required procedural sedation (e.g., combative trauma patient for CT)',
    ],
    contraindications: [
      'Predicted impossible mask ventilation AND impossible intubation (awake intubation preferred)',
      'Succinylcholine: hyperkalemia, burns > 24 h, crush injury, prolonged immobilization, myopathy — use rocuronium instead',
      'Epiglottitis with complete upper airway obstruction (surgical airway first)',
    ],
    equipment: [
      'Suction (Yankauer, working suction on)',
      'Oxygen source + non-rebreather mask at 15 LPM',
      'BVM with 100% O2, oral airway adjuncts (OPA, NPA)',
      'Laryngoscope: direct (Mac 3–4, Miller 2–3) OR video laryngoscope (preferred)',
      'ETT: 7.5–8.0 for males, 7.0–7.5 for females; one size smaller as backup',
      '10-mL syringe (cuff inflation), stylet, lubricant',
      'Bougie / endotracheal tube introducer',
      'EtCO2 (waveform capnography) — mandatory for confirmation',
      'Tape or tube holder',
      'All RSI drugs drawn up in labeled syringes',
      'Backup airway: video laryngoscope, LMA, surgical airway kit',
    ],
    positioning: 'Sniffing position: head extended on a flexed neck. Elevate head of bed 20–30°. In obese patients: ramp patient until external auditory meatus aligns with sternal notch.',
    phases: [
      {
        title: 'Preparation (Pre-oxygenation)',
        steps: [
          { step: 'SOAPME check', detail: 'Suction on, Oxygen ready, Airway equipment assembled, Positioning correct, Medications drawn, EtCO2 attached' },
          { step: 'Establish IV access × 2; place on cardiac monitor and pulse oximetry' },
          { step: 'Pre-oxygenate with NRB mask at 15 LPM × 3–5 min', detail: 'Target SpO2 > 95% before induction. In apneic or crashing patient, BVM at 15 LPM.' },
          { step: 'Apneic oxygenation', detail: 'Place nasal cannula at 15 LPM under NRB mask — keep running throughout attempt to extend safe apnea time.' },
          { step: 'Verbalize difficult airway plan to team', detail: 'Primary plan → failed plan → rescue (LMA) → surgical airway. Assign roles.' },
        ],
      },
      {
        title: 'Pre-treatment (3 min before induction — selective use)',
        steps: [
          { step: 'Fentanyl 3 mcg/kg IV', detail: 'For elevated ICP or active cardiac ischemia — blunts sympathetic surge from laryngoscopy.' },
          { step: 'Lidocaine 1.5 mg/kg IV', detail: 'For reactive airway disease or elevated ICP (controversial — low evidence).' },
          { step: 'Atropine 0.02 mg/kg IV (min 0.1 mg) in children < 5 years', detail: 'Prevents succinylcholine-induced vagal bradycardia.' },
        ],
      },
      {
        title: 'Induction Agent (give rapid IV push)',
        steps: [
          { step: 'Ketamine 1.5–2 mg/kg IV', detail: 'PREFERRED for: hypotension, asthma/bronchospasm, hemodynamic instability. Maintains airway reflexes and BP.' },
          { step: 'Etomidate 0.3 mg/kg IV', detail: 'Hemodynamically neutral. Most commonly used in ED. Note: causes single-dose adrenal suppression — avoid in septic shock.' },
          { step: 'Propofol 1.5–2 mg/kg IV', detail: 'Preferred for normotensive patients; lowers ICP. AVOID in hypotension.' },
        ],
      },
      {
        title: 'Neuromuscular Blockade (immediately after induction agent)',
        steps: [
          { step: 'Succinylcholine 1.5–2 mg/kg IV', detail: 'Onset 45–60 sec, duration 6–10 min. AVOID if: K⁺ > 5.5, burns/crush/denervation > 24 h, myopathy, personal/family history of malignant hyperthermia.' },
          { step: 'Rocuronium 1.2 mg/kg IV', detail: 'Onset 60–90 sec, duration 45–60 min. Use when succinylcholine is contraindicated. Reverse with sugammadex 16 mg/kg IV (rapid full reversal).' },
          { step: 'Wait 45–60 seconds for complete relaxation (jaw flaccid)' },
        ],
      },
      {
        title: 'Intubation',
        steps: [
          { step: 'Hold cricoid pressure (Sellick maneuver) during induction — controversial; release if impedes view', detail: 'Applied by assistant with 20–30 N of pressure.' },
          { step: 'Open mouth, insert laryngoscope in right side, sweep tongue to left' },
          { step: 'Mac blade: advance to vallecula, lift up and away (not lever). Miller blade: advance under epiglottis, lift.' },
          { step: 'Visualize vocal cords (or arytenoids at minimum)', detail: 'If view poor: BURP maneuver (backward, upward, rightward pressure on thyroid cartilage by assistant).' },
          { step: 'Advance ETT through cords under direct vision until cuff passes 2–3 cm below cords', detail: 'Depth at lips: ~23 cm males, 21 cm females. Use bougie first if view is suboptimal.' },
          { step: 'Inflate cuff with 10 mL air, remove stylet, hold tube firmly' },
          { step: 'LIMIT each laryngoscopy attempt to ≤ 30 seconds', detail: 'If SpO2 drops to 90% — stop, BVM ventilate, reassess before reattempting.' },
        ],
      },
      {
        title: 'Confirmation',
        steps: [
          { step: 'Attach waveform EtCO2 — gold standard for confirmation', detail: 'Sustained waveform with ≥ 6 breaths confirms tracheal placement. No waveform = esophageal intubation — remove tube immediately.' },
          { step: 'Auscultate bilateral chest (axillae and epigastrium)' },
          { step: 'Observe bilateral chest rise with ventilation' },
          { step: 'Secure ETT with tape or tube holder at confirmed depth' },
          { step: 'Obtain CXR to confirm tip position', detail: 'ETT tip should be 2–4 cm above carina (carina at level of angle of Louis/T4).' },
        ],
      },
      {
        title: 'Post-Intubation Care',
        steps: [
          { step: 'Start sedation + analgesia infusion immediately', detail: 'Propofol 5–50 mcg/kg/min or midazolam 0.02–0.1 mg/kg/h + fentanyl 25–100 mcg/h.' },
          { step: 'Set ventilator', detail: 'TV 6–8 mL/kg IBW, RR 12–16, FiO2 100% then wean to SpO2 ≥ 94%, PEEP 5 cmH2O. For ARDS: TV 6 mL/kg IBW, Pplat < 30.' },
          { step: 'Continuous EtCO2 monitoring (target EtCO2 35–45 mmHg)' },
          { step: 'Reassess ETT depth hourly and after patient repositioning' },
          { step: 'NG tube for gastric decompression' },
        ],
      },
    ],
    complications: [
      'Esophageal intubation (immediately life-threatening — confirm with EtCO2)',
      'Right mainstem intubation (unilateral breath sounds — withdraw ETT 2 cm)',
      'Hypoxia during attempt (limit to 30 sec)',
      'Hypotension post-intubation (especially propofol, loss of catecholamine drive)',
      'Aspiration',
      'Dental trauma, lip laceration',
      'Laryngeal/tracheal injury',
      'Pneumothorax (high-pressure ventilation)',
      'Failed airway → surgical airway (cricothyrotomy)',
    ],
    pearls: [
      'LEMON for difficult airway: Look externally (obesity, beard, trauma), Evaluate 3-3-2 (mouth open 3 fingers, hyoid-chin 3 fingers, thyroid-floor 2 fingers), Mallampati, Obstruction, Neck mobility',
      'If you cannot intubate AND cannot BVM → surgical airway immediately (scalpel-finger-bougie technique)',
      'Video laryngoscopy improves first-pass success — use it as primary when available',
      'Sugammadex 16 mg/kg reverses rocuronium in < 3 min — always available when using rocuronium',
      'Post-intubation hypotension: 250–500 mL fluid bolus + vasopressor if needed; ensure sedation not too deep',
    ],
  },

  // ─── Genitourinary ────────────────────────────────────────────────────────────

  {
    id: 'foley',
    name: 'Urinary Catheter Insertion (Foley)',
    aliases: ['Foley catheter', 'Indwelling catheter', 'Transurethral catheterization'],
    category: 'Genitourinary',
    overview: 'Placement of a transurethral indwelling catheter into the bladder for urinary drainage or monitoring. Strict sterile technique minimizes catheter-associated UTI (CAUTI).',
    indications: [
      'Acute urinary retention',
      'Accurate urine output monitoring (critically ill, perioperative)',
      'Bladder irrigation (hematuria with clots)',
      'Urological procedures',
      'Comfort care / incontinence (limited — only when repositioning causes distress)',
    ],
    contraindications: [
      'Suspected urethral injury: blood at meatus, high-riding prostate on DRE, perineal/scrotal hematoma, pelvic fracture → retrograde urethrogram first',
      'Known urethral stricture (use smaller catheter or coudé tip, urology consult)',
      'Recent urethral or bladder surgery (relative)',
    ],
    equipment: [
      'Foley catheter: 14–16 Fr male, 14 Fr female (18 Fr for hematuria/clot drainage)',
      'Sterile catheter insertion kit: sterile drapes, gloves, cleaning solution (betadine or chlorhexidine), forceps',
      '10-mL syringe filled with sterile water for balloon',
      'Lidocaine jelly 2% (10 mL) for male — anesthesia and lubrication',
      'Sterile lubricant for female',
      'Closed drainage bag and tubing',
      'Specimen cup if urine culture needed',
    ],
    positioning: 'Supine. Female: frog-leg position (hips abducted, knees flexed, feet together).',
    phases: [
      {
        title: 'Setup and Sterile Field',
        steps: [
          { step: 'Explain procedure, confirm identity, ensure privacy' },
          { step: 'Open sterile kit onto bedside table using aseptic technique' },
          { step: 'Don sterile gloves' },
          { step: 'Open sterile drape onto patient (fenestrated drape over genitalia)' },
          { step: 'Test balloon integrity', detail: 'Inflate catheter balloon with 10 mL sterile water, check for leaks, deflate completely before insertion.' },
          { step: 'Lubricate catheter tip', detail: 'Male: instill 10 mL lidocaine jelly 2% into urethra via syringe; hold penis vertical for 2 min before insertion. Female: generous lubricant to catheter tip.' },
          { step: 'Arrange all supplies within sterile field before touching patient' },
        ],
      },
      {
        title: 'Male Technique',
        steps: [
          { step: 'With non-dominant hand: retract foreskin (if uncircumcised), hold penis perpendicular to body', detail: 'Non-dominant hand is now contaminated — do not touch sterile supplies.' },
          { step: 'With forceps in dominant hand, clean glans in circular motion from meatus outward × 3 (new swab each pass)' },
          { step: 'Hold penis taut and upright to straighten urethra' },
          { step: 'Advance catheter with dominant hand, using forceps or sterile gloves', detail: 'Advance 15–20 cm (to catheter bifurcation) before expecting urine return.' },
          { step: 'If resistance at external sphincter: ask patient to take a slow deep breath or bear down gently (sphincter relaxes)' },
          { step: 'Advance to bifurcation hub — urine should flow; inflate balloon ONLY after urine confirmed', detail: 'Inflate with 10 mL sterile water. If patient feels sharp pain: deflate, advance 2 cm further, re-inflate.' },
          { step: 'Retract catheter gently until resistance felt (balloon seats at bladder neck)' },
          { step: 'Replace foreskin immediately after securing catheter to prevent paraphimosis' },
        ],
      },
      {
        title: 'Female Technique',
        steps: [
          { step: 'With non-dominant hand: separate labia minora (this hand is now contaminated)' },
          { step: 'Identify urethral meatus: small opening anterior to vaginal introitus, posterior to clitoris', detail: 'If visualization is difficult: try Trendelenburg, additional lighting, or a speculum.' },
          { step: 'Clean meatus front-to-back × 3 with separate swabs each pass' },
          { step: 'Advance catheter 3–5 cm (shorter urethra) until urine returns' },
          { step: 'Inflate balloon with 10 mL sterile water after confirming urine flow' },
          { step: 'Retract gently until resistance' },
        ],
      },
      {
        title: 'Post-Insertion',
        steps: [
          { step: 'Connect catheter to closed drainage bag — maintain below bladder level at all times' },
          { step: 'Secure catheter to inner thigh with tape or catheter strap (no tension)' },
          { step: 'Document: time, catheter size, balloon volume, urine color and output, any difficulty' },
          { step: 'Collect urine specimen if culture needed (from specimen port — not bag)' },
          { step: 'Reassess need daily and remove as soon as no longer indicated (CAUTI prevention)' },
        ],
      },
    ],
    complications: [
      'CAUTI (catheter-associated UTI) — risk ↑ with duration; most common complication',
      'Urethral trauma or false passage (from forcing against resistance)',
      'Balloon inflation in urethra (severe pain, retention — deflate, reposition)',
      'Paraphimosis (failure to reduce foreskin after male catheterization)',
      'Hematuria (usually resolves; severe → urology consult)',
      'Bladder spasms',
      'Catheter kinking or obstruction',
    ],
    pearls: [
      'ALWAYS advance to bifurcation in males before inflating balloon — confirms bladder placement',
      'Male resistance at sphincter = ask patient to breathe slowly; DO NOT force',
      'If catheter goes into vagina (female): leave it there as a landmark, place new sterile catheter into meatus',
      'Urine not draining after confirmed placement: check for kinking; flush with 30 mL sterile NS',
      'Suprapubic catheter is alternative if urethral catheterization fails (urology/US guidance)',
    ],
  },

  // ─── Abdominal ────────────────────────────────────────────────────────────────

  {
    id: 'paracentesis',
    name: 'Paracentesis',
    aliases: ['Abdominal tap', 'Ascitic tap', 'LVP'],
    category: 'Abdominal',
    overview: 'Percutaneous needle/catheter insertion into the peritoneal cavity for fluid sampling (diagnostic) or large-volume drainage (therapeutic). Ultrasound guidance is standard of care.',
    indications: [
      'New-onset ascites (diagnosis — cell count, culture, chemistry)',
      'Suspected spontaneous bacterial peritonitis (SBP)',
      'Tense or refractory ascites causing respiratory compromise or discomfort',
      'Hepatic hydrothorax evaluation',
    ],
    contraindications: [
      'Overlying skin infection or cellulitis at planned puncture site',
      'Bowel obstruction without ultrasound guidance (risk of perforation)',
      'Coagulopathy: INR > 2.5 or Plt < 50,000 are RELATIVE contraindications — discuss with attending; risk is low even in advanced cirrhosis',
      'Post-surgical abdomen with adhesions (always use US guidance)',
    ],
    equipment: [
      'Ultrasound machine with linear or curvilinear probe (mandatory)',
      'Sterile prep: chlorhexidine or betadine, sterile drapes, sterile gloves',
      '1% lidocaine, 10-mL syringe, 25g needle (skin), 22g needle (deep)',
      'For diagnostic: 18g spinal needle or paracentesis kit with catheter, 60-mL syringe',
      'For large-volume (LVP): vacuum drainage bottles (1-L × 5–6 if removing total), IV tubing connecting catheter to bottles',
      'Specimen tubes × 4: cell count, protein/albumin/LDH, glucose, gram stain + culture bottles',
      'Culture bottles (aerobic + anaerobic) for bedside inoculation',
    ],
    positioning: 'Supine, slightly lateral decubitus toward puncture side (pools fluid). Head of bed flat to 30°.',
    phases: [
      {
        title: 'Pre-procedure',
        steps: [
          { step: 'Review imaging for fluid location, bowel position, vascularity' },
          { step: 'Ultrasound: identify largest, safest fluid pocket with no bowel or vessels in path', detail: 'Preferred site: left lower quadrant, 2 cm medial and superior to ASIS. Alternative: right LLQ, or midline 2 cm below umbilicus (avoid epigastric vessels).' },
          { step: 'Mark puncture site with marker or thumbnail indent' },
          { step: 'Check labs if available (INR, CBC, Cr) — document; FFP/platelets rarely needed' },
          { step: 'Explain procedure and obtain consent' },
        ],
      },
      {
        title: 'Sterile Setup',
        steps: [
          { step: 'Open kit, prepare sterile field, don sterile gloves' },
          { step: 'Prep skin with betadine or chlorhexidine in wide circular area' },
          { step: 'Apply sterile drape(s)' },
          { step: 'Draw up 10 mL of 1% lidocaine' },
        ],
      },
      {
        title: 'Anesthesia and Needle Insertion',
        steps: [
          { step: 'Local anesthetic: raise skin wheal with 25g needle, then anesthetize subcutaneous tissue and peritoneum with 22g needle while aspirating', detail: 'Aspirating while advancing — the depth at which fluid returns is where the peritoneum is.' },
          { step: 'Z-track technique: with non-dominant hand, pull skin 2 cm in one direction; advance needle; release skin after withdrawing needle — seals the tract to prevent leak' },
          { step: 'Advance paracentesis needle/catheter perpendicular to skin, aspirating continuously until ascitic fluid returns' },
          { step: 'For LVP: advance catheter over needle (Seldinger or direct), remove needle, connect tubing to vacuum bottles' },
        ],
      },
      {
        title: 'Fluid Collection',
        steps: [
          { step: 'Diagnostic: aspirate 20–50 mL of fluid total', detail: 'Fluid is typically straw-colored (transudative) or turbid/cloudy (exudative/infected).' },
          { step: 'Inoculate culture bottles at bedside with 10 mL each (aerobic + anaerobic)', detail: 'Bedside inoculation ↑ sensitivity from ~40% to ~80% for SBP.' },
          { step: 'Send remaining fluid in tubes: Tube 1 → cell count + differential; Tube 2 → albumin, total protein, LDH, glucose; Tube 3 → gram stain + culture backup' },
          { step: 'LVP: drain until bottles full; can remove 5–8 L safely in one session' },
        ],
      },
      {
        title: 'Post-Procedure',
        steps: [
          { step: 'Withdraw needle/catheter, apply firm pressure × 5 min, sterile bandage' },
          { step: 'LVP albumin replacement: infuse albumin 6–8 g IV per liter removed within 6 h', detail: 'Prevents paracentesis-induced circulatory dysfunction (PICD) — renal failure, hemodynamic collapse.' },
          { step: 'Monitor BP and HR for 1 h post-procedure' },
          { step: 'Document: volume removed, fluid appearance, labs sent' },
          { step: 'Review results: PMN > 250/mm³ = SBP (treat immediately). SAAG ≥ 1.1 g/dL = portal hypertension.' },
        ],
      },
    ],
    complications: [
      'Abdominal wall hematoma (most common)',
      'Persistent ascitic leak from puncture site (apply extra pressure; consider suture)',
      'Bowel perforation (rare with US guidance)',
      'PICD: hypotension + renal failure (prevent with albumin replacement for LVP)',
      'Iatrogenic SBP (rare with sterile technique)',
      'Hemobilia, hepatic laceration (rare)',
    ],
    pearls: [
      'SAAG = serum albumin − ascitic albumin: ≥ 1.1 = portal hypertension (cirrhosis, heart failure, Budd-Chiari); < 1.1 = non-portal (TB, malignancy, nephrotic syndrome)',
      'PMN > 250 + clinical picture = treat SBP empirically without waiting for culture: ceftriaxone 1 g IV q24h + albumin 1.5 g/kg day 1, 1 g/kg day 3 (prevents hepatorenal syndrome)',
      'Coagulopathy is NOT a strict contraindication — risk of bleeding is low in cirrhosis',
      'Bloody fluid: if traumatic, spin sample — clear supernatant = traumatic; yellow supernatant = hemoperitoneum',
      'LVP with < 5 L removed: albumin benefit less certain but still reasonable to give',
    ],
  },

  // ─── Spinal & Neurological ────────────────────────────────────────────────────

  {
    id: 'lp',
    name: 'Lumbar Puncture (LP)',
    aliases: ['Spinal tap', 'CSF analysis'],
    category: 'Spinal & Neurological',
    overview: 'Percutaneous insertion of a spinal needle into the subarachnoid space at the lumbar level to obtain CSF for analysis, measure opening pressure, or administer intrathecal medications.',
    indications: [
      'Suspected bacterial meningitis or encephalitis',
      'Suspected subarachnoid hemorrhage (SAH) with negative CT — xanthochromia',
      'Idiopathic intracranial hypertension (IIH) — diagnosis and therapeutic drainage',
      'CNS demyelinating disease workup (MS — oligoclonal bands)',
      'CNS lymphoma or leptomeningeal carcinomatosis (cytology)',
      'Intrathecal drug administration (chemotherapy, analgesia)',
    ],
    contraindications: [
      'Signs of elevated ICP: papilledema, focal neurological deficit, GCS decline, Cushing triad → CT head FIRST before LP',
      'Coagulopathy: INR > 1.5 or platelets < 50,000 (relative — correct if possible)',
      'Local skin infection or epidural abscess at planned site',
      'Suspected spinal cord compression at lumbar level',
      'Midline shift > 5 mm on imaging',
    ],
    equipment: [
      'Spinal needle: 20–22g Quincke (standard) or atraumatic Whitacre/Sprotte (preferred — ↓ PDPH)',
      'Manometer with 3-way stopcock (for opening pressure measurement)',
      'Sterile prep kit: betadine or chlorhexidine, drapes, sterile gloves',
      '1% lidocaine, 10-mL syringe, 25g needle (skin), 22g needle (deep)',
      'Specimen tubes × 4 (labeled 1–4)',
      'Adhesive bandage',
    ],
    positioning: 'CRITICAL — lateral decubitus fetal position (preferred): patient on side, knees drawn to chest, chin tucked — maximizes intervertebral space. OR seated upright, hunched forward. Lateral decubitus required for accurate opening pressure.',
    phases: [
      {
        title: 'Positioning and Landmark Identification',
        steps: [
          { step: 'Position patient in lateral decubitus fetal position with spine parallel to bed edge' },
          { step: 'Identify L4 spinous process: at the level of the iliac crests (Tuffier line)' },
          { step: 'Select interspace: L3–L4 or L4–L5 (both are below spinal cord terminus at L1–L2)' },
          { step: 'Mark interspace with marker or thumbnail pressure. Confirm with gentle palpation — spinous processes should be palpable on either side.' },
          { step: 'If landmarks difficult: ultrasound guidance significantly improves success in obese or scoliotic patients' },
        ],
      },
      {
        title: 'Sterile Prep and Local Anesthesia',
        steps: [
          { step: 'Open sterile kit, don sterile gloves, prepare sterile field' },
          { step: 'Prep skin with betadine or chlorhexidine — wide area centered on selected interspace' },
          { step: 'Apply sterile fenestrated drape' },
          { step: 'Local anesthesia: raise skin wheal at midline, then anesthetize subcutaneous tissue and inter-spinous ligament with 22g needle (direct toward umbilicus at slight cephalad angle)' },
        ],
      },
      {
        title: 'Spinal Needle Insertion',
        steps: [
          { step: 'Insert spinal needle at midline with bevel oriented parallel to longitudinal dural fibers (bevel up in lateral decubitus)', detail: 'Bevel parallel to fibers → needle parts fibers rather than cutting → ↓ PDPH risk.' },
          { step: 'Advance slowly in midline, angled slightly cephalad toward umbilicus', detail: 'Path: skin → subcutaneous fat → supraspinous ligament → interspinous ligament → ligamentum flavum → epidural space → dura → subarachnoid space.' },
          { step: 'Two subtle "pops" may be felt: first = ligamentum flavum, second = dura' },
          { step: 'Remove stylet every 1–2 mm once past expected depth (adults ~4–5 cm; obese patients deeper)', detail: 'CSF flow confirms subarachnoid placement.' },
          { step: 'If bone encountered: withdraw to subcutaneous tissue, reassess angle, re-advance' },
        ],
      },
      {
        title: 'Opening Pressure and CSF Collection',
        steps: [
          { step: 'Once CSF flows: attach manometer via stopcock before any fluid drains', detail: 'Patient must be relaxed and in lateral decubitus for accurate reading (not seated).' },
          { step: 'Measure opening pressure: normal 7–20 cmH2O; > 25 = elevated (> 20 borderline)', detail: 'Ask patient to unfold slightly if too curled — will lower pressure a few cmH2O.' },
          { step: 'Collect CSF sequentially into tubes 1–4, 1–3 mL each (total 10–15 mL max)' },
          { step: 'Tube 1: Cell count + differential', detail: 'Contains any blood from needle trauma.' },
          { step: 'Tube 2: Protein and glucose (send serum glucose simultaneously)' },
          { step: 'Tube 3: Gram stain + bacterial culture (± fungal culture, AFB, viral PCR per clinical suspicion)' },
          { step: 'Tube 4: Cell count + differential', detail: 'Compare to Tube 1: equal blood = SAH; clearing between tubes = traumatic tap.' },
        ],
      },
      {
        title: 'Post-Procedure',
        steps: [
          { step: 'Replace stylet before withdrawing needle (↓ risk of CSF leak and PDPH)' },
          { step: 'Withdraw needle, apply pressure, adhesive bandage' },
          { step: 'Patient may remain supine for 1 h (evidence limited but commonly practiced)' },
          { step: 'Encourage oral hydration post-procedure' },
          { step: 'Document: opening pressure, closing pressure (optional), appearance of fluid, tubes sent, any difficulty' },
        ],
      },
    ],
    complications: [
      'Post-dural puncture headache (PDPH): positional bifrontal/occipital headache worsens upright; ↓ with smaller needle and atraumatic tip',
      'Herniation (rare — contraindicated if elevated ICP without decompression)',
      'Spinal hematoma (rare — risk ↑ with coagulopathy)',
      'Infection (meningitis, epidural abscess — rare with sterile technique)',
      'Radicular pain or paresthesia during insertion (withdraw 1 mm, redirect)',
      'CSF leak at puncture site (persistent headache)',
    ],
    pearls: [
      'Never delay LP for CT if NO papilledema, NO focal deficit, NO AMS — time to antibiotics is critical in bacterial meningitis',
      'CT first if: papilledema, focal deficit, GCS < 14, immunocompromised, new-onset seizure, age > 60',
      'PDPH treatment: caffeine 300 mg PO/IV, aggressive oral hydration, lying flat; refractory → epidural blood patch (15–20 mL autologous blood)',
      'Xanthochromia (yellow CSF) on centrifugation: present 2–4 h after SAH, persists up to 2 weeks',
      'Atraumatic needle (Whitacre/Sprotte) ↓ PDPH from ~30% to ~10% — use whenever available',
      'Opening pressure: MUST be in lateral decubitus; seated pressure is not reliable',
    ],
  },

  // ─── Emergency Protocols ──────────────────────────────────────────────────────

  {
    id: 'cardiac-arrest',
    name: 'In-Hospital Cardiac Arrest (ACLS)',
    aliases: ['Code blue', 'ACLS', 'CPR protocol', 'Cardiac arrest management'],
    category: 'Emergency Protocols',
    overview: 'Step-by-step response to witnessed or unwitnessed cardiac arrest in hospital. Organized around 2-minute CPR cycles with rhythm-guided treatment. Survival depends on early CPR and rapid defibrillation.',
    indications: [
      'Pulseless patient — any rhythm',
      'Witnessed cardiac arrest (VF/pVT most survivable)',
    ],
    phases: [
      {
        title: 'Recognition and Activation (0 min)',
        steps: [
          { step: 'Confirm unresponsiveness: tap shoulders, shout "Are you okay?"' },
          { step: 'Simultaneously check carotid pulse AND look for breathing (no more than 10 seconds)' },
          { step: 'No pulse / agonal gasping → call code, note time, start CPR immediately' },
          { step: 'Assign team roles: compressor, airway, medication nurse, recorder, team leader' },
          { step: 'Position patient supine on firm surface; lower bed to lowest setting; remove headboard' },
        ],
      },
      {
        title: 'CPR (start immediately and every 2-min cycle)',
        steps: [
          { step: 'Compressions: heel of hand on lower half of sternum (center of chest)', detail: 'Rate 100–120/min. Depth 5–6 cm (2–2.4 inches). Allow FULL chest recoil. Minimize interruptions (< 10 sec pause).' },
          { step: 'Ventilation: 30:2 ratio until advanced airway placed', detail: 'BVM with 100% O2. Two-person BVM (E-C grip with mask seal). Avoid hyperventilation.' },
          { step: 'Once advanced airway (ETT or LMA) in place: continuous compressions + 1 breath q6 sec (10/min)', detail: 'Do NOT pause compressions for breaths.' },
          { step: 'Rotate compressor every 2 min to prevent fatigue — announce before switching' },
          { step: 'Minimize CPR pause for any task to < 10 seconds' },
        ],
      },
      {
        title: 'Access and Monitoring',
        steps: [
          { step: 'IV access × 2 (large-bore antecubital veins preferred; avoid femoral — too far from heart)' },
          { step: 'IO (intraosseous) access if IV cannot be established quickly (humeral head or tibial)' },
          { step: 'Apply defibrillator pads (right clavicle, left lateral chest below axilla) and cardiac monitor' },
          { step: 'EtCO2 monitoring: attach to airway — EtCO2 < 10 mmHg = inadequate CPR or ROSC not yet achieved; sudden ↑ to > 35–40 = likely ROSC' },
        ],
      },
      {
        title: 'Rhythm Check and Shockable (VF / Pulseless VT)',
        steps: [
          { step: 'Stop CPR, check rhythm at 2-min mark — LIMIT pause to < 10 seconds' },
          { step: 'SHOCKABLE (VF or pVT): charge defibrillator to 200 J biphasic (or manufacturer-recommended energy)' },
          { step: 'Clear patient: announce "clear," visually confirm no contact, deliver shock' },
          { step: 'IMMEDIATELY resume CPR for 2 min after shock — do not check rhythm immediately' },
          { step: 'Vasopressor: Epinephrine 1 mg IV/IO q3–5min (give during CPR, not during rhythm check)' },
          { step: 'After 3rd shock if still VF/pVT: Amiodarone 300 mg IV push (second dose 150 mg) OR Lidocaine 1–1.5 mg/kg IV (alternate antiarrhythmic)', detail: 'Give during CPR; repeat rhythm check at 2 min.' },
          { step: 'Continue: shock → CPR 2 min → rhythm check → shock if shockable → vasopressor → antiarrhythmic cycle' },
        ],
      },
      {
        title: 'Non-Shockable Rhythm (PEA / Asystole)',
        steps: [
          { step: 'NON-SHOCKABLE (PEA or asystole): continue CPR immediately — NO shock' },
          { step: 'Epinephrine 1 mg IV/IO as soon as possible, then q3–5min' },
          { step: 'Search for and treat reversible causes — Hs & Ts:' },
          { step: 'H: Hypovolemia → IV fluid bolus', detail: 'H: Hypoxia → optimize ventilation. H: Hydrogen ion (acidosis) → sodium bicarbonate 1 mEq/kg IV. H: Hypokalemia/Hyperkalemia → check K⁺, treat. H: Hypothermia → active warming.' },
          { step: 'T: Tension pneumothorax → needle decompression 2nd ICS MCL or 4th/5th ICS AAL', detail: 'T: Tamponade → pericardiocentesis (or thoracotomy if in OR/trauma). T: Toxins → antidote per agent. T: Thrombosis (PE) → systemic lytics (tPA 50 mg IV push). T: Thrombosis (coronary/STEMI) → emergency PCI.' },
          { step: 'Reassess rhythm q2 min; repeat epinephrine q3–5 min; continue cycle' },
        ],
      },
      {
        title: 'ROSC (Return of Spontaneous Circulation)',
        steps: [
          { step: 'ROSC signs: sudden ↑ in EtCO2, palpable pulse, spontaneous breathing, arterial waveform returns' },
          { step: 'Confirm pulse — avoid mistaking artifact for ROSC' },
          { step: '12-lead ECG immediately: look for STEMI or LBBB (→ urgent cath lab activation)' },
          { step: 'Target MAP ≥ 65 mmHg: IV fluids, vasopressors (norepinephrine), treat hypertension' },
          { step: 'SpO2 target 94–98% (avoid hyperoxia — harmful post-ROSC)' },
          { step: 'Targeted temperature management (TTM)', detail: 'For comatose patients post-cardiac arrest: maintain temperature 32–36°C × 24 h (prevent hyperthermia ≥ 37.7°C at minimum).' },
          { step: 'Transfer to ICU; continuous cardiac and hemodynamic monitoring' },
          { step: 'Coronary angiography: indicated for STEMI or strong suspicion of cardiac cause; consider even without STEMI per local protocol' },
        ],
      },
      {
        title: 'Termination of Resuscitation',
        steps: [
          { step: 'Consider termination after 20–30 min of resuscitation with no ROSC', detail: 'Earlier termination may be appropriate; longer efforts if: hypothermia, drug toxicity (especially TCA or Na channel blocker), young patient with shockable rhythm.' },
          { step: 'Favorable factors for continued effort: witnessed arrest, initial shockable rhythm, short time to first shock, bystander CPR' },
          { step: 'Team leader announces time of death after team consensus' },
          { step: 'Notify family; debriefing for team' },
        ],
      },
    ],
    complications: [
      'Rib fractures from compressions (expected — do not reduce compression force)',
      'Liver/spleen laceration (rare)',
      'Pneumothorax from ventilation (check with EtCO2 and breath sounds)',
      'Post-ROSC hypotension (common — treat aggressively)',
      'Anoxic brain injury (severity depends on downtime)',
    ],
    pearls: [
      'EtCO2 is the best real-time CPR quality indicator and ROSC detector — use it',
      'Epinephrine: good for ROSC, but survival-to-discharge and neurological outcome benefit is uncertain — give per protocol',
      'High-quality CPR is more important than any medication',
      'Do NOT hyperventilate — 10 breaths/min max when airway secured; hyperventilation ↑ intrathoracic pressure → ↓ venous return → ↓ cardiac output',
      'If patient in VF and pads are on → immediate defibrillation before CPR (within seconds) — shock first only if arrest is witnessed and defibrillator is immediately present',
    ],
  },

  {
    id: 'seizure-protocol',
    name: 'Status Epilepticus Protocol',
    aliases: ['Status epilepticus', 'Seizure management', 'SE protocol'],
    category: 'Emergency Protocols',
    overview: 'Stepwise time-based protocol for seizures lasting > 5 min or ≥ 2 seizures without return to baseline. Morbidity and mortality rise sharply after 30 min. Time to treatment is critical.',
    indications: [
      'Seizure lasting > 5 minutes (operational definition of status epilepticus)',
      'Two or more seizures without return to baseline',
      'Clinically suspected nonconvulsive status epilepticus (NCSe) with AMS',
    ],
    phases: [
      {
        title: '0–5 min: Immediate Stabilization',
        steps: [
          { step: 'TIME the seizure — document exact start time' },
          { step: 'Protect patient: lateral decubitus position, padding, call for help' },
          { step: 'DO NOT insert anything in mouth — suction secretions with Yankauer' },
          { step: 'Airway: jaw thrust, oral airway if possible; NRB O2 at 15 LPM; BVM at bedside' },
          { step: 'Monitoring: SpO2, cardiac monitor, BP' },
          { step: 'IV/IO access (or IM access if IV delayed)' },
          { step: 'Point-of-care glucose STAT', detail: 'If glucose < 60 mg/dL: dextrose 50 mL of 50% IV (D50) + thiamine 100 mg IV first if alcoholism or malnutrition suspected.' },
          { step: 'Send labs: BMP (Na, glucose, Ca, Mg), CBC, AED levels, tox screen, β-hCG' },
        ],
      },
      {
        title: '5–20 min: First-Line — Benzodiazepines',
        steps: [
          { step: 'BENZODIAZEPINE — first-line: choose one based on access:' },
          { step: 'Lorazepam (Ativan) 0.1 mg/kg IV (max 4–8 mg) — PREFERRED if IV access', detail: 'Give over 2 min. Can repeat in 5 min if seizure persists.' },
          { step: 'Midazolam (Versed) 0.2 mg/kg IM (max 10 mg) — PREFERRED if NO IV access', detail: 'IM midazolam in deltoid or thigh; bioavailability 90%; onset 5 min. Equivalent to lorazepam IV (RAMPART trial).' },
          { step: 'Diazepam (Valium) 0.15–0.2 mg/kg IV (max 10 mg) — alternative IV', detail: 'Rectal diazepam 0.2–0.5 mg/kg if no IV/IM access (prehospital or home).' },
          { step: 'If seizure continues after benzodiazepine → proceed immediately to second-line agents' },
        ],
      },
      {
        title: '20–40 min: Second-Line — Non-Benzodiazepine AED (Established SE)',
        steps: [
          { step: 'CHOOSE ONE agent (ESETT trial: all three are equally effective — ~45% seizure cessation):' },
          { step: 'Levetiracetam (Keppra) 60 mg/kg IV over 10 min (max 4,500 mg)', detail: 'No cardiac monitoring required; no hepatic metabolism; preferred in cardiac disease, hepatic failure, or pregnancy.' },
          { step: 'Valproic acid (Depakote) 40 mg/kg IV over 10 min (max 3,000 mg)', detail: 'Avoid in pregnancy, mitochondrial disease, liver disease, known urea cycle defect.' },
          { step: 'Fosphenytoin (Cerebyx) 20 mg PE/kg IV at max 150 mg PE/min (max 1,500 mg PE)', detail: 'Cardiac monitoring required (hypotension, arrhythmia). Phenytoin 20 mg/kg if fosphenytoin unavailable (max 50 mg/min — slower). Avoid in cardiac disease, cardiac arrhythmias.' },
          { step: 'While waiting for second-line: intubation if airway compromised or hypoxic' },
        ],
      },
      {
        title: '> 40 min: Third-Line — Refractory Status Epilepticus (RSE)',
        steps: [
          { step: 'INTUBATE: RSI with ketamine (1.5 mg/kg IV) — also anticonvulsant; or other induction agent', detail: 'Use rocuronium for paralysis — do NOT use long-acting paralytics without EEG monitoring (paralytics mask clinical seizures).' },
          { step: 'Initiate anesthetic infusion for burst-suppression — choose one:' },
          { step: 'Propofol: 1–2 mg/kg IV bolus, then 2–12 mg/kg/h infusion', detail: 'Watch for propofol infusion syndrome (PRIS) if > 48 h or > 5 mg/kg/h: acidosis, rhabdomyolysis, cardiac failure.' },
          { step: 'Midazolam: 0.2 mg/kg IV bolus, then 0.05–2 mg/kg/h infusion', detail: 'Tolerance develops; may need ↑ dose. Watch for respiratory depression.' },
          { step: 'Pentobarbital (last resort): 5–15 mg/kg IV load, then 0.5–3 mg/kg/h', detail: 'Most potent; cardiovascular suppression common — vasopressor support usually required.' },
          { step: 'EEG monitoring: mandatory in RSE to guide therapy and detect nonconvulsive status' },
          { step: 'Neurology consult immediately if not already involved' },
        ],
      },
      {
        title: 'Investigations and Underlying Cause',
        steps: [
          { step: 'CT head after stabilization (new-onset seizure, focal deficit, trauma, anticoagulation)' },
          { step: 'LP if fever or immunocompromised → rule out CNS infection', detail: 'Do not delay empirical antibiotics + acyclovir for suspected meningitis/encephalitis while waiting for LP.' },
          { step: 'MRI brain (superior to CT for structural cause — arrange after initial stabilization)' },
          { step: 'Common causes: AED non-compliance, CNS infection, metabolic (Na, glucose, Ca, Mg), stroke, TBI, drug/toxin, hypoxia, eclampsia (check β-hCG in women of childbearing age)' },
          { step: 'Eclampsia: magnesium sulfate 4–6 g IV load + 2 g/h maintenance (superior to AEDs for eclamptic seizures)' },
        ],
      },
    ],
    complications: [
      'Airway compromise / aspiration (lateral positioning + suction)',
      'Hypoxia and respiratory failure (escalate airway management early)',
      'Hyperthermia (temperature > 38°C ↑ brain injury — active cooling)',
      'Metabolic acidosis from prolonged seizure activity',
      'Rhabdomyolysis (myoglobinuria, AKI — aggressive IVF)',
      'Propofol infusion syndrome (PRIS) — monitor lactate, TGs, CPK with prolonged use',
    ],
    pearls: [
      'Most seizures self-terminate in < 2–3 min; > 5 min = unlikely to stop without treatment',
      'IM midazolam is as effective as IV lorazepam (RAMPART trial) — critical for out-of-hospital or no-IV settings',
      'Never use long-acting neuromuscular blockers in RSE without continuous EEG — clinical signs disappear but electrical seizure continues',
      'Nonconvulsive SE (NCSe): altered mental status without motor activity; requires EEG to diagnose — consider in any unexplained AMS post-seizure',
      'Pyridoxine deficiency (INH toxicity, rare): give pyridoxine 5 g IV if suspected cause — AEDs will not work',
    ],
  },

  {
    id: 'trauma-survey',
    name: 'Trauma Primary Survey (ATLS)',
    aliases: ['ABCDE', 'ATLS', 'Trauma assessment', 'Primary survey'],
    category: 'Emergency Protocols',
    overview: 'Systematic ABCDE assessment to rapidly identify and manage immediately life-threatening injuries. The primary survey is performed simultaneously with resuscitation. Secondary survey follows only after primary survey is complete and patient is stabilizing.',
    indications: [
      'All trauma activations',
      'Any mechanism with potential for significant injury (MVC, fall from height, penetrating trauma, blast injury)',
    ],
    phases: [
      {
        title: 'Preparation and Team Activation',
        steps: [
          { step: 'Trauma team assembled and roles assigned before patient arrival' },
          { step: 'PPE (gloves, gown, eye protection, mask) for all team members' },
          { step: 'Warm the room; warmed IV fluids ready' },
          { step: 'Blood bank notified; massive transfusion protocol (MTP) primed if penetrating/severe blunt' },
          { step: 'OR team on standby for penetrating trauma or hemodynamic instability' },
          { step: 'Pre-brief: mechanism, vitals en route, known injuries, ETA' },
        ],
      },
      {
        title: 'A — Airway with C-spine Protection',
        steps: [
          { step: 'Approach: talk to patient — if they respond normally, airway is patent' },
          { step: 'C-spine: manual in-line stabilization for all blunt trauma; apply C-collar once airway managed', detail: 'Do NOT remove C-collar until spine clinically or radiologically cleared.' },
          { step: 'Assess airway: look for blood, vomit, teeth, foreign body; listen for stridor, gurgling, snoring' },
          { step: 'Airway maneuvers: suction, jaw thrust (not chin lift in trauma), OPA/NPA' },
          { step: 'Definitive airway if: GCS ≤ 8, airway obstruction, apnea, anticipated deterioration, airway burns', detail: 'RSI with in-line C-spine stabilization (cricoid pressure by assistant, manual stabilization by another). Remove anterior C-collar during laryngoscopy.' },
          { step: 'Cricothyrotomy if cannot intubate and cannot oxygenate (failed airway)' },
        ],
      },
      {
        title: 'B — Breathing and Ventilation',
        steps: [
          { step: 'Expose chest: inspect for wounds, symmetry, paradoxical movement (flail chest)' },
          { step: 'Auscultate bilateral breath sounds (axillae)' },
          { step: 'SpO2 + supplemental O2 to all trauma patients (NRB 15 LPM)' },
          { step: 'Immediately life-threatening chest injuries (treat NOW):' },
          { step: 'Open pneumothorax (sucking chest wound): 3-sided occlusive dressing, then chest tube', detail: 'Three-sided dressing allows air out but not in (flutter valve effect).' },
          { step: 'Tension pneumothorax: needle decompression 14g needle 2nd ICS MCL OR 4th/5th ICS AAL → finger thoracostomy in intubated patient → chest tube', detail: 'Clinical diagnosis — absent breath sounds + JVD + hypotension + tracheal deviation (late). Do NOT wait for imaging.' },
          { step: 'Massive hemothorax: bilateral large-bore chest tubes (28–36 Fr) + MTP', detail: 'Immediate thoracotomy if > 1,500 mL drained immediately or > 200 mL/h ongoing.' },
          { step: 'Flail chest (paradoxical motion): positive pressure ventilation; analgesia (intercostal nerve block, epidural)' },
        ],
      },
      {
        title: 'C — Circulation and Hemorrhage Control',
        steps: [
          { step: 'Assess perfusion: HR, BP, skin color and temperature, capillary refill, GCS (proxy for brain perfusion)' },
          { step: 'External hemorrhage control IMMEDIATELY: direct pressure → pressure dressing → tourniquet (extremities) → wound packing + pressure (junctional/truncal)', detail: 'Tourniquet: apply 2–3 inches proximal to wound, note time. Time to removal < 6 h before ischemic damage.' },
          { step: 'IV access: 2 large-bore IVs (16g+) in antecubital fossa; IO if IV access delayed' },
          { step: 'FAST exam (Focused Assessment with Sonography in Trauma)', detail: 'Probe windows: hepatorenal (Morison pouch), splenorenal, pericardium (subxiphoid), pelvis (pouch of Douglas). Free fluid = hemorrhage source.' },
          { step: 'For hemodynamic instability + blunt trauma: activate massive transfusion protocol (MTP)', detail: 'MTP: 1:1:1 ratio of PRBCs:FFP:platelets. Minimize crystalloid. Target MAP ≥ 50–65 in hemorrhagic shock (permissive hypotension — avoid in TBI).' },
          { step: 'Pelvic binder: apply if pelvic fracture suspected (bilateral hip pain, mechanism, ↑ AP diameter)', detail: 'Apply at greater trochanters — compresses pelvis to reduce hemorrhage from pelvic venous plexus.' },
          { step: 'TXA (tranexamic acid): 1 g IV over 10 min within 3 h of injury in hemorrhagic shock', detail: 'CRASH-2 trial: ↓ mortality. Give within 3 h; >3 h may increase risk.' },
        ],
      },
      {
        title: 'D — Disability (Neurological Assessment)',
        steps: [
          { step: 'GCS: score eyes, verbal, motor (E4V5M6 = 15, normal; ≤ 8 = intubate)' },
          { step: 'Pupils: size, reactivity, symmetry', detail: 'Fixed dilated pupil = herniation until proven otherwise; unequal pupils = mass lesion ipsilateral to fixed pupil.' },
          { step: 'Point-of-care glucose: hypoglycemia can mimic neurological injury — treat immediately if low' },
          { step: 'Maintain C-spine immobilization throughout' },
          { step: 'Brief extremity movement check: ask patient to wiggle fingers and toes if conscious' },
        ],
      },
      {
        title: 'E — Exposure and Environment',
        steps: [
          { step: 'Complete undress: cut off all clothing to inspect every body surface', detail: 'DO NOT cut through bullet holes or knife wounds — preserve forensic evidence.' },
          { step: 'Log roll (4-person): maintain C-spine alignment; inspect entire posterior surface, spine, buttocks', detail: 'Person at head controls C-spine and gives count. Inspect: lacerations, step-off deformities, rectal tone, perianal injuries.' },
          { step: 'Prevent hypothermia: warm IV fluids, warming blankets, warm room — hypothermia + acidosis + coagulopathy = lethal triad' },
          { step: 'Cover patient immediately after inspection' },
        ],
      },
      {
        title: 'Adjuncts to Primary Survey',
        steps: [
          { step: '12-lead ECG: arrhythmias suggest myocardial contusion or tamponade' },
          { step: 'Portable CXR: pneumo/hemothorax, widened mediastinum (aortic injury), rib fractures' },
          { step: 'Portable pelvis XR: pelvic ring disruption confirms need for binder/interventional radiology' },
          { step: 'Extended FAST (eFAST): add lung windows to rule out pneumothorax (absence of lung sliding)' },
          { step: 'Urinary catheter: hourly urine output (goal > 0.5 mL/kg/h) — after ruling out urethral injury (blood at meatus, high-riding prostate)' },
          { step: 'NG/OG tube: gastric decompression, prevent aspiration — after ruling out basilar skull fracture (use OG if Battle sign, raccoon eyes, CSF otorrhea/rhinorrhea → use OG tube)' },
          { step: 'Temperature: core temperature monitoring' },
        ],
      },
      {
        title: 'Secondary Survey (head-to-toe examination)',
        steps: [
          { step: 'Performed ONLY after primary survey complete and resuscitation initiated' },
          { step: 'AMPLE history: Allergies, Medications, Past medical history, Last meal, Events/mechanism of injury' },
          { step: 'Complete head-to-toe physical exam: scalp lacerations, maxillofacial, neck veins, trachea, auscultate heart/abdomen, pelvis compression, long bone palpation, neurovascular distal exam' },
          { step: 'Definitive imaging: trauma CT pan-scan (head, C-spine, chest, abdomen, pelvis with contrast) for stable patients', detail: 'Go directly to OR if hemodynamically unstable and clear surgical indication.' },
          { step: 'Subspecialty consults: neurosurgery (intracranial injury), orthopedics (fractures), general surgery (abdominal injury), vascular (vascular injury)' },
        ],
      },
    ],
    complications: [
      'Missed injury (secondary survey prevents this — repeat exam after 24 h)',
      'Lethal triad: hypothermia + acidosis + coagulopathy — prevent aggressively',
      'Neurogenic shock vs hemorrhagic shock (SCI → warm, bradycardic, hypotensive; hemorrhagic → cold, tachycardic)',
      'Occult pneumothorax (visible on CT only — observe stable, drain unstable)',
      'C-spine injury missed — maintain immobilization until cleared',
    ],
    pearls: [
      'Immediate life threats (ATOM-FC): Airway obstruction, Tension pneumothorax, Open pneumothorax, Massive hemothorax, Flail chest, Cardiac tamponade',
      'Penetrating trauma to the "cardiac box" (nipples to clavicles, midline to midclavicular): always consider tamponade — pericardiocentesis or ED thoracotomy',
      'Permissive hypotension (SBP 80–90 mmHg) for hemorrhagic shock until surgical control — EXCEPT in TBI (maintain MAP ≥ 80)',
      'Damage control resuscitation: blood products > crystalloid; early MTP activation; minimize warm ischemia time',
      'TXA within 3 h of injury — do not delay; > 3 h: no benefit and potential harm (CRASH-2)',
    ],
  },

  {
    id: 'anaphylaxis',
    name: 'Anaphylaxis Management',
    aliases: ['Anaphylactic reaction', 'Severe allergic reaction'],
    category: 'Emergency Protocols',
    overview: 'Severe, life-threatening systemic hypersensitivity reaction. Epinephrine IM is the cornerstone of treatment and must not be delayed. Antihistamines and steroids are adjuncts only — they do not treat the life-threatening elements.',
    indications: [
      'Sudden onset urticaria/angioedema + hypotension or bronchospasm after exposure to allergen',
      'Any two of: skin/mucosal involvement, airway compromise, hypotension, GI symptoms after likely allergen exposure',
      'Hypotension alone after known allergen exposure',
    ],
    phases: [
      {
        title: 'Recognition and Trigger Removal',
        steps: [
          { step: 'Recognize anaphylaxis: skin/mucosal symptoms + airway, BP, or GI involvement after allergen exposure', detail: 'Do NOT wait for classic triad — urticaria may be absent in 20% of anaphylaxis cases.' },
          { step: 'Remove or stop the trigger immediately', detail: 'Stop IV medication or infusion; remove insect stinger (scrape — do not squeeze); remove latex gloves.' },
          { step: 'Call for help; activate emergency response' },
        ],
      },
      {
        title: 'Epinephrine (FIRST and ALWAYS)',
        steps: [
          { step: 'EPINEPHRINE 1:1,000 (1 mg/mL): 0.3–0.5 mg IM into anterolateral thigh (vastus lateralis)', detail: 'Anterolateral thigh > deltoid — faster absorption; can be given through clothing. Auto-injector = 0.3 mg (adult), 0.15 mg (< 30 kg).' },
          { step: 'Repeat epinephrine every 5–15 min if no improvement or if symptoms recur — no maximum dose in life-threatening anaphylaxis' },
          { step: 'Epinephrine IV: for anaphylactic SHOCK only (not responding to IM doses + IV access)', detail: 'Infusion: 0.1–1 mcg/kg/min titrated to BP. Dilute carefully — IV 1:10,000 push used ONLY in cardiac arrest (not awake patient).' },
        ],
      },
      {
        title: 'Positioning and Airway',
        steps: [
          { step: 'Position: SUPINE with legs elevated (to increase venous return) — do NOT sit patient up unless respiratory distress', detail: 'FATAL POSITIONING ERROR: sitting up or standing a hypotensive anaphylaxis patient → cardiovascular collapse. Keep supine.' },
          { step: 'O2: 15 LPM via NRB mask' },
          { step: 'Assess for stridor (laryngeal edema) and bronchospasm (wheeze)' },
          { step: 'If stridor or worsening angioedema: prepare for EARLY intubation', detail: 'Laryngeal edema progresses rapidly — wait too long and intubation becomes impossible. Call anesthesia/ENT early. Surgical airway kit at bedside.' },
          { step: 'Nebulized epinephrine (racemic 2.25%, 0.5 mL in 3 mL NS) for isolated laryngeal symptoms — temporizing, not curative' },
          { step: 'Bronchospasm not responding to epinephrine: albuterol 2.5 mg nebulized (add to treatment, not instead of epinephrine)' },
        ],
      },
      {
        title: 'IV Access and Fluid Resuscitation',
        steps: [
          { step: 'Establish large-bore IV access × 2' },
          { step: 'IV fluid bolus for hypotension: 1–2 L NS rapidly (wide open)' },
          { step: 'Repeat boluses as needed — anaphylaxis can cause massive fluid shifts out of vasculature' },
          { step: 'Cardiac monitoring: tachycardia expected; bradycardia = poor sign (Bezold-Jarisch reflex in severe distributive shock)' },
        ],
      },
      {
        title: 'Adjunct Medications',
        steps: [
          { step: 'H1 antihistamine: diphenhydramine 50 mg IV', detail: 'Treats urticaria/pruritus — does NOT treat hypotension or bronchospasm. Adjunct only.' },
          { step: 'H2 antihistamine: famotidine 20 mg IV (or ranitidine 50 mg IV)', detail: 'Additive to H1 blocker for skin symptoms; very limited evidence for systemic benefit.' },
          { step: 'Corticosteroid: methylprednisolone 125 mg IV (or hydrocortisone 200 mg IV)', detail: 'Onset 4–6 h — does NOT help the acute episode. Goal: reduce biphasic reaction risk. Evidence is limited.' },
          { step: 'Glucagon: 1–5 mg IV over 5 min for patients on beta-blockers who are refractory to epinephrine', detail: 'Beta-blockade prevents epinephrine effect; glucagon bypasses β-receptor to ↑ heart rate and cardiac output.' },
        ],
      },
      {
        title: 'Observation and Disposition',
        steps: [
          { step: 'Observe minimum 4–6 h after symptom resolution for biphasic reaction', detail: 'Biphasic: 5–20% of anaphylaxis cases; occurs 1–72 h after initial reaction without re-exposure.' },
          { step: 'Observe 24 h for: severe reaction, refractory hypotension, respiratory compromise, prior biphasic history' },
          { step: 'Before discharge: prescribe 2× epinephrine auto-injectors (EpiPen) and train patient on use', detail: 'One for immediate use, one as backup.' },
          { step: 'Written anaphylaxis action plan' },
          { step: 'Allergist referral for allergen testing and immunotherapy (venom allergy, food allergy)' },
          { step: 'Medical alert bracelet / identification' },
          { step: 'Consider: short course oral prednisone 40 mg × 3 days (limited evidence; commonly prescribed)' },
        ],
      },
    ],
    complications: [
      'Biphasic anaphylaxis (5–20%) — observe adequately before discharge',
      'Airway loss from rapidly progressive angioedema — intubate early',
      'Cardiac arrest (distributive shock, severe hypoxia)',
      'Epinephrine-induced arrhythmia (rare at IM doses)',
      'Rebound anaphylaxis from inadequate treatment',
    ],
    pearls: [
      'Epinephrine is the ONLY life-saving drug in anaphylaxis — give it FIRST, not after antihistamines',
      'IM thigh > IM deltoid > SC for epinephrine absorption speed',
      'POSITIONING KILLS: hypotensive anaphylaxis patient sitting up can be fatal (cardiovascular collapse from venous pooling)',
      'Beta-blocker patients: refractory hypotension and bradycardia → glucagon 1–5 mg IV',
      'Tryptase: peak 60–90 min after onset; draw serum tryptase at 1–2 h, 4 h, and 24 h to confirm diagnosis',
      'Epinephrine is safe in pregnancy — maternal anaphylaxis untreated is far more dangerous to fetus than epinephrine',
    ],
  },

];
