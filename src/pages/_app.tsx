import { QueryClientProvider } from '@tanstack/react-query'
import { AnimatePresence } from 'framer-motion'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { AuthProvider } from 'providers/authProvider'
import { RecoilRoot } from 'recoil'
import { queryClient } from 'utils/tanStack'
import '../styles/reset.css'

const MyApp: NextPage<AppProps> = ({ Component, pageProps,router }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
      <AuthProvider>
        <AnimatePresence mode="wait" >
          <Component {...pageProps} key={router.asPath}/>
        </AnimatePresence>
      </AuthProvider>
      </RecoilRoot>
    </QueryClientProvider>
  )
}

export default MyApp
