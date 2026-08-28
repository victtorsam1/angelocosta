export interface Proposal {
  id: string;
  category: string;
  iconName: string;
  title: string;
  shortDescription: string;
  details: string[];
}

export interface CandidateInfo {
  name: string;
  role: string;
  state: string;
  number: string;
  party: string;
  slogan: string;
  cnpj: string;
  email?: string;
  biography: string;
  pillars: string[];
}

export interface DemandaForm {
  name: string;
  email: string;
  whatsapp: string;
  city: string;
  topic: string;
  message: string;
  wantsVolunteering: boolean;
}
