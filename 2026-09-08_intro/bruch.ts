export class Bruch {
  private zähler: number;
  private nenner: number;

  constructor(zähler: number, nenner: number) {
    if (nenner === 0) {
      throw new Error("Nenner darf nicht 0 sein");
    }
    const g = ggt(zähler, nenner);
    this.zähler = zähler / g;
    this.nenner = nenner / g;
  }

  addiere(other: Bruch): Bruch {
    return new Bruch(
      this.zähler * other.nenner + other.zähler * this.nenner,
      this.nenner * other.nenner,
    );
  }

  toString(): string {
    const vorzeichen = this.zähler * this.nenner < 0 ? "-" : "";
    const z = Math.abs(this.zähler);
    const n = Math.abs(this.nenner);
    const ganz = Math.floor(z / n);
    const rest = z % n;
    if (rest === 0) return `${vorzeichen}${ganz}`;
    if (ganz === 0) return `${vorzeichen}${rest}/${n}`;
    return `${vorzeichen}${ganz} ${rest}/${n}`;
  }
}

function ggt(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) {
    const rest = a % b;
    a = b;
    b = rest;
  }
  return a;
}
