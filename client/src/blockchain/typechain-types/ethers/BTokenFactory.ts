/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { BToken } from "./BToken";

export class BTokenFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<BToken> {
    return super.deploy(overrides || {}) as Promise<BToken>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BToken {
    return super.attach(address) as BToken;
  }
  connect(signer: Signer): BTokenFactory {
    return super.connect(signer) as BTokenFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): BToken {
    return new Contract(address, _abi, signerOrProvider) as BToken;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "dst",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amt",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "dst",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amt",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    constant: true,
    inputs: [],
    name: "BONE",
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
    name: "BPOW_PRECISION",
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
    name: "EXIT_FEE",
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
    name: "INIT_POOL_SUPPLY",
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
    name: "MAX_BOUND_TOKENS",
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
    name: "MAX_BPOW_BASE",
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
    name: "MAX_FEE",
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
    name: "MAX_IN_RATIO",
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
    name: "MAX_OUT_RATIO",
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
    name: "MAX_TOTAL_WEIGHT",
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
    name: "MAX_WEIGHT",
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
    name: "MIN_BALANCE",
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
    name: "MIN_BOUND_TOKENS",
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
    name: "MIN_BPOW_BASE",
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
    name: "MIN_FEE",
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
    name: "MIN_WEIGHT",
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
    name: "getColor",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "src",
        type: "address"
      },
      {
        internalType: "address",
        name: "dst",
        type: "address"
      }
    ],
    name: "allowance",
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
    inputs: [
      {
        internalType: "address",
        name: "whom",
        type: "address"
      }
    ],
    name: "balanceOf",
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
    name: "totalSupply",
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
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "dst",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amt",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "dst",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amt",
        type: "uint256"
      }
    ],
    name: "increaseApproval",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "dst",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amt",
        type: "uint256"
      }
    ],
    name: "decreaseApproval",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "dst",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amt",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "src",
        type: "address"
      },
      {
        internalType: "address",
        name: "dst",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amt",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x60c0604052601360808190527f42616c616e63657220506f6f6c20546f6b656e0000000000000000000000000060a090815261003e91600391906100a3565b506040805180820190915260038082527f42505400000000000000000000000000000000000000000000000000000000006020909201918252610083916004916100a3565b506005805460ff1916601217905534801561009d57600080fd5b5061013e565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100e457805160ff1916838001178555610111565b82800160010185558215610111579182015b828111156101115782518255916020019190600101906100f6565b5061011d929150610121565b5090565b61013b91905b8082111561011d5760008155600101610127565b90565b610bd88061014d6000396000f3fe608060405234801561001057600080fd5b50600436106101a1576000357c010000000000000000000000000000000000000000000000000000000090048063992e2a92116100f6578063bc694ea2116100a4578063bc694ea2146103b7578063c36596a61461028d578063c6580d12146103bf578063d73dd623146103c7578063dd62ed3e146103f3578063e4a28a5214610263578063ec09302114610421576101a1565b8063992e2a921461035b5780639a86139b14610363578063a9059cbb1461036b578063b0e0d13614610397578063b7b800a41461039f578063ba019dab146103a7578063bc063e1a146103af576101a1565b8063313ce56711610153578063313ce567146102cb57806366188463146102e957806370a082311461031557806376c7a3c71461033b578063867378c5146103435780639381cd2b1461034b57806395d89b4114610353576101a1565b806306fdde03146101a6578063095ea7b31461022357806309a3bbe41461026357806318160ddd1461027d578063189d00ca14610285578063218b53821461028d57806323b872dd14610295575b600080fd5b6101ae610429565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101e85781810151838201526020016101d0565b50505050905090810190601f1680156102155780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61024f6004803603604081101561023957600080fd5b50600160a060020a0381351690602001356104bf565b604080519115158252519081900360200190f35b61026b610513565b60408051918252519081900360200190f35b61026b610520565b61026b610526565b61026b61053a565b61024f600480360360608110156102ab57600080fd5b50600160a060020a03813581169160208101359091169060400135610546565b6102d36106ab565b6040805160ff9092168252519081900360200190f35b61024f600480360360408110156102ff57600080fd5b50600160a060020a0381351690602001356106b4565b61026b6004803603602081101561032b57600080fd5b5035600160a060020a031661078c565b61026b6107a7565b61026b6107b9565b61026b6107cd565b6101ae6107da565b61026b61083b565b61026b610847565b61024f6004803603604081101561038157600080fd5b50600160a060020a03813516906020013561086b565b61026b610881565b61026b610886565b61026b61088b565b61026b610890565b61026b6108a0565b61026b6108ac565b61024f600480360360408110156103dd57600080fd5b50600160a060020a0381351690602001356108b1565b61026b6004803603604081101561040957600080fd5b50600160a060020a0381358116916020013516610932565b61026b61095d565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104b55780601f1061048a576101008083540402835291602001916104b5565b820191906000526020600020905b81548152906001019060200180831161049857829003601f168201915b5050505050905090565b336000818152600160209081526040808320600160a060020a03871680855290835281842086905581518681529151939490939092600080516020610b84833981519152928290030190a350600192915050565b6802b5e3af16b188000081565b60025490565b6402540be400670de0b6b3a76400005b0481565b670de0b6b3a764000081565b600033600160a060020a03851614806105825750600160a060020a03841660009081526001602090815260408083203384529091529020548211155b6105d6576040805160e560020a62461bcd02815260206004820152601560248201527f4552525f42544f4b454e5f4241445f43414c4c45520000000000000000000000604482015290519081900360640190fd5b6105e184848461096d565b33600160a060020a0385161480159061061f5750600160a060020a038416600090815260016020908152604080832033845290915290205460001914155b156106a157600160a060020a03841660009081526001602090815260408083203384529091529020546106529083610a89565b600160a060020a0385811660009081526001602090815260408083203380855290835292819020859055805194855251928716939192600080516020610b848339815191529281900390910190a35b5060019392505050565b60055460ff1690565b336000908152600160209081526040808320600160a060020a03861684529091528120548083111561070957336000908152600160209081526040808320600160a060020a0388168452909152812055610738565b6107138184610a89565b336000908152600160209081526040808320600160a060020a03891684529091529020555b336000818152600160209081526040808320600160a060020a038916808552908352928190205481519081529051929392600080516020610b84833981519152929181900390910190a35060019392505050565b600160a060020a031660009081526020819052604090205490565b620f4240670de0b6b3a7640000610536565b64e8d4a51000670de0b6b3a7640000610536565b68056bc75e2d6310000081565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104b55780601f1061048a576101008083540402835291602001916104b5565b6704a03ce68d21555681565b7f42524f4e5a45000000000000000000000000000000000000000000000000000090565b600061087833848461096d565b50600192915050565b600881565b600281565b600181565b600a670de0b6b3a7640000610536565b671bc16d674ec7ffff81565b600081565b336000908152600160209081526040808320600160a060020a03861684529091528120546108df9083610afa565b336000818152600160209081526040808320600160a060020a038916808552908352928190208590558051948552519193600080516020610b84833981519152929081900390910190a350600192915050565b600160a060020a03918216600090815260016020908152604080832093909416825291909152205490565b6002670de0b6b3a7640000610536565b600160a060020a0383166000908152602081905260409020548111156109dd576040805160e560020a62461bcd02815260206004820152601460248201527f4552525f494e53554646494349454e545f42414c000000000000000000000000604482015290519081900360640190fd5b600160a060020a038316600090815260208190526040902054610a009082610a89565b600160a060020a038085166000908152602081905260408082209390935590841681522054610a2f9082610afa565b600160a060020a038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b6000806000610a988585610b5e565b915091508015610af2576040805160e560020a62461bcd02815260206004820152601160248201527f4552525f5355425f554e444552464c4f57000000000000000000000000000000604482015290519081900360640190fd5b509392505050565b600082820183811015610b57576040805160e560020a62461bcd02815260206004820152601060248201527f4552525f4144445f4f564552464c4f5700000000000000000000000000000000604482015290519081900360640190fd5b9392505050565b600080828410610b745750508082036000610b7c565b505081810360015b925092905056fe8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925a265627a7a7231582025330e5b795be7f4d56462d210d8c3010d91cf4802b636bde798180c3bbbdbef64736f6c634300050c0032";
