import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 300,
            backgroundColor: theme.appbackground[theme.palette.type],
            margin: theme.spacing(1)
        },
        input: {
            marginLeft: theme.spacing(1),
            flex: 1,
            color: theme.foregroundColor[theme.palette.type],
            backgroundColor: theme.appbackground[theme.palette.type],
            fontFamily: theme.standardFont.fontFamily
        }
    }),
);

interface props {
    placeHolder: string
    onChange: (t: string) => void
    value: string
}

export default function TextBox(props: props) {
    const classes = useStyles();

    return (
        <Paper component="form" className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder={props.placeHolder}
                onChange={(event) => props.onChange(event.target.value)}
                value={props.value}
                inputProps={{ 'aria-label': props.placeHolder }}
            />
        </Paper>
    );
}