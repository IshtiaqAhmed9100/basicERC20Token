// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract BasicERC20Token is ERC20 , Ownable{
    constructor() Ownable(msg.sender) ERC20("BasicToken", "BT") {}

    function mint(address _add, uint256 _value) public {
        _mint(_add, _value);
    }
}
