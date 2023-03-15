import { Flex } from '@/components/atoms/Flex'
import { Input } from '@/components/atoms/Input'
import React, {useRef, useState} from 'react'
import { Image } from '@/components/atoms/Image'
import { TextInput } from '@/components/molecules/inputs/TextInput'
import { FileInput } from '@/components/molecules/inputs/FileInput'
import { Button } from '@/components/atoms/Button'
import { Typography } from '@/components/atoms/Typography'
import { Styles } from 'types'

export const PostForm = () => {
    const titleRef = useRef(null)
    const commentRef = useRef(null)
    const [image,setImage] = useState("")

  return (
    <Flex direction='column' style={style.container}>
      <TextInput ref={titleRef} placeholder={"タイトル"} style={style.title} />
      <TextInput ref={commentRef} placeholder={"コメント"} style={style.comment} />
      {image &&
        <Image alt="投稿画像" src={image}/>
      }
      <FileInput onChange={()=>{}}>
        <Typography style={style.button}>写真を追加</Typography>
      </FileInput>
    </Flex>
  )
}

const style:Styles={
    container:{

    },
    title:{

    },
    comment:{

    },
    button:{
        cursor:"pointer"
    }

}
