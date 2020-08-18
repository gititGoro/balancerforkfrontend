import React, { useCallback, useEffect } from 'react';
import { useContext, useState } from 'react'
import { EthereumContext } from '../../../contexts/EthereumContext'
import ContractSection from './ContractSection/index'
import { Grid, Select, FormControl, InputLabel, MenuItem, makeStyles, createStyles } from '@material-ui/core';
import { Loading } from '../Common';
import {loadPools} from '../../../../blockchain/EthereumAPI'

const useStyles = makeStyles(theme => createStyles({
    select: {
        width: "500px",
        color: theme.foregroundColor[theme.palette.type]
    },
    grid: {
        margin: "50px"
    }
}))

export default function ContractSelector() {
    const classes = useStyles()
    const ethereumContextProps = useContext(EthereumContext)
    const [selectedContract, setSelectedContract] = useState<string>("")
    const [tokenList, setTokenList] = useState<string[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const tokenListCallback = useCallback(async () => {
        if (ethereumContextProps.blockchain) {
            const tokens = ethereumContextProps.blockchain.contracts.Tokens
            let list: string[] = []
            for (let i = 0; i < tokens.length; i++) {
                const name = await tokens[i].name()
                list.push(name)
            }
            setTokenList(list)
            setLoading(false)
        }
    }, [ethereumContextProps.blockchain])

    useEffect(() => {
        tokenListCallback()
    }, [ethereumContextProps.blockchain])

    if (loading)
        return <Loading />

    if (!ethereumContextProps.blockchain)
        return <div></div>
    const pools = loadPools(ethereumContextProps.network) 
    const bPoolList = pools.map(p=>p.friendly)

    const contractList = ['BFactory', ...bPoolList, ...tokenList]

    return <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.grid}
    >
        <Grid>
            <FormControl>
                <InputLabel className={classes.select} id="contractSelect" >Contract</InputLabel>
                <Select
                    className={classes.select}
                    labelId="contractSelect"
                    value={selectedContract}
                    onChange={(event: any) => setSelectedContract(event.target.value)}

                >
                    {contractList.map((contract, i) => <MenuItem key={contract} value={contract}>{contract}</MenuItem>)}
                </Select>
            </FormControl>
        </Grid>
        {selectedContract !== '' ? <ContractSection selectedContract={selectedContract} index={tokenList.indexOf(selectedContract)} /> : ""}
    </Grid>

}