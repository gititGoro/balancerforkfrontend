import React from 'react';
import { useContext, useState } from 'react'
import { EthereumContext } from '../../../contexts/EthereumContext'
import ContractSection from './ContractSection/index'
import { Grid, Select, FormControl, InputLabel, MenuItem, makeStyles, createStyles } from '@material-ui/core';

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


    if (!ethereumContextProps.blockchain)
        return <div></div>
    const bPoolList = ethereumContextProps.blockchain.contracts.BPools.map((b, i) => 'BPool' + i)
    const contractList = ['BFactory', ...bPoolList]


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
                    {contractList.map((contract) => <MenuItem key={contract} value={contract}>{contract}</MenuItem>)}
                </Select>
            </FormControl>
        </Grid>
        {selectedContract !== '' ? <ContractSection selectedContract={selectedContract} /> : ""}
    </Grid>

}