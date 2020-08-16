

import { BToken as btoken } from './typechain-types/ethers/BToken'
import { BPool } from './typechain-types/ethers/BPool'
import { BFactory } from './typechain-types/ethers/BFactory'

export default interface Contracts {
    BFactory: BFactory,
    BPools: BPool[]
}

export type BToken = btoken
