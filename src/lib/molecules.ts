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
  },
  {
    id: "benzocaine",
    name: "Benzocaine",
    formula: "Ethyl 4-aminobenzoate",
    description: "Benzocaine is a local anesthetic commonly used as a topical pain reliever or in cough drops. It is the ethyl ester of p-aminobenzoic acid (PABA).",
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
    id: "epinephrine",
    name: "Epinephrine",
    formula: "1-(3,4-dihydroxyphenyl)-2-(methylamino)ethanol",
    description: "Also known as adrenaline, this hormone and medication is crucial in the fight-or-flight response. It features a catechol ring, a secondary amine, and a secondary alcohol.",
    image: "/epinephrine.png",
    questions: [
      {
        id: "q1",
        title: "Question 1",
        questionText: "Epinephrine is an optically active molecule that exists as a pair of enantiomers. State the structural feature that gives rise to this optical isomerism, and specifically identify where it is located on the epinephrine molecule.",
        answerElements: [
          { label: "Structural Feature", text: "The molecule contains a **chiral centre** (an asymmetric carbon atom bonded to four different groups)." },
          { label: "Location", text: "The chiral centre is the carbon atom bonded to the **secondary alcohol (-OH) group** on the aliphatic side chain." }
        ]
      },
      {
        id: "q2",
        title: "Question 2",
        questionText: "Epinephrine contains both acidic and basic functional groups. Identify the functional group that reacts when epinephrine is treated with dilute hydrochloric acid, and the functional group that reacts when treated with aqueous sodium hydroxide.",
        answerElements: [
          { label: "Reaction with HCl", text: "The **secondary amine** group acts as a base and will accept a proton to form a soluble salt." },
          { label: "Reaction with NaOH", text: "The **phenol** groups act as weak acids and will donate protons to form phenoxide ions." }
        ]
      },
      {
        id: "q3",
        title: "Question 3",
        questionText: "Explain why the aromatic ring in epinephrine is significantly more reactive towards electrophiles (such as bromine) than unsubstituted benzene.",
        answerElements: [
          { label: "Lone Pair Donation", text: "A **lone pair of electrons** on the oxygen atom of the phenol (-OH) group is **delocalised** into the pi-system of the benzene ring." },
          { label: "Electron Density", text: "This increases the **electron density** of the delocalised ring." },
          { label: "Electrophilic Susceptibility", text: "The more electron-rich ring is **more attractive to electrophiles** and is able to polarise them (e.g., Br₂) without the need for a halogen carrier catalyst." }
        ]
      }
    ]
  },
  {
    id: "capsaicin",
    name: "Capsaicin",
    formula: "8-methyl-N-vanillyl-trans-6-nonenamide",
    description: "Capsaicin is the active component of chili peppers, responsible for their characteristic pungent, spicy sensation. It is commonly used as an analgesic in topical ointments and in riot control agents.",
    image: "/capsaicin.png",
    questions: [
      {
        id: "q1",
        title: "Question 1",
        questionText: "Identify all the chemical tests from the Eduqas A-Level specification that would yield a positive result for capsaicin, stating the reagents, the functional group being tested, and the expected observations.",
        answerElements: [
          { label: "Bromine Water", text: "Tests for **Alkene & Phenol**. Orange bromine water is **decolourised** by both the C=C double bond (addition) and the phenol ring (substitution). A **white precipitate** also forms due to the phenol." },
          { label: "Neutral Iron(III) Chloride", text: "Tests for **Phenol**. Addition of neutral aqueous iron(III) chloride (FeCl₃) solution produces a **purple/violet colour**." },
          { label: "Acidified Potassium Manganate(VII)", text: "Tests for **Alkene**. Addition of acidified KMnO₄ results in the **purple solution decolourising**, as the C=C double bond is oxidised to a diol." }
        ]
      },
      {
        id: "q2",
        title: "Question 2",
        questionText: "The precursor molecule shown below differs from capsaicin only by the lack of the hydroxyl (-OH) group on the benzene ring. Outline the three-step synthetic pathway required to add this -OH group to the ring, stating the reagents and conditions for each step.",
        questionImage: {
          src: "/capsaicin_precursor.png",
          alt: "Precursor molecule",
          caption: "Capsaicin Precursor"
        },
        answerElements: [
          { label: "Step 1: Nitration", text: "React with **dilute nitric acid** (HNO₃) at room temperature. The ring is sufficiently activated by the methoxy (-OCH₃) group, so concentrated acids and catalysts are not needed." },
          { label: "Step 2: Reduction", text: "Heat under reflux with **tin (Sn)** and **concentrated hydrochloric acid** (HCl), followed by NaOH, to reduce the -NO₂ group to an amine (-NH₂)." },
          { label: "Step 3: Diazotisation & Hydrolysis", text: "React with **sodium nitrite** (NaNO₂) and dilute HCl at a temperature **above 10°C** (or warm). The unstable diazonium intermediate will immediately decompose in the aqueous mixture to form the final phenol (-OH) group and nitrogen gas." }
        ]
      },
      {
        id: "q3",
        title: "Question 3",
        questionText: "The four-step synthesis outlined in Question 2 is likely to have a very low overall yield. Suggest three chemical reasons why the final yield of capsaicin would be poor, referencing specific side-reactions that may occur.",
        answerElements: [
          { label: "Polysubstitution", text: "During the nitration step, the highly activated benzene ring may undergo **polysubstitution** (e.g., di-nitration), forming unwanted by-products." },
          { label: "Positional Isomers", text: "Nitration can occur at **different positions** on the benzene ring, leading to a mixture of structural isomers rather than exclusively the desired product." },
          { label: "Amide Hydrolysis", text: "The harsh conditions used (such as heating under reflux with concentrated HCl during the reduction step) will likely cause **hydrolysis of the amide linkage**, breaking the molecule apart." }
        ]
      },
      {
        id: "q4",
        title: "Question 4",
        questionText: "Capsaicin exhibits stereoisomerism due to its carbon-carbon double bond. State the specific type of stereoisomerism shown by capsaicin, and explain why it exists in this form.",
        answerElements: [
          { label: "Type", text: "**E/Z isomerism** (specifically the *E* or trans isomer)." },
          { label: "Explanation", text: "The C=C double bond has **restricted rotation**. Each carbon atom of the double bond is attached to **two different groups**, leading to distinct non-superimposable spatial arrangements." }
        ]
      }
    ]
  },
  {
    id: "heterocycles",
    name: "Furan, Thiophene, and Pyrrole",
    formula: "C₄H₄O, C₄H₄S, C₄H₄NH",
    description: "Five-membered heterocyclic aromatic compounds. They exhibit distinct physical properties and aromatic stabilization compared to benzene due to the presence of different heteroatoms.",
    image: "/heterocycles.png",
    questions: [
      {
        id: "q1",
        title: "Question 1",
        questionText: "Compare the boiling points of furan (31 °C), thiophene (84 °C), and pyrrole (130 °C). Explain the differences in these values based on intermolecular forces.",
        answerElements: [
          { label: "Pyrrole (Highest)", text: "Pyrrole exhibits intermolecular **hydrogen bonding** due to the presence of an N-H bond, requiring significantly more energy to separate the molecules." },
          { label: "Thiophene vs Furan", text: "Sulfur is a larger, more polarizable atom than oxygen. Therefore, thiophene has stronger **Van der Waals forces** than furan, giving it a higher boiling point despite furan having a stronger permanent dipole." }
        ]
      },
      {
        id: "q2",
        title: "Question 2",
        questionText: "The resonance (delocalisation) energies follow the trend: Furan (~67 kJ mol⁻¹) < Pyrrole (~88 kJ mol⁻¹) < Thiophene (~121 kJ mol⁻¹). Explain why this trend occurs.",
        answerElements: [
          { label: "Explanation", text: "Oxygen is the most electronegative atom of the three, holding its lone pair of electrons most tightly and resisting delocalisation into the aromatic ring. Sulfur is the least electronegative, allowing its lone pair to be donated more readily into the pi-system, resulting in the highest delocalisation energy and greatest aromatic stability." }
        ]
      },
      {
        id: "q3",
        title: "Question 3",
        questionText: "Compare the basicity of pyrrole, furan, and thiophene. Explain why they are generally very weakly basic, and why their fully saturated counterparts (tetrahydrofuran, tetrahydrothiophene, and pyrrolidine) are significantly more basic.",
        answerElements: [
          { label: "Comparing Basicity", text: "Pyrrole is the least basic because its single nitrogen lone pair is entirely delocalised into the aromatic pi-system; accepting a proton would destroy the molecule's aromatic stability. Furan and thiophene have a second lone pair that is not part of the pi-system, making them slightly more basic than pyrrole, but still very weak." },
          { label: "Tetrahydro Molecules", text: "In the fully saturated (tetrahydro) molecules, the lone pair of electrons on the heteroatom is **not delocalised**. This means the lone pair is fully localized and available to accept a proton (H⁺), making them much more basic." }
        ]
      }
    ]
  },
  {
    id: "aspirin",
    name: "Aspirin",
    formula: "2-acetoxybenzoic acid",
    description: "Aspirin is one of the most widely used medications globally, utilized to reduce pain, fever, and inflammation.",
    image: "/aspirin.png",
    questions: [
      {
        id: "q1",
        title: "Question 1",
        questionText: "Aspirin can undergo alkaline hydrolysis. State the reagents required and describe the organic products formed when aspirin is completely hydrolysed under alkaline conditions.",
        answerElements: [
          { label: "Reagents", text: "Heat under reflux with aqueous sodium hydroxide (NaOH)." },
          { label: "Products", text: "The ester linkage breaks, and the carboxylic acid group reacts with the alkali. The final products are **sodium salicylate** (sodium 2-hydroxybenzoate) and **sodium ethanoate**." }
        ]
      },
      {
        id: "q2",
        title: "Question 2",
        questionText: "Identify the key absorptions you would expect to see in the Infrared (IR) spectrum of Aspirin, stating their functional group sources.",
        answerElements: [
          { label: "Carboxylic Acid", text: "A very broad absorption around **2500–3300 cm⁻¹** due to the O-H bond in the carboxylic acid group." },
          { label: "Carbonyls", text: "Two strong, sharp absorptions around **1700–1750 cm⁻¹** due to the C=O bonds in both the ester and carboxylic acid groups." }
        ]
      }
    ]
  },
  {
    id: "ibuprofen",
    name: "Ibuprofen",
    formula: "2-(4-isobutylphenyl)propanoic acid",
    description: "Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) that exists as a pair of optical isomers (enantiomers).",
    image: "/ibuprofen.png",
    questions: [
      {
        id: "q1",
        title: "Question 1",
        questionText: "Ibuprofen exhibits optical isomerism. Explain what feature of the ibuprofen molecule allows it to form optical isomers, and how these isomers interact with plane-polarized light.",
        answerElements: [
          { label: "Structural Feature", text: "It contains a **chiral centre** (an asymmetric carbon atom bonded to four different groups)." },
          { label: "Interaction", text: "The two enantiomers will rotate the plane of **plane-polarized light** by equal amounts but in **opposite directions**." }
        ]
      },
      {
        id: "q2",
        title: "Question 2",
        questionText: "State the reagent required to reduce the carboxylic acid group in ibuprofen to a primary alcohol.",
        answerElements: [
          { label: "Reagent", text: "**Lithium tetrahydridoaluminate(III)** (LiAlH₄) dissolved in dry ether." }
        ]
      }
    ]
  },
  {
    id: "alanylglycylserine",
    name: "Peptides",
    formula: "C8H15N3O5",
    description: "Alanylglycylserine is a generic tripeptide composed of the amino acids alanine, glycine, and serine. It is an excellent molecule for studying peptide bonds and acid hydrolysis.",
    image: "/alanylglycylserine.png",
    questions: [
      {
        id: "q1",
        title: "Question 1",
        questionText: "A student attempts to synthesise glycine (2-aminoethanoic acid) by reacting chloroethanoic acid (ClCH₂COOH) with ammonia (NH₃). State the exact reagents and conditions required to ensure a high yield of glycine. Then, explain using your knowledge of nucleophilic substitution why the yield of glycine is very poor if only a 1:1 molar ratio of chloroethanoic acid to ammonia is used, naming the type of side-product formed.",
        answerElements: [
          { label: "Reagents & Conditions", text: "**Excess** concentrated ammonia, dissolved in **ethanol**, heated in a sealed tube." },
          { label: "Explanation of Poor Yield", text: "The product, glycine, contains an amino group (-NH₂) which still has a lone pair of electrons. This means glycine can act as a **nucleophile** and attack another molecule of chloroethanoic acid. This leads to **multiple substitutions (polyalkylation)**, forming a secondary (or tertiary) amine. Using *excess* ammonia ensures the haloalkane is overwhelmingly more likely to collide with ammonia than with the newly formed glycine." }
        ]
      },
      {
        id: "q2",
        title: "Question 2",
        questionText: "In industry, amino acids are often synthesised from aldehydes via a two-step process called the Strecker Synthesis. Ethanal (CH₃CHO) reacts with a mixture of KCN(aq) and NH₄Cl(aq) to form **Intermediate X** (C₃H₆N₂). **Intermediate X** is then heated under reflux with dilute hydrochloric acid to form Alanine. Deduce the structure of **Intermediate X** and state the type of reaction occurring in the final step.",
        answerElements: [
          { label: "Intermediate X", text: "CH₃CH(NH₂)CN (2-aminopropanenitrile)." },
          { label: "Final Step Reaction", text: "Acid Hydrolysis." }
        ]
      },
      {
        id: "q3",
        title: "Question 3",
        questionText: "Using the information that the carbonyl (C=O) group in the starting material (ethanal) has a trigonal planar arrangement around the central carbon atom, explain how the synthesis pathway in Question 2 leads to the formation of a racemic mixture of Alanine.",
        answerElements: [
          { label: "Racemic Mixture Explanation", text: "The carbonyl group is planar, meaning the incoming nucleophile (CN⁻) can attack the central carbon atom from either **above or below** the plane. Because both directions of attack are **equally likely**, an equal amount of both enantiomers is formed, resulting in a racemic mixture." }
        ]
      },
      {
        id: "q4",
        title: "Question 4",
        questionText: "A biochemist isolates a small tripeptide from a cell culture. The structure of the peptide is: H₂N-CH(CH₃)-CO-NH-CH₂-CO-NH-CH(CH₂OH)-COOH. State the number of peptide (amide) links present in this molecule. This peptide is then heated under reflux with concentrated 6 mol dm⁻³ HCl. Identify the three organic products formed and name the type of reaction occurring.",
        answerElements: [
          { label: "Peptide Links", text: "There are **two** peptide (-CO-NH-) links." },
          { label: "Hydrolysis Products", text: "Because the hydrolysis is carried out under strongly acidic conditions, the amino acids formed will have their amine groups protonated. The three products are the protonated ammonium salts of Alanine, Glycine, and Serine: ⁺H₃N-CH(CH₃)-COOH, ⁺H₃N-CH₂-COOH, and ⁺H₃N-CH(CH₂OH)-COOH" },
          { label: "Reaction Type", text: "Acid Hydrolysis." }
        ]
      }
    ]
  },
  {
    id: "salicylicacid",
    name: "Salicylic Acid",
    formula: "2-hydroxybenzoic acid",
    description: "Salicylic acid is a beta hydroxy acid (BHA) naturally found in willow bark. It acts as a plant hormone and is widely used in acne treatments and as a precursor to aspirin.",
    image: "/salicylic_acid.png",
    questions: [
      {
        id: "q1",
        title: "Question 1",
        questionText: "Salicylic acid contains two acidic functional groups. State the reagents and observations when testing for each group independently.",
        answerElements: [
          { label: "Phenol Group", text: "Adding neutral aqueous **iron(III) chloride (FeCl₃)** produces a **purple/violet** solution." },
          { label: "Carboxylic Acid Group", text: "Adding **aqueous sodium carbonate (Na₂CO₃)** produces **effervescence** (bubbles) of carbon dioxide gas." }
        ]
      },
      {
        id: "q2",
        title: "Question 2",
        questionText: "Describe the synthesis of Aspirin starting from Salicylic acid, stating the specific reagents and conditions required.",
        answerElements: [
          { label: "Reagents", text: "**Ethanoic anhydride**." },
          { label: "Conditions", text: "**Warm** the mixture with a few drops of **concentrated phosphoric acid (H₃PO₄)** or concentrated sulfuric acid catalyst." }
        ]
      },
      {
        id: "q3",
        title: "Question 3",
        questionText: "Predict the number of distinct proton environments in the high-resolution ¹H NMR spectrum of salicylic acid.",
        answerElements: [
          { label: "Total Peaks", text: "There are **6** distinct proton environments." },
          { label: "Breakdown", text: "The benzene ring has no plane of symmetry, resulting in **4 distinct environments on the ring**. There is **1** environment for the phenol O-H proton, and **1** environment for the carboxylic acid O-H proton." }
        ]
      }
    ]
  },
  {
    id: "cinnamaldehyde",
    name: "Cinnamaldehyde",
    formula: "3-phenylprop-2-enal",
    description: "Cinnamaldehyde gives cinnamon its distinct flavor and odor. It is a pale yellow, viscous liquid that occurs naturally in the bark of cinnamon trees.",
    image: "/cinnamaldehyde.png",
    questions: [
      {
        id: "q1",
        title: "Question 1",
        questionText: "Cinnamaldehyde can be tested using Tollens' reagent. State the required conditions, the expected observation for a positive test, and state the type of reaction occurring.",
        answerElements: [
          { label: "Conditions & Observation", text: "**Warm** the mixture with Tollens' reagent to produce a **silver mirror** on the inside of the test tube." },
          { label: "Reaction Type", text: "**Oxidation** (the aldehyde group is oxidized to a carboxylic acid, while the silver ions are reduced)." }
        ]
      },
      {
        id: "q2",
        title: "Question 2",
        questionText: "Cinnamaldehyde contains a carbon-carbon double bond. State the expected observation when bromine water is added, and describe the mechanism of this reaction.",
        answerElements: [
          { label: "Observation", text: "The orange bromine water is **decolorized**." },
          { label: "Mechanism", text: "**Electrophilic Addition** across the C=C double bond." }
        ]
      },
      {
        id: "q3",
        title: "Question 3",
        questionText: "State the reagents required to completely reduce cinnamaldehyde to 3-phenylpropan-1-ol.",
        answerElements: [
          { label: "Reagents", text: "A two-step reduction is required using both **NaBH₄** (aqueous/ethanolic) to reduce the aldehyde, and **H₂ gas with a Ni catalyst** (heated) to reduce the alkene. These can be done in either order." }
        ]
      }
    ]
  },
  {
    id: "lacticacid",
    name: "Lactic Acid",
    formula: "2-hydroxypropanoic acid",
    description: "Lactic acid is produced in muscle tissues during intense exercise and by certain bacteria in yogurt. It is a chiral molecule that can form condensation polymers.",
    image: "/lactic_acid.png",
    questions: [
      {
        id: "q1",
        title: "Question 1",
        questionText: "Lactic acid is a chiral molecule. Explain what this means in terms of its structure and its effect on plane-polarized light.",
        answerElements: [
          { label: "Structure", text: "It contains a **chiral centre**—a carbon atom attached to four different groups." },
          { label: "Effect on Light", text: "The two non-superimposable enantiomers rotate the plane of **plane-polarized light** by equal amounts but in **opposite directions**." }
        ]
      },
      {
        id: "q2",
        title: "Question 2",
        questionText: "Lactic acid can undergo condensation polymerization to form polylactic acid (PLA). Explain why PLA is considered a more environmentally friendly plastic than poly(ethene).",
        answerElements: [
          { label: "Explanation", text: "PLA contains **ester linkages** (-COO-) which can be hydrolyzed by moisture and broken down by microorganisms, making it **biodegradable**. Poly(ethene) only contains unreactive C-C and C-H bonds, making it non-biodegradable." }
        ]
      },
      {
        id: "q3",
        title: "Question 3",
        questionText: "State the reagents and conditions required to oxidize lactic acid to the molecule shown below, and state the color change observed.",
        questionImage: {
          src: "/pyruvic_acid.png",
          alt: "Structure of oxidation product",
          caption: "Oxidation Product"
        },
        answerElements: [
          { label: "Reagents & Conditions", text: "Heat under reflux with **acidified potassium dichromate(VI)** (K₂Cr₂O₇ and H₂SO₄)." },
          { label: "Observation", text: "The solution changes color from **orange to green**." }
        ]
      }
    ]
  },
  {
    id: "aniline",
    name: "Phenylamine (Aniline)",
    formula: "C₆H₅NH₂",
    description: "Phenylamine is the simplest aromatic amine. It is an important industrial chemical, mainly used as a precursor to more complex chemicals, such as polyurethanes and azo dyes.",
    image: "/aniline.png",
    questions: [
      {
        id: "q1",
        title: "Question 1",
        questionText: "Phenylamine is a significantly weaker base than ethylamine. Explain this difference in basicity in terms of electron pairs.",
        answerElements: [
          { label: "Explanation", text: "In phenylamine, the lone pair of electrons on the nitrogen atom is **partially delocalized into the pi-system** of the benzene ring. This reduces the electron density on the nitrogen, making the lone pair **less available to accept a proton (H⁺)** compared to the localized lone pair in ethylamine." }
        ]
      },
      {
        id: "q2",
        title: "Question 2",
        questionText: "Phenylamine can be synthesized from nitrobenzene. State the reagents and conditions for this reaction, and name the type of reaction.",
        answerElements: [
          { label: "Reagents & Conditions", text: "Heat under reflux with **tin (Sn)** and **concentrated hydrochloric acid (HCl)**, followed by the addition of aqueous sodium hydroxide (NaOH)." },
          { label: "Reaction Type", text: "**Reduction**." }
        ]
      },
      {
        id: "q3",
        title: "Question 3",
        questionText: "Phenylamine reacts readily with bromine water at room temperature without a catalyst. State the expected observation and name the organic product formed.",
        answerElements: [
          { label: "Observation", text: "The orange bromine water is **decolorized** and a **white precipitate** forms." },
          { label: "Product", text: "**2,4,6-tribromophenylamine**." }
        ]
      }
    ]
  },
  {
    id: "methyl3nitrobenzoate",
    name: "Methyl 3-nitrobenzoate",
    formula: "C₈H₇NO₄",
    description: "Methyl 3-nitrobenzoate is an aromatic ester. It is often synthesized in teaching laboratories to demonstrate electrophilic aromatic substitution, specifically the meta-directing effect of the ester group.",
    image: "/methyl_3_nitrobenzoate.png",
    questions: [
      {
        id: "q1",
        title: "Question 1",
        questionText: "Methyl benzoate can be nitrated to form methyl 3-nitrobenzoate. State the reagents and conditions required for this nitration.",
        answerElements: [
          { label: "Reagents", text: "**Concentrated nitric acid (HNO₃)** and **concentrated sulfuric acid (H₂SO₄)** catalyst." },
          { label: "Conditions", text: "Keep the temperature **below 50°C**." }
        ]
      },
      {
        id: "q2",
        title: "Question 2",
        questionText: "Methyl 3-nitrobenzoate is a solid at room temperature. Briefly outline how a student could purify an impure sample of this solid by recrystallisation.",
        answerElements: [
          { label: "Solvent", text: "Dissolve the impure solid in the **minimum volume of hot solvent**." },
          { label: "Filtration", text: "Filter hot (gravity filtration) to remove insoluble impurities, then allow the solution to **cool and crystallise**." },
          { label: "Collection", text: "Collect the pure crystals using **vacuum filtration** (Buchner funnel), wash with a little cold solvent, and dry." }
        ]
      },
      {
        id: "q3",
        title: "Question 3",
        questionText: "Methyl 3-nitrobenzoate can be hydrolyzed by heating under reflux with dilute hydrochloric acid. Name the two organic products formed.",
        answerElements: [
          { label: "Products", text: "**3-nitrobenzoic acid** and **methanol**." }
        ]
      }
    ]
  },
  {
    id: "thalidomide",
    name: "Thalidomide",
    formula: "C₁₃H₁₀N₂O₄",
    description: "Thalidomide is a medication historically known for its use as a treatment for morning sickness, which tragically led to severe birth defects due to its administration as a racemic mixture.",
    image: "/thalidomide.png",
    questions: [
      {
        id: "q1",
        title: "Question 1",
        questionText: "Thalidomide exists as a pair of optical isomers (enantiomers). Explain the structural feature that allows for this isomerism, and describe how the two isomers differ.",
        answerElements: [
          { label: "Structural Feature", text: "The molecule contains a **chiral centre** (an asymmetric carbon atom bonded to four different groups)." },
          { label: "Difference", text: "The two isomers are **non-superimposable mirror images** of each other." }
        ]
      },
      {
        id: "q2",
        title: "Question 2",
        questionText: "Explain the term 'racemic mixture' and state its effect on plane-polarized light.",
        answerElements: [
          { label: "Definition", text: "A racemic mixture contains **equal amounts (a 1:1 mixture)** of both enantiomers." },
          { label: "Effect on Light", text: "It is **optically inactive** (does not rotate the plane of polarized light) because the rotations of the two enantiomers perfectly cancel each other out." }
        ]
      },
      {
        id: "q3",
        title: "Question 3",
        questionText: "Thalidomide contains amide linkages. State the reagents and conditions needed to hydrolyze these linkages.",
        answerElements: [
          { label: "Reagents & Conditions", text: "Heat under reflux with **aqueous acid (e.g., dilute HCl)** or **aqueous alkali (e.g., aqueous NaOH)**." }
        ]
      }
    ]
  },
  {
    id: "kevlar",
    name: "Kevlar",
    formula: "[-CO-C₆H₄-CO-NH-C₆H₄-NH-]n",
    description: "Kevlar is a famously strong condensation polymer used in bulletproof vests and high-performance composites.",
    image: "/kevlar.png",
    questions: [
      {
        id: "q1",
        title: "Question 1",
        questionText: "Kevlar is formed by condensation polymerization. Identify the two types of functional groups present in the monomers used to synthesize Kevlar.",
        answerElements: [
          { label: "Monomer 1", text: "A **dicarboxylic acid** (or diacyl chloride)." },
          { label: "Monomer 2", text: "A **diamine**." }
        ]
      },
      {
        id: "q2",
        title: "Question 2",
        questionText: "Explain, in terms of intermolecular forces, why Kevlar is an exceptionally strong material.",
        answerElements: [
          { label: "Hydrogen Bonding", text: "Extensive **hydrogen bonding** forms between the C=O group of one polymer chain and the N-H group of an adjacent chain." },
          { label: "Structure", text: "The rigid, linear nature of the aromatic rings allows the chains to pack closely together, maximizing these intermolecular forces." }
        ]
      },
      {
        id: "q3",
        title: "Question 3",
        questionText: "Like many condensation polymers, Kevlar can be degraded under certain conditions. Name the type of reaction that breaks the polymer backbone, and state the reagents required.",
        answerElements: [
          { label: "Reaction Type", text: "**Hydrolysis**." },
          { label: "Reagents", text: "Concentrated strong acid or strong alkali, heated under reflux." }
        ]
      }
    ]
  },
  {
    id: "phenol",
    name: "Phenol",
    formula: "C₆H₅OH",
    description: "Phenol consists of a hydroxyl group bonded directly to a benzene ring. It is an important industrial precursor for plastics and pharmaceuticals.",
    image: "/phenol.png",
    questions: [
      {
        id: "q1",
        title: "Question 1",
        questionText: "Phenol is weakly acidic. State the expected observation when phenol reacts with metallic sodium, and name the gas produced.",
        answerElements: [
          { label: "Observation", text: "**Effervescence** (fizzing) and the solid sodium dissolves/disappears." },
          { label: "Gas", text: "**Hydrogen gas (H₂)**." }
        ]
      },
      {
        id: "q2",
        title: "Question 2",
        questionText: "Explain why phenol is significantly more reactive towards electrophiles than benzene.",
        answerElements: [
          { label: "Lone Pair Delocalization", text: "A **lone pair of electrons** on the oxygen atom of the -OH group is **delocalized into the pi-system** of the benzene ring." },
          { label: "Electron Density", text: "This increases the **electron density** of the ring, making it more attractive to electrophiles and capable of polarizing them without a halogen carrier catalyst." }
        ]
      },
      {
        id: "q3",
        title: "Question 3",
        questionText: "Phenol undergoes electrophilic substitution with bromine water at room temperature. State the observations and name the organic product formed.",
        answerElements: [
          { label: "Observations", text: "The orange bromine water is **decolorized**, and a **white precipitate** forms." },
          { label: "Product", text: "**2,4,6-tribromophenol**." }
        ]
      }
    ]
  }
];
