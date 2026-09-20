/**
 * Practice areas and sub-services for Makdesi Lawyers.
 * Draft website copy for client review — Victorian / Australian law context.
 * Not legal advice. Final wording subject to client approval.
 */

export type SubService = {
  slug: string;
  title: string;
  description: string;
  summary: string;
  body: string[];
  image: string;
  points?: string[];
};

export type PracticeArea = {
  slug: string;
  title: string;
  description: string;
  icon: string;
  summary: string;
  body: string[];
  image: string;
  jurisdictionNote: string;
  children?: SubService[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "commercial-law",
    title: "Commercial Law",
    description:
      "Practical advice for Victorian businesses — contracts, structuring, leasing and commercial dealings.",
    icon: "briefcase",
    image: "/images/services/commercial-law.webp",
    summary:
      "Commercial and retail advice for businesses operating in Victoria — contracts, structuring, leasing and transactions handled with clarity and care.",
    jurisdictionNote:
      "Advice is provided with reference to Victorian and Commonwealth Australian law applicable to commercial arrangements in Australia.",
    body: [
      "Makdesi Lawyers assists Victorian businesses of all sizes with day-to-day commercial legal needs. Whether you are negotiating a new contract, reviewing a lease, structuring a venture or buying or selling a business, we focus on clear advice and practical next steps.",
      "Commercial arrangements in Australia are shaped by contract law, Australian Consumer Law, and — for retail premises in Victoria — the Retail Leases Act 2003 (Vic). We help you understand how these frameworks apply to your situation so you can make informed decisions.",
      "Our approach is cost-aware and client-focused: we explain your options in plain language and prepare or review documents with your commercial objectives in mind.",
    ],
    children: [
      {
        slug: "business-contracts-agreements-and-advice",
        title: "Business Contracts, Agreements and Advice",
        description:
          "Drafting, reviewing and advising on commercial contracts for Victorian and Australian businesses.",
        summary:
          "Clear contract advice so your business arrangements are properly documented under Australian law.",
        image:
          "/images/services/business-contracts-agreements-and-advice.webp",
        body: [
          "Well-drafted contracts reduce uncertainty and help prevent disputes. We assist Victorian businesses with preparing, reviewing and negotiating commercial agreements — from supplier and customer contracts through to shareholder and partnership arrangements.",
          "Under Australian contract law, clarity around parties, obligations, payment terms, liability and termination is essential. We work with you to identify the key commercial risks and document arrangements in a way that reflects how your business actually operates.",
          "Whether you need a one-off agreement reviewed before signing, or ongoing advice as contracts evolve, we provide practical guidance tailored to your circumstances.",
        ],
        points: [
          "Contract drafting and review",
          "Supplier and customer agreements",
          "Terms of trade and service agreements",
          "Negotiation support",
        ],
      },
      {
        slug: "business-structuring",
        title: "Business Structuring",
        description:
          "Advice on suitable business structures for operators in Victoria and across Australia.",
        summary:
          "Guidance on sole trader, partnership, company and trust structures for Australian businesses.",
        image: "/images/services/business-structuring.webp",
        body: [
          "Choosing the right structure affects liability, tax treatment, governance and how easily you can grow or exit a business. We advise Victorian clients on common Australian structures — including sole traders, partnerships, companies registered with ASIC, and trusts.",
          "Structuring decisions often sit alongside accounting and tax advice. We work collaboratively with your accountant or adviser where needed, so legal structure recommendations align with your commercial and compliance goals.",
          "If you are starting a new venture, bringing on co-owners, or restructuring an existing business, we can help you understand the legal implications of each option under Victorian and Commonwealth law.",
        ],
        points: [
          "New business set-up advice",
          "Company and trust considerations",
          "Ownership and governance arrangements",
          "Restructuring support",
        ],
      },
      {
        slug: "commercial-lease-agreements",
        title: "Commercial Lease Agreements",
        description:
          "Retail and commercial leasing advice for landlords and tenants in Victoria.",
        summary:
          "Support with commercial and retail leases under Victorian leasing law, including the Retail Leases Act 2003 (Vic).",
        image: "/images/services/commercial-lease-agreements.webp",
        body: [
          "Commercial and retail leases are significant commitments. In Victoria, many retail premises are regulated by the Retail Leases Act 2003 (Vic), which sets out disclosure requirements, outgoings rules and other protections for parties to retail leases.",
          "We assist landlords and tenants with reviewing lease terms, negotiating variations, and understanding rights and obligations before signing or renewing. We also advise on disputes that arise during the life of a lease.",
          "Our aim is to help you enter lease arrangements with eyes open — clear on rent, outgoings, make-good, options and assignment — so your premises support your business rather than create unexpected risk.",
        ],
        points: [
          "Retail and commercial lease review",
          "Lease negotiation and renewals",
          "Disclosure and Retail Leases Act issues",
          "Lease dispute guidance",
        ],
      },
      {
        slug: "joint-venture-agreements",
        title: "Joint Venture Agreements",
        description:
          "Documenting joint ventures and collaborative business arrangements in Australia.",
        summary:
          "Clear joint venture documentation so roles, contributions and exits are properly defined.",
        image: "/images/services/joint-venture-agreements.webp",
        body: [
          "Joint ventures allow businesses to collaborate on projects while remaining separate entities. Success depends on clear documentation of contributions, decision-making, profit sharing, intellectual property and exit pathways.",
          "We help Victorian and Australian clients prepare and review joint venture agreements tailored to the project — whether property development, commercial collaboration or a defined business initiative.",
          "Early legal clarity reduces the chance of disagreement later. We focus on practical terms that reflect how the parties intend to work together under Australian commercial law.",
        ],
        points: [
          "Joint venture agreement drafting",
          "Roles, contributions and governance",
          "Exit and dispute pathways",
          "Project-specific arrangements",
        ],
      },
      {
        slug: "sales-and-purchases-of-business-and-equipment",
        title: "Sales and Purchases of Business and Equipment",
        description:
          "Legal support for buying or selling a business or business assets in Victoria.",
        summary:
          "Transaction support for business and equipment sales and purchases under Australian law.",
        image:
          "/images/services/sales-and-purchases-of-business-and-equipment.webp",
        body: [
          "Buying or selling a business involves contracts, due diligence, employee issues, leases, licences and often finance arrangements. We assist Victorian buyers and sellers through the legal steps of a business sale or purchase.",
          "Asset sales and share sales raise different legal considerations. We help you understand the structure of the deal, review sale agreements, and coordinate with your accountant and financier where required.",
          "We also assist with equipment and plant sales or purchases — documenting ownership transfer, warranties and payment terms so both parties have a clear record of the transaction.",
        ],
        points: [
          "Business sale and purchase agreements",
          "Due diligence support",
          "Asset and share sale structures",
          "Equipment and plant transactions",
        ],
      },
    ],
  },
  {
    slug: "criminal-law",
    title: "Criminal Law",
    description:
      "Early intervention and representation for police interviews, charges and Victorian court matters.",
    icon: "scales",
    image: "/images/services/criminal-law.webp",
    summary:
      "Criminal defence support in Victoria — from police interviews through to Magistrates’ Court and higher court matters.",
    jurisdictionNote:
      "Criminal procedure in Victoria is governed by Victorian legislation and court practice, including the Crimes Act 1958 (Vic) and related Commonwealth offences where applicable.",
    body: [
      "Facing a criminal investigation or charge in Victoria can be stressful and confusing. Early legal advice matters — including before or during a police interview — so you understand your rights and options.",
      "We provide clear guidance and representation for a range of criminal matters in Victorian courts. Our focus is on protecting your rights, explaining the process in plain language, and working toward the best available outcome for your circumstances.",
      "Every matter is different. We take time to understand what happened, review the evidence available to you, and discuss realistic pathways — including negotiation, diversion where appropriate, or defending the charge at hearing.",
    ],
  },
  {
    slug: "family-law",
    title: "Family Law",
    description:
      "Sensitive guidance through separation, parenting and property matters under Australian family law.",
    icon: "users",
    image: "/images/services/family-law.webp",
    summary:
      "Family law advice for Victorian clients under the Family Law Act 1975 (Cth) — parenting, property and separation support.",
    jurisdictionNote:
      "Most family law parenting and property matters in Australia are dealt with under the Family Law Act 1975 (Cth). Victorian clients may also have related state-based issues such as intervention orders.",
    body: [
      "Separation and family breakdown are among the most difficult periods in a person’s life. We approach every family law matter with empathy, respect and clear advice grounded in Australian family law.",
      "We assist with parenting arrangements, property settlements following separation or divorce, and related issues that arise for families in Victoria. Where appropriate, we encourage negotiated outcomes and alternative dispute resolution; where court involvement is needed, we guide you through the process.",
      "Our role is to help you understand your options under the Family Law Act 1975 (Cth), so you can make decisions that protect your interests and support lasting arrangements for you and your family.",
    ],
  },
  {
    slug: "immigration-law",
    title: "Immigration Law",
    description:
      "Support navigating Australian visas, citizenship and matters involving the Department of Home Affairs.",
    icon: "globe",
    image: "/images/services/immigration-law.webp",
    summary:
      "Immigration advice for individuals and families dealing with Australian visa and citizenship pathways.",
    jurisdictionNote:
      "Australian immigration is primarily a Commonwealth matter administered under the Migration Act 1958 (Cth) and related regulations.",
    body: [
      "Immigration matters require careful attention to eligibility, timing and documentation. We assist clients in Victoria with understanding Australian visa and citizenship pathways and responding to issues that arise with the Department of Home Affairs or Australian Border Force.",
      "Whether you are exploring options to live, work or reunite with family in Australia, or responding to a visa-related problem, we provide clear advice about process and next steps.",
      "Immigration law changes regularly. We stay focused on practical guidance for your circumstances and can work alongside registered migration agents where specialised lodgement work is required.",
    ],
  },
  {
    slug: "negotiations-with-government-bodies",
    title: "Negotiations with Government Bodies",
    description:
      "Advocacy when dealing with Victorian and Australian government agencies and regulators.",
    icon: "building",
    image: "/images/services/negotiations-with-government-bodies.webp",
    summary:
      "Experienced advocacy when dealing with government agencies, regulators and public bodies in Victoria and Australia.",
    jurisdictionNote:
      "Engagements may involve Victorian departments and agencies, Commonwealth bodies, or local government — depending on the matter.",
    body: [
      "Dealing with government agencies and regulators can be complex and time-consuming. We assist Victorian clients with representations and negotiations before public bodies where legal advocacy is required.",
      "Our role is to clarify the issues, present your position effectively, and work toward a resolution that protects your interests — whether the matter involves state agencies, Commonwealth regulators or local government processes.",
      "Clear communication and well-prepared submissions often make a significant difference. We help you understand what the agency is asking for and how best to respond.",
    ],
  },
  {
    slug: "power-of-attorney",
    title: "Power of Attorney",
    description:
      "Victorian Powers of Attorney and medical treatment decision-maker appointments.",
    icon: "signature",
    image: "/images/services/power-of-attorney.webp",
    summary:
      "Help putting the right Victorian Power of Attorney and medical decision-maker arrangements in place.",
    jurisdictionNote:
      "Powers of Attorney in Victoria are governed by the Powers of Attorney Act 2014 (Vic). Medical treatment decision makers are dealt with under the Medical Treatment Planning and Decisions Act 2016 (Vic).",
    body: [
      "A Power of Attorney is an important safeguard for your future decision-making. In Victoria, the Powers of Attorney Act 2014 (Vic) sets out how general and enduring powers of attorney work, including when they start and what decisions an attorney can make.",
      "We help you understand the options available — including general and enduring powers of attorney — and prepare documents that reflect your wishes. We also advise on appointing a medical treatment decision maker under Victorian law.",
      "Whether you are planning ahead or assisting a family member, we provide clear advice so your arrangements are properly documented and understood by the people you trust.",
    ],
    children: [
      {
        slug: "appoint-medical-related-decision-maker",
        title: "Appoint Medical Treatment Decision Maker",
        description:
          "Appoint someone you trust to make medical treatment decisions under Victorian law.",
        summary:
          "Support appointing a medical treatment decision maker under the Medical Treatment Planning and Decisions Act 2016 (Vic).",
        image: "/images/services/appoint-medical-related.webp",
        body: [
          "In Victoria, you can appoint a medical treatment decision maker to make medical decisions on your behalf if you are unable to make those decisions yourself. This is an important part of planning for future care.",
          "We help you understand how medical treatment decision-maker appointments work under the Medical Treatment Planning and Decisions Act 2016 (Vic), and prepare the documentation so your wishes and chosen decision maker are clearly recorded.",
          "These arrangements often sit alongside enduring powers of attorney and estate planning. We can discuss how the documents work together as part of a coordinated personal planning package.",
        ],
        points: [
          "Medical treatment decision-maker appointments",
          "Victorian medical treatment planning",
          "Coordination with Powers of Attorney",
          "Clear documentation of your wishes",
        ],
      },
      {
        slug: "enduring-power-of-attorney",
        title: "Enduring Power of Attorney",
        description:
          "Appoint someone you trust to manage your affairs if you lose decision-making capacity.",
        summary:
          "Enduring Powers of Attorney under the Powers of Attorney Act 2014 (Vic).",
        image: "/images/services/enduring-power-of-attorney.webp",
        body: [
          "An enduring power of attorney allows you to appoint someone you trust to manage your financial and personal affairs if you no longer have the capacity to manage them yourself. In Victoria, enduring powers of attorney are made under the Powers of Attorney Act 2014 (Vic).",
          "We help you choose appropriate attorneys, understand the scope of authority you are granting, and complete the formal requirements so the document is valid and usable when needed.",
          "Putting an enduring power of attorney in place is one of the most practical steps you can take to protect yourself and reduce stress for family members if illness or incapacity arises.",
        ],
        points: [
          "Enduring Power of Attorney preparation",
          "Financial and personal affairs authority",
          "Attorney appointment guidance",
          "Victorian formal requirements",
        ],
      },
      {
        slug: "general-power-of-attorney",
        title: "General Power of Attorney",
        description:
          "Temporary authority for someone to act on your behalf while you have capacity.",
        summary:
          "General Powers of Attorney for defined or temporary authority under Victorian law.",
        image: "/images/services/general-power-of-attorney.webp",
        body: [
          "A general power of attorney can authorise someone to act on your behalf for financial matters while you still have capacity — for example, if you are overseas or need short-term assistance managing affairs.",
          "Unlike an enduring power of attorney, a general power of attorney in Victoria typically ceases if you lose decision-making capacity. We help you understand which document suits your situation and prepare it correctly.",
          "Clear instructions about what your attorney can and cannot do help prevent confusion and misuse. We draft with those boundaries in mind.",
        ],
        points: [
          "General Power of Attorney preparation",
          "Temporary or defined authority",
          "Suitability advice vs enduring POA",
          "Victorian formal requirements",
        ],
      },
    ],
  },
  {
    slug: "property-conveyancing",
    title: "Property & Conveyancing",
    description:
      "Residential and commercial conveyancing and property law support across Victoria.",
    icon: "home",
    image: "/images/services/property-and-conveyancing.webp",
    summary:
      "Victorian conveyancing and property transactions — from contract to settlement — with a specialist team focus.",
    jurisdictionNote:
      "Property transactions in Victoria involve the Sale of Land Act 1962 (Vic), Transfer of Land Act 1958 (Vic), and related Victorian planning and building frameworks.",
    body: [
      "Makdesi Lawyers has a strong conveyancing practice supporting residential and commercial property transactions in Victoria. Our specialist team works to keep purchases and sales efficient and clear from contract through to settlement.",
      "Victorian property transactions involve vendor statements (section 32), contract terms, finance, building and pest issues, and settlement through PEXA or traditional channels. We guide buyers and sellers through each step.",
      "Beyond standard conveyancing, we also assist with broader property matters including mortgage documentation, subdivision, development and building and planning issues that arise for Victorian property owners.",
    ],
    children: [
      {
        slug: "building-and-planning",
        title: "Building and Planning",
        description:
          "Advice on building and planning issues affecting Victorian property.",
        summary:
          "Support with Victorian building and planning matters that affect property owners and developers.",
        image: "/images/services/building-and-planning.webp",
        body: [
          "Building and planning issues can affect whether a property can be developed, altered or used as intended. Victorian planning schemes, permits and building regulations create a framework that owners and developers need to navigate carefully.",
          "We assist clients with legal aspects of planning and building matters — including advice connected to permits, disputes and documentation that sits alongside a property transaction or development.",
          "Where specialist town planning or building consultants are involved, we work alongside them so the legal position is clear and coordinated.",
        ],
        points: [
          "Planning and building-related legal advice",
          "Permit and compliance issues",
          "Disputes connected to building works",
          "Coordination with consultants",
        ],
      },
      {
        slug: "conveyancing",
        title: "Conveyancing",
        description:
          "Victorian conveyancing for buyers and sellers — contract to settlement.",
        summary:
          "Prepare and review sale documents, section 32 vendor statements, transfers and settlement for Victorian properties.",
        image: "/images/services/conveyancing.webp",
        body: [
          "Conveyancing is the legal process of transferring property ownership. In Victoria, this typically includes reviewing or preparing the contract of sale, section 32 vendor’s statement, title searches, finance conditions, and settlement.",
          "We assist buyers and sellers with residential and commercial conveyancing. Our focus is on meeting deadlines, explaining each stage clearly, and identifying issues early — such as title restrictions, owners corporation matters or contract special conditions.",
          "Whether you are a first-home buyer, investor or selling a long-held property, we provide practical conveyancing support through to settlement.",
        ],
        points: [
          "Purchase and sale conveyancing",
          "Section 32 vendor statements",
          "Contract review and advice",
          "Settlement and title transfer",
        ],
      },
      {
        slug: "mortgage-documents",
        title: "Mortgage Documents",
        description:
          "Review and advice on mortgage and finance-related property documents.",
        summary:
          "Legal review of mortgage and related security documents for Victorian property transactions.",
        image: "/images/services/mortgage-documents.webp",
        body: [
          "Mortgage documents create significant legal obligations. Before signing, it is important to understand the lender’s requirements, guarantees, and how the security interacts with your property ownership.",
          "We assist Victorian clients with reviewing mortgage and related finance documents in the context of a purchase, refinance or other property transaction — so you understand what you are agreeing to.",
          "Where guarantees or additional security are requested, we explain the implications clearly before you proceed.",
        ],
        points: [
          "Mortgage document review",
          "Refinance-related advice",
          "Guarantee implications",
          "Coordination with conveyancing",
        ],
      },
      {
        slug: "property-development",
        title: "Property Development",
        description:
          "Legal support for property development projects in Victoria.",
        summary:
          "Legal guidance for Victorian property development — from acquisition through to delivery structures.",
        image: "/images/services/property-development.webp",
        body: [
          "Property development involves layered legal issues: acquisition, planning, financing, building contracts, sales off-the-plan and joint venture arrangements. We assist Victorian developers and landowners with the legal components of development projects.",
          "Early structuring and clear contracts help manage risk across the life of a project. We provide advice tailored to the scale and stage of your development.",
          "We can also coordinate with planners, surveyors and financiers so legal documentation aligns with the commercial program.",
        ],
        points: [
          "Development structuring advice",
          "Acquisition and project documentation",
          "Builder and consultant contracts",
          "Off-the-plan and sales issues",
        ],
      },
      {
        slug: "property-subdivision",
        title: "Property Subdivision",
        description:
          "Legal assistance with subdividing land in Victoria.",
        summary:
          "Support for Victorian subdivision processes, including documentation connected to titles and plans.",
        image: "/images/services/property-subdivision.webp",
        body: [
          "Subdividing land in Victoria involves planning approval, survey plans, owners corporation arrangements (where applicable) and registration of new titles. Legal coordination is an important part of a smooth subdivision.",
          "We assist clients with the legal aspects of subdivision — including advice on process, documentation and issues that arise between co-owners or developers during a subdivision project.",
          "Working early with your surveyor and planner, alongside legal advice, helps avoid delays at the titles office and at settlement of subdivided lots.",
        ],
        points: [
          "Subdivision legal process advice",
          "Title and plan documentation",
          "Owners corporation considerations",
          "Coordination with surveyors and planners",
        ],
      },
    ],
  },
  {
    slug: "tax-matters",
    title: "Tax Matters",
    description:
      "Legal guidance on tax-related issues involving the ATO and Victorian State Revenue Office.",
    icon: "receipt",
    image: "/images/services/tax-matters.webp",
    summary:
      "Legal support for tax-related disputes and dealings with the ATO and State Revenue Office Victoria.",
    jurisdictionNote:
      "Tax matters may involve Commonwealth taxation (ATO) and Victorian state taxes administered by the State Revenue Office Victoria.",
    body: [
      "Tax-related legal issues often require careful coordination between legal advice and your broader financial position. We assist Victorian clients with legal aspects of matters involving the Australian Taxation Office and the State Revenue Office Victoria.",
      "This may include responding to audits or assessments, duty-related issues connected to property and business transactions, and disputes where legal representation is required.",
      "We focus on clear explanation of the issues and practical next steps. Where accounting expertise is central, we work with your tax adviser so legal and accounting strategies align.",
    ],
  },
  {
    slug: "wills-estate-planning",
    title: "Wills & Estate Planning",
    description:
      "Wills, probate and estate planning for individuals and families in Victoria.",
    icon: "scroll",
    image: "/images/services/wills-and-estate-planning.webp",
    summary:
      "Victorian wills, probate and estate planning — so your wishes are clear and your family is supported.",
    jurisdictionNote:
      "Wills and probate in Victoria are governed primarily by the Wills Act 1997 (Vic) and the Administration and Probate Act 1958 (Vic).",
    body: [
      "Estate planning and probate are core areas of our practice. We help Victorian clients prepare wills and related documents that clearly reflect their intentions under the Wills Act 1997 (Vic).",
      "When a loved one has passed, we also assist with probate and estate administration under the Administration and Probate Act 1958 (Vic) — providing guidance through what can be an emotionally difficult process.",
      "Thoughtful estate planning can reduce uncertainty for your family. We discuss guardianship wishes, executors, trusts and how your will interacts with superannuation and other assets that may fall outside the estate.",
    ],
    children: [
      {
        slug: "contest-a-will",
        title: "Contest a Will",
        description:
          "Advice on family provision claims and will disputes in Victoria.",
        summary:
          "Guidance on contesting a will or defending a claim under Victorian succession law.",
        image: "/images/services/contest-a-will.webp",
        body: [
          "In Victoria, eligible persons may be able to bring a family provision claim (often called contesting a will) if they believe adequate provision has not been made for their proper maintenance and support. These claims are dealt with under Part IV of the Administration and Probate Act 1958 (Vic).",
          "We advise potential claimants and executors/beneficiaries defending claims. Time limits apply, so early advice is important.",
          "Will disputes are sensitive. We explain your position clearly, discuss negotiation and mediation options, and guide you through court processes where required.",
        ],
        points: [
          "Family provision (Part IV) claims",
          "Advice for executors and beneficiaries",
          "Negotiation and mediation",
          "Victorian time-limit guidance",
        ],
      },
      {
        slug: "estate-planning",
        title: "Estate Planning",
        description:
          "Holistic estate planning for Victorian individuals and families.",
        summary:
          "Coordinated estate planning — wills, attorneys and structures — under Victorian and Australian law.",
        image: "/images/services/estate-planning.webp",
        body: [
          "Estate planning is more than a will. It can include powers of attorney, medical treatment decision makers, superannuation nominations, and structures such as trusts that affect how wealth passes to the next generation.",
          "We help Victorian clients build a practical estate plan that reflects family circumstances, business interests and personal wishes — with documents that work together under Victorian law.",
          "Regular reviews are important after major life events such as marriage, separation, the birth of children, or acquiring significant assets.",
        ],
        points: [
          "Integrated estate planning advice",
          "Wills and related documents",
          "Attorney and medical appointments",
          "Business and family succession issues",
        ],
      },
      {
        slug: "executor-of-an-estate",
        title: "Executor of an Estate",
        description:
          "Support for executors administering a deceased estate in Victoria.",
        summary:
          "Practical legal support for Victorian executors through probate and estate administration.",
        image: "/images/services/executor-of-an-estate.webp",
        body: [
          "Being named as executor is an important responsibility. Executors in Victoria must locate the will, apply for probate where required, collect assets, pay debts and distribute the estate according to the will or the rules of intestacy.",
          "We guide executors through their duties under the Administration and Probate Act 1958 (Vic), including applications for a grant of probate and day-to-day administration questions.",
          "Clear advice helps executors avoid personal risk and ensures beneficiaries are dealt with fairly and in accordance with the law.",
        ],
        points: [
          "Executor duties explained",
          "Probate application support",
          "Estate administration guidance",
          "Beneficiary communication issues",
        ],
      },
      {
        slug: "last-wills-and-testaments",
        title: "Last Wills and Testaments",
        description:
          "Preparation of valid wills for people living in Victoria.",
        summary:
          "Will drafting under the Wills Act 1997 (Vic) so your intentions are clearly recorded.",
        image: "/images/services/last-wills-and-testaments.webp",
        body: [
          "A valid will is the foundation of most estate plans. In Victoria, wills must meet formal requirements under the Wills Act 1997 (Vic) to reduce the risk of disputes or invalidity.",
          "We prepare wills that appoint executors, provide for beneficiaries, and address guardianship wishes for minor children where relevant. We also discuss assets that may not pass through your will, such as jointly owned property or superannuation.",
          "Whether you need a first will or an update after a life change, we make the process straightforward and explain your options clearly.",
        ],
        points: [
          "Will preparation and updates",
          "Executor and guardian appointments",
          "Victorian formal requirements",
          "Blended family considerations",
        ],
      },
      {
        slug: "probate",
        title: "Probate",
        description:
          "Grant of probate applications and related estate formalities in Victoria.",
        summary:
          "Assistance obtaining a Grant of Probate so executors can administer a Victorian estate.",
        image: "/images/services/probate.webp",
        body: [
          "The executor of an estate must usually have the will validated by applying for a Grant of Probate in the Supreme Court of Victoria. Once granted, the executor has legal authority to manage and distribute property and assets to beneficiaries named in the will.",
          "Our probate lawyers assist executors through the necessary tasks required to obtain probate and begin administration — including preparing the application and supporting materials.",
          "We understand this often occurs during a period of grief. We aim to make the legal process as clear and manageable as possible.",
        ],
        points: [
          "Grant of Probate applications",
          "Supreme Court of Victoria process",
          "Executor support after the grant",
          "Intestacy guidance where there is no will",
        ],
      },
      {
        slug: "trusts",
        title: "Trusts",
        description:
          "Advice on trusts used in estate planning and wealth structures in Australia.",
        summary:
          "Guidance on testamentary and other trusts relevant to Victorian estate planning.",
        image: "/images/services/trusts.webp",
        body: [
          "Trusts can play a role in estate planning, asset protection and providing for vulnerable beneficiaries. Common examples include testamentary trusts created by a will, and discretionary family trusts used in broader wealth structures.",
          "We advise Victorian clients on when a trust may be appropriate as part of an estate plan, and how trust terms interact with wills, control of assets and succession of control.",
          "Trust advice often involves tax and accounting considerations. We work with your accountant where needed so legal documents align with your wider planning.",
        ],
        points: [
          "Testamentary trust advice",
          "Estate planning trust structures",
          "Vulnerable beneficiary considerations",
          "Coordination with accountants",
        ],
      },
    ],
  },
];

export function getPracticeArea(slug: string) {
  return practiceAreas.find((area) => area.slug === slug);
}

export function getSubService(parentSlug: string, childSlug: string) {
  const parent = getPracticeArea(parentSlug);
  return parent?.children?.find((child) => child.slug === childSlug);
}

export function getAllSubServicePaths() {
  return practiceAreas.flatMap((area) =>
    (area.children ?? []).map((child) => ({
      parent: area.slug,
      slug: child.slug,
    })),
  );
}
