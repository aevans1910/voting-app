pragma solidity 0.4.2;

// declare the contract
contract Election {
    // Read/write candidate
    // declare oublic (readable) state variable, stored as string
    string public candidate;

    // Constructor
    function Election () public {
    // store the value of a candidate
        candidate = "Candidate 1";
    }
}