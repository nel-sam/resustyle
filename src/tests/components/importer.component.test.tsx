import { render } from '@testing-library/react';
import React from 'react';
import Importer from '../../components/importer/importer.component';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key })
}));

describe('Importer component tests', () => {
  it('Should instantiate', () => {
    const renderResult = render(<Importer resume={{}} />);
    expect(renderResult).toBeDefined();
  });
});