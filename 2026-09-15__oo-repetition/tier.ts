// Unterrichts-Domäne für die HÜ 1: Klasse/Instanz/Zustand.
// Dein Job: equals() und fuettern() ergänzen, bis tier_test.ts grün ist.
export class Tier {
  readonly name: string;
  private gewicht: number;

  constructor(name: string, gewicht: number) {
    if (gewicht <= 0) {
      throw new Error(`Gewicht muss positiv sein (war ${gewicht})`);
    }
    this.name = name;
    this.gewicht = gewicht;
  }

  equals(other: Tier): boolean {
    return this.name === other.name && this.gewicht === other.gewicht;
  }

  fuettern(kg: number): void {
    if (kg <= 0) {
      throw new Error(`Futtermenge muss positiv sein (war ${kg})`);
    }
    this.gewicht += kg;
  }

  toString(): string {
    return `${this.name} (${this.gewicht} kg)`;
  }
}
