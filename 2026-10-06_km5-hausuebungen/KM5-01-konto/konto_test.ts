import { assertEquals } from "@std/assert";
import { Konto } from "./konto.ts";

// zwei Konten mit gleicher IBAN, verschiedenem Stand -> equals() ist true
Deno.test("gleiche IBAN, verschiedener Stand -> equals true", () => {
  const a = new Konto("AT1234", 500);
  const b = new Konto("AT1234", 900);
  assertEquals(a.equals(b), true);
});

// zwei Konten mit verschiedener IBAN, gleichem Stand -> equals() ist false
Deno.test("verschiedene IBAN, gleicher Stand -> equals false", () => {
  const a = new Konto("AT1234", 500);
  const b = new Konto("AT9999", 500);
  assertEquals(a.equals(b), false);
});

// a === b für zwei `new Konto(...)` ist false (Identität != Zustand)
Deno.test("=== vergleicht Identität, nicht Zustand", () => {
  const a = new Konto("AT1234", 500);
  const b = new Konto("AT1234", 500);
  assertEquals(a === b, false);
  assertEquals(a.equals(b), true);
});