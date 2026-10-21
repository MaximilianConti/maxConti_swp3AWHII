// Parkhaus: Kapazität fix, belegt veränderlich.
// Invarianten:
//   I1: belegt >= 0   (nie mehr abfahren als drinsteht)
//   I2: belegt <= kapazitaet   (nie mehr einfahren als Plätze da sind)
export class Parkhaus {
  readonly kapazitaet: number;
  private belegt: number;

  constructor(kapazitaet: number, startBelegt: number) {
    if (kapazitaet < 0) {
      throw new Error(`Kapazität darf nicht negativ sein (war ${kapazitaet})`);
    }
    if (startBelegt < 0) {
      throw new Error(`Belegung darf nicht negativ sein (war ${startBelegt})`);
    }
    if (startBelegt > kapazitaet) {
      throw new Error(
        `Belegung ${startBelegt} übersteigt Kapazität ${kapazitaet}`,
      );
    }
    this.kapazitaet = kapazitaet;
    this.belegt = startBelegt;
  }

  get belegtePlaetze(): number {
    return this.belegt;
  }

  einfahren(anzahl: number): void {
    if (anzahl > this.kapazitaet - this.belegt) {
      throw new Error(`Nur ${this.kapazitaet - this.belegt} Plätze frei`);
    }
    this.belegt += anzahl;
  }

  ausfahren(anzahl: number): void {
    if (anzahl > this.belegt) {
      throw new Error(`Nur ${this.belegt} Fahrzeuge im Haus`);
    }
    this.belegt -= anzahl;
  }
}