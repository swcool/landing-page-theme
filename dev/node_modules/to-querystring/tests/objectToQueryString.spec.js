/* global expect*/

import { expect } from 'chai';

import toQueryString from '../src';

describe('object-to-querystring tests', () => {
  it('Convert simple object to query string', () => {
    const queryString = toQueryString({
      'test': 'testValue'
    });

    expect(queryString).to.equal('test=testValue');
  });

  it('Convert complex object to query string', () => {
    const queryString = toQueryString({
      'test': 'testValue',
      'test2': ['a', 'b', 'c'],
      'test3': 'testValue2'
    });

    expect(queryString).to.equal('test=testValue&test2=a&test2=b&test2=c&test3=testValue2');
  });

  it('Convert complex 1 layer deep object to query string', () => {
    const queryString = toQueryString({
      'test': {'deep': 'testValueDeep'},
      'test2': ['a', 'b', 'c'],
      'test3': 'testValue2'
    });

    expect(queryString).to.equal('test[deep]=testValueDeep&test2=a&test2=b&test2=c&test3=testValue2');
  });

  it('Convert complex 2 layer deep object to query string', () => {
    const queryString = toQueryString({
      'test': {'deep': {'deep2': 'testValueDeep'}},
      'test2': ['a', 'b', 'c'],
      'test3': 'testValue2'
    });

    expect(queryString).to.equal('test[deep][deep2]=testValueDeep&test2=a&test2=b&test2=c&test3=testValue2');
  });

  it('Convert complex 2 layer deep object and multiple keys to query string', () => {
    const queryString = toQueryString({
      'test': {'deep': {'deep3': 'testValueDeep'}, 'deep2': 'testd'},
      'test2': ['a', 'b', 'c'],
      'test3': 'testValue2'
    });

    expect(queryString).to.equal(
      'test[deep][deep3]=testValueDeep&test[deep2]=testd&test2=a&test2=b&test2=c&test3=testValue2'
    );
  });

  it('Convert complex 2 layer deep object, multiple keys and array to query string', () => {
    const queryString = toQueryString({
      'test': {'deep': {'deep3': 'testValueDeep', 'test2': ['a', 'b', 'c']}, 'deep2': 'testd'},
      'test2': ['a', 'b', 'c'],
      'test3': 'testValue2'
    });

    expect(queryString).to.equal(
      'test[deep][deep3]=testValueDeep&test[deep][test2]=a&test[deep][test2]=b&test[deep][test2]=c&test[deep2]=testd&test2=a&test2=b&test2=c&test3=testValue2'// eslint-disable-line
    );
  });

  it('Convert complex 1 layer deep object in an array to query string', () => {
    const queryString = toQueryString({
      'test': {'deep': {'deep3': 'testValueDeep', 'test2': ['a', 'b', 'c']}, 'deep2': 'testd'},
      'test2': [{'deep': 'testDeepInArray', 'deep2': 'testDeepInArray2'}, 'b', 'c'],
      'test3': 'testValue2'
    });

    expect(queryString).to.equal(
      'test[deep][deep3]=testValueDeep&test[deep][test2]=a&test[deep][test2]=b&test[deep][test2]=c&test[deep2]=testd&test2[deep]=testDeepInArray&test2[deep2]=testDeepInArray2&test2=b&test2=c&test3=testValue2'// eslint-disable-line
    );
  });

  it('Convert array to query string', () => {
    const queryString = toQueryString(['a', 'b']);

    expect(queryString).to.equal('0=a&1=b');
  });
});
