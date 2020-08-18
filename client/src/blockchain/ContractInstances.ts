

import { BToken as btoken } from './typechain-types/ethers/BToken'
import { BPool } from './typechain-types/ethers/BPool'
import { BFactory } from './typechain-types/ethers/BFactory'
import { MockDai as ERC20 } from './typechain-types/ethers/MockDai'

export default interface Contracts {
    BFactory: BFactory,
    BPools: BPool[],
    Tokens: ERC20[]
}

export type BToken = btoken
