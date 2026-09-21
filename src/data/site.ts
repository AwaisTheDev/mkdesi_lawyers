export const site = {
  name: "Makdesi And Associates Lawyers",
  shortName: "Makdesi",
  tagline: "High Quality, Cost Effective Legal Services",
  url: "https://makdesilawyers.com.au",
  phone: "0450 706 100",
  phoneHref: "tel:+61450706100",
  email: "mary@makdesilawyers.com.au",
  emailHref: "mailto:mary@makdesilawyers.com.au",
  address: {
    line1: "705 Sydney Road",
    line2: "Brunswick VIC 3056",
    full: "705 Sydney Road, Brunswick VIC 3056",
    mapsLink:
      "https://www.google.com/maps/search/?api=1&query=705+Sydney+Road+Brunswick+VIC+3056",
    mapsEmbed:
      "https://www.google.com/maps?q=705+Sydney+Road+Brunswick+VIC+3056&output=embed",
  },
  sisterFirm: {
    name: "Genuine Legal Group",
    url: "https://www.genuinelegalgroup.com.au",
    principal: "Mary Makdesi",
    principalRole: "Director & Principal Lawyer",
    description:
      "Makdesi Lawyers works alongside Genuine Legal Group — a sister firm also led by Mary Makdesi. Together, the practices share a commitment to practical, client-focused legal advice and a trusted network of professionals across Victoria.",
  },
  /** Set real profile URLs when confirmed; empty hides footer icons */
  social: {
    facebook: "",
    linkedin: "",
  },
};

export const legalNav = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Website Terms", href: "/terms" },
  { label: "Disclaimer", href: "/disclaimer" },
];

