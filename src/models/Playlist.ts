import { PlayListDB, PlayListModel } from "../types";

export class playList {
       
    constructor(
        private id: string,
        private name: string,
        private likes: number,
        private dislikes: number,
        private createdAt: string,
        private updatedAt: string,
        private creatorId: string,
        private creatorName: string, //Criado após 
    ) {}

    //get/set - id
    public getId(): string {
        return this.id;
    }
    public setId(value: string):void {
        this.id = value;
    }

    //get/set - name
    public getName(): string {
        return this.name;
    }
    public setName(value: string):void {
        this.name = value;
    }

    //get/set - likes
    public getLikes(): number {
        return this.likes;
    }
    public setLikes(value: number):void {
        this.likes = value;
    }
   
    //get/set - dislikes
    public getDislikes(): number {
        return this.dislikes;
    }
    public setDislikes(value: number):void {
        this.dislikes = value;
    }

    //get/set - createdAt 
    public getCreatedAt(): string {
        return this.createdAt;
    }
    public setCreatedAt(value: string):void {
        this.createdAt = value;
    }

    //get/set - updatedAt
    public getUpdatedAt(): string {
        return this.updatedAt;
    }
    public setUpdatedAt(value: string):void {
        this.updatedAt = value;
    }

    //get/set - CreatorId
    public getCreatorId(): string {
        return this.creatorId;
    }
    public setCreatorId(value: string):void {
        this.creatorId = value;
    }
   
    //get/set - CreatorName
    public getCreatorName(): string {
        return this.creatorName;
    }
    public setCreatorName(value: string):void {
        this.creatorName = value;
    }

    public toDBModel(): PlayListDB {
        return {
            id: this.id,
            creator_id: this.creatorId, 
            name: this.name,
            likes: this.likes,
            dislikes: this.dislikes,
            created_at: this.createdAt,
            updated_at: this.updatedAt,
        }
    }
    
    public toBusinessModel(): PlayListModel {
        return {
            id: this.id,
            name: this.name,
            likes: this.likes,
            dislikes: this.dislikes,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            creator: {
                id: this.creatorId,
                name: this.creatorName,
            }
        }
        
    }
}