/**
 * Portfolio Data Structure
 * Comprehensive professional profile covering resume data and deep technical expertise
 * All data sourced from resume PDFs and content.md
 */

export interface PersonalInfo {
    name: string;
    title: string;
    location: string;
    phone: string;
    email: string;
    dob: string;
    linkedin: string;
    twitter: string;
    github: string;
}

export interface Education {
    institution: string;
    degree: string;
    field: string;
    gpa: string;
    duration: string;
    location: string;
    highlights: string[];
}

export interface WorkExperience {
    company: string;
    position: string;
    duration: string;
    location: string;
    achievements: string[];
}

export interface Project {
    title: string;
    role: string;
    organization: string;
    duration: string;
    location: string;
    description: string;
    achievements: string[];
    impact: string;
}

export interface SkillCategory {
    category: string;
    skills: string[];
}

export interface ExpertiseArea {
    title: string;
    description: string;
    competencies: {
        title: string;
        items: string[];
    }[];
}

export const personalInfo: PersonalInfo = {
    name: "Hemanth Kandimalla",
    title: "AI Research Lead",
    location: "Bengaluru, Karnataka 560093",
    phone: "+91 9346088293",
    email: "kandimallahemanthies@gmail.com",
    dob: "17-May-1994",
    linkedin: "https://linkedin.com/in/hemanth-k-a88786215",
    twitter: "https://x.com/Hemanth2022pee",
    github: "https://github.com/generalaimodels",
};

export const education: Education = {
    institution: "Indian Institute of Technology Jammu",
    degree: "M.Tech",
    field: "Communications and Signal Processing",
    gpa: "8.34 CGPA",
    duration: "2021 - 2023",
    location: "Jammu and Kashmir",
    highlights: [
        "Built end-to-end speaker recognition system from concept to onsite deployment",
        "Collected and organized IIT Jammu voice dataset with whispered, normal, and mimicked speech",
        "Developed Transformer-based model inspired by Whisper using triplet loss for improved matching",
    ],
};

export const workExperience: WorkExperience[] = [
    {
        company: "Centre for Development of Advanced Computing (C-DAC)",
        position: "Knowledge Associate (R&D)",
        duration: "Aug 2023 - Present",
        location: "Bengaluru, Karnataka",
        achievements: [
            "Directed RL research, boosting LLM/VLM adversarial defense robustness by 35%",
            "Built unified data pipeline, accelerating model adaptation workflows by 40%",
            "Reduced training costs 30% via parameter-efficient fine-tuning (SFT, PPO, DPO)",
            "Engineered agent framework, increasing RAG retrieval accuracy by 25%",
            "Upgraded scalable inference for LRS, LLMs, VLMs, increasing throughput by 20%",
            "Design and evaluate frontier foundation-model architectures across modalities at scale",
            "Advance model reasoning via curriculum design and synthetic data generation",
            "Build agentic-RAG applications and multi-agent orchestration systems",
        ],
    },
    {
        company: "MediaTek",
        position: "Modem Software Engineer",
        duration: "Jul 2022 - Dec 2022",
        location: "Bengaluru, Karnataka",
        achievements: [
            "Optimized LTE modem development, improving wireless product performance",
            "Enhanced system efficiency and reduced processing times via PHY/MAC tuning",
            "Collaborated cross-functionally on architecture integration and debugging",
        ],
    },
];

