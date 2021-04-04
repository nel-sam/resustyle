import { ValidationErrorTypes } from '../enums';

export type Location = {
  address: string;
  postalCode: string;
  city: string;
  countryCode: string;
  region: string;
}

export type Profile = {
  network: string;
  username: string;
  url: string;
}

export type Basics = {
  name: string;
  label: string;
  picture: string;
  email: string;
  phone: string;
  website: string;
  summary: string;
  location: Location;
  profiles: Profile[];
}

export type Work = {
  company: string;
  position: string;
  website: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
}

export type Volunteer = {
  organization: string;
  position: string;
  website: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
}

export type Education = {
  institution: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
  gpa: string;
  courses: string[];
}

export type Award = {
  title: string;
  date: string;
  awarder: string;
  summary: string;
}

export type Publication = {
  name: string;
  publisher: string;
  releaseDate: string;
  website: string;
  summary: string;
}

export type Skill = {
  name: string;
  level: string;
  keywords: string[];
}

export type Language = {
  language: string;
  fluency: string;
}

export type Interest = {
  name: string;
  keywords: string[];
}

export type Reference = {
  name: string;
  reference: string;
}

export type Resume = {
  basics: Basics;
  work: Work[];
  volunteer: Volunteer[];
  education: Education[];
  awards: Award[];
  publications: Publication[];
  skills: Skill[];
  languages: Language[];
  interests: Interest[];
  references: Reference[];
}

export type ResumeValidationResult = {
  isValid: boolean;
  errorDetails: string;
  errorType: ValidationErrorTypes;
}

export type ParseResult = {
  resume: Resume;
  validationResult: ResumeValidationResult;
}