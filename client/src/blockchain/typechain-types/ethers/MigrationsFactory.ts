/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { Migrations } from "./Migrations";

export class MigrationsFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Migrations> {
    return super.deploy(overrides || {}) as Promise<Migrations>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Migrations {
    return super.attach(address) as Migrations;
  }
  connect(signer: Signer): MigrationsFactory {
    return super.connect(signer) as MigrationsFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Migrations {
    return new Contract(address, _abi, signerOrProvider) as Migrations;
  }
}

const _abi = [
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    constant: true,
    inputs: [],
    name: "lastCompletedMigration",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "completed",
        type: "uint256"
      }
    ],
    name: "setCompleted",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "new_address",
        type: "address"
      }
    ],
    name: "upgrade",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060008054600160a060020a031916331790556101b9806100326000396000f3fe608060405234801561001057600080fd5b506004361061004f5760e060020a60003504630900f01081146100545780638da5cb5b1461007c578063fbdbad3c146100a0578063fdacd576146100ba575b600080fd5b61007a6004803603602081101561006a57600080fd5b5035600160a060020a03166100d7565b005b610084610157565b60408051600160a060020a039092168252519081900360200190f35b6100a8610166565b60408051918252519081900360200190f35b61007a600480360360208110156100d057600080fd5b503561016c565b600054600160a060020a031633141561015457600081905080600160a060020a031663fdacd5766001546040518263ffffffff1660e060020a02815260040180828152602001915050600060405180830381600087803b15801561013a57600080fd5b505af115801561014e573d6000803e3d6000fd5b50505050505b50565b600054600160a060020a031681565b60015481565b600054600160a060020a03163314156101545760015556fea265627a7a723158205b5a5490ef9b548b9823294b9e1481fdcb6b19edef32fbc0a4fe6ef5346af9c764736f6c634300050c0032";