export const projects: Project[] = [
    {
        title: "Adversarial Attack Defense System (NSM-AICS)",
        role: "Technical Lead",
        organization: "C-DAC",
        duration: "Aug 2023 - Present",
        location: "Bengaluru, Karnataka",
        description: "Directed RL defenses against AI model attacks using PPO algorithm",
        achievements: [
            "Implemented 10 attack and 10 defense strategies in RLADO module",
            "Pioneered performance analysis on language-vision models and LLMs",
            "Designed evaluation frameworks while training team on defense techniques",
            "Enhanced system robustness by 35%, exceeding security benchmarks",
        ],
        impact: "35% improvement in adversarial robustness",
    },
    {
        title: "Generalized Data Processing & Fine-Tuning Pipeline",
        role: "Technical Lead",
        organization: "C-DAC",
        duration: "Oct 2023 - Present",
        location: "Bengaluru, Karnataka",
        description: "Developed comprehensive data pipeline with advanced fine-tuning techniques",
        achievements: [
            "Built framework supporting 52 file extensions for dataset loading",
            "Implemented SFT, PPO, DPO fine-tuning techniques",
            "Reduced data preparation time by 60% through advanced preprocessing API",
            "Reduced training costs 65% via parameter-efficient tuning approaches",
            "Established team PEFT expertise and LLM adaptation algorithms",
        ],
        impact: "65% reduction in training costs",
    },
    {
        title: "Advanced Retrieval Agent Framework",
        role: "Project Advisor",
        organization: "C-DAC",
        duration: "Sept 2023 - Present",
        location: "Bengaluru, Karnataka",
        description: "Designed state-of-the-art multi-modal retrieval system with RAG capabilities",
        achievements: [
            "Enhanced inference across LLMs/VLMs with functional calling integration",
            "Developed sophisticated chatbot using Llama-3.2-Instruct with RAG",
            "Improved knowledge retrieval accuracy by 42% through architecture innovations",
            "Generated responses in text and audio formats, enhancing UX by 40%",
        ],
        impact: "42% improvement in retrieval accuracy",
    },
    {
        title: "Real-time Speaker Recognition System",
        role: "Lead Researcher",
        organization: "IIT Jammu",
        duration: "Sept 2022 - Apr 2023",
        location: "Jammu",
        description: "Spearheaded development of real-time speaker recognition using Transformers",
        achievements: [
            "Collected and curated diverse voice datasets, increasing diversity by 70%",
            "Developed Transformer-based model with triplet loss architecture",
            "Successfully deployed system operational in real-time at IIT Jammu",
        ],
        impact: "Production deployment at IIT Jammu",
    },
];

export const skills: SkillCategory[] = [
    {
        category: "Programming Languages",
        skills: ["Python", "C++", "CUDA", "Bash", "JavaScript", "TypeScript", "HTML", "CSS"],
    },
    {
        category: "AI/ML & Deep Learning",
        skills: [
            "Large Language Models (LLMs)",
            "Vision Language Models (VLMs)",
            "Multi-Modal Language Models (MMLMs)",
            "Pre-trained Language Models (PLMs)",
            "Transformers",
            "CNNs",
            "RNNs",
            "GANs",
            "VAEs",
            "Graph Neural Networks (GNNs)",
        ],
    },
    {
        category: "Frameworks & Libraries",
        skills: [
            "PyTorch",
            "Torchvision",
            "Torchaudio",
            "Transformers",
            "Datasets",
            "PEFT",
            "Accelerate",
            "TRL",
            "vLLM",
            "DeepSpeed",
            "Stable-Baselines3",
            "Gymnasium",
            "JAX",
            "TensorFlow",
        ],
    },
    {
        category: "Model Architectures",
        skills: [
            "LLaMA-3.3",
            "Phi-4",
            "Gemma-3",
            "Qwen-2.5",
            "Mistral",
            "Falcon",
            "CLIP",
            "BLIP",
            "PaLI",
            "Florence",
            "OFA",
        ],
    },
    {
        category: "Infrastructure & Tools",
        skills: [
            "TPUs/GPUs",
            "FSDP",
            "DeepSpeed ZeRO",
            "Megatron-LM",
            "Slurm",
            "Kubernetes",
            "Ray",
            "Weights & Biases",
            "MLflow",
        ],
    },
    {
        category: "Databases",
        skills: ["SQL", "PostgreSQL", "Vector Stores", "Knowledge Graphs"],
    },
];

