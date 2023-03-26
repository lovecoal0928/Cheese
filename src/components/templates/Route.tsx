import { PAGE_NAME } from 'constants/PathName'
import React from 'react'
import { Post } from 'types'
import { Card } from '../atoms/Card'
import { Flex } from '../atoms/Flex'
import { BottomNav } from '../organisms/commons/BottomNav'
import { TextDetail } from '../organisms/list/TextDetail'
import { Prepare } from '../organisms/Prepare'

type Props = {
    isActive:(pathname:string)=>boolean
    isLastActive: (pathname: string) => boolean
    pathHistory:string[]
  }
  

export const Route = (props:Props) => {
    const { isActive,pathHistory,isLastActive } = props

    return (
      <Flex>
        <Prepare/>
        <BottomNav PAGE_NAME={PAGE_NAME} isActive={isActive} pathHistory={pathHistory} isLastActive={isLastActive}/>
      </Flex>
    )
  }
