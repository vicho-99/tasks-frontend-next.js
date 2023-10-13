import React from 'react';
import { LoadingProvider } from './loading';


function CombinedContextProvider({ children }) {

    return (

        <LoadingProvider>
            {children}
        </LoadingProvider>


    );

}

export default CombinedContextProvider;