import { QueryClientProvider } from '@tanstack/react-query'
import { AnimatePresence } from 'framer-motion'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { AuthProvider } from 'providers/authProvider'
import { RecoilRoot } from 'recoil'
import { queryClient } from 'utils/tanStack'
import '../styles/reset.css'
import { useState } from 'react'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'

const MyApp: NextPage<AppProps> = ({
  Component,
  pageProps,
  router,
}: AppProps) => {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <SessionContextProvider
          supabaseClient={supabaseClient}
          initialSession={pageProps.initialSession}
        >
          <AuthProvider>
            <AnimatePresence mode="wait">
              <Component {...pageProps} key={router.asPath} />
            </AnimatePresence>
          </AuthProvider>
        </SessionContextProvider>
      </RecoilRoot>
    </QueryClientProvider>
  )
}

export default MyApp
