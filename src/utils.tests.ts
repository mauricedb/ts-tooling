import 'mocha';
import { expect } from 'chai';

import { formatCurrency } from './utils';

describe('formatCurrency()', () => {
  it('should format 0 as € 0,00', () => {
    const amount = formatCurrency(0);
    expect(amount).to.equal('€\u00A00,00');
  });

  it('should format 123.45 as € 123,45', () => {
    const amount = formatCurrency(123.45);
    expect(amount).to.equal('€\u00A0123,45');
  });

  it('should format 1234.56 as € 1.234,56', () => {
    const amount = formatCurrency(1234.56);
    expect(amount).to.equal('€\u00A01.234,56');
  });
});
