// main_test.ts — Tests zur equals-Demo aus main.ts.
// Anmerkung: der Starter im Lehrer-Repo importierte ein `handler` aus main.ts,
// das es dort nicht gibt (Rest eines `deno init`-Templates) — der Test war
// dadurch nicht lauffähig. Dieser Test prüft die eigentliche Aussage der Demo:
// equals() ist etwas anderes als == und === (Referenzsemantik).
import { assertEquals } from "@std/assert";
import { ImmerGleich, NeverGleich } from "./main.ts";

Deno.test("NeverGleich: equals() ist false, obwohl a === b gilt", () => {
  const a = new NeverGleich();
  const b = a;
  assertEquals(a.equals(b), false);
  assertEquals(a === b, true);
});

Deno.test("NeverGleich: equals() ist false, auch bei gleicher Adresse", () => {
  const a = new NeverGleich();
  assertEquals(a.equals(a), false);
});

Deno.test("ImmerGleich: equals() ist true, obwohl c !== d gilt", () => {
  const c = new ImmerGleich();
  const d = new ImmerGleich();
  assertEquals(c.equals(d), true);
  assertEquals(c === d, false);
});

Deno.test("ImmerGleich: equals() ist true, auch bei verschiedenem Objekt", () => {
  const c = new ImmerGleich();
  const d = new ImmerGleich();
  assertEquals(c.equals(d), true);
  assertEquals(c == d, false);
});
