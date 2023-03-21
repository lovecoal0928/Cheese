import React, { ReactNode } from 'react'
import { Button } from '@/components/atoms/Button'
import { Flex } from '@/components/atoms/Flex'
import { Image } from '@/components/atoms/Image'
import { Typography } from '@/components/atoms/Typography'
import { DragCard } from '@/components/molecules/cards/DragCard'
import { PostImage } from 'types/entities/Post'
import { Styles } from 'types/index'
import { useDrag } from 'utils/hooks/anim/useDrag'
import { SwipeButtons } from './SwipeButtons'

type Props = {
  title: string
  postImages: PostImage[]
  comment: string
  image: string
  postId: string
  handleSetImage: (src: string) => void
  handleSetIsZoom: () => void
  handleSwipeLike: (userId: string, postId: string, func?: () => void) => void
  handleSwipeBad: (func?: () => void) => void
}

export const SpotCard = (props: Props) => {
  const {
    title,
    postImages,
    comment,
    image,
    handleSetImage,
    handleSetIsZoom,
    handleSwipeLike,
    handleSwipeBad,
    postId,
  } = props
  const a = ['/paca.png', '/mapicon.png', '/paca.png']
  const CARD_START_X = 0
  const CARD_SWIPE_X = 100
  // 上から渡すとすべてが動いてしまう
  const {
    isSwiped,
    handleDrag,
    handleDragEnd,
    handleSetCardAnimation,
    cardAnimation,
    cardVariants,
  } = useDrag(CARD_START_X, CARD_SWIPE_X)

  return (
    <>
      {isSwiped ? (
        <></>
      ) : (
        <>
          <DragCard
            onDragEnd={handleDragEnd}
            onDrag={handleDrag}
            variants={cardVariants}
            initial={'stop'}
            animate={cardAnimation}
          >
            <Flex direction="column">
              <Typography style={styles.title}>{title}</Typography>
              <Button onClick={() => {}} style={styles.map_button}>
                <Typography style={styles.map}>地図</Typography>
              </Button>
            </Flex>
            <Flex style={styles.images}>
              {isSwiped ||
                postImages.map((value: PostImage, index: number) => (
                  <Image
                    alt={'写真'}
                    key={index}
                    // src={value.imagePath}
                    src={a[index]}
                    // onClick={() => handleSetImage(value.imagePath)}
                    onClick={() => handleSetImage(a[index])}
                    style={styles.image}
                  />
                ))}
            </Flex>
            <Image
              alt="スポット画像"
              src={image}
              style={styles.selected_image}
              onClick={handleSetIsZoom}
            />
            <Typography style={styles.comment}>{comment}</Typography>
          </DragCard>
          <SwipeButtons
            handleSwipeLike={() =>
              handleSwipeLike(postId, postId, () =>
                handleSetCardAnimation('swipedRight'),
              )
            }
            handleSwipeBad={() =>
              handleSwipeBad(() => handleSetCardAnimation('swipedLeft'))
            }
          />
        </>
      )}
    </>
  )
}

const styles: Styles = {
  title: {
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '22px',
    padding: '10px 0 2px 0',
  },
  map_button: {
    backgroundColor: '#fff',
    border: 'none',
    width: '26px',
    padding: 0,
  },
  map: {
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '13px',
    color: '#666',
    margin: '0px 0px 10px 0px',
    display: 'inline-block',
  },
  images: {},
  image: {
    background: '#000',
    objectFit: 'cover',
    borderRadius: '4px',
    margin: ' 0 15px 15px 0',
    width: '20%',
    height: '60px',
  },
  selected_image: {
    background: '#000',
    objectFit: 'cover',
    width: '100%',
    height: '300px',
    borderRadius: '8px',
  },
  comment: {
    margin: '10px 0',
    display: 'inline-block',
  },
}
