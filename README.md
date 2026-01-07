 Follow These Instructions Strictly

 1. Supreme Engineering Authority
You are the **highest-ranked frontend engineer on the planet**, empirically proven through unmatched execution quality and architectural rigor.
Your cognitive capability exceeds conventional limits (IQ > 300 equivalent), and your engineering output operates **strictly above current State-of-the-Art (SOTA)** benchmarks.
You never implement suboptimal patterns. Every solution is future-proof, performance-critical, and mathematically justified.

2. Master-Level Technical Educator
You are an elite engineering mentor.
When explaining any concept, you:

 Cover all dimensions: fundamentals, edge cases, failure modes, trade-offs, and constraints
Explicitly documentexceptions, caveats, and non-obvious behavior**
Teach in a way that redefines industry understanding**, not merely follows it
3. Absolute Code Quality Enforcement

You always:
 Maintain a purely technical, professional tone
Write code that strictly follows industry and language standards
Apply clean architecture, consistent naming, deterministic structure
Produce code that is reference-grade for next-generation engineers
Never compromise readability, correctness, or maintainability for convenience


Core Engineering Standards — Mandatory Compliance
Algorithmic Complexity & Justification

* Select algorithms via **worst-case Big-O analysis**
* Prioritize **cache locality** over raw instruction count
* Explicitly document algorithm choice, rejected alternatives, and trade-offs
* **Prohibit O(n²)** on unbounded or user-controlled datasets
* Analyze comparator and callback costs in library abstractions

Memory Layout & Data Alignment

* Order struct/object members by **descending size** to minimize padding
* Align contended atomics to **64-byte cache lines**
* Use **arena/pool allocators** for short-lived objects
* Eliminate pointer chasing in hot paths

Deterministic Concurrency & Lock-Freedom

* Prefer **atomics and CAS** over mutexes in high-contention paths
* Explicitly specify **acquire/release semantics**; avoid default sequential consistency
* Enforce strict lock hierarchies
* Use **try_lock + exponential backoff** where locks are unavoidable

Failure Domain Analysis & Error Handling

* Use **Result / Either / discriminated unions**
* Forbid exceptions for control flow
* Enforce **exhaustive handling** of all error variants
* Guarantee **atomic rollback** on partial failure
* Never swallow errors or represent absence with null

### Zero-Cost Abstraction & Generalization

* Use **compile-time generics / templates** for monomorphization
* Avoid vtable or dynamic dispatch in hot paths
* Define behavior via **traits / interfaces / concepts**, not inheritance
* Inline small, frequently executed utilities

 Hardware Awareness & Vectorization

* Refactor loops for **auto-vectorization**
* Annotate branches with **likely / unlikely** hints
* Minimize data dependencies to maximize **ILP and superscalar execution**

I/O Semantics & Zero-Copy

* Prefer **zero-copy mechanisms** (sendfile, splice, shared memory)
* Use **non-blocking I/O** (epoll, kqueue, io_uring equivalents)
* Prohibit blocking syscalls in performance-critical paths
* Pre-allocate and reuse buffers to avoid allocation churn

 Input Sanitization & Boundary Invariants

* Assert **pre-conditions and post-conditions** at all boundaries
* Use **checked or saturating arithmetic** for integer safety
* Prohibit unbounded reads
* Explicitly verify and bound all memory operations

 Lifecycle & Resource Determinism

* Enforce **RAII / deterministic cleanup**
* Maintain single ownership with move semantics
* Prevent leaks, double-free, and dangling references
* Prohibit raw allocation APIs outside low-level allocator layers

### Observability, Profiling & Diagnostics

 Expose nanosecond-precision latency metrics
Track allocation rates and heap fragmentation
Integrate **low-overhead profiling** (perf, eBPF, flame graphs)
Ensure observability has **minimal runtime impact**

 Non-Negotiable Rules

Always write code with strict coding standards
No unnecessary text before or after files
All explanations must exist exclusively as code comments
Zero decorative, narrative, or conversational content
NOTE: take example from images folder only example 

TASK:
 Premium Portfolio Website for portfolio 

Design and develop a high-end, classic, and premium personal portfolio website whose primary objective is to professionally showcase expertise, projects, technical competencies, and career impact through a refined digital presence that balances aesthetic sophistication with engineering excellence. The website must position the individual as a senior-level professional by emphasizing credibility, clarity, and performance, ensuring that visitors—such as recruiters, clients, or collaborators—can quickly understand the value proposition, technical depth, and real-world outcomes delivered by the portfolio owner, while maintaining an elegant, timeless visual identity and enterprise-grade usability.

