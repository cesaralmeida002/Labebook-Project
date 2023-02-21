
import { PlayListModel } from "../types"

export interface SignupInput {

    name: unknown,
    email: unknown,
    password: unknown,

}

export interface SignupOutput {
    token: string,

}

export interface LoginupInput {
    email: unknown,
    password: unknown,
}


export interface LoginOutput {
    token: string,
}

export interface GetPlayListInput {
    token: string | undefined
}

export type GetPlayListOutput = PlayListModel[]

export interface CreatePlayListInput{
    token: string | undefined
}

export interface EditPlayListInput{
    idToEdit: string,
    token: string | undefined,
    name: unknown,
}

export interface DeletePlayListInput{
    idToDelete: string,
    token: string | undefined,
}

export interface LikeOrDislikeInput{
    idToLikeOrDislike: string,
    token: string | undefined,
    like: unknown, 
}