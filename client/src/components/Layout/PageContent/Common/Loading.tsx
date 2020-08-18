import doge from '../../../../images/crotchman.gif'
import React from 'react';
import {
    Grid,
    createStyles,
    makeStyles,
    Typography,
} from '@material-ui/core';
const loadingStyles = makeStyles(theme => createStyles({
    dogeText: {
        color: theme.foregroundColor[theme.palette.type],
        fontFamily: theme.standardFont.fontFamily
    }
}))

const phrases = [
    'Loading',
    'Shifting local reference frame',
    'Completing theorems for Gödel',
    'Surrounding Pythogoras with a field of beans',
    'Setting player 1 to Luigi',
    'Querying Ethereum',
    'Routing past bitconnect',
    'Filing patents for Craig Wright',
    'Deploying Boston Dynamics killbots',
    'Issuing sleep command to Elon.exe',
    'Reducing entropy in a closed system',
    'Installing desalination unit in Seastead'
]

export default function Loading(props: { invisible?: boolean }) {
    if (props.invisible)
        return <div></div>
    const classes = loadingStyles()
    const phrase = phrases[Math.trunc(Math.random() * phrases.length)]
    return <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="center"
        spacing={10}
    >
        <Grid item></Grid>
        <Grid item>
            <img src={doge} width={400} />
        </Grid>
        <Grid item>
            <Typography variant="h3" className={classes.dogeText}>
                {phrase}....
                </Typography>
        </Grid>
    </Grid>
}