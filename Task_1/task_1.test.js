import { deepStrictEqual, strictEqual } from 'assert';
import { getMostFrequentStringLengths } from './task_1.js';

function runTests() {
  const tests = [
    {
      name: 'Empty array',
      input: [],
      expect: []
    },
    {
      name: 'Single modal',
      input: ['a','bb','ccc','dd'],
      expect: ['bb','dd']
    },
    {
      name: '2-way tie',
      input: ['a','bb','ccc','d','ee'],
      expect: ['a', 'bb', 'd', 'ee']
    },
    {
      name: 'example case',
      input: ['a', 'ab', 'abc', 'cd', 'def', 'gh'],
      expect: [ 'ab', 'cd', 'gh' ]
    }
  ];

  tests.forEach(({ name, input, expect, expectError }) => {
    try {
      const result = getMostFrequentStringLengths(input);
      if (expectError) {
        console.error(`Failed: ${name}: expected error "${expectError}", but got result`, result);
        process.exit(1);
      }
      // compare arrays
      deepStrictEqual(result, expect, `${name}: expected ${JSON.stringify(expect)}, got ${JSON.stringify(result)}`);
      console.log(`Passed: ${name}`);
    } catch (err) {
      if (expectError) {
        // assert error message
        strictEqual(err, undefined, 'exception should not be thrown');
        const msg = getMostFrequentStringLengths(input);
        strictEqual(msg, expectError, `${name}: expected "${expectError}", got "${msg}"`);
        console.log(`Passed: ${name} (returned error)`);
      } else {
        console.error(`Failed: ${name}:`, err);
        process.exit(1);
      }
    }
  });

  console.log('\nAll tests passed!');
}

runTests();
