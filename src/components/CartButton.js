import { h as html } from "stage0";

import { store, events } from "../model";
import { pluralize } from "../helpers/utils";

import Button from "./UI/Button";

const View = html`
  <span class="shopkit-cart-button"></span>
`;

export default function CartButton(item) {
  const { moltinText, moltinShowTotal } = item;
  let { count, subTotal } = store.get().cart;

  const root = View.cloneNode(true);

  function buttonSuffix() {
    return subTotal || count
      ? ` (${moltinShowTotal ? subTotal : pluralize(count, "item")})`
      : null;
  }

  const buttonText = () => `${moltinText || "Cart"}${buttonSuffix() || ""}`;

  const child = Button({
    text: buttonText(),
    type: "primary"
  });

  root.appendChild(child);

  root.update = () => {
    ({ count, subTotal } = store.get().cart);
    child.update(buttonText());
  };

  events.on("cart", () => root.update());

  root.__click = () => store.dispatch("openCart");

  return root;
}
