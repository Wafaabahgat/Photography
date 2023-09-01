import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div>
        <Link href="/">
          <h1>capture</h1>
        </Link>
        <ul>
          <li>
          <Link href="/"> H  </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
