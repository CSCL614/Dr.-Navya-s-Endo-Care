export interface SpecialityItem {
  id: string;
  title: string;
  teluguTitle: string;
  shortDesc: string;
  fullDesc: string;
  href: string;
  category: "metabolic" | "thyroid" | "paediatric" | "reproductive" | "hormonal";
  conditions: string[];
}

export interface SymptomItem {
  name: string;
  detail: string;
  possibleCauses: string;
}

export interface ContributingFactor {
  title: string;
  description: string;
  iconName: string;
}

export interface PatientQuestion {
  question: string;
  summary: string;
  answer: string;
  category: string;
}

export interface DoctorProfileData {
  name: string;
  degrees: string;
  fullTitle: string;
  role: string;
  centerName: string;
  location: string;
  headline: string;
  heroHeadline: string;
  heroSupportingText: string;
  heroSpecialitiesLine: string;
  heroTeluguLine: string;
  featuredQuote1: string;
  featuredQuote2: string;
  teluguTagline: string;
  dietician: {
    name: string;
    qualifications: string;
    role: string;
  };
  principles: {
    number: string;
    title: string;
    description: string;
  }[];
  homepageSpecialities: SpecialityItem[];
  symptomsList: SymptomItem[];
  metabolicFactors: ContributingFactor[];
  lifestyleFactors: {
    factor: string;
    impact: string;
  }[];
  whyChoosePoints: {
    title: string;
    description: string;
  }[];
  patientQuestions: PatientQuestion[];
  philosophy: string[];
  whyChoseEndocrinology: {
    lead: string;
    paragraphs: string[];
    focusAreas: {
      title: string;
      description: string;
    }[];
  };
  approachToCare: {
    step: string;
    title: string;
    description: string;
    highlight: string;
  }[];
  academicJourney: {
    period: string;
    institution: string;
    degree: string;
    description: string;
  }[];
  achievements: {
    title: string;
    detail: string;
    type: "award" | "education" | "presentation" | "membership";
  }[];
  personalSide: {
    introduction: string;
    interests: string[];
    languages: {
      language: string;
      fluency: string;
    }[];
    closingNote: string;
  };
  specialities: {
    id: string;
    title: string;
    shortDesc: string;
    fullDesc: string;
    category: "metabolic" | "thyroid" | "paediatric" | "reproductive" | "hormonal";
    keyPoints: string[];
  }[];
  prevention: {
    headline: string;
    subheadline: string;
    areas: {
      title: string;
      audience: string;
      description: string;
    }[];
  };
  obesityClinic: {
    title: string;
    schedule: string;
    day: string;
    time: string;
    team: string;
    dieticianName: string;
    dieticianCreds: string;
    overview: string;
    features: string[];
  };
  diabetesSupport: {
    title: string;
    subtitle: string;
    services: {
      title: string;
      description: string;
    }[];
    assessmentFacilities: {
      name: string;
      purpose: string;
    }[];
    centerFacilities: string[];
  };
  communityOutreach: {
    headline: string;
    inaugurationDate: string;
    description: string;
    initiatives: string[];
  };
}

