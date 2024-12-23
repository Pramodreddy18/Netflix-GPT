import OpenAI from 'openai';
import { openAiKey } from './constant';

const openai = new OpenAI({
  apiKey: openAiKey,
  dangerouslyAllowBrowser: true ,
});
export default openai;
