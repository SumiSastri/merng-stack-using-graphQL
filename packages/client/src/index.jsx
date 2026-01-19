import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom"
import './index.css';
import App from './App';
import { ApolloProvider } from "@apollo/client";
import client from './apolloClient';  


function ErrorBoundary({ children }) {
  try {
    return children;
  } catch (err) {
    console.error("Render error:", err);
    return <div>Something went wrong</div>;
  }
}

// console.log("Index.jsx loaded");

const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log("Root container:", document.getElementById('root'));
// console.log("Rendering App now...");
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ApolloProvider client={client}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);

