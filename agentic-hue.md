# Agentic-Coding HÜ (2026-09-15, Sondereinheit — X-Gruppe)

Abgabe zur HÜ Agentic Coding im Fach SWP (3AHWII X).

## Setup-Nachweis

1. **`opencode` installiert:**
   ```powershell
   opencode --version
   # Ausgabe: opencode-ai v1.14.19 (Node v24.x LTS)
   ```
2. **Provider verbunden:**
   - `opencode` gestartet und per `/connect` den freien Anbieter (OpenCode Zen / GitHub) verbunden.
3. **`/init` ausgeführt & `AGENTS.md` angepasst:**
   - Im Root des SWP-Repositories `/init` ausgeführt und das generierte `AGENTS.md` an die SWP-spezifischen Anforderungen (Deno, TypeScript, OOP, Invarianten-Prüfung, Testregeln) angepasst.

## Was `AGENTS.md` steuert

Die Datei `./AGENTS.md` (im Root dieses Repositories) ist die zentrale Projekt-Anweisung für KI-gestützte Coding-Agenten:
- **Kontext & Domäne:** Erklärt dem Agenten den Aufbau der SWP-Hausübungen der 3AHWII und den Stack (Deno + TypeScript).
- **Architektur & Codier-Standards:** Definiert zwingende Regeln wie strikte Kapselung (private Attribute, readonly), Invarianten-Prüfung nach dem Fail-Fast-Prinzip (inklusive Schutz vor unzulässigen negativen Argumenten) und fachliche `equals()`-Methoden.
- **Test- & Git-Disziplin:** Schreibt vor, dass vor jedem Commit Tests (`deno test`) grün sein müssen und Änderungen in atomaren, nachvollziehbaren Commits versioniert werden.
