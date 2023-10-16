import React from 'react';
import { LoadingProvider } from './loading';
import { TaskProvider } from './task';

function CombinedContextProvider({ children }) {

    return (

        <LoadingProvider>
            <TaskProvider>
                {children}
            </TaskProvider>
        </LoadingProvider>


    );

}

export default CombinedContextProvider;