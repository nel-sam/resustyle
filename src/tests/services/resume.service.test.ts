import { ValidationErrorTypes } from '../../enums';
import { ParseResult } from '../../models/interfaces';
import ResumeService from '../../services/resume.service';
import { validJsonResume } from './resume.services.mocks';

describe('Resume Service tests', () => {
  let resumeService: ResumeService;

  beforeEach(() => {
    resumeService = new ResumeService();
  });

  it('Correctly parses valid JSON', () => {
    const input = validJsonResume;
    const result: ParseResult = resumeService.parseResume(input);
    expect(result.validationResult.isValid).toBe(true);
    expect(result.resume.basics).toBeDefined();
    expect(result.resume.basics.email).toBe('xxx@xxx.com');
    expect(result.resume.education[0].courses[0]).toBe('これ는 dois être válido');
  });

  it('Errors when extra prop found in invalid JSON', () => {
    const input = '{ "wtf": "is this JSON?" }';
    const result: ParseResult = resumeService.parseResume(input);
    expect(result.validationResult.isValid).toBe(false);
    expect(result.validationResult.errorType).toBe(ValidationErrorTypes.UnexpectedPropertyFound);
    expect(result.validationResult.errorDetails).toBe('wtf');
  });

  it('Errors when required prop missing in invalid JSON', () => {
    const input = '{ "address": "1234 W 2nd St", "basics": {} }';
    const result: ParseResult = resumeService.parseResume(input);
    expect(result.validationResult.isValid).toBe(false);
    expect(result.validationResult.errorType).toBe(ValidationErrorTypes.MissingRequiredProperty);
    expect(result.validationResult.errorDetails).toBe('awards');
  });

  it('Should get all properties of an object', () => {
    const object = {
      test1: '',
      test2: {
        test2A: {
          test2A1: ''
        }
      },
      test3: 1,
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = (resumeService as any).getObjectProperties(object);
    expect(result.length).toBe(5);
    expect(result).toContain('test2A');
    expect(result).toContain('test2A1');
    expect(result).toContain('test3');
  });
});