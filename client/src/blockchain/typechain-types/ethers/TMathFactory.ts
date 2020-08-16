/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { TMath } from "./TMath";

export class TMathFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<TMath> {
    return super.deploy(overrides || {}) as Promise<TMath>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TMath {
    return super.attach(address) as TMath;
  }
  connect(signer: Signer): TMathFactory {
    return super.connect(signer) as TMathFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): TMath {
    return new Contract(address, _abi, signerOrProvider) as TMath;
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenBalanceIn",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "tokenWeightIn",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "tokenBalanceOut",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "tokenWeightOut",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "tokenAmountOut",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "swapFee",
        type: "uint256"
      }
    ],
    name: "calcInGivenOut",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenAmountIn",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "tokenBalanceIn",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "tokenWeightIn",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "tokenBalanceOut",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "tokenWeightOut",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "tokenAmountIn",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "swapFee",
        type: "uint256"
      }
    ],
    name: "calcOutGivenIn",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenAmountOut",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "tokenBalanceOut",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "tokenWeightOut",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "poolSupply",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "totalWeight",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "tokenAmountOut",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "swapFee",
        type: "uint256"
      }
    ],
    name: "calcPoolInGivenSingleOut",
    outputs: [
      {
        internalType: "uint256",
        name: "poolAmountIn",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "tokenBalanceIn",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "tokenWeightIn",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "poolSupply",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "totalWeight",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "tokenAmountIn",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "swapFee",
        type: "uint256"
      }
    ],
    name: "calcPoolOutGivenSingleIn",
    outputs: [
      {
        internalType: "uint256",
        name: "poolAmountOut",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "tokenBalanceIn",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "tokenWeightIn",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "poolSupply",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "totalWeight",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "poolAmountOut",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "swapFee",
        type: "uint256"
      }
    ],
    name: "calcSingleInGivenPoolOut",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenAmountIn",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "tokenBalanceOut",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "tokenWeightOut",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "poolSupply",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "totalWeight",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "poolAmountIn",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "swapFee",
        type: "uint256"
      }
    ],
    name: "calcSingleOutGivenPoolIn",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenAmountOut",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "tokenBalanceIn",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "tokenWeightIn",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "tokenBalanceOut",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "tokenWeightOut",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "swapFee",
        type: "uint256"
      }
    ],
    name: "calcSpotPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "spotPrice",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "pure",
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
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256"
      }
    ],
    name: "calc_btoi",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256"
      }
    ],
    name: "calc_bfloor",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256"
      }
    ],
    name: "calc_badd",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256"
      }
    ],
    name: "calc_bsub",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256"
      }
    ],
    name: "calc_bsubSign",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256"
      }
    ],
    name: "calc_bmul",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256"
      }
    ],
    name: "calc_bdiv",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "n",
        type: "uint256"
      }
    ],
    name: "calc_bpowi",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "base",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "exp",
        type: "uint256"
      }
    ],
    name: "calc_bpow",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "base",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "exp",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "precision",
        type: "uint256"
      }
    ],
    name: "calc_bpowApprox",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506110df806100206000396000f3fe608060405234801561001057600080fd5b50600436106101e3576000357c010000000000000000000000000000000000000000000000000000000090048063b0e0d13611610117578063c36596a6116100ba578063c36596a614610250578063c6580d12146104a9578063c6b3199d146104b1578063cd094b14146104ce578063e4a28a52146101e8578063ec093021146104f1578063f5f5b148146104f9578063f760324b1461051c578063f8d6aed41461053f576101e3565b8063b0e0d136146103ed578063b58d3e70146103f5578063b65fcf4014610412578063b7b800a41461044e578063ba019dab14610456578063ba9530a61461045e578063bc063e1a14610499578063bc694ea2146104a1576101e3565b806382f652ad1161018a57806382f652ad146102c45780638656b653146102ff578063867378c51461033a578063872289ab1461034257806389298012146103655780639381cd2b146103a0578063992e2a92146103a85780639a86139b146103b0578063a221ee49146103b8576101e3565b806309a3bbe4146101e8578063189d00ca146102025780631bcaf56f1461020a5780631fdee4071461022d578063218b53821461025057806331124372146102585780635c1bbaf71461028157806376c7a3c7146102bc575b600080fd5b6101f061057a565b60408051918252519081900360200190f35b6101f0610587565b6101f06004803603604081101561022057600080fd5b508035906020013561059b565b6101f06004803603604081101561024357600080fd5b50803590602001356105b0565b6101f06105bc565b6101f06004803603606081101561026e57600080fd5b50803590602081013590604001356105c8565b6101f0600480360360c081101561029757600080fd5b5080359060208101359060408101359060608101359060808101359060a001356105dd565b6101f0610695565b6101f0600480360360c08110156102da57600080fd5b5080359060208101359060408101359060608101359060808101359060a001356106a7565b6101f0600480360360c081101561031557600080fd5b5080359060208101359060408101359060608101359060808101359060a00135610766565b6101f0610807565b6101f06004803603604081101561035857600080fd5b508035906020013561081b565b6101f0600480360360c081101561037b57600080fd5b5080359060208101359060408101359060608101359060808101359060a00135610827565b6101f06108d7565b6101f06108e4565b6101f06108f0565b6101f0600480360360a08110156103ce57600080fd5b5080359060208101359060408101359060608101359060800135610914565b6101f0610979565b6101f06004803603602081101561040b57600080fd5b503561097e565b6104356004803603604081101561042857600080fd5b5080359060200135610989565b6040805192835290151560208301528051918290030190f35b6101f06109a2565b6101f06109a7565b6101f0600480360360c081101561047457600080fd5b5080359060208101359060408101359060608101359060808101359060a001356109ac565b6101f0610a2d565b6101f0610a3d565b6101f0610a49565b6101f0600480360360208110156104c757600080fd5b5035610a4e565b6101f0600480360360408110156104e457600080fd5b5080359060200135610a59565b6101f0610a65565b6101f06004803603604081101561050f57600080fd5b5080359060200135610a75565b6101f06004803603604081101561053257600080fd5b5080359060200135610a81565b6101f0600480360360c081101561055557600080fd5b5080359060208101359060408101359060608101359060808101359060a00135610a8d565b6802b5e3af16b188000081565b6402540be400670de0b6b3a76400005b0481565b60006105a78383610b10565b90505b92915050565b60006105a78383610b81565b670de0b6b3a764000081565b60006105d5848484610cc8565b949350505050565b6000806105ea8786610b81565b905060006105f88786610da6565b905060006106068289610b81565b9050600061061c670de0b6b3a764000085610b81565b9050600061062a8383610e03565b90506000610638828e610f26565b90506000610646828f610b10565b9050600061066561065f670de0b6b3a76400008a610b10565b8b610f26565b90506106828261067d670de0b6b3a764000084610b10565b610b81565b9f9e505050505050505050505050505050565b620f4240670de0b6b3a7640000610597565b6000806106b48786610b81565b905060006106ca670de0b6b3a764000083610b10565b905060006106d88286610f26565b905060006106f28761067d670de0b6b3a764000085610b10565b905060006107008c83610b10565b9050600061070e828e610b81565b9050600061071c8288610e03565b9050600061072a828e610f26565b905060006107388e83610b10565b90506107518161067d670de0b6b3a76400006000610b10565b99505050505050505050509695505050505050565b6000806107738786610b81565b9050600061079261078c670de0b6b3a764000084610b10565b85610f26565b905060006107b1866107ac670de0b6b3a764000085610b10565b610f26565b905060006107bf8b83610da6565b905060006107cd828d610b81565b905060006107db8287610e03565b905060006107e9828d610f26565b90506107f5818d610b10565b9e9d5050505050505050505050505050565b64e8d4a51000670de0b6b3a7640000610597565b60006105a78383610da6565b6000806108348786610b81565b9050600061084f856107ac670de0b6b3a76400006000610b10565b9050600061085d8883610b10565b9050600061086b828a610b81565b9050600061088a82610885670de0b6b3a764000088610b81565b610e03565b90506000610898828e610f26565b905060006108a68e83610b10565b905060006108bf61065f670de0b6b3a76400008a610b10565b9050610682826107ac670de0b6b3a764000084610b10565b68056bc75e2d6310000081565b6704a03ce68d21555681565b7f42524f4e5a45000000000000000000000000000000000000000000000000000090565b6000806109218787610b81565b9050600061092f8686610b81565b9050600061093d8383610b81565b9050600061095f670de0b6b3a764000061067d670de0b6b3a764000089610b10565b905061096b8282610f26565b9a9950505050505050505050565b600881565b60006105aa82611008565b6000806109968484611023565b915091505b9250929050565b600281565b600181565b6000806109b98786610b81565b905060006109cf670de0b6b3a764000085610b10565b90506109db8582610f26565b905060006109ed8a61067d8c85610da6565b905060006109fb8285610e03565b90506000610a11670de0b6b3a764000083610b10565b9050610a1d8a82610f26565b9c9b505050505050505050505050565b600a670de0b6b3a7640000610597565b671bc16d674ec7ffff81565b600081565b60006105aa82611045565b60006105a78383610f26565b6002670de0b6b3a7640000610597565b60006105a78383610e03565b60006105a78383611053565b600080610a9a8588610b81565b90506000610aa88786610b10565b90506000610ab68883610b81565b90506000610ac48285610e03565b9050610ad881670de0b6b3a7640000610b10565b9050610aec670de0b6b3a764000087610b10565b9450610b01610afb8c83610f26565b86610b81565b9b9a5050505050505050505050565b6000806000610b1f8585611023565b915091508015610b79576040805160e560020a62461bcd02815260206004820152601160248201527f4552525f5355425f554e444552464c4f57000000000000000000000000000000604482015290519081900360640190fd5b509392505050565b600081610bd8576040805160e560020a62461bcd02815260206004820152600c60248201527f4552525f4449565f5a45524f0000000000000000000000000000000000000000604482015290519081900360640190fd5b670de0b6b3a76400008302831580610c005750670de0b6b3a7640000848281610bfd57fe5b04145b610c54576040805160e560020a62461bcd02815260206004820152601060248201527f4552525f4449565f494e5445524e414c00000000000000000000000000000000604482015290519081900360640190fd5b60028304810181811015610cb2576040805160e560020a62461bcd02815260206004820152601060248201527f4552525f4449565f494e5445524e414c00000000000000000000000000000000604482015290519081900360640190fd5b6000848281610cbd57fe5b049695505050505050565b6000828180610cdf87670de0b6b3a7640000611023565b9092509050670de0b6b3a764000080600060015b888410610d97576000670de0b6b3a764000082029050600080610d278a610d2285670de0b6b3a7640000610b10565b611023565b91509150610d39876107ac848c610f26565b9650610d458784610b81565b965086610d5457505050610d97565b8715610d5e579315935b8015610d68579315935b8415610d7f57610d788688610b10565b9550610d8c565b610d898688610da6565b95505b505050600101610cf3565b50909998505050505050505050565b6000828201838110156105a7576040805160e560020a62461bcd02815260206004820152601060248201527f4552525f4144445f4f564552464c4f5700000000000000000000000000000000604482015290519081900360640190fd5b60006001831015610e5e576040805160e560020a62461bcd02815260206004820152601560248201527f4552525f42504f575f424153455f544f4f5f4c4f570000000000000000000000604482015290519081900360640190fd5b671bc16d674ec7ffff831115610ebe576040805160e560020a62461bcd02815260206004820152601660248201527f4552525f42504f575f424153455f544f4f5f4849474800000000000000000000604482015290519081900360640190fd5b6000610ec983611008565b90506000610ed78483610b10565b90506000610eed86610ee885611045565b611053565b905081610efe5792506105aa915050565b6000610f0f87846305f5e100610cc8565b9050610f1b8282610f26565b979650505050505050565b6000828202831580610f40575082848281610f3d57fe5b04145b610f94576040805160e560020a62461bcd02815260206004820152601060248201527f4552525f4d554c5f4f564552464c4f5700000000000000000000000000000000604482015290519081900360640190fd5b6706f05b59d3b20000810181811015610ff7576040805160e560020a62461bcd02815260206004820152601060248201527f4552525f4d554c5f4f564552464c4f5700000000000000000000000000000000604482015290519081900360640190fd5b6000670de0b6b3a764000082610cbd565b6000670de0b6b3a764000061101c83611045565b0292915050565b600080828410611039575050808203600061099b565b5050818103600161099b565b670de0b6b3a7640000900490565b6000806002830661106c57670de0b6b3a764000061106e565b835b90506002830492505b82156105a7576110878485610f26565b9350600283061561109f5761109c8185610f26565b90505b60028304925061107756fea265627a7a72315820c6e11e8e1d0d231bcaf96d0bb657e5040d2580ec6fde47660e1b463cc5a8b2ed64736f6c634300050c0032";
