/**
 Init Pinecone
 **/
import { PineconeClient } from '@pinecone-database/pinecone';

// import pkg from "dotenv"
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';

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


import * as fs from 'fs';
const initPinecone = async()=>{
  const pinecone = new PineconeClient();
  await pinecone.init({
    environment: 'us-west4-gcp-free' ,
    apiKey: '37f9f164-5f0a-4728-b50f-3a926bb8bb55' ,
  });
  pinecone.projectName = 'test';
  console.log(pinecone.projectName);
  return pinecone;
}

const pinecone = await initPinecone();
const list = await pinecone.listIndexes();
console.log("list ",list)


const index = pinecone.Index('grid');

/**
 Init fs
 **/

// import { index } from './pinecone.js';

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
const embedder = new OpenAIEmbeddings({
  openAIApiKey: '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',
});


/**
Get index from our pinecone.js
**/



(async () => {
    //read article
    const article = await fs.readFileSync('./temp.txt', { encoding: 'utf-8' });
    console.log('article ', article);
    
    //split the text
    const splittedText = await textSplitter.createDocuments([article]);
    console.log("splittedText ", splittedText)
    //store the splitted text to pinecone, in index "article" and namespace "langchain" (namespace is for filter purpose later, can be whatever you want)
    // PineconeStore.fromDocuments(splittedText, embedder, { pineconeIndex: index, namespace: 'langchain' });
    await PineconeStore.fromDocuments(splittedText, embedder, {
      index,
    });
})()
