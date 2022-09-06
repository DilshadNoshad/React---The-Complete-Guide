import React, { Fragment, useEffect } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
// const DUMMY_QUOTES = [
//   { id: "q1", author: "Max", text: "Learning React is fun!" },
//   { id: "q2", author: "Maximilian", text: "Learning React is great!" },
// ];
const QuoteDetail = () => {
  const params = useParams();
  const location = useLocation();

  const { quoteId } = params;

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  // console.log(loadedQuote);
  //  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedQuote.text) {
    return <p>No quote found!</p>;
  }

  const isHighlightQuote = location.pathname === `/quotes/${quoteId}`;
  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      {isHighlightQuote && (
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${quoteId}/Comments`}>
            Load Comments
          </Link>
        </div>
      )}
      <Outlet />
    </Fragment>
  );
};

export default QuoteDetail;
