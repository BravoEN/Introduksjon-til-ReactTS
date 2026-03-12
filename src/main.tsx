import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

/*
Dette er filen som starter appen ved å kjøre den første renderingen.

Den lille delen med kode er opprettelsen av et objekt som lagrer og
har kontroll på alle API kall som skjer i prosjektet. QueryClientProvider
er en funksjon som gjør dette objektet tilgjengelig for alle komponenter
i prosjektet.

Det er verdt å nevne at denne biten med kode kunne ha blitt plassert i app.tsx,
men jeg syntes det er ryddigere å ha den her. Det viktigste er at den er utenfor
en react component, for hvis ikke kommer den ikke til å fungere.
*/

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient:QueryClient=new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
)
