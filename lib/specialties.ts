export interface Specialty {
  id: string;
  name: string;
  fullName: string;
  desc: string;
  listDesc: string;
}

export const SPECIALTIES: Specialty[] = [
  {
    id: 'ivf-fertility',
    name: 'IVF & Fertility',
    fullName: 'IVF & Fertility Centers',
    desc: 'Helping fertility providers become the trusted recommendation for patients researching their path to parenthood.',
    listDesc: 'Patients searching for IVF clinics are increasingly finding recommendations through AI — not Google.',
  },
  {
    id: 'hair-transplant',
    name: 'Hair Transplant',
    fullName: 'Hair Restoration Clinics',
    desc: 'Increasing AI visibility for clinics offering advanced hair restoration and transplant procedures.',
    listDesc: 'Hair transplant research is one of the most AI-intensive patient journeys in elective healthcare.',
  },
  {
    id: 'cosmetic-derm',
    name: 'Cosmetic Dermatology',
    fullName: 'Cosmetic Dermatology Clinics',
    desc: 'Helping aesthetic skin clinics stand out when patients seek trusted cosmetic care.',
    listDesc: 'From Botox to chemical peels, patients ask AI which clinic to trust before they book.',
  },
  {
    id: 'dental',
    name: 'Dental Implants',
    fullName: 'Dental Implant Centers',
    desc: 'Making dental implant providers easier for AI to discover, understand, and recommend.',
    listDesc: 'Dental implant patients compare cost, technology, and surgeon credentials across AI platforms.',
  },
  {
    id: 'lasik',
    name: 'LASIK & Eye Care',
    fullName: 'LASIK & Vision Correction Centers',
    desc: 'Positioning vision correction specialists to appear in AI-powered healthcare recommendations.',
    listDesc: 'LASIK is one of the most researched elective procedures — and AI is increasingly the first source patients consult.',
  },
  {
    id: 'plastic-surgery',
    name: 'Plastic Surgery',
    fullName: 'Plastic Surgery Practices',
    desc: 'Helping cosmetic and reconstructive surgery practices build visibility and trust across AI platforms.',
    listDesc: 'Patients researching cosmetic surgery are increasingly turning to AI for clinic recommendations.',
  },
];

export const EXTENDED_SPECIALTIES = [
  'IVF & Fertility',
  'Dental Implants',
  'Cosmetic Dermatology',
  'LASIK & Eye Care',
  'Hair Transplant',
  'Plastic Surgery',
] as const;

export const CORE_SPECIALTIES = SPECIALTIES.filter(s =>
  ['ivf-fertility', 'hair-transplant', 'cosmetic-derm', 'dental', 'lasik', 'plastic-surgery'].includes(s.id)
);
