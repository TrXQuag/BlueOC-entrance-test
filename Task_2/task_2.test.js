import { deepStrictEqual, strictEqual } from 'assert';
import { sumTwoLargest } from './task_2.js';

function runTests() {
  const tests = [
    {
      name: 'Empty array',
      input: [],
      expect: 'Expect an integer array of at least two integers!'
    },
    {
      name: 'exactly 2 int',
      input: [36, 62] ,
      expect: 98
    },
    {
      name: 'equal 2 largest',
      input: [36, 36, 1],
      expect: 72
    },
    {
      name: 'example case',
      input: [1, 4, 2, 3, 5],
      expect: 9
    }
  ];  

  tests.forEach(({ name, input, expect, expectError }) => {
    try {
      const result = sumTwoLargest(input);
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
        const msg = sumTwoLargest(input);
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