export const doctorData: DoctorProfileData = {
  name: "Dr. Navya Sruthi Mandapati",
  degrees: "MBBS, MD (General Medicine), DM (Endocrinology)",
  fullTitle: "Dr. Navya Sruthi Mandapati — MBBS, MD, DM",
  role: "Consultant Endocrinologist — Adult & Paediatric",
  centerName: "Dr. Navya’s EndoCare — Diabetes, Thyroid & Endocrine Superspeciality Center",
  location: "Vizianagaram, Andhra Pradesh",
  headline: "Academic Excellence. Personalized Care. A Strong Belief in Prevention.",
  heroHeadline: "Specialist Endocrine Care. For Every Stage of Life.",
  heroSupportingText: "Personalised adult and paediatric endocrine care with a focus on diabetes, thyroid disorders, obesity, metabolic health, and patient counselling.",
  heroSpecialitiesLine: "Diabetes • Thyroid • Obesity • PCOS • Growth • Puberty • Bone Health • Hormonal Disorders",
  heroTeluguLine: "షుగర్ • థైరాయిడ్ • ఊబకాయం • హార్మోన్ సమస్యలు",
  teluguTagline: "డయాబెటిస్ • థైరాయిడ్ • ఊబకాయం • హార్మోన్ స్పెషాలిటీ కేర్",
  featuredQuote1: "Good treatment should help you understand your condition—not simply give you medicines for it.",
  featuredQuote2: "For me, a consultation should do more than end with a prescription.",
  
  dietician: {
    name: "Dr Syamini Siripuram",
    qualifications: "MSc Nutrition and Dietetics",
    role: "Consultant Dietician"
  },

  principles: [
    {
      number: "01",
      title: "Understand the Cause",
      description: "Endocrine symptoms are interconnected. We take the time to evaluate blood sugar, energy, weight, periods, fertility, growth, and blood pressure together."
    },
    {
      number: "02",
      title: "Treat the Root Problem",
      description: "Rather than masking symptoms with isolated prescriptions, we investigate underlying hormonal deficits, insulin resistance, and glandular imbalances."
    },
    {
      number: "03",
      title: "Support Lasting Health",
      description: "Effective therapy combines cutting-edge clinical science with achievable nutrition, restorative sleep, and sustainable lifestyle practices for lifelong vitality."
    }
  ],

  homepageSpecialities: [
    {
      id: "diabetes-care",
      title: "Diabetes Care",
      teluguTitle: "డయాబెటిస్ కేర్",
      shortDesc: "Comprehensive clinical care for Type 1, Type 2, and Gestational Diabetes with complication prevention.",
      fullDesc: "Complete diabetes support encompassing continuous glucose monitoring, personalized insulin therapy, vascular assessments, and dietary coaching to protect kidneys, heart, eyes, and nerves.",
      href: "/diabetes-care",
      category: "metabolic",
      conditions: ["Type 1 & 2 Diabetes", "Prediabetes Reversal", "Gestational Diabetes", "Diabetic Foot Risk Screening", "Continuous Glucose Monitoring (CGM)"]
    },
    {
      id: "thyroid-care",
      title: "Thyroid Care",
      teluguTitle: "థైరాయిడ్ కేర్",
      shortDesc: "Accurate diagnosis and personalized therapy for underactive, overactive, and nodular thyroid conditions.",
      fullDesc: "Specialized endocrine evaluation for Hashimoto's thyroiditis, hypothyroidism, Graves' disease, goitre, thyroid nodules, and thyroid management before and during pregnancy.",
      href: "/thyroid-care",
      category: "thyroid",
      conditions: ["Hypothyroidism", "Hyperthyroidism", "Hashimoto's & Autoimmune Thyroid", "Thyroid Nodules & Goitre", "Pregnancy Thyroid Disorders"]
    },
    {
      id: "obesity-metabolic",
      title: "Obesity & Metabolic Health",
      teluguTitle: "ఊబకాయం & మెటబాలిక్ హెల్త్",
      shortDesc: "Science-based medical weight management addressing neuroendocrine drivers and insulin resistance.",
      fullDesc: "A dedicated clinical focus moving beyond simplistic calorie advice. Joint consultations with our Endocrinologist and Clinical Dietician every Wednesday.",
      href: "/obesity-metabolic-health",
      category: "metabolic",
      conditions: ["Insulin Resistance", "Metabolic Syndrome", "Medical Weight Management", "Fatty Liver Disease (NAFLD)", "Wednesday Lifestyle Clinic"]
    },
    {
      id: "pcos-womens-health",
      title: "PCOS & Women's Hormonal Health",
      teluguTitle: "పీసీఓఎస్ & మహిళల హార్మోన్ల ఆరోగ్యం",
      shortDesc: "Holistic hormonal and metabolic balancing for irregular cycles, hirsutism, acne, and fertility.",
      fullDesc: "Addressing the root endocrine and insulin resistance contributors to Polycystic Ovary Syndrome, androgen excess, and perimenopausal transitions.",
      href: "/pcos-womens-health",
      category: "reproductive",
      conditions: ["Polycystic Ovary Syndrome (PCOS)", "Menstrual Irregularities", "Hirsutism & Facial Hair", "Pre-conception Metabolic Prep", "Hormonal Imbalance"]
    },
    {
      id: "paediatric-growth",
      title: "Child Growth & Puberty",
      teluguTitle: "పిల్లల ఎదుగుదల & యుక్తవయస్సు",
      shortDesc: "Specialized paediatric endocrinology evaluating short stature, poor growth velocity, and puberty timing.",
      fullDesc: "Safeguarding physical development through standardized growth tracking, growth hormone evaluation, precocious (early) puberty, and delayed puberty management.",
      href: "/paediatric-endocrinology",
      category: "paediatric",
      conditions: ["Short Stature & Growth Delay", "Precocious (Early) Puberty", "Delayed Pubertal Development", "Growth Hormone Deficiency", "Childhood Endocrine Disorders"]
    },
    {
      id: "bone-calcium",
      title: "Bone, Calcium & Vitamin D",
      teluguTitle: "ఎముకలు, కాల్షియం & విటమిన్ డి",
      shortDesc: "Expert management of osteoporosis, fracture risk, hypercalcemia, and parathyroid gland diseases.",
      fullDesc: "Diagnostic workups for low bone mineral density, recurrent kidney stones, primary hyperparathyroidism, and severe or resistant vitamin D deficiencies.",
      href: "/bone-mineral-health",
      category: "hormonal",
      conditions: ["Osteoporosis & Fragility Fractures", "Hyperparathyroidism", "Severe Vitamin D Deficiency", "Hypercalcemia & Hypocalcemia", "Osteomalacia"]
    },
    {
      id: "pituitary-adrenal",
      title: "Pituitary & Adrenal Disorders",
      teluguTitle: "పిట్యూటరీ & అడ్రినల్ సమస్యలు",
      shortDesc: "Advanced hormonal assessment for the master glands regulating cortisol, prolactin, and stress response.",
      fullDesc: "Investigation and replacement therapies for prolactinoma, Cushing's syndrome, adrenal insufficiency (Addison's), and pituitary adenomas.",
      href: "/pituitary-adrenal-care",
      category: "hormonal",
      conditions: ["Hyperprolactinemia & Prolactinoma", "Adrenal Insufficiency (Addison's)", "Cushing's Syndrome", "Pituitary Adenomas", "Electrolyte & Sodium Balance"]
    },
    {
      id: "hormonal-bp",
      title: "Hormonal Blood Pressure & Complex Endocrine Conditions",
      teluguTitle: "హార్మోనల్ బీపీ & ఇతర ఎండోక్రైన్ సమస్యలు",
      shortDesc: "Screening and management for endocrine secondary hypertension and rare glandular syndromes.",
      fullDesc: "Identifying curable endocrine causes of high blood pressure—such as primary hyperaldosteronism, pheochromocytoma, and renal vascular endocrine factors.",
      href: "/pituitary-adrenal-care#hormonal-bp",
      category: "hormonal",
      conditions: ["Young-Onset Hypertension", "Resistant High Blood Pressure", "Primary Hyperaldosteronism (Conn's)", "Pheochromocytoma", "Endocrine Secondary Hypertension"]
    }
  ],

  symptomsList: [
    {
      name: "Persistent Weight Changes",
      detail: "Unexplained weight gain or inability to lose weight despite healthy habits, or sudden unintended weight loss.",
      possibleCauses: "Insulin resistance, hypothyroidism, Cushing's, or Type 1 diabetes"
    },
    {
      name: "Irregular Menstrual Periods",
      detail: "Missed cycles, frequent cycles, or cycles halting unexpectedly along with acne or mood shifts.",
      possibleCauses: "PCOS, thyroid dysfunction, or hyperprolactinemia"
    },
    {
      name: "Excess Facial / Body Hair",
      detail: "Coarse dark hair growth on chin, upper lip, chest, or abdomen (hirsutism).",
      possibleCauses: "Androgen excess, PCOS, or adrenal disorders"
    },
    {
      name: "Difficult-to-Control Blood Sugar",
      detail: "Fluctuating fasting or post-meal glucose despite prescribed medications and diet.",
      possibleCauses: "Insulin resistance, inadequate titration, or latent autoimmune diabetes"
    },
    {
      name: "Slow Child Growth",
      detail: "Child falling behind peers in height or crossing down percentiles on the growth chart.",
      possibleCauses: "Growth hormone deficiency, hypothyroidism, or chronic metabolic delay"
    },
    {
      name: "Early or Delayed Puberty",
      detail: "Breast development or testicle growth before age 8/9, or no signs of puberty by age 13/14.",
      possibleCauses: "Precocious puberty, delayed puberty, or pituitary-gonadal axis disorders"
    },
    {
      name: "Repeated Fractures or Bone Pain",
      detail: "Breaking a bone from a minor fall, persistent lower back pain, or loss of height.",
      possibleCauses: "Osteoporosis, hyperparathyroidism, or severe vitamin D deficiency"
    },
    {
      name: "Young-Onset High Blood Pressure",
      detail: "Hypertension detected before age 35-40, or blood pressure requiring 3+ medications to control.",
      possibleCauses: "Primary aldosteronism, pheochromocytoma, or Cushing's syndrome"
    },
    {
      name: "Unexplained Low Potassium (Hypokalemia)",
      detail: "Muscle weakness, cramps, or fatigue alongside low blood potassium reports.",
      possibleCauses: "Aldosterone excess, Gitelman's, or adrenal hyperactivity"
    },
    {
      name: "Recurrent Low Blood Sugar (Hypoglycemia)",
      detail: "Shakiness, sweating, dizziness, and intense hunger occurring hours after meals or fasting.",
      possibleCauses: "Reactive hypoglycemia, insulinoma, or adrenal insufficiency"
    },
    {
      name: "Abnormal Calcium or Sodium Levels",
      detail: "Routine lab tests revealing elevated calcium, low calcium, or low sodium (hyponatremia).",
      possibleCauses: "Parathyroid dysfunction, vitamin D disorder, or SIADH / adrenal insufficiency"
    },
    {
      name: "Persistent Tiredness with Other Symptoms",
      detail: "Profound exhaustion that restorative sleep does not cure, especially combined with cold intolerance or hair loss.",
      possibleCauses: "Thyroid disorder, adrenal fatigue, or metabolic syndrome"
    }
  ],

  metabolicFactors: [
    {
      title: "Insulin Resistance",
      description: "Cells become less responsive to insulin, forcing the pancreas to produce higher levels and promoting fat accumulation.",
      iconName: "Activity"
    },
    {
      title: "Excess Visceral Fat",
      description: "Deep abdominal fat surrounding vital organs releases inflammatory cytokines and disrupts metabolic signaling.",
      iconName: "Scale"
    },
    {
      title: "Poor Sleep Quality",
      description: "Inadequate or interrupted sleep disrupts leptin and ghrelin, heightens cortisol, and worsens morning glucose control.",
      iconName: "Moon"
    },
    {
      title: "Physical Inactivity",
      description: "Sedentary routines reduce muscle glucose uptake independent of insulin and diminish mitochondrial efficiency.",
      iconName: "Footprints"
    },
    {
      title: "Dietary Patterns",
      description: "Frequent refined carbohydrates, ultra-processed foods, and hidden sugars trigger repeated glycemic spikes.",
      iconName: "Apple"
    },
    {
      title: "Weight-Promoting Medications",
      description: "Certain prescription drugs for mood, allergies, or blood pressure can inadvertently promote weight gain.",
      iconName: "Pill"
    },
    {
      title: "Underlying Hormonal Disorders",
      description: "Subclinical hypothyroidism, PCOS, or hypercortisolemia directly slow metabolic expenditure and energy burn.",
      iconName: "Sparkles"
    },
    {
      title: "Family & Genetic Risk",
      description: "Inherited variations influence body fat distribution, beta-cell reserve, and lipid clearance capabilities.",
      iconName: "Dna"
    },
    {
      title: "Chronic Stress Factors",
      description: "Prolonged mental or physical stress sustains elevated cortisol, driving central adiposity and cravings.",
      iconName: "ShieldAlert"
    }
  ],

  lifestyleFactors: [
    {
      factor: "Food Preferences & Cultural Cooking",
      impact: "We adapt nutrition to your authentic home cooking (rice, sambar, curries) rather than demanding foreign or extreme diets."
    },
    {
      factor: "Work Schedules & Commute",
      impact: "Meal timing and medication schedules are planned realistically around long work hours, shift work, or travel."
    },
    {
      factor: "Family Routines & Cooking Habits",
      impact: "Guidance is designed to be family-friendly so you don't have to cook isolated, burdensome separate meals."
    },
    {
      factor: "Sleep Timing & Recovery",
      impact: "Practical sleep hygiene steps to normalize circadian rhythms, evening cravings, and hormonal regulation."
    },
    {
      factor: "Physical Activity Pacing",
      impact: "Prescribing achievable movement—starting with brisk walking or low-impact exercises tailored to your joints."
    },
    {
      factor: "Existing Medical Conditions & Meds",
      impact: "Every recommendation is carefully cross-referenced with your blood pressure, kidney function, and cardiac health."
    }
  ],

  whyChoosePoints: [
    {
      title: "Dedicated Hormone Specialist",
      description: "Dr. Navya is a DM Endocrinologist (University Topper), providing focused care for sugar, thyroid, and hormone disorders."
    },
    {
      title: "Care for Adults & Children",
      description: "Specialized care for diabetes, thyroid, and hormones for both adults and young children under one roof."
    },
    {
      title: "Treating the Root Cause",
      description: "Finding out why your sugar or thyroid is out of balance instead of only increasing pills or masking symptoms."
    },
    {
      title: "Friendly & Unhurried Time",
      description: "Every consultation is unhurried. We review your previous medical reports in detail and answer all your questions."
    },
    {
      title: "Real-Life Home Diets",
      description: "Practical eating and walking habits tailored to your authentic home cooking rather than demanding extreme diets."
    },
    {
      title: "Safe & Scientific Care",
      description: "Strict adherence to proven medical science and international clinical guidelines without unverified shortcuts."
    },
    {
      title: "Clear Lab & Follow-Up Guidance",
      description: "Regular checkups, lab parameter guidance, and proactive preventive screening to safeguard your long-term health."
    },
    {
      title: "Dedicated Wednesday Obesity Clinic",
      description: "Endocrinologist and Clinical Dietician working together every Wednesday 4–6 PM for healthy, sustainable weight loss."
    }
  ],

  patientQuestions: [
    {
      category: "Thyroid Care",
      question: "How should thyroid tablets be taken correctly?",
      summary: "Thyroxine tablets must be taken on an empty stomach with plain water at least 30 to 60 minutes before morning tea, coffee, or breakfast. Avoid taking calcium or iron supplements within 4 hours.",
      answer: "Levothyroxine requires an acidic stomach for optimal absorption. Taking it with coffee, tea, milk, or breakfast significantly impairs absorption, causing fluctuating TSH levels. If morning timing is difficult, bedtime dosing (at least 2-3 hours after dinner) can be discussed with your endocrinologist."
    },
    {
      category: "Diabetes",
      question: "Can thin or normal-weight people develop diabetes?",
      summary: "Yes. In the Indian subcontinent, lean individuals frequently have low muscle mass and high visceral fat (the 'thin-fat' phenotype), leading to insulin resistance.",
      answer: "Type 2 diabetes is not limited to overweight individuals. In South Asian populations, a normal BMI can hide high visceral fat, genetic beta-cell vulnerability, or LADA (Latent Autoimmune Diabetes in Adults), which requires specialized endocrine differentiation."
    },
    {
      category: "Child Health",
      question: "When should parents consult for slow child growth?",
      summary: "Consult if your child is consistently shorter than classmates, outgrowing shoes/clothes very slowly, or crossing down percentiles on a growth chart.",
      answer: "Early evaluation is critical while growth plates remain open. An endocrinologist measures precise height velocity, assesses bone age via a simple wrist X-ray, and checks for thyroid dysfunction, celiac disease, or growth hormone deficiency."
    },
    {
      category: "Women's Health",
      question: "Is PCOS purely a gynecological problem or a hormonal condition?",
      summary: "PCOS is primarily an endocrine and metabolic disorder driven by insulin resistance and androgen excess.",
      answer: "While irregular periods and cysts on ultrasound are common, the core driver of PCOS is systemic insulin resistance and hormone dysregulation. Effective treatment requires balancing insulin, modifying nutrition, and stabilizing androgens."
    },
    {
      category: "Diabetes",
      question: "Does starting insulin mean my diabetes has reached its end stage?",
      summary: "No. Insulin is a natural, life-sustaining hormone. Starting insulin protects overworked pancreatic beta cells and prevents complications.",
      answer: "Many patients fear that insulin is a 'punishment' or permanent dependency. In reality, introducing insulin early during glucotoxicity can restore beta-cell function, reduce glucose toxicity, and occasionally allow medication tapering later."
    },
    {
      category: "Obesity",
      question: "Who is eligible for clinical obesity medication?",
      summary: "Patients with BMI ≥ 27-30 kg/m² with associated metabolic conditions like diabetes, hypertension, or fatty liver, under medical supervision.",
      answer: "Medical weight management drugs are indicated for individuals who struggle with metabolic barriers despite lifestyle efforts. They are prescribed alongside a structured nutrition plan and monitored closely for safety."
    },
    {
      category: "Technology",
      question: "What is Continuous Glucose Monitoring (CGM) and how does it help?",
      summary: "A small water-resistant sensor applied to the arm that reads interstitial glucose levels 24/7 without finger pricks.",
      answer: "CGM shows real-time glucose trends, nocturnal lows, and post-meal spikes that standard HbA1c tests miss. It empowers patients to see exactly how specific foods, stress, or walks impact their sugar levels."
    },
    {
      category: "Blood Pressure",
      question: "When should high blood pressure be checked for hormonal causes?",
      summary: "When hypertension is diagnosed under age 35, requires 3+ medications, or is accompanied by low blood potassium.",
      answer: "Secondary hypertension caused by aldosterone excess (Conn's syndrome), renal artery stenosis, or pheochromocytoma is often curable or specifically manageable when diagnosed early by an endocrinologist."
    },
    {
      category: "Bone Health",
      question: "Why does Vitamin D deficiency matter and how is it corrected?",
      summary: "Vitamin D is essential for calcium absorption. Low levels cause bone pain, muscle weakness, and secondary bone loss.",
      answer: "Because Indian skin tone requires longer sunlight exposure and most food contains minimal Vitamin D, deficiency is rampant. Medical correction requires structured therapeutic doses followed by maintenance, not haphazard over-the-counter use."
    }
  ],

  philosophy: [
    "Endocrinology is not just about prescribing medicines; it is about uncovering the root metabolic and hormonal drivers that shape how you feel and function each day.",
    "Care is centred entirely around the patient. Every initial visit includes detailed counselling, an unhurried review of previous medical records, and clear explanation of diagnostic findings.",
    "Sustainable health outcomes rely on evidence-based medicine combined with actionable lifestyle interventions—nutrition, physical activity, restful sleep, stress balance, and weight management."
  ],
  whyChoseEndocrinology: {
    lead: "Hormones govern virtually every cell, rhythm, and metabolic pathway in the human body. When hormones are balanced, life thrives; when disrupted, subtle signs can precede chronic illness.",
    paragraphs: [
      "Dr. Navya chose endocrinology out of a profound belief that early diagnosis and proactive metabolic intervention can prevent irreversible complications before they ever start.",
      "From supporting a child struggling with short stature or early puberty to guiding an expectant mother through gestational diabetes, from reversing prediabetes to balancing thyroid or PCOS challenges—endocrinology provides the scientific bridge between clinical medicine and long-term vitality.",
      "By understanding each patient's cellular metabolism, family history, and day-to-day lifestyle, we can transform acute struggles into predictable, long-term health."
    ],
    focusAreas: [
      {
        title: "Prevention & Early Diagnosis",
        description: "Detecting metabolic syndrome, insulin resistance, and endocrine irregularities years before complications arise."
      },
      {
        title: "Metabolic Health & Weight",
        description: "Addressing underlying neuroendocrine, hormonal, and genetic factors behind obesity and diabetes."
      },
      {
        title: "Thyroid & PCOS Balance",
        description: "Restoring hormonal equilibrium for thyroid dysfunction, menstrual irregularity, and metabolic stability."
      },
      {
        title: "Paediatric Growth & Puberty",
        description: "Safeguarding healthy physical growth, puberty timing, and endocrine well-being in children and adolescents."
      },
      {
        title: "Pregnancy Endocrine Care",
        description: "Careful monitoring and management of gestational diabetes and thyroid disorders during pregnancy."
      }
    ]
  },
  approachToCare: [
    {
      step: "01",
      title: "Listen Deeply",
      description: "Understand symptoms, medical history, lifestyle habits, previous investigations, and personal concerns with empathy and unhurried time.",
      highlight: "Comprehensive review of all previous records and patient symptoms"
    },
    {
      step: "02",
      title: "Find the Why",
      description: "Investigate underlying hormonal, metabolic, genetic, and lifestyle contributors rather than merely masking clinical symptoms.",
      highlight: "Evidence-based investigations targeted at root metabolic causes"
    },
    {
      step: "03",
      title: "Explain Clearly",
      description: "Help patients and families thoroughly understand diagnoses, test results, medicines, and treatment choices in plain, accessible language.",
      highlight: "Knowledge empowers patients to take ownership of their health"
    },
    {
      step: "04",
      title: "Make It Practical",
      description: "Personalise treatment according to food habits, work schedules, family responsibilities, and achievable individual health goals.",
      highlight: "Realistic, sustainable plans designed for everyday life"
    }
  ],
  academicJourney: [
    {
      period: "2008 – 2013",
      institution: "Rangaraya Medical College, Kakinada",
      degree: "MBBS",
      description: "Graduated with outstanding academic distinction, securing multiple Gold Medals and honored as the Best Outgoing Student."
    },
    {
      period: "Postgraduate",
      institution: "Andhra Medical College / King George Hospital, Visakhapatnam",
      degree: "MD in General Medicine",
      description: "Extensive clinical residency managing complex internal medicine cases, acute emergencies, and systemic medical conditions."
    },
    {
      period: "2020 – 2023",
      institution: "Andhra Medical College / King George Hospital, Visakhapatnam",
      degree: "DM in Endocrinology",
      description: "Rigorous superspeciality training in adult and paediatric endocrinology, graduating as the prestigious University Topper."
    },
    {
      period: "Fellowship Experience",
      institution: "KIMS Hospitals, Secunderabad",
      degree: "DrNB Endocrinology Resident Experience",
      description: "Completed six months of intensive additional clinical experience in advanced tertiary endocrine care and specialized clinics."
    },
    {
      period: "29 April 2024 – Present",
      institution: "Dr. Navya’s EndoCare, Vizianagaram",
      degree: "Founder & Chief Consultant Endocrinologist",
      description: "Established the dedicated Diabetes, Thyroid & Endocrine Superspeciality Center to bring world-class endocrine care to North Coastal Andhra."
    }
  ],
  achievements: [
    {
      title: "DM Endocrinology — University Topper",
      detail: "Achieved the highest rank in the superspeciality DM Endocrinology university examinations.",
      type: "award"
    },
    {
      title: "Multiple MBBS Gold Medals",
      detail: "Awarded multiple academic gold medals during undergraduate medical training at Rangaraya Medical College.",
      type: "award"
    },
    {
      title: "Best Outgoing Student",
      detail: "Recognized as the Best Outgoing Student of the MBBS batch for overall academic excellence.",
      type: "education"
    },
    {
      title: "Second Prize, Paper Presentation — AP APICON 2017",
      detail: "Awarded 2nd Prize for clinical scientific research paper presentation at the AP APICON 2017 state conference.",
      type: "presentation"
    },
    {
      title: "Scientific Research Presentations",
      detail: "Presented scientific papers and clinical case studies at various state and national medical and endocrine conferences.",
      type: "presentation"
    },
    {
      title: "Co-author of Endocrine Case Report (AACE)",
      detail: "Co-authored a peer-reviewed endocrine clinical case report published through the American Association of Clinical Endocrinology (AACE).",
      type: "presentation"
    },
    {
      title: "Member — Endocrine Society of India (ESI)",
      detail: "Active professional member of the premier national endocrine society committed to clinical advancement.",
      type: "membership"
    }
  ],
  personalSide: {
    introduction: "Beyond the white coat, Dr. Navya brings warmth, curiosity, and relatable perspective to every patient interaction.",
    interests: [
      "Proud mother of two, balancing professional dedication with family life",
      "Passionate art lover who appreciates creativity and aesthetics",
      "Avid reader with keen interest in literature and science",
      "Teacher at heart who loves breaking down complex medical ideas into simple patient insights",
      "Enthusiastic explorer who finds energy and inspiration in outdoor adventures"
    ],
    languages: [
      { language: "Telugu", fluency: "Native / Fluent" },
      { language: "English", fluency: "Fluent" },
      { language: "Hindi", fluency: "Basic Conversational" }
    ],
    closingNote: "She believes that the best doctors are those who connect with patients not just as cases, but as human beings living real lives."
  },
  specialities: [
    {
      id: "type-1-diabetes",
      title: "Type 1 Diabetes",
      category: "metabolic",
      shortDesc: "Specialized, empathetic care for children, teens, and adults living with Type 1 Diabetes.",
      fullDesc: "Type 1 diabetes requires precise insulin dosing, carbohydrate counting, continuous glucose monitoring (CGM), and consistent education to ensure active, thriving lives without fear of severe hypoglycemia.",
      keyPoints: [
        "Multiple daily injections (MDI) & insulin pump guidance",
        "Continuous Glucose Monitoring (CGM) interpretation",
        "Carbohydrate awareness and meal planning",
        "Hypoglycemia prevention and sick-day management protocols"
      ]
    },
    {
      id: "type-2-diabetes",
      title: "Type 2 Diabetes & Prediabetes",
      category: "metabolic",
      shortDesc: "Early diagnosis, organ-protective treatment, and aggressive reversal strategies for prediabetes.",
      fullDesc: "Focusing on treating insulin resistance at its origin to preserve beta-cell function, prevent microvascular and macrovascular complications, and safeguard the heart, kidneys, eyes, and nerves.",
      keyPoints: [
        "Prediabetes reversal through structured lifestyle changes",
        "Modern, weight-favorable diabetes pharmacotherapy",
        "Comprehensive cardiovascular and renal risk mitigation",
        "Targeted HbA1c optimization tailored to age and health status"
      ]
    },
    {
      id: "obesity-metabolic",
      title: "Obesity & Metabolic Medicine",
      category: "metabolic",
      shortDesc: "Evidence-based medical weight management addressing underlying metabolic and hormonal causes.",
      fullDesc: "Obesity is a complex, chronic metabolic condition regulated by hormones, genetics, and environment. We move beyond simplistic 'eat less, move more' advice to deliver clinical obesity therapy.",
      keyPoints: [
        "In-depth assessment of insulin resistance and metabolic biomarkers",
        "Clinically appropriate medical obesity pharmacotherapy",
        "Tailored nutrition protocols developed with our clinic dietician",
        "Sustainable behavioral and lifestyle habits for lasting weight control"
      ]
    },
    {
      id: "thyroid-disorders",
      title: "Thyroid Disorders",
      category: "thyroid",
      shortDesc: "Comprehensive diagnosis and therapy for hypothyroidism, hyperthyroidism, goitre, and nodules.",
      fullDesc: "Thyroid hormones control the body's metabolic speedometer. We deliver accurate diagnosis, personalized dosage titration, and specialized care for autoimmune thyroid disease and thyroid disorders during pregnancy.",
      keyPoints: [
        "Hypothyroidism (underactive thyroid) and Hashimoto's disease",
        "Hyperthyroidism (overactive thyroid) and Graves' disease",
        "Thyroid nodules and goitre evaluation",
        "Pre-conception and pregnancy thyroid management"
      ]
    },
    {
      id: "lifestyle-metabolic",
      title: "Lifestyle & Metabolic Disease",
      category: "metabolic",
      shortDesc: "Targeted interventions for dyslipidemia, fatty liver (NAFLD), and metabolic syndrome.",
      fullDesc: "Addressing high cholesterol, elevated triglycerides, abdominal obesity, and high blood pressure as an interconnected metabolic continuum to prevent heart disease and stroke.",
      keyPoints: [
        "Evaluation and management of complex lipid disorders",
        "Non-Alcoholic Fatty Liver Disease (NAFLD) management",
        "Cardiometabolic risk reduction protocols",
        "Nutrition, physical activity, and sleep hygiene counselling"
      ]
    },
    {
      id: "pcos",
      title: "PCOS (Polycystic Ovary Syndrome)",
      category: "reproductive",
      shortDesc: "Holistic care for menstrual irregularities, hirsutism, acne, weight struggles, and fertility.",
      fullDesc: "PCOS is primarily a hormonal and metabolic disorder involving insulin resistance and androgen excess. We combine hormonal balancing with metabolic support to relieve symptoms and restore cycle regularity.",
      keyPoints: [
        "Menstrual cycle regularity and ovulation restoration",
        "Targeted management of acne, excess hair (hirsutism), and hair thinning",
        "Correction of underlying insulin resistance and weight resistance",
        "Pre-conception metabolic optimization for reproductive health"
      ]
    },
    {
      id: "paediatric-endocrinology",
      title: "Paediatric Endocrinology",
      category: "paediatric",
      shortDesc: "Expert, compassionate endocrine care dedicated to infants, children, and young adolescents.",
      fullDesc: "Children are not small adults. Hormonal imbalances in children affect physical growth, bone density, puberty, and future health. We deliver child-friendly evaluations in a comfortable setting.",
      keyPoints: [
        "Neonatal and childhood thyroid disorders",
        "Childhood diabetes management with family education",
        "Congenital adrenal hyperplasia (CAH) management",
        "Assessment of childhood obesity and juvenile metabolic disorders"
      ]
    },
    {
      id: "growth-puberty",
      title: "Growth & Puberty Disorders",
      category: "paediatric",
      shortDesc: "Detailed evaluation for short stature, poor growth velocity, early puberty, or delayed puberty.",
      fullDesc: "Tracking growth charts and identifying growth hormone deficiencies, chronic systemic issues, or abnormal pubertal timing (precocious or delayed puberty) during crucial developmental windows.",
      keyPoints: [
        "Standardized growth velocity tracking and bone age assessment",
        "Growth hormone deficiency diagnosis and management",
        "Evaluation of precocious (early) puberty in boys and girls",
        "Investigation and management of delayed pubertal development"
      ]
    },
    {
      id: "pituitary-adrenal",
      title: "Pituitary & Adrenal Disorders",
      category: "hormonal",
      shortDesc: "Advanced evaluation of the master endocrine glands regulating cortisol, water balance, and stress.",
      fullDesc: "Specialized diagnostic workups for prolactinoma, Cushing's syndrome, adrenal insufficiency (Addison's disease), pituitary adenomas, and electrolyte/fluid balance disorders.",
      keyPoints: [
        "Hyperprolactinemia and prolactin-secreting tumors",
        "Adrenal insufficiency diagnosis, steroid replacement, and emergency sick-day rules",
        "Cushing's syndrome evaluation and post-operative management",
        "Electrolyte imbalances such as hyponatremia and diabetes insipidus"
      ]
    },
    {
      id: "reproductive-endocrinology",
      title: "Reproductive Endocrinology",
      category: "reproductive",
      shortDesc: "Hormone evaluations for male and female hypogonadism, fertility challenges, and hormonal transitions.",
      fullDesc: "Comprehensive hormonal testing and replacement therapy for testosterone deficiency in men, ovarian dysfunction in women, and supportive care during perimenopause and menopause.",
      keyPoints: [
        "Male hypogonadism and testosterone replacement therapy (TRT) monitoring",
        "Female hormonal imbalances and menopausal transition support",
        "Endocrine causes of subfertility in men and women",
        "Galactorrhea and unexplained menstrual disruption"
      ]
    },
    {
      id: "calcium-bone",
      title: "Calcium, Bone & Mineral Disorders",
      category: "hormonal",
      shortDesc: "Diagnosis and therapy for osteoporosis, hypercalcemia, hypocalcemia, and parathyroid disease.",
      fullDesc: "Preserving skeletal strength and mineral equilibrium. We assess fracture risk, optimize bone mineral density, and treat parathyroid gland disorders and severe vitamin D deficiencies.",
      keyPoints: [
        "Osteoporosis risk assessment and anti-resorptive/anabolic bone therapies",
        "Evaluation of recurrent kidney stones and high calcium levels",
        "Primary and secondary hyperparathyroidism diagnosis",
        "Vitamin D deficiency and osteomalacia correction"
      ]
    }
  ],
  prevention: {
    headline: "Better Awareness Creates an Opportunity for Earlier Action.",
    subheadline: "Most endocrine and metabolic conditions give quiet warning signals long before irreversible damage occurs. Recognizing these indicators early allows for effective, proactive intervention.",
    areas: [
      {
        title: "Neonatal & Infancy Screening",
        audience: "Newborns & Infants",
        description: "Early recognition and treatment of congenital hypothyroidism and congenital adrenal hyperplasia prevent intellectual disability and life-threatening adrenal crises."
      },
      {
        title: "Growth & Puberty Timing",
        audience: "Children & Adolescents",
        description: "Timely evaluation of poor growth velocity, short stature, early puberty, or delayed puberty enables intervention during open growth-plate windows."
      },
      {
        title: "Youth Type 1 Diabetes",
        audience: "Children & Young Adults",
        description: "Recognizing early symptoms—excess thirst, frequent urination, sudden weight loss—prevents life-threatening diabetic ketoacidosis (DKA)."
      },
      {
        title: "Pregnancy Endocrine Balance",
        audience: "Maternal Health",
        description: "Proactive screening for gestational diabetes and thyroid disorders safeguards fetal brain development, birth weight, and maternal health."
      },
      {
        title: "Adult Metabolic Wellness",
        audience: "Adults & Seniors",
        description: "Detecting prediabetes, metabolic syndrome, silent thyroiditis, and diabetic neuropathy early prevents heart attacks, renal failure, and foot amputations."
      }
    ]
  },
  obesityClinic: {
    title: "Obesity & Lifestyle Clinic",
    schedule: "EVERY WEDNESDAY | 4:00 PM – 6:00 PM",
    day: "Wednesday",
    time: "4:00 PM – 6:00 PM",
    team: "Endocrinologist + Dietician Support",
    dieticianName: "Dr Syamini Siripuram",
    dieticianCreds: "MSc Nutrition and Dietetics, Consultant Dietician",
    overview: "A focused, multidisciplinary clinic designed for individuals seeking clinical, evidence-based management for weight loss and metabolic health, away from unscientific fad diets.",
    features: [
      "Joint consultation with Endocrinologist and Consultant Dietician Dr Syamini Siripuram (MSc Nutrition & Dietetics)",
      "Assessment of insulin resistance, thyroid function, and metabolic health",
      "Individualised medical nutrition therapy suited to local food patterns",
      "Structured counselling on physical activity, sleep quality, and stress",
      "Evidence-based medical obesity pharmacotherapy where clinically indicated",
      "Continuous long-term follow-up to ensure sustainable lifestyle habits"
    ]
  },
  diabetesSupport: {
    title: "Complete Diabetes Support",
    subtitle: "Comprehensive, multi-faceted diabetes care encompassing clinical therapy, patient education, and advanced diabetic complication prevention.",
    services: [
      {
        title: "Diabetes Education & Glucose Monitoring",
        description: "Guidance on self-monitoring of blood glucose (SMBG), continuous glucose monitoring (CGM) sensor interpretation, and recognizing patterns."
      },
      {
        title: "Insulin Initiation & Technical Training",
        description: "One-on-one training on insulin pen use, syringe technique, proper needle hygiene, rotation of injection sites, and optimal storage."
      },
      {
        title: "Timing & Storage Counselling",
        description: "Clear instructions on timing meals with insulin, preventing insulin crystallization, travelling with insulin, and travel kits."
      },
      {
        title: "Personalised Dietary Guidance",
        description: "Practical nutritional plans based on authentic Andhra dietary habits, glycaemic index awareness, and realistic portion control."
      },
      {
        title: "Hypoglycaemia Prevention Education",
        description: "Recognizing early warning signs of low blood sugar (sweating, tremors, hunger) and teaching the Rule of 15 for prompt, safe recovery."
      },
      {
        title: "Comprehensive Diabetic Foot Risk Assessment",
        description: "Proactive evaluation of nerve sensation, arterial circulation, and pressure points to prevent diabetic ulcers and neuropathic complications."
      }
    ],
    assessmentFacilities: [
      {
        name: "Vibration Perception Threshold (VPT) / Biothesiometry",
        purpose: "Digital quantitative assessment to detect early loss of protective vibration sensation before clinical neuropathy develops."
      },
      {
        name: "10g Semmes-Weinstein Monofilament Testing",
        purpose: "Standardized evaluation of tactile sensory loss across critical plantar pressure areas."
      },
      {
        name: "Foot-Temperature Assessment (Infrared Thermometry)",
        purpose: "Detection of localized temperature discrepancies indicating subclinical inflammation, Charcot foot, or vascular compromise."
      },
      {
        name: "Ankle–Brachial Index (ABI) Measurement",
        purpose: "Doppler-assisted arterial pressure assessment to detect peripheral arterial disease (PAD) and poor lower-limb blood supply."
      },
      {
        name: "Plantar-Pressure / Podometry Assessment",
        purpose: "Mapping high-pressure zones under the sole to identify focal stress points requiring protective medical footwear."
      }
    ],
    centerFacilities: [
      "In-house diagnostic laboratory services for timely blood tests",
      "24-Hour Pharmacy with genuine, cold-chain preserved insulin",
      "Day-care observation services for stabilization and IV therapies"
    ]
  },
  communityOutreach: {
    headline: "From the Consultation Room to the Community",
    inaugurationDate: "29 April 2024",
    description: "Since opening its doors on 29 April 2024, Dr. Navya’s EndoCare has remained committed to extending health awareness beyond the clinic walls into the Vizianagaram community.",
    initiatives: [
      "World Diabetes Day Awareness & Screening Camps",
      "Annual Foundation & Anniversary Health Camps",
      "Free Community Metabolic and Blood Glucose Screenings",
      "Thyroid Health Awareness and Risk Assessment",
      "Personalized Dietician Consultations for community participants",
      "Diabetic Neuropathy & Foot-Risk Screening Drives for high-risk patients"
    ]
  }
};

