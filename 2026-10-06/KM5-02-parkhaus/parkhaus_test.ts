import { assertEquals, assertThrows } from "@std/assert";
import { Parkhaus } from "./parkhaus.ts";

// Invariante I2: nie mehr einfahren als Plätze da sind.
Deno.test("einfahren über Kapazität wirft", () => {
  const p = new Parkhaus(10, 8);
  assertThrows(() => p.einfahren(3), Error, "frei");
});

// Invariante I1: nie mehr ausfahren als drinsteht.
Deno.test("ausfahren über Belegung wirft", () => {
  const p = new Parkhaus(10, 2);
  assertThrows(() => p.ausfahren(3), Error, "Fahrzeuge");
});

// Grüner Pfad: gültiger Übergang.
Deno.test("einfahren und ausfahren im erlaubten Bereich", () => {
  const p = new Parkhaus(10, 2);
  p.einfahren(3);
  assertEquals(p.belegtePlaetze, 5);
  p.ausfahren(4);
  assertEquals(p.belegtePlaetze, 1);
});