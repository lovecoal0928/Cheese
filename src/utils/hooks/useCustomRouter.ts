import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { routeHistoryState } from 'recoil/atoms'

export const useCustomRouter = () => {
  const router = useRouter()
  const [pathHistory, setPathHistory] = useRecoilState(routeHistoryState)
  const isActive = (pathname: string) => router.pathname === pathname
  const isLastActive = (pathname: string) => pathHistory[0] === pathname
  const handlePushRouter = (pathname: string) => {
    router.push({
      pathname: pathname,
    })
  }

  const handleSetHistory = () => {
    setPathHistory((prevState) => [prevState[1] || "", router.asPath])
  }


  useEffect(() => {
    handleSetHistory()
  }, [])
  useEffect(() => {
    // console.log(pathHistory[0]);
  }, [pathHistory])

  const handleBackRouter = () => router.back()

  return { isActive, handlePushRouter, handleBackRouter, isLastActive, pathHistory }
}