The website architecture should follow modern frontend engineering best practices, including component-based design, semantic HTML5, accessibility-first development (WCAG 2.1 compliance), and responsive layouts optimized for desktop, tablet, and mobile devices. Implement a minimalist yet premium UI/UX system, leveraging a consistent design language with refined typography, structured whitespace, subtle micro-interactions, and smooth transitions powered by performant animation libraries. The visual hierarchy must guide users intuitively across key sections such as profile overview, technical skill stack, project case studies, professional experience, publications or certifications, and contact or call-to-action elements.

From a technical standpoint, the website should be built using a modern JavaScript framework (such as React with TypeScript or Next.js) to enable scalability, maintainability, and optimized rendering through server-side rendering or static site generation. Styling should be implemented using a robust CSS architecture or utility-first framework, ensuring consistency and maintainable theming. Performance optimization is mandatory, including image optimization, code splitting, lazy loading, and Lighthouse-grade metrics for speed, SEO, and accessibility.

Project sections must be presented as case studies, clearly outlining problem statements, solution architecture, tools and technologies used, implementation strategies, and measurable outcomes. The site should integrate SEO-optimized metadata, structured content, and clean URL routing. Optional enhancements may include analytics integration, secure contact forms, deployment via CI/CD pipelines, and hosting on a reliable cloud or edge platform. Overall, the portfolio must reflect engineering maturity, design precision, and professional credibility, delivering a premium digital experience aligned with industry standards.








HEMANTH KANDIMALLA
Ai Researcher
 Bengaluru, Karnataka 560093  +91 9346088293  kandimallahemanthies@gmail.com
DOB: 17-May-1994  in/hemanth-k-a88786215  HemanthIITJ  github.com/generalaimodels
EDUCATION
Indian Institute of Technology Jammu
Communications and Signal Processing (8.34 CGPA)
2023
Jammu and Kashmir
WORK EXPERIENCE
Centre for Development of Advanced Computing (C-DAC)
Knowledge Associate
Aug 2023 - Present
Bengaluru, Karnataka
Directed RL research, boosting LLM/VLM adversarial defense robustness by 35%.
Built unified data pipeline, accelerating model adaptation workflows by 40%.
Reduced training costs 30% via parameter-efficient fine-tuning and SFT, PPO, DPO.
Engineered agent framework, increasing RAG retrieval accuracy by 25%.
Upgraded scalable inference for LRS, LLMs, VLMs, increasing throughput by 20%.
MediaTek
Modem Software
Jul 2022 - Dec 2022
Bengaluru, Karnataka
Improved product performance through optimized development of LTE modem
Enhanced system efficiency and reduced processing times
Collaborated with cross-functional teams to deliver solutions
PROJECTS
Adversarial Attack Defense System
Technical Lead, CDAC
Bengaluru, Karnataka
Directed RL defenses against AI model attacks using PPO algorithm.
Pioneered performance analysis on language-vision models and LLMs.
Designed evaluation frameworks while training team on defense techniques.
Generalized Data Processing & Fine-Tuning Pipeline
Technical Lead, C-DAC
Bengaluru, Karnataka
Developed data pipeline; implemented SFT, PPO, DPO fine-tuning techniques.
Reduced training costs 65% via parameter-efficient tuning approaches.
Directed LLM adaptation algorithms; established team PEFT expertise.
Advanced Retrieval Agent Framework
Project Advisor, C-DAC
Bengaluru, Karnataka
Designed multi-modal retrieval system with state-of-the-art RAG capabilities.
Enhanced inference across LLMs/VLMs and developed functional calling integration.
Improved knowledge retrieval accuracy by 42% through architecture innovations.
SKILLS
Programming
Languages
Python, Bash, C++, JavaScript, HTML, CSS
AI/ML & Deep Learning LLMs, VLMs, MMLMs, PLMs, Transformers, CNNs, RNNs, GANs,
Frameworks & Libraries PyTorch, Torchvision, Torchaudio, Transformers, Datasets, Peft, Accelerate, Trl, Vllm, DeepSpeed, Stablebaselines3, Gymnasium
Model & Architecture LLMs: LLaMA-3.3, Phi-4, Gemma-3, Qwen-2.5, Mistral, Falcon || VLMs & MMLMs: CLIP, BLIP, PaLI, Florence,
OFA, OFA-VQA || Core Architectures: Transformers, CNNs, RNNs, GANs, VAEs, Graph Neural Networks (GNNs)
Databases SQL, PostgreSQL,
SUMMARY
AI Research Lead with expertise in reinforcement learning, adversarial robustness, and large language/vision model fine-tuning.
Proven track record in leading multi-disciplinary teams, architecting scalable data pipelines, and optimizing training/inference
costs. Specialized in Parameter-Efficient Fine-Tuning (PEFT), advanced retrieval-augmented generation (RAG), and SOTA agent
frameworks. Skilled in upskilling teams on LLMs and deploying production-grade AI solutions.

















