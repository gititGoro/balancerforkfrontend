/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface TbPoolJoinExitInterface extends ethers.utils.Interface {
  functions: {
    "BONE()": FunctionFragment;
    "BPOW_PRECISION()": FunctionFragment;
    "EXIT_FEE()": FunctionFragment;
    "INIT_POOL_SUPPLY()": FunctionFragment;
    "MAX_BOUND_TOKENS()": FunctionFragment;
    "MAX_BPOW_BASE()": FunctionFragment;
    "MAX_FEE()": FunctionFragment;
    "MAX_IN_RATIO()": FunctionFragment;
    "MAX_OUT_RATIO()": FunctionFragment;
    "MAX_TOTAL_WEIGHT()": FunctionFragment;
    "MAX_WEIGHT()": FunctionFragment;
    "MIN_BALANCE()": FunctionFragment;
    "MIN_BOUND_TOKENS()": FunctionFragment;
    "MIN_BPOW_BASE()": FunctionFragment;
    "MIN_FEE()": FunctionFragment;
    "MIN_WEIGHT()": FunctionFragment;
    "echidna_no_bug_found()": FunctionFragment;
    "getColor()": FunctionFragment;
    "joinAndExitPool(uint256,uint256,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "BONE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "BPOW_PRECISION",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "EXIT_FEE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "INIT_POOL_SUPPLY",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAX_BOUND_TOKENS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAX_BPOW_BASE",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "MAX_FEE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "MAX_IN_RATIO",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAX_OUT_RATIO",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAX_TOTAL_WEIGHT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAX_WEIGHT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MIN_BALANCE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MIN_BOUND_TOKENS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MIN_BPOW_BASE",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "MIN_FEE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "MIN_WEIGHT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "echidna_no_bug_found",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getColor", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "joinAndExitPool",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "BONE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "BPOW_PRECISION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "EXIT_FEE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "INIT_POOL_SUPPLY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAX_BOUND_TOKENS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAX_BPOW_BASE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "MAX_FEE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "MAX_IN_RATIO",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAX_OUT_RATIO",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAX_TOTAL_WEIGHT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "MAX_WEIGHT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "MIN_BALANCE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MIN_BOUND_TOKENS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MIN_BPOW_BASE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "MIN_FEE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "MIN_WEIGHT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "echidna_no_bug_found",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getColor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "joinAndExitPool",
    data: BytesLike
  ): Result;

  events: {};
}

