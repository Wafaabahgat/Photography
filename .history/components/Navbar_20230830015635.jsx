import Link from "next/link";
import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  return (
    The code snippet you've provided appears to be using Tailwind CSS classes to style a `<div>` element. Tailwind CSS is a utility-first CSS framework that allows you to apply styles directly to HTML elements by adding class names.

    Let's break down the classes used in this snippet:
    
    - `fixed`: This class applies a fixed positioning to the element. The element will be positioned relative to the viewport, and it will not scroll with the rest of the content.
    
    - `left-0`: This class positions the element at the left edge of its containing element (in this case, the viewport). The `0` indicates that it should be positioned at the very left edge.
    
    - `top-0`: This class positions the element at the top edge of its containing element (viewport). The `0` indicates that it should be positioned at the very top edge.
    
    - `w-full`: This class sets the width of the element to 100% of its containing element (viewport in this case).
    
    - `z-10`: This class sets the z-index of the element to `10`. The z-index determines the stacking order of elements. Higher values appear above lower values.
    
    - `ease-in`: This class applies an easing function to the transition. The "ease-in" function causes the transition to start slowly and then accelerate.
    
    - `duration-300`: This class sets the duration of a transition to `300ms` (milliseconds). Transitions are used to smoothly animate changes in properties over time.
    
    In summary, the provided snippet is styling a `<div>` element using Tailwind CSS classes to achieve a fixed position element that is positioned at the top-left corner of the viewport, spanning the full width. It has a stacking order of 10, and it transitions in with an easing effect that starts slowly and accelerates over a duration of 300 milliseconds.      <div>
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
        <AiOutlineMenu size={20} />

        {/* Mobile Menu */}
        <div>
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
