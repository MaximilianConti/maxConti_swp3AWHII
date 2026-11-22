# HÜ 2026-11-09: Security Awareness (Knowledge-Check & Praxistransfer)

**Fach:** SWP · **Klasse:** 3AHWII X · **Schüler:** Maximilian Conti  
**Lehrer:** Prof. Georg Ernst Graf  
**Grundlage:** Video „HAHAHA (You deserve it)“ (The PrimeTime, 2026-11-09) & Lesson SA-01 *Fünf Hacks, ein Muster*

---

## Übersicht & Inhalte

| Datei / Verzeichnis | Inhalt |
|---|---|
| [`knowledge_3ahwii_2026-11-09.md`](./knowledge_3ahwii_2026-11-09.md) | **Vollständiger Knowledge-Check** (75/75 Punkte): 15 Multiple-Choice-Fragen mit Begründungen + ausführliche Ausarbeitung zu Aufgabe 16 (Testprogramm im Bewerbungsgespräch). |
| [`knowledge_3ahwii_2026-11-09_solutions.md`](./knowledge_3ahwii_2026-11-09_solutions.md) | Musterlösung und Bewertungskriterien aus dem Unterricht. |
| [`praxis/`](./praxis/) | Praktische Härtungs-Übungen aus Lesson SA-01 (Beispiel 1 & 3): |
| ↳ [`werkzeug.js`](./praxis/werkzeug.js) | Ausgangsskript (`console.log("werkzeug 1.0.0 geladen");`). |
| ↳ [`index.html`](./praxis/index.html) | Gehärtetes HTML mit fixierter Version und Subresource Integrity (SRI) Hash. |
| ↳ [`lesen.ts`](./praxis/lesen.ts) | Deno-Skript zur Demonstration des feingranularen Berechtigungsmodells. |
| ↳ [`beispiel1_dokumentation.md`](./praxis/beispiel1_dokumentation.md) | Dokumentation zu SRI-Hash-Berechnung, Browser-Blockaden und Deno-Permissions. |
| ↳ [`beispiel3_transfer.md`](./praxis/beispiel3_transfer.md) | Transfer-Analyse zur Rekonstruktion einer Lagerlogistik-Angriffskette (3a–3d). |

---

## Kern-Erkenntnisse aus den Vorfällen

1. **Polymarket (CDN Supply-Chain):**  
   Dynamisches Einbinden unversionierter Skripte („raw-dogging dependencies“) ohne Prüfsumme/SRI ermöglicht Angreifern die Manipulation im Browser der Nutzer.
2. **Binance (Social Engineering & Overprivileged Tokens):**  
   Gefälschte Recruiter auf Job-Plattformen und Malvertising verleiten Entwickler zur Ausführung von Schadcode auf Firmen-Laptops. Ein ungeschütztes CI/CD-Deployment-Token ohne 4-Augen-Prinzip ermöglichte den Diebstahl von $6 Mrd.
3. **Ledger (Hardware Supply-Chain):**  
   Selbst Hardware-Sicherheitsmodule können kompromittiert werden, wenn die physische Lieferkette unterwandert wird.
4. **eMudhra (Kryptografische Entropie):**  
   Ein Zertifikat ist wertlos, wenn der private Schlüssel durch fehlerhafte Skripte auf minimale Entropie zusammenfällt.
