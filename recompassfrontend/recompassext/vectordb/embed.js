// import pkg from "dotenv"
import { OpenAIEmbeddings } from 'langchain/embeddings';

/**
 Open AI Embedding wrapper from langchain
 **/

/**
 Chunk text/text splitter function from langchain
 **/
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';


/**
Pinecone wrapper from langchain
**/
import { PineconeStore } from 'langchain/vectorstores';


/**
 Init fs
 **/
import * as fs from 'fs';
import { index } from './pinecone.js';

// OPENAI_API_KEY = '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';
// const {dotenv} = pkg;
// dotenv.config();
/**
Create text splitter with chunksize 1000 character
**/
const textSplitter = new RecursiveCharacterTextSplitter({ chunkSize: 1000, chunkOverlap: 0});


/**
Init OpenAI Embeddings
**/
const embedder = new OpenAIEmbeddings({openAIApiKey :"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"});


/**
Get index from our pinecone.js
**/



(async () => {
    //read article
    const article = await fs.readFileSync('./dataset.txt', { encoding: 'utf-8' });
    //split the text
    const splittedText = await textSplitter.createDocuments([article]);
    
    //store the splitted text to pinecone, in index "article" and namespace "langchain" (namespace is for filter purpose later, can be whatever you want)
    PineconeStore.fromDocuments(splittedText, embedder, { pineconeIndex: index, namespace: 'langchain' });
})()
