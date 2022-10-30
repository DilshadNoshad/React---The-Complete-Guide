import Link from "next/link";
import { Fragment } from "react";

function HomePage() {
  return (
    <Fragment>
      <h1>HomePage</h1>
      <ul>
        <li>
          <Link href="/news/next-js">Next js is awesome!!!</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default HomePage;
