pragma solidity 0.5.16;

contract Election {
    string public candidate;

    function election () public {
        candidate = "Candidate 1";
    }
}