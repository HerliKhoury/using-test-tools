import { render } from "@testing-library/vue";
import { describe, expect, test } from "vitest";
import App from "./App.vue";

describe("Test - App.vue file", () => {
  /* Hello testess */
  test("Olha 1 + 1 tem que ser 2", () => {
    const sum = 1 + 1;
    expect(sum).toBe(2);
  });

  test("Deve haver componente Login página", async () => {
    const { getByTestId } = render(App);
    expect(await getByTestId("router-view")).toBeInTheDocument();
  });
});
