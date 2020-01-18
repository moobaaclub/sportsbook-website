import React from 'react';
import {
    Link    
  } from 'react-router-dom'

export const Header = (props) => 
    <header>
        <div>
            <div className="div-logo">
                <Link to="/"><img className="logo" src="/images/logo.png"/></Link>
            </div>
            <div className="div-account">
                <div className="div-account-icon">
                    <img className="account" onClick={props.iconClick} src="/images/account.png"/>                                                                
                </div>
                <div className="account-menu" style={ { display:props.iconMenuDisplay } }>
                    <ul>
                        <li><Link to="/account">My Account</Link></li>
                        <li><Link to="/bets">My Bets</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>