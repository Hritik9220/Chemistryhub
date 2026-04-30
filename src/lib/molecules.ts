export interface Question {
  id: string;
  title: string;
  questionText: string;
  questionImage?: { src: string; alt: string; caption?: string };
  answerElements: { label: string; text: string }[];
}

export interface Molecule {
  id: string;
  name: string;
  formula: string;
  description?: string;
  image: string;
  questions: Question[];
}

export const molecules: Molecule[] = [
  {
    id: "benzocaine",
    name: "Benzocaine",
    formula: "Ethyl 4-aminobenzoate",
    image: "/benzocaine.png",
    questions: [
      {
        id: "q1",
        title: "Question 1",
        questionText: "Benzocaine contains a primary aromatic amine group. State the reagents and the specific temperature conditions required to convert this amine group into a **diazonium salt**.",
        answerElements: [
          { label: "Reagents", text: "Sodium nitrate(III) (sodium nitrite, NaNO₂) and dilute hydrochloric acid (HCl)." },
          { label: "Conditions", text: "The temperature must be kept below **10°C** (usually between 0°C and 5°C) to prevent the diazonium salt from decomposing into a phenol and nitrogen gas." }
        ]
      },
      {
        id: "q2",
        title: "Question 2",
        questionText: "The diazonium salt formed in Question 1 can be reacted with phenol to form a brightly coloured **azo dye**. Name the reagents and conditions required for this coupling reaction, and state the term used to describe the part of a molecule responsible for its colour.",
        answerElements: [
          { label: "Reagents", text: "Phenol dissolved in **aqueous sodium hydroxide** (alkaline conditions)." },
          { label: "Conditions", text: "The mixture must be kept **cold**." },
          { label: "Term", text: "The part of the compound responsible for the colour is called the **chromophore**." }
        ]
      },
      {
        id: "q3",
        title: "Question 3",
        questionText: "Benzocaine can be synthesized from the starting molecule shown below in two steps. Provide the reagents and conditions for each step to convert this molecule into Benzocaine.",
        questionImage: {
          src: "/starting_molecule.png",
          alt: "Starting molecule structure",
          caption: "4-ethylphenylamine"
        },
        answerElements: [
          { label: "Step 1: Oxidation", text: "Heat under reflux with **alkaline potassium manganate(VII)** (KMnO₄), followed by acidification. This oxidizes the ethyl side-chain to a carboxylic acid." },
          { label: "Step 2: Esterification", text: "Heat under reflux with **ethanol** and **concentrated sulfuric acid** catalyst to form the final ester (Benzocaine)." }
        ]
      }
    ]
  },
  {
    id: "lidocaine",
    name: "Lidocaine",
    formula: "2-(diethylamino)-N-(2,6-dimethylphenyl)acetamide",
    description: "Lidocaine is a local anesthetic. It is often used mixed with a small amount of adrenaline (epinephrine) to prolong its local effects and to decrease bleeding.",
    image: "/lidocaine.png",
    questions: [
      {
        id: "q1",
        title: "Question 1",
        questionText: "Describe the high-resolution 1H NMR spectrum of lidocaine. Positions of peaks are not required.",
        answerElements: [
          { label: "Number of Environments", text: "There are **7** distinct proton environments (peaks)." },
          { label: "Aromatic Ring & Amide", text: "Two equivalent methyl groups on the ring (**singlet, 6H**). Two equivalent *meta* protons (**doublet, 2H**) and one *para* proton (**triplet, 1H**). The amide N-H forms a **broad singlet (1H)**." },
          { label: "Aliphatic Chain", text: "The CH₂ between the amine and carbonyl is isolated from other protons (**singlet, 2H**). The two equivalent ethyl groups split each other: the CH₂ groups form a **quartet (4H)** and the terminal CH₃ groups form a **triplet (6H)**." }
        ]
      },
      {
        id: "q2",
        title: "Question 2",
        questionText: "Explain, with reference to electron pairs, why the tertiary amine nitrogen in Lidocaine is basic but the amide nitrogen is effectively non-basic.",
        answerElements: [
          { label: "Tertiary Amine", text: "The nitrogen atom has a **lone pair of electrons** that is localized and available to accept a proton (H⁺) via a dative covalent bond." },
          { label: "Amide Nitrogen", text: "The lone pair on the amide nitrogen is **delocalised** into the adjacent carbonyl group's pi system (C=O). This reduces its electron density and makes the lone pair unavailable to attract a proton." }
        ]
      },
      {
        id: "q3",
        title: "Question 3",
        questionText: "Lidocaine contains a substituted benzene ring. State the type of reaction mechanism by which benzene rings typically react, and explain why they undergo this type of reaction rather than addition reactions.",
        answerElements: [
          { label: "Mechanism", text: "**Electrophilic Substitution**." },
          { label: "Explanation", text: "Benzene has a stable delocalised ring of pi electrons. Undergoing an addition reaction would permanently break this delocalisation and destroy the aromatic stability. Substitution preserves the stable delocalised pi system." }
        ]
      }
    ]
  },
  {
    id: "paracetamol",
    name: "Paracetamol",
    formula: "N-(4-hydroxyphenyl)ethanamide",
    description: "Paracetamol is a widely used medication to treat pain and fever. It features both a phenol group and an amide linkage.",
    image: "/paracetamol.png",
    questions: [
      {
        id: "q1",
        title: "Question 1",
        questionText: "Paracetamol contains a phenol group. State what would be observed if excess bromine water is added to an aqueous solution of paracetamol, and name the type of reaction mechanism.",
        answerElements: [
          { label: "Observation", text: "The orange bromine water is **decolorised** and a **white precipitate** forms." },
          { label: "Mechanism", text: "**Electrophilic Substitution**. The lone pair on the phenol oxygen delocalises into the ring, increasing electron density and making it highly susceptible to electrophilic attack." }
        ]
      },
      {
        id: "q2",
        title: "Question 2",
        questionText: "Paracetamol can be synthesized by reacting 4-aminophenol with ethanoic anhydride. Explain why ethanoic anhydride is typically preferred over ethanoyl chloride for this industrial synthesis.",
        answerElements: [
          { label: "Safety", text: "Reacting with ethanoic anhydride produces ethanoic acid as a byproduct, which is far safer than the highly toxic and corrosive **hydrogen chloride (HCl) gas** produced by ethanoyl chloride." },
          { label: "Practicality", text: "Ethanoic anhydride is also **cheaper** and **less vigorous/violent** in its reaction, making it easier to control on an industrial scale." }
        ]
      },
      {
        id: "q3",
        title: "Question 3",
        questionText: "Predict the number of distinct peaks you would expect to see in the **13C NMR spectrum** of paracetamol.",
        answerElements: [
          { label: "Total Peaks", text: "There are **6** distinct carbon environments." },
          { label: "Breakdown", text: "The benzene ring has a plane of symmetry through the C-OH and C-NH bonds, meaning there are **4 environments on the ring**. The remaining two are the **carbonyl carbon (C=O)** and the **methyl carbon (CH₃)** in the amide group." }
        ]
      }
    ]
  }
];
