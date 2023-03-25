import { postRepository } from 'repositories/database/post/PostRepositoryImpl'
import { PostService } from './PostService'
import { Post } from 'types/entities/Post'
import { likedPostRepository } from 'repositories/database/likedPost/LikedPostRepositoryImpl'

class PostServiceImpl implements PostService {
  public findAll = async (): Promise<Post[]> => {
    const question = await postRepository.findAll()
    return question
  }

  public findUnseen = async (userId?: string): Promise<Post[]> => {
    if (!userId) throw new Error('login required')
    const likedPostIds = await likedPostRepository.findLikedPostIds(userId)
    const dislikedPostIds = await likedPostRepository.findDislikedPostIds(
      userId,
    )
    const question = await postRepository.findByExcludeIds(
      [...likedPostIds, ...dislikedPostIds],
      userId,
    )
    return question
  }

  public findById = async (questionId: string): Promise<Post> => {
    const question = await postRepository.findById(questionId)
    if (!question) throw new Error('question not found')
    return question
  }

  public findByUserId = async (userId?: string): Promise<Post[]> => {
    if (!userId) throw new Error('login required')
    const question = await postRepository.findByUserId(userId)
    return question
  }

  public save = async (post: Post): Promise<void> => {
    await postRepository.save(post)
  }
}

export const postService = new PostServiceImpl()