export const clinicContact = {
  phone: "8464070196",
  phoneFormatted: "+91 84640 70196",
  phoneTel: "tel:8464070196",
  whatsappNumber: "918464070196",
  whatsappLink: "https://wa.me/918464070196",
  email: "info@drnavyaendocare.com",
  appointmentsEmail: "appointments@drnavyaendocare.com",
  address: "Dr. Navya’s Endo Care, Ajay Children’s Hospital junction, Phool Bagh Rd, Ambati Satram Area, Vizianagaram, Andhra Pradesh 535002",
  googleMapsUrl: "https://maps.google.com/?q=Dr.+Navya's+Endo+Care,+Ajay+Children's+Hospital+junction,+Phool+Bagh+Rd,+Ambati+Satram+Area,+Vizianagaram,+Andhra+Pradesh+535002",
  hours: "Mon, Wed – Sat: 10:00 AM – 6:00 PM | Tue: 2:00 PM – 6:00 PM | Sun: 11:00 AM – 2:00 PM",
  hoursSummary: "Mon – Sat: 10:00 AM – 6:00 PM (Tue: 2:00 PM – 6:00 PM, Sun: 11:00 AM – 2:00 PM)",
  obesityClinicHours: "Every Wednesday: 4:00 PM – 6:00 PM",
};

