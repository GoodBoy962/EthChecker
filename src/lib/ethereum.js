/**
 * EIP55 standard
 */

const SHA3 = require('crypto-js/sha3');

const sha3 = value =>
  SHA3(value, {
    outputLength: 256
  }).toString();

const isAddress = address => {
  if (!/^(0x)[0-9a-f]{40}$/i.test(address)) {
    return false;
  }
  if (/^(0x)[0-9a-f]{40}$/.test(address) || /^(0x)[0-9A-F]{40}$/.test(address)) {
    return true;
  }
  return isChecksumAddress(address);
};

const isChecksumAddress = address => {
  address = address.replace('0x', '');
  const addressHash = sha3(address.toLowerCase());
  for (let i = 0; i < 40; i++) {
    if ((parseInt(addressHash[i], 16) > 7 && address[i].toUpperCase() !== address[i]) ||
      (parseInt(addressHash[i], 16) <= 7 && address[i].toLowerCase() !== address[i])) {
      return false;
    }
  }
  return true;
};

module.exports = {isAddress};