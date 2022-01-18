'use strict';

const LinkedList = require('../linked-list-insertations');

describe('Testing Linked List and all methods', () => {
  it('should create a new linked list', () => {
    let list = new LinkedList;
    expect(list.head).toEqual(null);
  });
  it('should properly insert a node', () => {
    let list = new LinkedList;
    list.insert('a');
    expect(JSON.stringify(list)).toEqual('{"head":{"value":"a","next":null}}');
  });
  it('should point the head to first node', () => {
    let list = new LinkedList;
    list.insert('a');
    expect(list.head.value).toEqual('a');
  });
});
it('should properly insert a multiple nodes', () => {
  let list = new LinkedList;
  list.insert('c');
  list.insert('b');
  list.insert('a');
  expect(JSON.stringify(list)).toEqual('{"head":{"value":"a","next":{"value":"b","next":{"value":"c","next":null}}}}');
});
it('should properly return true when finding a value that exists in the list', () => {
  let list = new LinkedList;
  list.insert('c');
  list.insert('b');
  list.insert('a');
  expect(list.includes('b')).toBeTruthy();
});
it('should properly return false when a value does not exist in the list', () => {
  let list = new LinkedList;
  list.insert('c');
  list.insert('b');
  list.insert('a');
  expect(list.includes('d')).toBeFalsy();
});

it('should properly return a collection of all the values that exist in the linked list', () => {
  let list = new LinkedList;
  list.insert('c');
  list.insert('b');
  list.insert('a');
  expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> NULL');
});

//adds tests for to append, insertBefore and insertAfter BELOW

it('Can successfully add a node to the end of the linked list', () => {
  let list = new LinkedList;
  list.insert('c');
  list.insert('b');
  list.insert('a');
  list.append('d');
  expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> { d } -> NULL');
});

it('Can successfully add multiple nodes to the end of a linked list', () => {
  let list = new LinkedList;
  list.insert('c');
  list.insert('b');
  list.insert('a');
  list.append('d');
  list.append('e');
  list.append('f');

  expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> { d } -> { e } -> { f } -> NULL');
});

it('Can successfully insert a node before a node located in the middle of a linked list', () => {
  let list = new LinkedList;
  list.append('a');
  list.append('b');
  list.insertBefore('b', 'z');


  expect(list.toString()).toEqual('{ a } -> { z } -> { b } -> NULL');
});

it('Can successfully insert a node before the first node of a linked list', () => {
  let list = new LinkedList;
  list.append('a');
  list.append('b');
  list.insertBefore('a', 'z');


  expect(list.toString()).toEqual('{ z } -> { a } -> { b } -> NULL');
});

it('Can successfully insert after a node in the middle of the linked list', () => {
  let list = new LinkedList;
  list.append('a');
  list.append('b');
  list.insertAfter('a', 'z');


  expect(list.toString()).toEqual('{ a } -> { z } -> { b } -> NULL');
});

it('Can successfully insert a node after the last node of the linked list', () => {
  let list = new LinkedList;
  list.append('a');
  list.append('b');
  list.insertAfter('b', 'z');


  expect(list.toString()).toEqual('{ a } -> { b } -> { z } -> NULL');
});




