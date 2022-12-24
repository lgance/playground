import '../styles/globals.css'
import { QueryClient, QueryClientProvider }  from 'react-query';
import { ReactQueryDevtools } from "react-query/devtools";

import type { AppProps } from 'next/app'
import {
  RecoilRoot
}
from 'recoil';
import Layout from '../components/layout/Layout';

const queryClient = new QueryClient();


function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          {/* devtools */}
          <ReactQueryDevtools initialIsOpen={true} />
          <Layout >
            <Component {...pageProps} />
          </Layout>
        </RecoilRoot>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
