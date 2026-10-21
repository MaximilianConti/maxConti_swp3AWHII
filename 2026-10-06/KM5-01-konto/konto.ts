export class Konto {
  readonly iban: string;
  private kontostand: number;

  constructor(iban: string, startBetrag: number) {
    this.iban = iban;
    this.kontostand = startBetrag;
  }

  einzahlen(betrag: number): void {
    this.kontostand += betrag;
  }

  equals(other: Konto): boolean {
    return this.iban === other.iban;
  }

  toString(): string {
    return `Konto ${this.iban} (${this.kontostand} €)`;
  }
}