import React from 'react';
import { useContext } from 'react'
import { EthereumContext } from '../../../../contexts/EthereumContext'
import ControlsForContract from "./ControlsForContract"
import { makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles({
    statusHeader: {
        color: "white",
        marginBottom: "50px"
    },
    root: {
        display: "flex"
    },
    grid: {
        margin: "50px"
    }
})
interface props {
    selectedContract: string
}

export default function ContractSection(props: props) {
    const classes = useStyles()
    const ethereumContextProps = useContext(EthereumContext)

    if (!ethereumContextProps.blockchain)
        return <div></div>

    return <div className={classes.root}>
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            className={classes.grid}
        >
            <Grid item>
                <ControlsForContract contractName={props.selectedContract} />
            </Grid>
        </Grid>
    </div >
}