export const expertiseAreas: ExpertiseArea[] = [
    {
        title: "AI Training Engineering Excellence",
        description: "Mastered entire pipeline from large-scale data engineering to pretraining and post-training alignment",
        competencies: [
            {
                title: "Data Engineering Mastery",
                items: [
                    "Petabyte-scale data pipelines using Apache Spark, Dask, Ray Data",
                    "Advanced deduplication (MinHash, SimHash), PII detection and removal",
                    "Synthetic data generation and curriculum data ordering",
                    "Custom tokenizer development (BPE, SentencePiece)",
                ],
            },
            {
                title: "Pretraining Engineering",
                items: [
                    "Multi-node training across thousands of GPUs/TPUs using FSDP, DeepSpeed ZeRO",
                    "CUDA programming, NCCL, InfiniBand, NVLink optimization",
                    "Training stability: loss spikes, gradient explosion mitigation",
                    "Compute cluster management with Slurm, Kubernetes, Ray",
                ],
            },
            {
                title: "Post-Training & Alignment",
                items: [
                    "Supervised Fine-Tuning (SFT) with LoRA/QLoRA",
                    "Reward modeling (Bradley-Terry, ensemble models)",
                    "Advanced RL algorithms: PPO, DPO, GRPO, KTO, IPO, ORPO",
                    "Constitutional AI: principle-based training, red-teaming",
                ],
            },
        ],
    },
    {
        title: "Advanced Agentic AI Systems",
        description: "Building intelligent autonomous systems that leverage LLMs for complex, multi-step tasks",
        competencies: [
            {
                title: "Core Architecture",
                items: [
                    "Expert in LangGraph, AutoGen, CrewAI frameworks",
                    "Tool integration: function calling, API integration, sandboxed execution",
                    "Memory systems: short-term, long-term, episodic, semantic",
                    "Planning mechanisms: task decomposition, CoT, Tree/Graph of Thoughts, ReAct",
                ],
            },
            {
                title: "Key Projects",
                items: [
                    "Autonomous research agents with web research and report generation",
                    "Code generation agents for multi-file codebases with testing",
                    "Data analysis agents for automated EDA and insight generation",
                    "Customer service agents with multi-turn conversation and tool use",
                ],
            },
            {
                title: "Best Practices",
                items: [
                    "Complex agent state machines for robust behavior",
                    "Comprehensive failure recovery and graceful degradation",
                    "Full trace logging, debugging, and performance monitoring",
                    "Security: prompt injection prevention, secure tool execution",
                ],
            },
        ],
    },
    {
        title: "Multi-Agent Orchestration",
        description: "Architecting collaborative AI ecosystems where multiple agents coordinate to achieve shared objectives",
        competencies: [
            {
                title: "Architecture Patterns",
                items: [
                    "Hierarchical (manager-worker), collaborative (peer-to-peer) patterns",
                    "Competitive (debate/adversarial), sequential (pipeline) orchestration",
                    "Communication: message passing, blackboard, pub-sub, request-response",
                    "Consensus algorithms, dynamic task allocation, conflict resolution",
                ],
            },
            {
                title: "Advanced Techniques",
                items: [
                    "Mixture of Agents: specialized agents for complex problems",
                    "Agent debate & critique for higher quality solutions",
                    "Hierarchical planning with manager-worker delegation",
                    "Self-organizing teams with dynamic role allocation",
                ],
            },
            {
                title: "Production Experience",
                items: [
                    "Autonomous software development teams (architect, developer, tester)",
                    "Complex research synthesis from vast information sources",
                    "Multi-perspective decision-making systems for enterprise",
                    "Cross-functional workflow automation with tool integration",
                ],
            },
        ],
    },
];

export const summary: string = `AI Research Lead with expertise in reinforcement learning, adversarial robustness, and large language/vision model fine-tuning. Proven track record in leading multi-disciplinary teams, architecting scalable data pipelines, and optimizing training/inference costs. Specialized in Parameter-Efficient Fine-Tuning (PEFT), advanced retrieval-augmented generation (RAG), and SOTA agent frameworks. Skilled in upskilling teams on LLMs and deploying production-grade AI solutions.`;

export const achievements: string[] = [
    "All India Rank (AIR) 1224 in GATE 2021",
    "Indian AI Summit Delegate representing C-DAC",
    "Contributed to IIT Mandi iHub proposal on Low-Resource Language Preservation using LLMs",
    "Developed multiple production chatbots and forensics data analysis tools",
];