export class TbPoolJoinExit extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: TbPoolJoinExitInterface;

  functions: {
    BONE(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    BPOW_PRECISION(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    EXIT_FEE(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    INIT_POOL_SUPPLY(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    MAX_BOUND_TOKENS(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    MAX_BPOW_BASE(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    MAX_FEE(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    MAX_IN_RATIO(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    MAX_OUT_RATIO(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    MAX_TOTAL_WEIGHT(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    MAX_WEIGHT(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    MIN_BALANCE(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    MIN_BOUND_TOKENS(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    MIN_BPOW_BASE(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    MIN_FEE(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    MIN_WEIGHT(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    echidna_no_bug_found(
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    getColor(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    joinAndExitPool(
      poolAmountOut: BigNumberish,
      poolAmountIn: BigNumberish,
      poolTotal: BigNumberish,
      _records_t_balance: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  BONE(overrides?: CallOverrides): Promise<BigNumber>;

  BPOW_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

  EXIT_FEE(overrides?: CallOverrides): Promise<BigNumber>;

  INIT_POOL_SUPPLY(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_BOUND_TOKENS(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_BPOW_BASE(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_FEE(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_IN_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_OUT_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_TOTAL_WEIGHT(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_WEIGHT(overrides?: CallOverrides): Promise<BigNumber>;

  MIN_BALANCE(overrides?: CallOverrides): Promise<BigNumber>;

  MIN_BOUND_TOKENS(overrides?: CallOverrides): Promise<BigNumber>;

  MIN_BPOW_BASE(overrides?: CallOverrides): Promise<BigNumber>;

  MIN_FEE(overrides?: CallOverrides): Promise<BigNumber>;

  MIN_WEIGHT(overrides?: CallOverrides): Promise<BigNumber>;

  echidna_no_bug_found(overrides?: CallOverrides): Promise<boolean>;

  getColor(overrides?: CallOverrides): Promise<string>;

  joinAndExitPool(
    poolAmountOut: BigNumberish,
    poolAmountIn: BigNumberish,
    poolTotal: BigNumberish,
    _records_t_balance: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    BONE(overrides?: CallOverrides): Promise<BigNumber>;

    BPOW_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    EXIT_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    INIT_POOL_SUPPLY(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_BOUND_TOKENS(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_BPOW_BASE(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_IN_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_OUT_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_TOTAL_WEIGHT(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_WEIGHT(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_BALANCE(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_BOUND_TOKENS(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_BPOW_BASE(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_WEIGHT(overrides?: CallOverrides): Promise<BigNumber>;

    echidna_no_bug_found(overrides?: CallOverrides): Promise<boolean>;

    getColor(overrides?: CallOverrides): Promise<string>;

    joinAndExitPool(
      poolAmountOut: BigNumberish,
      poolAmountIn: BigNumberish,
      poolTotal: BigNumberish,
      _records_t_balance: BigNumberish,
      overrides?: Overrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    BONE(): Promise<BigNumber>;
    BPOW_PRECISION(): Promise<BigNumber>;
    EXIT_FEE(): Promise<BigNumber>;
    INIT_POOL_SUPPLY(): Promise<BigNumber>;
    MAX_BOUND_TOKENS(): Promise<BigNumber>;
    MAX_BPOW_BASE(): Promise<BigNumber>;
    MAX_FEE(): Promise<BigNumber>;
    MAX_IN_RATIO(): Promise<BigNumber>;
    MAX_OUT_RATIO(): Promise<BigNumber>;
    MAX_TOTAL_WEIGHT(): Promise<BigNumber>;
    MAX_WEIGHT(): Promise<BigNumber>;
    MIN_BALANCE(): Promise<BigNumber>;
    MIN_BOUND_TOKENS(): Promise<BigNumber>;
    MIN_BPOW_BASE(): Promise<BigNumber>;
    MIN_FEE(): Promise<BigNumber>;
    MIN_WEIGHT(): Promise<BigNumber>;
    echidna_no_bug_found(): Promise<BigNumber>;
    getColor(): Promise<BigNumber>;
    joinAndExitPool(
      poolAmountOut: BigNumberish,
      poolAmountIn: BigNumberish,
      poolTotal: BigNumberish,
      _records_t_balance: BigNumberish
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    BONE(): Promise<PopulatedTransaction>;
    BPOW_PRECISION(): Promise<PopulatedTransaction>;
    EXIT_FEE(): Promise<PopulatedTransaction>;
    INIT_POOL_SUPPLY(): Promise<PopulatedTransaction>;
    MAX_BOUND_TOKENS(): Promise<PopulatedTransaction>;
    MAX_BPOW_BASE(): Promise<PopulatedTransaction>;
    MAX_FEE(): Promise<PopulatedTransaction>;
    MAX_IN_RATIO(): Promise<PopulatedTransaction>;
    MAX_OUT_RATIO(): Promise<PopulatedTransaction>;
    MAX_TOTAL_WEIGHT(): Promise<PopulatedTransaction>;
    MAX_WEIGHT(): Promise<PopulatedTransaction>;
    MIN_BALANCE(): Promise<PopulatedTransaction>;
    MIN_BOUND_TOKENS(): Promise<PopulatedTransaction>;
    MIN_BPOW_BASE(): Promise<PopulatedTransaction>;
    MIN_FEE(): Promise<PopulatedTransaction>;
    MIN_WEIGHT(): Promise<PopulatedTransaction>;
    echidna_no_bug_found(): Promise<PopulatedTransaction>;
    getColor(): Promise<PopulatedTransaction>;
    joinAndExitPool(
      poolAmountOut: BigNumberish,
      poolAmountIn: BigNumberish,
      poolTotal: BigNumberish,
      _records_t_balance: BigNumberish
    ): Promise<PopulatedTransaction>;
  };
}
