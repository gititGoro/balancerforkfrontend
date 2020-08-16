/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { TbPoolJoinExitNoFee } from "./TbPoolJoinExitNoFee";

export class TbPoolJoinExitNoFeeFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<TbPoolJoinExitNoFee> {
    return super.deploy(overrides || {}) as Promise<TbPoolJoinExitNoFee>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TbPoolJoinExitNoFee {
    return super.attach(address) as TbPoolJoinExitNoFee;
  }
  connect(signer: Signer): TbPoolJoinExitNoFeeFactory {
    return super.connect(signer) as TbPoolJoinExitNoFeeFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TbPoolJoinExitNoFee {
    return new Contract(address, _abi, signerOrProvider) as TbPoolJoinExitNoFee;
  }
}

const _abi = [
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
    name: "echidna_no_bug_found",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
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
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "poolAmountOut",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "poolAmountIn",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "poolTotal",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_records_t_balance",
        type: "uint256"
      }
    ],
    name: "joinAndExitNoFeePool",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x60806040526000805460ff1916600117905534801561001d57600080fd5b506106f88061002d6000396000f3fe608060405234801561001057600080fd5b506004361061012e576000357c010000000000000000000000000000000000000000000000000000000090048063b0e0d136116100ca578063c36596a61161008e578063c36596a614610171578063c6580d12146101c9578063e15c7d42146101d1578063e4a28a5214610133578063ec093021146102025761012e565b8063b0e0d136146101a1578063b7b800a4146101a9578063ba019dab146101b1578063bc063e1a146101b9578063bc694ea2146101c15761012e565b806309a3bbe4146101335780631819aa421461014d578063189d00ca14610169578063218b53821461017157806376c7a3c714610179578063867378c5146101815780639381cd2b14610189578063992e2a92146101915780639a86139b14610199575b600080fd5b61013b61020a565b60408051918252519081900360200190f35b610155610217565b604080519115158252519081900360200190f35b61013b610220565b61013b610234565b61013b610240565b61013b610252565b61013b610266565b61013b610273565b61013b61027f565b61013b6102a3565b61013b6102a8565b61013b6102ad565b61013b6102b2565b61013b6102c2565b61013b6102ce565b610200600480360360808110156101e757600080fd5b50803590602081013590604081013590606001356102d3565b005b61013b6103aa565b6802b5e3af16b188000081565b60005460ff1681565b6402540be400670de0b6b3a76400005b0481565b670de0b6b3a764000081565b620f4240670de0b6b3a7640000610230565b64e8d4a51000670de0b6b3a7640000610230565b68056bc75e2d6310000081565b6704a03ce68d21555681565b7f42524f4e5a45000000000000000000000000000000000000000000000000000090565b600881565b600281565b600181565b600a670de0b6b3a7640000610230565b671bc16d674ec7ffff81565b600081565b60006102e08584846103ba565b905068056bc75e2d631000008311156102f857600080fd5b670de0b6b3a764000083101561030d57600080fd5b678ac7230489e8000082111561032257600080fd5b620f424082101561033257600080fd5b61033c8386610436565b92506103488282610436565b91506000811161035757600080fd5b8383101561036457600080fd5b60006103718585856103ba565b90508083101561038057600080fd5b84861161038c57600080fd5b81811461039857600080fd5b50506000805460ff1916905550505050565b6002670de0b6b3a7640000610230565b6000806103c7858561049a565b90508061041e576040805160e560020a62461bcd02815260206004820152600f60248201527f4552525f4d4154485f415050524f580000000000000000000000000000000000604482015290519081900360640190fd5b82600061042b83836105e1565b979650505050505050565b600082820183811015610493576040805160e560020a62461bcd02815260206004820152601060248201527f4552525f4144445f4f564552464c4f5700000000000000000000000000000000604482015290519081900360640190fd5b9392505050565b6000816104f1576040805160e560020a62461bcd02815260206004820152600c60248201527f4552525f4449565f5a45524f0000000000000000000000000000000000000000604482015290519081900360640190fd5b670de0b6b3a764000083028315806105195750670de0b6b3a764000084828161051657fe5b04145b61056d576040805160e560020a62461bcd02815260206004820152601060248201527f4552525f4449565f494e5445524e414c00000000000000000000000000000000604482015290519081900360640190fd5b600283048101818110156105cb576040805160e560020a62461bcd02815260206004820152601060248201527f4552525f4449565f494e5445524e414c00000000000000000000000000000000604482015290519081900360640190fd5b60008482816105d657fe5b049695505050505050565b60008282028315806105fb5750828482816105f857fe5b04145b61064f576040805160e560020a62461bcd02815260206004820152601060248201527f4552525f4d554c5f4f564552464c4f5700000000000000000000000000000000604482015290519081900360640190fd5b6706f05b59d3b200008101818110156106b2576040805160e560020a62461bcd02815260206004820152601060248201527f4552525f4d554c5f4f564552464c4f5700000000000000000000000000000000604482015290519081900360640190fd5b6000670de0b6b3a7640000826105d656fea265627a7a72315820f8dac95796d43bce1bda606e703e65458239e22a2da33cc21ebb2d74c9e4b96864736f6c634300050c0032";