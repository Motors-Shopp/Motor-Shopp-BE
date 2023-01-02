import AppDataSource from '../data-source'
import Comment from "@entities/comments.entity"
import { date } from 'yup';
import { v4 as uuid } from "uuid";


export const getCommentsService = async (): Promise<any> => {
  const commentRepository = AppDataSource.getRepository(Comment)
  const comment = await commentRepository.find();
  return comment
}

export const getCommentsServiceById = async ({id}:any): Promise<any> => {
  const commentRepository = AppDataSource.getRepository(Comment)

  const  comment = await commentRepository.findOne({
    where:{
        id
    }
  })

  if(!comment){
    throw new Error ("user not found")
  }
  
  return comment
}

export const postCommentsService = async ({comment, user, vehicle}: any): Promise<any> => {
  const commentRepository = AppDataSource.getRepository(Comment)
  // const comments = await commentRepository.find();

  const newComment = commentRepository.create({
    id:uuid(),
    comment,
    user,
    vehicle
});

await commentRepository.save(newComment);

  return comment
}

export const pacthCommentsService = async (data:any, id:string): Promise<any> => {

  const commentRepository = AppDataSource.getRepository(Comment)

  const  comment = await commentRepository.findOne({
    where:{
        id
    }
  })

  if(!comment){
    throw new Error ("user not found")
  }

  const updateComment = await commentRepository.save({...data,id:comment.id})

  return updateComment
}

export const deleteCommentsServiceById = async ({id}:any): Promise<any> => {
  const commentRepository = AppDataSource.getRepository(Comment)

  const  comment = await commentRepository.findOne({
    where:{
        id
    }
  })

  if(!comment){
    throw new Error ("user not found")
  }

  await commentRepository.delete(comment.id)
  
  return "deletado"
}

