import React from 'react'
import { SpotCard } from '../organisms/home/SpotCard'
import { PathName, Styles } from 'types/index'
import { BottomNav } from '../organisms/commons/BottomNav'
import { Flex } from '../atoms/Flex'
import { Post } from 'types/entities/Post'

type Props = {
  image: string
  data: Post[]
  PAGE_NAME: PathName[]
  isActive:(pathname:string)=>boolean
  handlePushRouter: (pathname: string) => void
  handleSetImage: (src: string) => void
  handleSetIsZoom: () => void
  handleSwipeLike: (userId:string,postId:string,func?:()=>void) => void
  handleSwipeBad: (func?:()=>void) => void
}

export const Home = (props: Props) => {
  const {
    data,
    PAGE_NAME,
    image,
    isActive,
    handlePushRouter,
    handleSetImage,
    handleSetIsZoom,
    handleSwipeBad,
    handleSwipeLike,
  } = props

  return (
    <Flex style={style.container} direction="column">
      {data.map((value: Post, index: number) => (
        <SpotCard
          title={value.title}
          postImages={value.postImages}
          comment={value.comment || ''}
          key={value.postId}
          postId={value.postId}
          handleSetImage={handleSetImage}
          image={image}
          handleSetIsZoom={handleSetIsZoom}
          handleSwipeBad={handleSwipeBad}
          handleSwipeLike={handleSwipeLike}
        /> 
      ))}
      <BottomNav handlePushRouter={handlePushRouter} PAGE_NAME={PAGE_NAME} isActive={isActive}/>
    </Flex>
  )
}

const style: Styles = {
  container: {
    position: 'absolute',
    width: '100%',
    left: '0px',
    top: '0px',
    height: '120vh',
    background: '#eee',
  },
}
