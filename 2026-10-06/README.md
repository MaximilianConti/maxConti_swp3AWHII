# UE 2026-10-06 — OOP in TypeScript: equals-Methode + KM5-HÜ 1–3

**Fach:** SWP · **Klasse:** 3AHWII X · **Zeit:** 1 DS (2 h)
**Stunde:** Interfaces-Folie (equals vs. `==` vs. `===`) + Übungszeit KM5-01, KM5-02, KM5-03

## Inhalt

| Datei/Ordner | Inhalt |
|---|---|
| `Aufgabe.md` | Aufgabenstellung (aus dem Lehrer-Repo übernommen) |
| `main.ts` | **equals-Demo** aus der Stunde: `NeverGleich` / `ImmerGleich` gegen `==` und `===` |
| `main_test.ts` | Tests zur Demo (4 Tests) — ersetzt den kaputten Starter, siehe unten |
| `deno.json` | Tasks `demo`, `test`, `dev` |
| `KM5-01-konto/` | HÜ 1: Klasse `Konto` mit `einzahlen()` + `equals()` (3 Tests) |
| `KM5-02-parkhaus/` | HÜ 2: `Parkhaus` mit `einfahren()` / `ausfahren()` (5 Tests inkl. Invarianten-Schutz gegen negative Zahlen) |
| `KM5-03-versand/` | HÜ 3: Versandkosten nach Gewicht, `verschickeAlles()` (2 Tests) |

## Ausführen

```bash
deno task demo    # 6 Konsolenzeilen: false/true/true und true/false/false
deno task test    # 14 passed | 0 failed (main_test + die 3 KM5-Ordner)
```

Einzelne Übungen: `cd KM5-01-konto && deno task test`

## Demo-Ausgabe (`deno task demo`)

```
false   <- a.equals(b)   (NeverGleich.equals liefert immer false)
true    <- a == b         (gleiche Adresse)
true    <- a === b        (gleiche Adresse, gleicher Typ)
true    <- c.equals(d)    (ImmerGleich.equals liefert immer true)
false   <- c == d         (verschiedene Objekte)
false   <- c === d        (verschiedene Objekte)
```

Das ist die Kernaussage der Stunde: **`equals()` ist eine fachliche Aussage, `==`/`===`
sind technische.** Zwei Objekte können inhaltlich gleich sein (`c.equals(d) === true`),
ohne dass `===` das abbildet — weil `===` die Referenz vergleicht.

## Anmerkung zum Starter `main_test.ts`

Die Teacher-Version von `main_test.ts` war **nicht lauffähig**: sie importierte ein
`handler` aus `main.ts` und testete `Request`/`Response`-Objekte mit
`"Welcome to Deno"` — das ist der Rest eines `deno init`-HTTP-Templates und passt
nicht zur `equals`-Demo (dort gibt es weder einen `handler` noch einen Server).

Deshalb: `main.ts` minimal erweitert (die beiden Klassen sind jetzt `export`, damit
sie testbar sind) und `main_test.ts` neu geschrieben. Die Demo-Ausgabe in der
Konsole ist unverändert geblieben.

## KM-Bezug

KM5-01 (Konto) legt den Schwerpunkt auf `equals()` vs. `===` — dieselbe Thematik wie
die Interface-Folie dieser Stunde. KM5-02 und KM5-03 sind reine Anwendung
(Ein-/Ausfahren, Versandkosten) und nutzen die Klassen aus KM5-01.
