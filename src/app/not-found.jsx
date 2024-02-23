import React from "react";
import Link from "next/link";
const NotFound = () => {
  return (
    <div>
      <h1>Lmao, we doesn't exist here.</h1>
      <p>Seems like the page you're trying to access doesn't actually exist.</p>
      <small>
        You can <Link href="/">return to home :P</Link>
      </small>
    </div>
  );
};

export default NotFound;
