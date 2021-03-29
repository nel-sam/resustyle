import { Resume } from '../models/interfaces';

export default class ResumeService {
  public parseResume(jsonString: string): Resume {
    return JSON.parse(jsonString) as Resume;
  }
}