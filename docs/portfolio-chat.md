# Ask Sahbaz chat setup

The assistant reads its source documents from `src/data/ai`. The index script chunks the Markdown and embeds it locally with Hugging Face Transformers.js using the quantized `Xenova/all-MiniLM-L6-v2` model. The resulting vectors and source metadata are written to the generated, gitignored `src/data/ai/knowledge-index.json` file. The model files are cached under `.cache/transformers`.

## Local setup

1. Put `GROQ_API_KEY=...` and (optionally) `GROQ_CHAT_MODEL=qwen/qwen3.8-27b` in `.env.local`.
2. Run `npm run index:knowledge` when the Markdown documents change. On first use, Transformers.js downloads the public model files from Hugging Face into `.cache/transformers`; later indexing runs reuse that local cache.
3. Run `npm run dev`.

No embedding API key is required. `npm run build` runs the knowledge indexer first, so deployment builds need internet access to download the model on a cold build. The generated index and cached model are included in the chat route's output file trace for deployment.

## Retrieval and generation

The server embeds a visitor's question with the same local model, ranks stored vectors by cosine similarity, and selects up to five relevant chunks. Only those excerpts, the user's question, and up to six recent conversation turns are sent to Groq. Groq generates the answer using the portfolio-only system instructions. The API returns source paths alongside the answer.

The model is an open model distributed under Apache 2.0, so the weights can be run locally without a paid embedding service or API credential. The quantized ONNX model is about 23 MB; CPU inference uses application compute and may add cold-start time on serverless hosting.

Example questions: “What is Velquix?”, “What did Sahbaz work on during his internship?”, “What is Sahbaz currently learning?”, “Does Sahbaz have professional AWS experience?”, and “What is Sahbaz’s GitHub?”. Unrelated questions such as weather, jokes, or general politics receive the portfolio-only response.
