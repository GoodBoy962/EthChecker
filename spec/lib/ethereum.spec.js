'use strict';

const isAddress = require('../../src/lib/ethereum').isAddress;

const ethAddr = '0x1Fed25AA5311d770F29E22870CDb9e715052FeA7';
const addrMoreThan40Symbols = '0x1Fed25AA5311d770F29E22870CDb9e715052FeA71';
const addrLessThan40Symbols = '0x1Fed25AA5311d770F29E22870CDb9e715052FeA';
const addrNotValidSymbols = '0x1Fed25AA5311d770F29E22870CDb9e715052FeAZ';
const notValidAddr = '0x1Fed25AA5311d770F29E22870CDb9e715052FeAA';

describe('isAddress should return', () => {

  describe('true if address', () => {

    it('is right', () => {
      expect(isAddress(ethAddr)).toBe(true);
    });

    it('lowercase is right', () => {
      expect(isAddress(ethAddr.toLowerCase())).toBe(true);
    });

    it('uppercase is right', () => {
      expect(isAddress(ethAddr.substring(0, 2) + ethAddr.substring(2).toUpperCase())).toBe(true);
    });

  });

  describe('false if address', () => {

    it('not valid', () => {
      expect(isAddress(notValidAddr)).toBe(false)
    });

    it('length is longer than 40 symbols', () => {
      expect(isAddress(addrMoreThan40Symbols)).toBe(false);
    });

    it('length is less than 40', () => {
      expect(isAddress(addrLessThan40Symbols)).toBe(false);
    });

    it('contains not valid symbols', () => {
      expect(isAddress(addrNotValidSymbols)).toBe(false);
    });
  });


});