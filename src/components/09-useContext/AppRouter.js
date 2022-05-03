import React from 'react';
import {
    BrowserRouter as Router,
    //Switch,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import { NavBar } from './NavBar';
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';


export const AppRouter = () => {
    return (
        <Router>
            <div>
                {/*<Switch>
                    <Route path='/about' component={ AboutScreen } />
                </Switch>*/}
                <NavBar />

                <div className='container'>
                    <Routes>
                        {/**Parece que no hace falta el atributo <<exact>> */}
                        <Route exact path='/' element={ <HomeScreen /> } />
                        <Route exact path='/about' element={ <AboutScreen /> } />
                        <Route exact path='/login' element={ <LoginScreen /> } />
                        <Route path="*" element={<Navigate to="/" />} />                    
                    </Routes>
                </div>
            </div>
        </Router>
    )
}
