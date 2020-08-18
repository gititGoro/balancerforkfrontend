import React, { useState, useEffect, useContext } from 'react';
import { Grid, makeStyles, createStyles, Paper, Typography, Tooltip, Button } from '@material-ui/core'
import TextBox from '../Common/TextBox'
import ContractSelector from "./ContractSelector"
import { addPool, removePool } from '../../../../blockchain/EthereumAPI'
import { EthereumContext } from 'src/components/contexts/EthereumContext';
const useStyles = makeStyles(theme => createStyles({
    root: {
        display: "flex",
        color: "white",
        fontFamily: theme.standardFont.fontFamily,
        fontSize: theme.standardFont.fontSize
    },
    gridItem: {
        flexGrow: 1,
    }
}));

export default function Dashboard() {

    const classes = useStyles()
    return <div className={classes.root}><Grid container
        direction="row"
        justify="space-between"
        alignItems="center"
        spacing={4}

    >
        <Grid item className={classes.gridItem}>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={10}
            >
                <Grid item>
                    <ContractSelector />
                </Grid>
                <Grid item className={classes.gridItem}>
                    <PinPool />
                </Grid>
            </Grid>

        </Grid>

    </Grid>
    </div>
}

const pinStyles = makeStyles(theme => createStyles({
    root: {
        background: theme.componentBackground[theme.palette.type],
        padding: '10px',
        color: theme.foregroundColor[theme.palette.type],
        margin: 10
    },
    unpinButton: {
        background: theme.componentBackground['light'],
        color: 'white'
    }
}))

function PinPool() {
    const classes = pinStyles()
    const ethereumContextProps = useContext(EthereumContext)
    const [poolAddress, setPoolAddress] = useState<string>("")
    const [poolFriendly, setPoolFriendly] = useState<string>("")
    const [addressValid, setAddressValid] = useState<boolean>(false)

    useEffect(() => {
        var pattern: RegExp = /^0x[a-fA-F0-9]{40}$/
        setAddressValid(pattern.test(poolAddress))
    }, [poolAddress])

    const pinAction = () => {
        const newPool = { address: poolAddress, friendly: poolFriendly }
        addPool(ethereumContextProps.network, newPool)
        location.reload()
    }

    const unpinAction = () => {
        removePool(ethereumContextProps.network, poolAddress)
        location.reload()
    }

    return <Paper className={classes.root}>
        <Typography variant="h3">
            Pin an existing Pool
        </Typography>
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={10}>
            <Grid item>
                <TextBox placeHolder="Pool address" onChange={setPoolAddress} value={poolAddress} />
            </Grid>
            <Grid item>
                <TextBox placeHolder="Pool friendly name" onChange={setPoolFriendly} value={poolFriendly} />
            </Grid>
            <Grid item>
                <Tooltip title="Once you've deployed a pool using factory, retrieve the address from the log of the transaction (etherscan) and pin it in browswer storage for future convenience.">
                    <Button disabled={!addressValid || undefined} variant="outlined" color="secondary" onClick={() => pinAction()}>Pin</Button>
                </Tooltip>
            </Grid>
            <Grid item>
                <Button className={classes.unpinButton} disabled={!addressValid || undefined} variant="outlined" onClick={() => unpinAction()}>Unpin</Button>
            </Grid>
        </Grid>
    </Paper>
}