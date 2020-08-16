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
  CallOverrides
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface BColorInterface extends ethers.utils.Interface {
  functions: {
    "getColor()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "getColor", values?: undefined): string;

  decodeFunctionResult(functionFragment: "getColor", data: BytesLike): Result;

  events: {};
}

export class BColor extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: BColorInterface;

  functions: {
    getColor(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;
  };

  getColor(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    getColor(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    getColor(): Promise<BigNumber>;
  };

  populateTransaction: {
    getColor(): Promise<PopulatedTransaction>;
  };
}