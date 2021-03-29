import { Resume } from '../../models/interfaces';
import ResumeService from '../../services/resume.service';
import { validJsonResume } from './resume.services.mocks';

describe('', () => {
  let resumeService: ResumeService;

  beforeEach(() => {
    resumeService = new ResumeService();
  });

  test('Correctly pareses valid JSON', () => {
    const input = validJsonResume;
    const result: Resume = resumeService.parseResume(input) as Resume;
    expect(result.basics).toBeDefined();
    expect(result.basics.email).toBe('xxx@xxx.com');
    expect(result.education[0].courses[0]).toBe('test course 1');
  });
});