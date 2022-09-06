import { Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};
const QuoteList = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isSortingAsc = queryParams.get("sort") === "asc";
  const sortingHandler = () => {
    // navigate('/quotes?sort=' + (isSortingAsc ? 'dec' : 'asc'))
    navigate({
      pathname: location.pathname,
      search: `?sort=${isSortingAsc ? "dec" : "asc"}`,
    });
    // navigate(`${location.pathname}?sort=${isSortingAsc ? "dec" : "asc"}`);
  };
  const sortedQuotes = sortQuotes(props.quotes, isSortingAsc);
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={sortingHandler}>
          Sort {isSortingAsc ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
