const { expect } = require('chai');
const sinon = require('sinon');
const path = require('path');

const displayMessage = require('../0-console');
const countStudentsSync = require('../2-read_file');
const countStudentsAsync = require('../3-read_file_async');

describe('Node_JS_basic tasks', () => {
  const databasePath = path.join(__dirname, '..', 'database.csv');

  afterEach(() => {
    sinon.restore();
  });

  it('0-console.js prints the provided message', () => {
    const stub = sinon.stub(console, 'log');

    displayMessage('Hello NodeJS!');

    expect(stub.calledOnceWithExactly('Hello NodeJS!')).to.equal(true);
  });

  it('2-read_file.js counts students synchronously', () => {
    const stub = sinon.stub(console, 'log');

    countStudentsSync(databasePath);

    expect(stub.firstCall.calledWithExactly('Number of students: 10')).to.equal(true);
    expect(stub.secondCall.calledWithExactly('Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie')).to.equal(true);
    expect(stub.thirdCall.calledWithExactly('Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy')).to.equal(true);
  });

  it('3-read_file_async.js counts students asynchronously', () => {
    const stub = sinon.stub(console, 'log');

    return countStudentsAsync(databasePath).then(() => {
      expect(stub.firstCall.calledWithExactly('Number of students: 10')).to.equal(true);
      expect(stub.secondCall.calledWithExactly('Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie')).to.equal(true);
      expect(stub.thirdCall.calledWithExactly('Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy')).to.equal(true);
    });
  });

  it('full_server utils groups students by field', () => {
    const readDatabase = require('../full_server/utils').default;

    return readDatabase(databasePath).then((studentsByField) => {
      expect(studentsByField).to.deep.equal({
        CS: ['Johann', 'Arielle', 'Jonathan', 'Emmanuel', 'Guillaume', 'Katie'],
        SWE: ['Guillaume', 'Joseph', 'Paul', 'Tommy'],
      });
    });
  });
});
