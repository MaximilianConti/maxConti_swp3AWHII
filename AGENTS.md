# AGENTS.md

Projekt-Anweisung für Coding-Agenten in diesem Repository (`maxConti_swp3AWHII`).
Angepasst nach `/init` (offene Werkstatt 2026-09-15, Fach SWP, 3AHWII X, HTL Spengergasse).

## Zweck des Repos

Abgaben und Hausübungen im Fach SWP (3AHWII X, Prof. Georg Ernst Graf).
Die Ordnerstruktur orientiert sich strikt an den Aufgaben im Lehrer-Repo:
- `2026-09-08__intro/` — Bruch-Klasse (Kürzen, Euklid-GGT, gemischte Zahl, Nenner 0 Exception).
- `2026-09-15__oo-repetition/` — Tier-Klasse (equals, Zustand vs. Identität, fuettern mit Validierung kg > 0).
- `2026-09-15_agentic-coding-einstieg/` — Einstieg mit opencode, Provider-Verbindung, AGENTS.md.
- `2026-09-22__kapselung/` — Fahrzeug-Klasse (Kapselung, Invarianten fail-fast, kmStand).
- `2026-09-29__interfaces/` — Produkt (Comparable, Versendbar, Structural Typing).
- `2026-10-06/` — Interfaces/equals-Demo + KM5-Hausübungen 1–3 (Konto, Parkhaus mit Invarianten-Schutz, Versand).

## Stack & Werkzeuge

- **Runtime:** Deno (TypeScript).
- **Test-Runner:** `deno test` bzw. `deno task test`.
- **Coding-Agent:** `opencode` (Version 1.14.19, Provider: OpenCode Zen / GitHub via `/connect`).
- **Versionskontrolle:** Git mit kleinen, aussagekräftigen Commits pro Feature/Regel.

## Coding- & Qualitätsregeln für Agenten

1. **Kapselung & Invarianten:**
   - Felder privat halten (`private`) oder `readonly`, wenn unveränderlich.
   - Invarianten konsequent im Konstruktor und in verändernden Methoden fail-fast prüfen (`throw new Error(...)`).
   - Immer auch Grenzwerte und negative Zahlen explizit abfangen (z. B. `anzahl <= 0`, `futtermenge <= 0`).
2. **Semantik von `equals()`:**
   - `equals()` prüft den fachlichen Zustand, nicht die Referenz-Identität (`===`).
3. **Tests:**
   - Jeder Task muss durch aussagekräftige Deno-Tests abgesichert sein (`deno test`).
   - Sowohl Positiv- als auch Negativfälle (mittels `assertThrows`) testen.
4. **Git-Disziplin:**
   - Nie ungetesteten Code committen.
   - Commit-Messages nach Conventional Commits: `feat(3ahwii): ...` oder `fix(3ahwii): ...`.
   - Ordnerstruktur des Lehrers nicht verändern.

## Wichtige Befehle

- Tests ausführen: `deno test` oder `deno task test`
- Demo starten: `deno task demo`
- Git Status & Diff prüfen: `git status && git diff`
