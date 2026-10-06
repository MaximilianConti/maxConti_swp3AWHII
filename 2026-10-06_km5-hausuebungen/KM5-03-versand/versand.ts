// Eigener Vertrag: Versandfähiges Paket mit readonly-Gewicht + Methode.
export interface Versandgut {
  readonly gewichtKg: number;
  versende(an: string): void;
}

export class Brief implements Versandgut {
  readonly gewichtKg: number;
  constructor(gewichtKg: number) {
    this.gewichtKg = gewichtKg;
  }
  versende(an: string): void {
    console.log(`Brief (${this.gewichtKg} kg) an ${an}: 1,20 €`);
  }
}

export class Paket implements Versandgut {
  readonly gewichtKg: number;
  constructor(gewichtKg: number) {
    this.gewichtKg = gewichtKg;
  }
  versende(an: string): void {
    // Grundpreis 4,90 €, Aufschlag je kg.
    const preis = 4.9 + this.gewichtKg;
    console.log(`Paket (${this.gewichtKg} kg) an ${an}: ${preis.toFixed(2)} €`);
  }
}

// Funktion kennt nur den Vertragstyp, nicht die konkreten Klassen.
export function verschickeAlles(gut: Versandgut, an: string): string {
  gut.versende(an);
  return `versendet: ${gut.gewichtKg} kg`;
}