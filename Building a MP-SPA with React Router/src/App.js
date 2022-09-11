import React from "react";
import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

// import Comments from "./components/comments/Comments";
// import AllQuote from "./pages/AllQuote";
// import NewQuote from "./pages/NewQuote";
// import NotFound from "./pages/NotFound";
// import QuoteDetail from "./pages/QuoteDetail";

const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
const AllQuote = React.lazy(() => import("./pages/AllQuote"));
const Comments = React.lazy(() => import("./components/comments/Comments"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Navigate to="/quotes" />} />
          <Route path="/quotes">
            <Route index element={<AllQuote />} />
            <Route path=":quoteId/*" element={<QuoteDetail />}>
              <Route path="Comments" element={<Comments />} />
            </Route>
          </Route>
          <Route path="/new-quote" element={<NewQuote />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
