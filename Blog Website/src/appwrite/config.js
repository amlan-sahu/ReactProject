import conf from '../conf/conf.js'
import {Client,ID, Databases, Storage,Query} from "appwrite";


export class Service{
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage,status, userId}) {
        try {
            return await this.databases.createDocument(
                conf.appwiteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        }catch (error) {
            console.log(error);
        }
    }

    async updatePost(slug,{title,  content, featuredImage, status}) {
        try {
            return await this.databases.updateDocument(
                conf.appwiteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        }catch (error) {
            console.log(error);
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwiteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
            return true;
        }catch (error) {
            console.log(error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwiteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
        }catch (error) {
            console.log(error);
            return false;
        }
    }

    async getPosts(queries=[Query.equal("status","active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwiteDatabaseId,
                conf.appwriteCollectionId,
                queries,

            );
        }catch (error) {
            console.log(error);
            return false;
        }
    }

    //file upload services

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwiteDatabaseId,
                conf.appwriteCollectionId,
                ID.unique(),
                file,
            )
        }catch (error) {
            console.log(error);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwiteDatabaseId,
                fileId);
            return true;
        }catch (error) {
            console.log(error);
            return false;
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwiteDatabaseId,
            fileId,
        );
    }
}

const service = new Service();
export default service;