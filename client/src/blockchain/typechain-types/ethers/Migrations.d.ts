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

interface MigrationsInterface extends ethers.utils.Interface {
  functions: {
    "lastCompletedMigration()": FunctionFragment;
    "owner()": FunctionFragment;
    "setCompleted(uint256)": FunctionFragment;
    "upgrade(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "lastCompletedMigration",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setCompleted",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "upgrade", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "lastCompletedMigration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setCompleted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgrade", data: BytesLike): Result;

  events: {};
}

export class Migrations extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: MigrationsInterface;

  functions: {
    lastCompletedMigration(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    owner(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    setCompleted(
      completed: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    upgrade(
      new_address: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  lastCompletedMigration(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  setCompleted(
    completed: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  upgrade(
    new_address: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    lastCompletedMigration(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    setCompleted(completed: BigNumberish, overrides?: Overrides): Promise<void>;

    upgrade(new_address: string, overrides?: Overrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    lastCompletedMigration(): Promise<BigNumber>;
    owner(): Promise<BigNumber>;
    setCompleted(completed: BigNumberish): Promise<BigNumber>;
    upgrade(new_address: string): Promise<BigNumber>;
  };

  populateTransaction: {
    lastCompletedMigration(): Promise<PopulatedTransaction>;
    owner(): Promise<PopulatedTransaction>;
    setCompleted(completed: BigNumberish): Promise<PopulatedTransaction>;
    upgrade(new_address: string): Promise<PopulatedTransaction>;
  };
}
