import React, { useContext } from "react";

function Links({}) {
  // We must pass the ShopContext object itself as an argument  return
  const { cartItems } = useContext(ShopContext);
  return (
    <ul>
      {/* Other links */}
      <li>
        <Link to="Link to the cart">
          <span>Cart</span>
          <div class="cart-icon">{cartItems.length}</div>
        </Link>
      </li>
    </ul>
  );
}

export default function Header({ cartItemsCount }) {
  return (
    <header>
      {/* Other header elements */}
      <nav>
        <Links />
      </nav>
    </header>
  );
}
