// main.ts — equals-Demo aus der UE (OOP in TypeScript: equals-Methode).
// Gegenüberstellung: eigene equals-Methode vs. == vs. === (Referenzsemantik).
// Die Klassen sind exportiert, damit main_test.ts sie prüfen kann.
export class NeverGleich {
  constructor() {
    // Constructor logic here
  }
  equals(_other: unknown): boolean {
    return false;
  }
}
const a = new NeverGleich();
const b = a;
console.log(a.equals(b)); // Output: false
console.log(a == b); // Output: true
console.log(a === b); // Output: true

export class ImmerGleich {
  constructor() {
    // Constructor logic here
  }
  equals(_other: unknown): boolean {
    return true;
  }
}
const c = new ImmerGleich();
const d = new ImmerGleich();
console.log(c.equals(d)); // Output: true
console.log(c == d); // Output: false
console.log(c === d); // Output: false
