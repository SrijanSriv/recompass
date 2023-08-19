// 1. Import required modules
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { OpenAI } from 'langchain/llms/openai';
import { loadQAStuffChain } from 'langchain/chains';
import { Document } from 'langchain/document';
import { PineconeClient } from '@pinecone-database/pinecone';
// 2. Export the queryPineconeVectorStoreAndQueryLLM function
const queryPineconeVectorStoreAndQueryLLM = async (
  client,
  indexName,
  question
) => {
  // 3. Start query process
  console.log('Querying Pinecone vector store...');
  // 4. Retrieve the Pinecone index
  const index = client.Index(indexName);
  // 5. Create query embedding
  const queryEmbedding = await new OpenAIEmbeddings().embedQuery(question);
  // 6. Query Pinecone index and return top 10 matches
  let queryResponse = await index.query({
    queryRequest: {
      topK: 10,
      vector: queryEmbedding,
      includeMetadata: true,
      includeValues: true,
    },
  });
  // 7. Log the number of matches
  console.log(`Found ${queryResponse.matches.length} matches...`);
  // 8. Log the question being asked
  console.log(`Asking question: ${question}...`);
  if (queryResponse.matches.length) {
    // 9. Create an OpenAI instance and load the QAStuffChain
    const llm = new OpenAI({
      openAIApiKey: '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'
    });
    const chain = loadQAStuffChain(llm);
    // 10. Extract and concatenate page content from matched documents
    const concatenatedPageContent = queryResponse.matches
      .map((match) => match.metadata.pageContent)
      .join(' ');
    // 11. Execute the chain with input documents and question
    const result = await chain.call({
      input_documents: [new Document({ pageContent: concatenatedPageContent })],
      question: question,
    });
    // 12. Log the answer
    console.log(`Answer: ${result.text}`);
  } else {
    // 13. Log that there are no matches, so GPT-3 will not be queried
    console.log('Since there are no matches, GPT-3 will not be queried.');
  }
};


const pinecone = new PineconeClient();
await pinecone.init({
  environment: 'us-west4-gcp-free',
  apiKey: '37f9f164-5f0a-4728-b50f-3a926bb8bb55',
});

const index = pinecone.Index('grid');


  queryPineconeVectorStoreAndQueryLLM(
    pinecone,
    index,
    'Polyester Multicolor T-Shirt'
  )
