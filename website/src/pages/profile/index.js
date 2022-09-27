import React from 'react';
import StyledProfile from './styles.js';
import HeaderBar from '../../components/view/HeaderBar';

export default function Profile() {
    return(


        <StyledProfile >
              <div className='dpsdanome'>
                    <h1> Bem vindo de volta, David </h1>
                </div>

                <div className='profiledesc'>
                   
                </div>
            <HeaderBar className="headerbar">
              
            </HeaderBar>
        </StyledProfile>
    )
}