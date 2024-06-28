// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;
contract chai{
    struct Data{
        string name;
        string message;
        address from;
        uint time;
    }
    Data[] data;
    address payable owner;
    constructor(){
        owner=payable (msg.sender);
    }
    function BuyChai(string memory name,string memory message) public payable {
        require(msg.value>0,"Send more eth");
        owner.transfer(msg.value);
        data.push(Data(name,message,msg.sender,block.timestamp));
    } 
    function getData() public view returns(Data[] memory){
        return data;
    }
}