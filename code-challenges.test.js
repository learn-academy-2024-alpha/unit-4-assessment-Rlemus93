// UNIT 4 ASSESSMENT: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// Template
// describe("functionName", () => {
//     it("what does the function do?", () => {
//         expect(functionName()).toEqual(output)
//     })
// })

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.

describe("fibonacciSequence", () => {
  it("takes in a number and returns array containing the fibonacci sequence. array length is determined by the arg number", () => {
    const fibonacciLength1 = 6
    const fibonacciLength2 = 10
    expect(fibonacciSequence(fibonacciLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibonacciSequence(fibonacciLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
}) 
// ReferenceError: fibonacciSequence is not defined




// b) Create the function that makes the test pass.

const fibonacciSequence = (length) => {
    if (length <= 2) {
      return('Length must be greater than 2');
    }
  
    const sequence = [1, 1];
  
    for (let i = 2; i < length; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
  
    return sequence;
  };

// Pseudo code: 
//created a function. takes in paramenter called length.
//started conditional where if length is less then or = to 0 to return a string. since fibonacci sequence typically requires a length greater than 2.
//created variable sequence that is = [1,1] the starting array.
//within the loop, starting from i = 2, each fibonacci number is calculated by adding the two preceding numbers in the sequence (sequence[i - 1] and sequence[i - 2]), this is looking at the index of the array. and what ever number is at that index add it to the other. and the result is pushed into the sequence array. This sequence generation continues until the specified length is reached.



// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.


describe("endTally", () => {
  it("takes in an object that contains up votes and down votes and returns the end tally.", () => {
    const votes1 = { upVotes: 13, downVotes: 2 }
    // Expected output: 11
    const votes2 = { upVotes: 2, downVotes: 33 }
    // Expected output: -31
    expect(endTally(votes1)).toEqual(11)
    expect(endTally(votes2)).toEqual(-31)
  })
}) 

//ReferenceError: endTally is not defined

// b) Create the function that makes the test pass.

const endTally = (votes) => {
  return votes.upVotes - votes.downVotes
}


// Pseudo code:
//created funcation. takes in a parameter of votes.
//using dot notation to access the properties upVotes and downVotes of the votes object.
//subtract the number of downvotes from the number of upvotes. and reurn that answer
