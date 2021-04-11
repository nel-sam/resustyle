import React from 'react';
import { render } from '@testing-library/react';
import SchemaDisplay from '../../components/schema-display/schema-display.component';

describe('SchemaDisplay component tests', () => {
  it('renders learn react link', () => {
    const comp = render(<SchemaDisplay />);
    expect(comp).toBeDefined();
  });
});

