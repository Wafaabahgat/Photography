import Link from "next/link";
import React from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div>
      <div>
        <Link href="/">
          <h1>capture</h1>
        </Link>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/#gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/work">Work</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Button */}

        <AiOutlineMen />
      </div>
    </div>
  );
};

export default Navbar;
