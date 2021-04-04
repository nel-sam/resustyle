import { ValidationErrorTypes } from '../enums';
import { Resume, ResumeValidationResult, ParseResult } from '../models/interfaces';
import { validResumeObj } from '../resume';

export default class ResumeService {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private getObjectProperties(object: any): string[] {
    const properties: string[] = [];

    for (const property in object) {
      if (property === '0') {
        return [];
      }

      properties.push(property, ...this.getObjectProperties(object[property]));
    }

    return properties.sort();
  }

  private validateResume(toValidate: Resume): ResumeValidationResult {
    // Move this into state so we only have to do it once
    const resumeProps = this.getObjectProperties(validResumeObj);
    const parsedResumeProps = this.getObjectProperties(toValidate);

    for (let i = 0; i < resumeProps.length; i++) {
      const control = resumeProps[i];
      const inTest = parsedResumeProps[i];

      if (inTest !== control) {
        const isValidProp = resumeProps.findIndex(p => p === inTest) >= 0;

        return {
          isValid: false,
          errorType: isValidProp ? ValidationErrorTypes.MissingRequiredProperty : ValidationErrorTypes.UnexpectedPropertyFound,
          errorDetails: isValidProp ? control : inTest,
        };
      }
    }

    return {
      isValid: true,
      errorType: ValidationErrorTypes.None,
      errorDetails: '',
    } as ResumeValidationResult;
  }

  public parseResume(jsonString: string): ParseResult {
    const resume = JSON.parse(jsonString) as Resume;
    const validationResult = this.validateResume(resume);

    return {
      resume,
      validationResult
    } as ParseResult;
  }
}