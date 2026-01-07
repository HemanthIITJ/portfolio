declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}

/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly BASE_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
