import { Configuration, OpenAIApi } from 'openai-edge'
import { OpenAIStream, StreamingTextResponse } from 'ai'

const config = new Configuration({
  apiKey: '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',
})
const openai = new OpenAIApi(config)

export const runtime = 'chrome'

export async function POST(req) {
  const { messages } = await req.json()
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages
  })
  const stream = OpenAIStream(response)
  return new StreamingTextResponse(stream)
}