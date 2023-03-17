import { QueryClientProvider } from '@tanstack/react-query'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { AuthProvider } from 'providers/authProvider'
import { queryClient } from 'utils/tanStack'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </QueryClientProvider>
  )
}

export default MyApp
