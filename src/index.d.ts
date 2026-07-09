/**
 * deepseek-sdk TypeScript declarations
 */
export interface DeepseekOptions {
  apiKey?: string;
  baseURL?: string;
  headers?: Record<string, string>;
}

export class Deepseek {
  constructor(options?: DeepseekOptions);
  request(path: string, opts?: RequestInit): Promise<any>;
}

export default Deepseek;

export const meta: {
  name: string;
  category: string;
  homepage: string;
  docs_url: string;
  endpoints_count: number;
};
