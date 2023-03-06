import React from 'react'
import ReactDOM from 'react-dom/client'
import {RecoilRoot} from 'recoil'
import {GlobalStyle} from "./styles/reset-css";
import {ThemeProvider} from "styled-components";
import {theme} from "./styles/theme";
import {RouterProvider} from 'react-router-dom';
import {router} from "./views/Router";
import {QueryClient, QueryClientProvider} from "react-query"

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
        <RecoilRoot>
            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <RouterProvider router={router}/>
            </ThemeProvider>
        </RecoilRoot>
    </QueryClientProvider>
)
