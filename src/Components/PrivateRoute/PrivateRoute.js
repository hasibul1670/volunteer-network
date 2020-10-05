import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { usercontex } from '../../App'
function PrivateRoute({ children, ...rest }) {
    const [loguser, setloguser] = useContext(usercontex)
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loguser.email ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    )
}

export default PrivateRoute
