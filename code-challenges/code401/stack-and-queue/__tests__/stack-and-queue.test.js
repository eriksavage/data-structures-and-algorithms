'use strict';

const { Stack, Queue } = require('../stack-and-queue');

describe('Testing Stack Methods:', () => {
  it('should instantiate an empty stack', () => {
    let stack = new Stack;

    expect(stack.top).toBeNull();
    expect(stack).toBeInstanceOf(Stack);
  });

  it('should raise and exception calling pop on an empty stack', () => {
    let stack = new Stack;
    let result = stack.pop();
    expect(result).toEqual('Exception');
  });

  it('should raise and exception calling peek on an empty stack', () => {
    let stack = new Stack;
    let result = stack.peek();
    expect(result).toEqual('Exception');
  });

  it('should push onto an empty stack', () => {
    let stack = new Stack;
    stack.push('a');
    expect(stack.top.value).toEqual('a');
  });

  it('should push multiple items onto an empty stack', () => {
    let stack = new Stack;
    stack.push('a');
    stack.push('b');
    stack.push('c');
    expect(JSON.stringify(stack)).toEqual('{"top":{"value":"c","next":{"value":"b","next":{"value":"a","next":null}}}}');
  });

  it('should pop off the stack', () => {
    let stack = new Stack;
    stack.push('a');
    stack.push('b');
    stack.push('c');
    let fullStack = JSON.stringify(stack);

    let result = stack.pop();
    expect(fullStack).toEqual('{"top":{"value":"c","next":{"value":"b","next":{"value":"a","next":null}}}}');
    expect(JSON.stringify(stack)).toEqual('{"top":{"value":"b","next":{"value":"a","next":null}}}');
    expect(result).toEqual('c');
  });

  it('should pop off the stack and empty a stack', () => {
    let stack = new Stack;
    stack.push('a');
    stack.push('b');
    stack.push('c');
    let fullStack = JSON.stringify(stack);
    stack.pop();
    stack.pop();
    stack.pop();
    expect(fullStack).toEqual('{"top":{"value":"c","next":{"value":"b","next":{"value":"a","next":null}}}}');
    expect(stack.top).toBeNull();
  });
  it('should peek at the next item in the stack', () => {
    let stack = new Stack;
    stack.push('a');
    stack.push('b');
    stack.push('c');
    let result = stack.peek();

    expect(result).toEqual('c');
  });
});

describe('Testing Queue Methods:', () => {
  it('should instantiate an empty queue', () => {
    let queue = new Queue;

    expect(queue.front).toBeNull();
    expect(queue.back).toBeNull();
    expect(queue).toBeInstanceOf(Queue);
  });

  it('should raise and exception calling dequeue on an empty queue', () => {
    let queue = new Queue;
    let result = queue.dequeue();
    expect(result).toEqual('Exception');
  });

  it('should raise and exception calling peek on an empty queue', () => {
    let queue = new Queue;
    let result = queue.peek();
    expect(result).toEqual('Exception');
  });

  it('should enqueue onto an empty queue', () => {
    let queue = new Queue;
    queue.enqueue('a');
    expect(queue.front.value).toEqual('a');
    expect(queue.back.value).toEqual('a');
  });
  it('should enqueue multiple values onto a queue', () => {
    let queue = new Queue;
    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');
    expect(queue.front.value).toEqual('a');
    expect(queue.back.value).toEqual('c');
    expect(JSON.stringify(queue)).toEqual('{"front":{"value":"a","next":{"value":"b","next":{"value":"c","next":null}}},"back":{"value":"c","next":null}}');
  });

  it('should dequeue the node at the front and return the value', () => {
    let queue = new Queue;
    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');
    let fullQueue = JSON.stringify(queue);
    let result = queue.dequeue();

    expect(fullQueue).toEqual('{"front":{"value":"a","next":{"value":"b","next":{"value":"c","next":null}}},"back":{"value":"c","next":null}}');
    expect(result).toEqual('a');
    expect(JSON.stringify(queue)).toEqual('{"front":{"value":"b","next":{"value":"c","next":null}},"back":{"value":"c","next":null}}');
  });

  it('should successfully empty a queue after multiple dequeues', () => {
    let queue = new Queue;
    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');
    let fullQueue = JSON.stringify(queue);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();

    expect(fullQueue).toEqual('{"front":{"value":"a","next":{"value":"b","next":{"value":"c","next":null}}},"back":{"value":"c","next":null}}');
    expect(queue.front).toBeNull();
    expect(queue.back).toBeNull();
    expect(JSON.stringify(queue)).toEqual('{"front":null,"back":null}');
  });
});
