const isAddress = require('../../src/lib/ethereum').isAddress;

const ethAddress = '0x13Bf8B8AcffD4534c92F60C81F9E3bf731de1c10';
const addressMoreThan40Symbols = '0x13Bf8B8AcffD4534c92F60C81F9E3bf731de1c100';
const addressLessThan40Symbols = '0x13Bf8B8AcffD4534c92F60C81F9E3bf731de1c1';
const addressNotValidSymbols = '0x13Bf8B8AcffD4534c92F60C81F9E3bf731de1c1Z';

describe('isAddress should return', () => {

  it('true if address is right', () => {
    expect(isAddress(ethAddress)).toEqual(true);
  });

  it('true if lowercase address is right', () => {
    expect(isAddress(ethAddress.toLowerCase())).toEqual(true);
  });

  it('true if uppercase address is right', () => {
    expect(isAddress(ethAddress.toUpperCase())).toEqual(true);
  });

  it('false if address length is longer than 40 symbols', () => {
    expect(isAddress(addressMoreThan40Symbols)).toEqual(false);
  });

  it('false if address length is less than 40', () => {
    expect(isAddress(addressLessThan40Symbols)).toEqual(false);
  });

  it('false if address contains not valid symbols', () => {
    expect(isAddress(addressNotValidSymbols)).toEqual(false);
  });


});