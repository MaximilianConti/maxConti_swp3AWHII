import { assertEquals, assertStrictEquals } from "@std/assert";
import { Brief, Paket, verschickeAlles } from "./versand.ts";
import type { Versandgut } from "./versand.ts";

// Beide Klassen erfüllen den Vertrag: Funktion akzeptiert beide.
Deno.test("verschickeAlles akzeptiert Brief und Paket", () => {
  assertEquals(verschickeAlles(new Brief(0.2), "Auer"), "versendet: 0.2 kg");
  assertEquals(verschickeAlles(new Paket(3), "Beck"), "versendet: 3 kg");
});

// Ein Objekt mit passender Form ohne implements wird akzeptiert
// (structural typing).
Deno.test("Objekt-Literal ohne implements erfüllt den Vertrag", () => {
  const gewichtKg = 1.5;
  const pseudo: Versandgut = {
    gewichtKg,
    versende(_an: string): void {},
  };
  assertEquals(verschickeAlles(pseudo, "Cevik"), "versendet: 1.5 kg");
  assertStrictEquals(pseudo.gewichtKg, 1.5);
});