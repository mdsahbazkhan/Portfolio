const retrievalNodes = [
  ["USER QUERY", "A question about an uploaded PDF", "left-[3%] top-[42%]"],
  ["FASTAPI", "Application and retrieval request", "left-[29%] top-[4%]"],
  ["CHROMADB", "Semantic vector search", "right-[4%] top-[8%]"],
  ["CONTEXT", "Relevant document chunks", "right-[1%] top-[42%]"],
  ["GROQ LLAMA 3.3", "Context-aware generation", "right-[10%] bottom-[4%]"],
  ["RESPONSE", "Streamed answer", "left-[24%] bottom-[4%]"],
] as const;

export function RetrievalNetwork() {
  return (
    <div role="img" aria-label="Velquix retrieval system: a user query passes through FastAPI, ChromaDB vector search, retrieved PDF context, Groq Llama 3.3, and a streamed response." className="rag-network relative my-8 border-y editorial-rule py-8">
      <p className="eyebrow mb-5">Retrieval in Velquix · the data path</p>
      <div className="relative sm:h-[25rem]">
        <svg className="rag-network-lines pointer-events-none absolute inset-0 hidden h-full w-full sm:block" viewBox="0 0 1000 420" preserveAspectRatio="none" aria-hidden="true">
          <path d="M110 205 C240 205 300 70 390 90" />
          <path d="M440 95 C590 10 660 60 790 95" />
          <path d="M830 125 C920 170 910 210 900 220" />
          <path d="M880 250 C840 340 790 350 730 355" />
          <path d="M680 365 C530 420 400 390 340 360" />
          <path d="M285 330 C185 290 145 250 110 220" />
        </svg>
        <div className="rag-core sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2">
          <span className="font-mono text-[10px] tracking-[.22em] text-teal-100/70">CONTEXT ENGINE</span>
          <span className="mt-2 block text-2xl font-medium tracking-[-.04em] text-stone-100">RAG</span>
          <span className="mt-1 block font-mono text-[9px] text-stone-500">retrieve → ground → generate</span>
        </div>
        <ol className="rag-node-list mt-4 grid grid-cols-2 gap-2 sm:mt-0 sm:block">
          {retrievalNodes.map(([name, description, position], index) => (
            <li key={name} className={`rag-node sm:absolute ${position}`}>
              <span className="font-mono text-[9px] text-teal-100/55">0{index + 1}</span>
              <span className="mt-1 block text-xs font-medium text-stone-100">{name}</span>
              <span className="mt-1 block text-[10px] leading-4 text-stone-400">{description}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

const architectureNodes = [
  ["CLIENT", "Requests", "left-[42%] top-[3%]"],
  ["API", "Routes", "left-[8%] top-[43%]"],
  ["CACHE", "Fast reads", "right-[8%] top-[8%]"],
  ["DATABASE", "Persistence", "right-[2%] top-[43%]"],
  ["QUEUE", "Async work", "right-[12%] bottom-[3%]"],
] as const;

export function ArchitectureNetwork() {
  return (
    <div role="img" aria-label="Conceptual system design: a client communicates through an API to services, which can use a cache, database, and queue." className="architecture-network relative my-8 border-y editorial-rule py-8">
      <p className="eyebrow mb-5">A conceptual service topology</p>
      <div className="relative sm:h-[24rem]">
        <svg className="architecture-network-lines pointer-events-none absolute inset-0 hidden h-full w-full sm:block" viewBox="0 0 1000 400" preserveAspectRatio="none" aria-hidden="true">
          <path d="M500 75 L500 175" />
          <path d="M460 205 C350 180 260 185 145 205" />
          <path d="M540 205 C650 170 700 95 790 75" />
          <path d="M550 205 C660 205 760 205 870 205" />
          <path d="M535 225 C640 260 700 315 780 340" />
        </svg>
        <div className="architecture-core sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2">
          <span className="font-mono text-[9px] tracking-[.18em] text-teal-100/65">CORE</span>
          <span className="mt-2 block text-lg font-medium text-stone-100">SERVICES</span>
        </div>
        <ul className="architecture-node-list mt-4 grid grid-cols-2 gap-2 sm:mt-0 sm:block">
          {architectureNodes.map(([name, description, position]) => (
            <li key={name} className={`architecture-node sm:absolute ${position}`}>
              <span className="font-mono text-[10px] tracking-[.12em] text-stone-100">{name}</span>
              <span className="mt-1 block text-[10px] text-stone-400">{description}</span>
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-4 text-xs text-stone-500">Conceptual learning model · components and trade-offs vary by system.</p>
    </div>
  );
}
