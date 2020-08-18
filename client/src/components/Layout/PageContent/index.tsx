import React, { useContext } from 'react';
import Dashboard from './Dashboard/index'
import {
    Route, Switch, Redirect
} from 'react-router-dom'
import LandingPage from './LandingPage'
import WalletNotConnected from './WalletNotConnected'
import { makeStyles, createStyles } from '@material-ui/core'
import { useState } from 'react'
import { EthereumContext } from 'src/components/contexts/EthereumContext';
import { Loading } from './Common/index'

const delayDuration = '300ms'
const delayFunction = 'ease'

const useStyles = makeStyles(them => createStyles({
    expanded: {
        marginLeft: "200px",
        transitionProperty: "margin",
        transitionDuration: delayDuration,
        transitionTimingFunction: delayFunction,
    },
    shrunk: {
        marginLeft: "50px",
        transitionProperty: "margin",
        transitionDuration: delayDuration,
        transitionTimingFunction: delayFunction
    }
}))

interface props {
    expanded: boolean
    loading: boolean
}

export default function PageContent(props: props) {
    const ethereumContext = useContext(EthereumContext)
    const classes = useStyles()
    const [redirection, setRedirection] = useState<string>("")
    const renderRedirect = redirection !== '' ? <Redirect to={redirection} /> : ''

    React.useEffect(() => {
        if (renderRedirect !== '') {
            setRedirection('')
        }
    })

    const RenderCorrect = (bigprops:any) => {
        if (ethereumContext.connectionStatus === 'window.ethereum injected by Metmask')
            return <Loading />
        if (ethereumContext.connectionStatus === 'Metamask Missing' || ethereumContext.connectionStatus === 'window.ethereum not found')
            return <WalletNotConnected />

        return <div>
            {renderRedirect}
            <Switch>

                <Route path='/' exact >
                    <LandingPage setRedirect={setRedirection} />
                </Route>
                <Route path='/admin' exact>
                   <Dashboard  />
                </Route>
            </Switch>
        </div>
    }

    return <div className={props.expanded ? classes.expanded : classes.shrunk}>
        <RenderCorrect  />
    </div >
}

