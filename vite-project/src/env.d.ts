interface ImportMetaEnv {
    readonly VITE_SERVICE_ID: string;
    readonly VITE_TEMPLATE_ID: string;
    readonly VITE_PUBLIC_KEY;
    // add any other VITE_ variables you use here
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  