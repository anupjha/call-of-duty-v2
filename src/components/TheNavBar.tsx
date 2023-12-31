import { Link } from "wouter-preact";
import { Theme } from "../types/theme";
import { Signal } from "@preact/signals";
import { applyTheme, setTheme } from "../utils";
import AppButton from "./AppButton";

export default function TheNavBar({ theme }: { theme: Signal<Theme> }) {
  const handleClick = () => {
    if (theme.value === "light") {
      theme.value = "dark";
    } else {
      theme.value = "light";
    }
    applyTheme(theme.value);
    setTheme(theme.value);
  };

  return (
    <div class="h-12 p-3 flex-row bg-primary border-0 border-b-1 border-solid border-color-primary">
      <div class="f-1 h-6"></div>
      <div class="w-36 h-6">
        <Link href="/" class="text-decoration-none h-6">
          <h1 class="m-0 h-6 text-center text-medium text-primary font-weight-600 hover-bg-link cursor-pointer">
            CALL of DUTY
            <span class="text-tiny">An office warfare</span>
          </h1>
        </Link>
      </div>
      <div class="f-1 h-6 text-right">
        <div class="layout-stack-horizontal-1">
          <Link href="/" class="text-decoration-none text-secondary text-small hover px-2 py-1">
            Board
          </Link>
          <Link href="/todo" class="text-decoration-none text-secondary text-small hover px-2 py-1">
            Todo
          </Link>
          <Link href="/note" class="text-decoration-none text-secondary text-small hover px-2 py-1">
            Note
          </Link>
          <AppButton text={theme.value === "light" ? "Light" : "Dark"} onClick={handleClick} />
        </div>
      </div>
    </div>
  );
}
