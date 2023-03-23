import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
//react query
import { QueryClient, QueryClientProvider } from "react-query";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./errors/ErrorFallback";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <ErrorBoundary FallbackComponent={() => <ErrorFallback />}>
      <App />
    </ErrorBoundary>
  </QueryClientProvider>
);
