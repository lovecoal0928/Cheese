import { useRouter } from 'next/router'

export const useCustomRouter = () => {
  const router = useRouter()
  const isActive = (pathname: string) => router.pathname === pathname
  const handlePushRouter = (pathname: string) => {
    router.push({
      pathname: pathname,
    })
  }
  const handleBackRouter=()=> router.back()

  return { isActive, handlePushRouter,handleBackRouter }
}
