// src/pages/_app.tsx

import '../index.css'; // Import your global CSS here
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