export const nav = [
  { label: "About", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Areas of Law", href: "/services" },
  { label: "Location", href: "/location" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Areas of Law", href: "/services" },
  { label: "Location", href: "/location" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export const trustItems = [
  {
    title: "Experienced",
    description: "Trusted legal guidance across a wide range of matters.",
    icon: "scales",
  },
  {
    title: "Client Focused",
    description: "Personalised advice and practical solutions.",
    icon: "shield",
  },
  {
    title: "Local Experts",
    description: "Proudly based in Melbourne.",
    icon: "mapPin",
  },
  {
    title: "Result Driven",
    description: "Committed to the best outcomes for our clients.",
    icon: "target",
  },
];

export const about = {
  headline: "A client-focused legal practice in Brunswick",
  intro:
    "Makdesi And Associates Lawyers are dedicated to providing friendly, experienced guidance — helping you navigate legal matters including estate planning, probate, wills, business and property law. We focus on getting the results you want, efficiently and cost-effectively, whilst building long and lasting relationships with our clients.",
  paragraphs: [
    "As you experience life’s changes, we’ll be there for you when you need advice. Our approach begins with listening: we take time to understand each client’s circumstances, explain the legal landscape in plain language, and develop strategies that balance legal objectives with cost-effectiveness.",
    "The firm has a strong conveyancing practice, supported by a specialist team dedicated to residential and commercial property transactions, alongside broader advice across estates, commercial matters, family law and criminal law.",
    "Makdesi Lawyers also works alongside sister firm Genuine Legal Group (www.genuinelegalgroup.com.au), also led by Director & Principal Lawyer Mary Makdesi — sharing a commitment to practical, client-focused legal advice across Victoria.",
  ],
  values: [
    {
      title: "Clear communication",
      description:
        "Straightforward advice about your options, so you can make informed decisions with confidence.",
    },
    {
      title: "Personalised service",
      description:
        "Flexible communication and a tailored approach — recognising that legal matters often require responsiveness.",
    },
    {
      title: "Practical strategies",
      description:
        "Legal objectives balanced with cost-effectiveness, focused on outcomes that matter to you.",
    },
  ],
};

/** Featured homepage cards matching the concept layout */
export const featuredAreas = [
  {
    title: "Business & Commercial",
    description:
      "Contracts, disputes and commercial advice for businesses of all sizes.",
    image: "/images/services/commercial-law.webp",
    href: "/services/commercial-law",
  },
  {
    title: "Property",
    description:
      "Conveyancing, property transactions and related legal support.",
    image: "/images/services/property-and-conveyancing.webp",
    href: "/services/property-conveyancing",
  },
  {
    title: "Family & Personal",
    description:
      "Family law, wills, estates and personal legal matters handled with care.",
    image: "/images/services/family-law.webp",
    href: "/services/family-law",
  },
  {
    title: "Disputes & Legal Matters",
    description:
      "Criminal, immigration, tax and negotiations with government bodies.",
    image: "/images/services/criminal-law.webp",
    href: "/services/criminal-law",
  },
];

export {
  practiceAreas,
  getPracticeArea,
  getSubService,
  getAllSubServicePaths,
} from "./services";
export type { PracticeArea, SubService } from "./services";

export const team = [
  {
    slug: "mary-makdesi",
    name: "Mary Makdesi",
    role: "Principal Lawyer",
    initials: "MM",
    photo: "/images/mary.webp",
    bio: "Principal Lawyer of Makdesi Lawyers and Genuine Legal Group. An accomplished litigator advising across estate planning and probate, commercial and retail leasing, commercial contracts, family law, and criminal law.",
    focus: [
      "Estate planning & probate",
      "Commercial & retail leasing",
      "Commercial contracts",
      "Family law",
      "Criminal law",
    ],
    paragraphs: [
      "Mary Makdesi is the Principal Lawyer of Makdesi Lawyers and Genuine Legal Group. She leads a dedicated team of experienced legal professionals who are committed to delivering practical, strategic, and client-focused legal services.",
      "With extensive experience in private practice, Mary is an accomplished litigator who advises and represents clients across a broad range of legal matters. Her primary areas of practice include estate planning and probate, commercial and retail leasing, commercial contracts, family law, and criminal law.",
      "The firm also has a strong conveyancing practice, supported by a specialist team dedicated exclusively to residential and commercial property transactions, ensuring clients receive efficient and seamless property services.",
      "Mary’s broad legal expertise makes her a trusted first point of contact for individuals, families, and businesses seeking legal guidance. She has built a strong network of trusted professionals and industry experts, allowing her to draw on specialised knowledge whenever required to achieve the best possible outcomes for her clients.",
      "Mary believes that effective legal representation begins with clear communication. She takes the time to understand each client’s circumstances, provides straightforward advice about their options, and develops practical strategies that balance legal objectives with cost-effectiveness.",
      "As Principal Lawyer, Mary is committed to providing a personalised and accessible service. She is flexible in how and when she communicates with clients, recognising that legal matters often require responsiveness and a tailored approach.",
      "Known for her compassionate yet determined approach, Mary is a strong advocate who is prepared to tackle complex and challenging legal issues. At the same time, she understands that many clients come to her during some of the most difficult periods of their lives, and she approaches every matter with empathy, respect, and genuine care.",
    ],
  },
  {
    slug: "nizar-makdesi",
    name: "Nizar Makdesi",
    role: "Associate Lawyer",
    initials: "NZ",
    photo: "/images/nizar.webp",
    bio: "Juris Doctor (Monash) and licensed in Victoria. Focused on estate planning and probate, commercial law, criminal matters, and family law — with a strong foundation in IT, consumer law, and intellectual property.",
    focus: [
      "Estate planning & probate",
      "Commercial law",
      "Criminal law",
      "Family law",
      "Consumer law & IP",
    ],
    paragraphs: [
      "Nizar obtained his Juris Doctor of Law from Monash University and is licensed to practice Law in Victoria, Australia. He also holds a Bachelor of Business and Master of Information Systems from the University of Melbourne.",
      "Nizar is passionate about estate planning and probate matters, commercial law, criminal matters, and family law. He has a proven track record of delivering high-quality legal services, earning him a reputation for his professionalism and integrity.",
      "Moreover, he has a strong foundation in Information Technology and a keen understanding of Consumer Law and Intellectual Property.",
      "He approaches every file and client with his passion for the law, unwavering commitment to getting outcomes, and meticulous attention to the small print.",
      "Nizar is adept at navigating complex legal issues and providing clear, practical advice to his clients. He is committed to staying abreast of legal developments and continuously expanding his knowledge to better serve clients' needs.",
      "Nizar understands that in order to provide clients with genuine support, they require both strategic and effective legal guidance in both commercial and personal matters, as well as an ally who can help them see the significance of their own unique requirements and aspirations.",
    ],
  },
  {
    slug: "clara-gallo",
    name: "Clara Gallo",
    role: "Legal Administration",
    initials: "CG",
    photo: "/images/clara.webp",
    bio: "With the firm since inception, Clara oversees legal administration, file management, and day-to-day operations so every matter runs efficiently from start to finish.",
    focus: [
      "Legal administration",
      "File management",
      "Client service",
      "Office operations",
    ],
    paragraphs: [
      "Clara Gallo has been an integral part of Makdesi Lawyers since the firm's inception, having worked alongside Mary Makdesi for many years across previous legal practices. Her extensive knowledge of the firm's operations and commitment to client service make her an invaluable member of our team.",
      "Clara is responsible for overseeing the firm's legal administration, file management, and day-to-day office operations, ensuring every matter is managed efficiently from commencement through to completion. She works closely with our legal team to maintain organised files, streamline workflows, and ensure clients receive timely communication and exceptional service throughout their matter.",
      "As the first point of contact for many of our clients, Clara is known for her warm, approachable manner and her ability to make clients feel welcome and supported from their very first interaction with the firm. She is dedicated to ensuring each client experience is professional, responsive, and seamless.",
      "With her expertise in file management, office systems, and legal administration, Clara plays a vital role in ensuring our lawyers can focus on delivering quality legal outcomes while every client matter is handled with care, efficiency, and attention to detail.",
    ],
  },
  {
    slug: "natascia-makdesi",
    name: "Natascia Makdesi",
    role: "Administration & Legal Secretary",
    initials: "NA",
    photo: "/images/natascia.webp",
    bio: "Provides administrative and legal secretarial support — client communications, file management, document preparation, and diary coordination — so every client receives a responsive, welcoming experience.",
    focus: [
      "Client communications",
      "File management",
      "Document preparation",
      "Diary & court bookings",
    ],
    paragraphs: [
      "Natascia Makdesi is a valued member of the Makdesi Lawyers team, providing the administrative and legal secretarial support that helps ensure the firm operates efficiently and every client receives a professional, responsive, and welcoming experience.",
      "Working closely with our solicitors, Natascia assists in the day-to-day management of client matters from commencement through to completion. Her responsibilities include client communications, file management, preparation and formatting of legal documents and correspondence, court and settlement bookings, diary management, and coordinating the administrative requirements of each matter to ensure deadlines and appointments are met.",
      "Natascia takes pride in providing reliable and efficient support to both our clients and legal team. Her proactive approach, excellent attention to detail, and commitment to maintaining well-managed files and clear communication help ensure each matter progresses smoothly and that clients receive a high standard of service throughout their legal journey.",
    ],
  },
];

export const reviews = [
  {
    quote:
      "After an initial obligation-free meeting with Mary Makdesi, I knew she was the one to help me sort out probate and other matters. Her warm personality, extensive experience and knowledge were clearly evident. But I also sensed that she would have the gritty determination to help me confront the difficult issues I was facing. I was right and have no hesitation in recommending Mary.",
    name: "Di",
  },
  {
    quote:
      "Mary assisted me greatly by making what I initially believed was a major issue, become one which she handled with expertise and relieved me of the stress and frustration I felt before engaging her services. I highly recommend Mary for her caring attitude and professional approach.",
    name: "Frank",
  },
  {
    quote:
      "Mary has been instrumental in helping me with my Court matter. She is genuine and was open and honest from the start. She was also empathetic to my situation and I felt safe and confident that she was on my team. I had an extremely positive experience and highly recommend Mary and her team to anyone seeking legal advice.",
    name: "John",
  },
];

export function getTeamMember(slug: string) {
  return team.find((member) => member.slug === slug);
}
