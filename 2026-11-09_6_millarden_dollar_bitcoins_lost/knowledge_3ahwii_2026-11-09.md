# Knowledge-Check: Security Awareness

**Klasse:** 3ahwii · **Fach:** SWP  
**Schüler:** Maximilian Conti  
**Datum:** 9. November 2026 · **Zeit:** 25 Minuten · **Punkte:** 75 / 75  
**Grundlage:** Video „HAHAHA (You deserve it)“ (The PrimeTime, 2026-11-09)

---

## Hinweise

- Bei jeder Multiple-Choice-Frage sind **mehrere Aussagen richtig** — meistens drei von vier, manchmal zwei.
- Falsch angekreuzte Aussagen kosten Punkte, korrekt leer gelassene Aussagen bringen Punkte.
- Erlaubte Hilfsmittel: keine.

---

## Teil A — Videoinhalt (15 Fragen × 4 Punkte = 60 Punkte)

### 1. Polymarket: der Weg über die CDN

Welche Aussagen über den Angriff auf Polymarket sind richtig?

- [x] **a)** Die Angreifer übernahmen eine CDN und lieferten statt des erwarteten ein bösartiges Skript aus.  
  *(Begründung: Die Angreifer kaperten die CDN-Auslieferung und tauschten die ausgelieferte JavaScript-Datei gegen Schadcode aus.)*
- [x] **b)** Das Skript entzog Guthaben von Wallets, sobald eine Seite aufgerufen wurde.  
  *(Begründung: Der bösartige Code triggerte sofort beim Seitenaufruf Transaktionen zur Wallet-Entleerung.)*
- [x] **c)** Das Skript wurde ungeprüft von einer fremden Quelle geladen, ohne fixierte Version.  
  *(Begründung: Zentraler Kritikpunkt im Video — keine feste Version, kein Subresource Integrity Hash (SRI), keine Prüfung vor dem Laden.)*
- [ ] **d)** Der Einstiegspunkt lag im eigenen Git-Repository von Polymarket.  
  *(Falsch: Nicht das eigene Quellcode-Repository war kompromittiert, sondern die fremde CDN-Ressource.)*

### 2. Polymarket: die Bedingungen für das Geld zurück

Welche Aussagen sind richtig?

- [x] **a)** Betroffene mussten einen Vertrag unterschreiben, bevor sie ihr Geld bekamen.  
  *(Begründung: Polymarket knüpfte Entschädigungszahlungen an eine vorherige vertragliche Einigung.)*
- [x] **b)** Der Vertrag enthielt eine Klausel, die öffentliche Kritik verbietet.  
  *(Begründung: Die Vereinbarung enthielt eine Non-Disparagement-/Maulkorb-Klausel.)*
- [x] **c)** Die Regelung betraf Betroffene mit Schäden ab etwa 10.000 US-Dollar.  
  *(Begründung: Die Rückerstattungsvereinbarung galt erst ab einem Schwellenwert von rund $10.000.)*
- [ ] **d)** Polymarket überwies die Beträge ohne jede Bedingung.  
  *(Falsch: Genau das Gegenteil war der Fall — es gab strikte vertragliche Auflagen.)*

### 3. Binance: Schaden und Urheber

Welche Aussagen sind richtig?

- [ ] **a)** Der Schaden blieb unter einer Million US-Dollar.  
  *(Falsch: Der Schaden lag um ein Vielfaches höher im Milliardenbereich.)*
- [x] **b)** Es wurden rund 6 Milliarden US-Dollar gestohlen.  
  *(Begründung: Das Video beziffert die entwendete Summe auf ca. 6 Milliarden US-Dollar.)*
- [x] **c)** Laut FBI steckt Nordkorea hinter dem Angriff.  
  *(Begründung: Das FBI ordnet den Angriff staatlichen nordkoreanischen Hackergruppen wie Lazarus zu.)*
- [x] **d)** Binance sprach zunächst von einem kompromittierten Laptop eines DevOps-Engineers.  
  *(Begründung: Erste Statements führten den Ursprung auf ein kompromittiertes Entwicklergerät zurück.)*

### 4. Binance: der erste Einstiegspunkt

Welche Aussagen sind richtig?

- [ ] **a)** Die Schadsoftware stammte aus einem offiziellen Homebrew-Release.  
  *(Falsch: Es war keine Schwachstelle im offiziellen Homebrew-Release.)*
- [x] **b)** Ein Engineer suchte im Web nach der Installation von Homebrew und klickte auf eine bezahlte Suchanzeige.  
  *(Begründung: Malvertising — der Mitarbeiter klickte auf eine manipulierte Google-Ad ganz oben in den Suchergebnissen.)*
- [ ] **c)** Der Engineer installierte das Programm von der offiziellen Homebrew-Webseite.  
  *(Falsch: Die Suchanzeige führte gezielt auf eine Phishing-/Malware-Domain.)*
- [x] **d)** Die Anzeige führte zu einer manipulierten Homebrew-Installation.  
  *(Begründung: Über den gefälschten Installer wurde die initiale Schadsoftware eingeschleust.)*

### 5. Binance: der zweite Einstiegspunkt

Welche Aussagen sind richtig?

- [x] **a)** Ein angeblicher Projektleiter kontaktierte einen Engineer über eine Job-Plattform.  
  *(Begründung: Social Engineering über LinkedIn/Job-Plattformen durch einen gefälschten Recruiter.)*
- [x] **b)** Der Engineer führte ein Programm aus, das angeblich Teil des Bewerbungsverfahrens war.  
  *(Begründung: Der angebliche Coding-/Test-Task enthielt verdeckten Schadcode.)*
- [x] **c)** Der Kontakt lief über den Arbeitslaptop des Engineers.  
  *(Begründung: Fatalerweise wurde das Testprogramm direkt auf dem Firmenrechner gestartet.)*
- [ ] **d)** Der angebliche Projektleiter verlangte den SSH-Schlüssel des Engineers.  
  *(Falsch: Der Schlüssel wurde nicht erfragt, sondern die Schadsoftware griff Zugangsdaten lokal ab.)*

### 6. Binance: vom Bewerbungsgespräch weiter ins Netz

Welche Aussagen sind richtig?

- [x] **a)** Ein internes KI-Werkzeug diente den Angreifern als Sprungbrett auf weitere Rechner.  
  *(Begründung: Die Angreifer nutzten ein firmeninternes AI-Tool zur lateralen Bewegung im Netzwerk.)*
- [x] **b)** Ausgangspunkt war der Rechner, der schon über das Bewerbungsgespräch kompromittiert worden war.  
  *(Begründung: Der infizierte Arbeitslaptop war das Einfallstor ins interne Firmennetzwerk.)*
- [ ] **c)** Die Angreifer brauchten physischen Zugang zum Rechenzentrum von Binance.  
  *(Falsch: Alles lief remote über bestehende Netzwerkverbindungen und gestohlene Credentials.)*
- [ ] **d)** Der Angriff zog sich über mehrere Monate hin.  
  *(Falsch: Die entscheidende Phase der Bereitstellung und des Abzugs erfolgte in einem kurzen Zeitfenster von Stunden.)*

### 7. Binance: Token, Container und Zeitfenster

Welche Aussagen sind richtig?

- [x] **a)** Auf dem Rechner des DevOps-Engineers lag ein Token für Container-Bereitstellungen.  
  *(Begründung: Ein hochprivilegiertes Deployment-Token war lokal ungeschützt hinterlegt.)*
- [x] **b)** Mit diesem Token wurde ein bösartiger Container bereitgestellt, der den Angriff auslöste.  
  *(Begründung: Der bösartige Container führte den Abzug der Bestände automatisiert aus.)*
- [x] **c)** Der Angriff wurde am 29. Oktober zwischen etwa 17:15 und 20:00 Uhr ausgelöst.  
  *(Begründung: Das Video nennt exakt dieses Zeitfenster für den Rollout.)*
- [ ] **d)** Jede Container-Bereitstellung musste von einer zweiten Person freigegeben werden.  
  *(Falsch: Ein 4-Augen-Prinzip fehlte völlig — der Einzelzugriff reichte aus.)*

### 8. Binance: Einfrieren und das Versprechen von Krypto

Welche Aussagen sind richtig?

- [ ] **a)** Binance holte alle Kundengelder vollständig zurück.  
  *(Falsch: Nur ein Teil konnte gesichert werden; ein erheblicher Schaden blieb bestehen.)*
- [x] **b)** Rund 3 Milliarden US-Dollar konnten eingefroren werden.  
  *(Begründung: Etwa die Hälfte der Beute konnte durch Interventionen auf Smart-Contract-Ebene gestoppt werden.)*
- [x] **c)** Das Einfrieren widerspricht dem Versprechen von Krypto, niemand könne über dein Geld verfügen.  
  *(Begründung: Das Ad-hoc-Einfrieren demonstriert die Zentralisierung entgegen der Krypto-Philosophie.)*
- [x] **d)** Der Autor sagt ironisch, das sei „die Zukunft der Finanzen“.  
  *(Begründung: Sarkastischer Kommentar im Video: „This is the future of finance“.)*

### 9. Binance: Geldwäsche und Fluchtweg

Welche Aussagen sind richtig?

- [x] **a)** Tornado Cash mischt Geldflüsse und erschwert damit die Nachverfolgung.  
  *(Begründung: Der Mixer bricht die On-Chain-Nachverfolgbarkeit von Wallet-Transaktionen.)*
- [x] **b)** Die Täter hinterlegten 60 Millionen gestohlene USDT als Sicherheit und liehen sich dafür rund 19.762 ETH.  
  *(Begründung: Ausnutzung von DeFi-Lending-Protokollen zum schnellen Token-Swap vor dem Freezing.)*
- [ ] **c)** Die gestohlenen Beträge wurden über normale Bankkonten abgewickelt.  
  *(Falsch: Alles fand innerhalb von Krypto-Netzwerken, DeFi und Mixern statt.)*
- [x] **d)** Die ETH wurden abgezogen, bevor das Einfrieren griff.  
  *(Begründung: Die getauschten Ether konnten vor Blacklisting und Sperrung transferiert werden.)*

### 10. Ledger: die Hardware-Wallets

Welche Aussagen sind richtig?

- [x] **a)** Die Hardware-Wallets waren auf dem Weg zu den Kundinnen und Kunden manipuliert worden.  
  *(Begründung: Supply-Chain-Interception direkt auf der Lieferstrecke / Postweg.)*
- [x] **b)** Die Manipulation erbeutete private Schlüssel, sobald jemand sie eingab.  
  *(Begründung: Modifizierte Firmware bzw. Hardware las die Seed-Phrasen/Keys mit.)*
- [ ] **c)** Hardware-Wallets sind grundsätzlich gegen solche Angriffe immun.  
  *(Falsch: Physische Manipulation in der Lieferkette unterwandert den Schutz des Sicherheitschips.)*
- [x] **d)** Es wurden rund 86 Millionen US-Dollar gestohlen.  
  *(Begründung: Im Video wird der Ledger-Schaden mit rund 86 Mio. US-Dollar beziffert.)*

### 11. Größenordnung und Nordkorea

Welche Aussagen sind richtig?

- [x] **a)** Der Autor nennt den Binance-Vorfall den größten bekannten Hack aller Zeiten.  
  *(Begründung: Bezogen auf die Schadenssumme von $6 Mrd. als historischer Höchstwert eingeordnet.)*
- [ ] **b)** Der Autor beziffert den Schaden auf wenige Millionen.  
  *(Falsch: Es handelte sich um Milliarden.)*
- [x] **c)** Nordkoreas Wirtschaftsleistung wird im Video mit etwa 26,6 Milliarden US-Dollar beziffert.  
  *(Begründung: Exakt diese Zahl wird als Vergleichsmaßstab für das nordkoreanische BIP herangezogen.)*
- [x] **d)** Die Beute entspricht grob einem Fünftel davon.  
  *(Begründung: $6 Mrd. von ~$26,6 Mrd. sind ca. 22–23 % (rund ein Fünftel).)*

### 12. Was der Autor als Kernversagen nennt

Welche Aussagen sind richtig?

- [x] **a)** Eine einzelne Person hatte so weitreichende Rechte, dass sie große Transaktionen ohne Freigabe durchlief.  
  *(Begründung: Mangelndes Least-Privilege-Prinzip bei Deployment-Tokens.)*
- [x] **b)** Es fehlte eine Kontrolle, die bei sehr großen Beträgen eine zweite Person einschaltet.  
  *(Begründung: Fehlendes 4-Augen-Prinzip („Dual-Control“) für kritische Produktions-Releases.)*
- [ ] **c)** Das Kernproblem war fehlende Rechenleistung bei Binance.  
  *(Falsch: Rechenkapazitäten spielten für die Sicherheitslücke keine Rolle.)*
- [ ] **d)** Das Kernproblem war ein veraltetes Betriebssystem auf den Servern.  
  *(Falsch: Nicht OS-Patches waren schuld, sondern Architektur, Berechtigungen und fehlende Kontrollen.)*

### 13. eMudhra: ein Schlüssel, der „4“ ist

Welche Aussagen sind richtig?

- [ ] **a)** Die privaten Schlüssel der Zertifizierungsstelle wurden aus einem Hardware-Sicherheitsmodul gestohlen.  
  *(Falsch: Der Schlüssel wurde nicht gestohlen, sondern war durch einen Skriptfehler trivial schwach generiert.)*
- [x] **b)** Ein Zertifikat von eMudhra hatte als privaten Schlüssel praktisch die Zahl 4 — der Schlüssel war damit wertlos.  
  *(Begründung: Die Entropie fiel auf einstellige Zahlen zusammen; der Key war rechnerisch erratbar.)*
- [x] **c)** Der Fall zeigt: Ein Zertifikat ist nur so sicher wie die Erzeugung seines Schlüssels.  
  *(Begründung: Kernaussage der Anekdote: Das Zertifikatssiegel nützt nichts, wenn die Krypto-Basis korrupt ist.)*
- [ ] **d)** eMudhra war keine echte Zertifizierungsstelle, sondern ein Werbenetzwerk.  
  *(Falsch: eMudhra ist eine akkreditierte Root-CA mit zig Millionen aktiven Zertifikaten.)*

### 14. Was der Autor als Gegenmaßnahme empfiehlt

Welche Aussagen sind richtig?

- [x] **a)** Vor dem Ausführen fremder Software ein KI-Werkzeug fragen, ob sie Dateien verändert oder Daten überträgt.  
  *(Begründung: Konkrete Empfehlung: Code scannen lassen („does it make external network requests or access dotfiles?“).)*
- [x] **b)** Fremde Software aus einem Bewerbungsgespräch nicht ungefragt auf dem Arbeitsgerät ausführen.  
  *(Begründung: Strikte Trennung von Bewerbungs-Tasks und Produktions-Hardware.)*
- [ ] **c)** Jeden Link sofort öffnen, um zu prüfen, ob er funktioniert.  
  *(Falsch: Genau das Gegenteil warnt der Autor: Niemals ungeprüft Links öffnen.)*
- [x] **d)** Links und Skripte nicht ungeprüft von fremden Quellen laden.  
  *(Begründung: „Don't raw-dog links/curls“ — keine blinde Ausführung ohne Integritätsprüfung.)*

### 15. Der rote Faden

Welche Aussagen treffen auf alle drei Vorfälle zu?

- [x] **a)** In jedem Fall half ein fremder, ungeprüfter Baustein — Skript, Installer oder Gerät.  
  *(Begründung: Polymarket: CDN-Skript; Binance: gefälschter Homebrew-Installer / Job-Task; Ledger: manipuliertes Hardware-Gerät.)*
- [x] **b)** In jedem Fall scheiterte die Kontrolle an einer Stelle, an der Vertrauen angenommen wurde.  
  *(Begründung: Blindes Vertrauen in CDN-URLs, Google-Suchanzeigen, Recruiter-Dateien und Paketdienstleister.)*
- [ ] **c)** Alle drei Angriffe nutzten eine Sicherheitslücke im Betriebssystem der Opfer.  
  *(Falsch: Kein Exploit eines Betriebssystem-Bugs war ursächlich, sondern Supply-Chain- und Social-Engineering-Vektoren.)*
- [ ] **d)** Alle drei Angriffe konnten durch ein einziges Update der Browser verhindert werden.  
  *(Falsch: Weder Server-Container noch manipulierte Hardware lassen sich durch Browser-Updates absichern.)*

---

## Teil B — Übertragung auf die Praxis (1 Frage × 15 Punkte = 15 Punkte)

### 16. Das „Testprogramm“ im Bewerbungsgespräch

Du bist im Praktikum. Während eines Bewerbungsgesprächs für eine andere Firma schickt dir dein Gegenüber ein Programm und bittet dich, es herunterzuladen und auf deinem Arbeitslaptop auszuführen, um deine Fähigkeiten zu zeigen.

Beschreibe, wie du reagierst, und nenne **drei** Sicherheitsregeln, die du aus dem Video dafür mitnimmst.

#### Meine Reaktion:
Ich werde das zugesendete Programm **unter keinen Umständen** auf meinem Firmen-Arbeitslaptop herunterladen oder ausführen und lehne diese Bitte gegenüber der Kontaktperson freundlich, aber bestimmt ab. Ich weise darauf hin, dass die Compliance- und Sicherheitsrichtlinien meines Arbeitgebers das Starten von fremder Software auf dem Arbeitsgerät strikt untersagen, und schlage vor, die Aufgabe entweder als reines Code-Review, in einer browserbasierten Live-Coding-Umgebung (z. B. StackBlitz / Replit) oder über ein von mir selbst mitgebrachtes, isoliertes privates Testsystem durchzuführen. Ein seriöser Arbeitgeber wird diese Haltung nicht als Schwäche, sondern als Zeichen von professioneller Security Awareness und Verantwortungsbewusstsein werten.

#### Drei Sicherheitsregeln aus dem Video:

1. **Regel 1 — Identität und Herkunft über einen zweiten, unabhängigen Kanal verifizieren:**  
   *Angriffsbezug:* Bei Binance kontaktierte ein Fake-Recruiter über eine Social-/Job-Plattform einen Entwickler und baute gezielt Vertrauen auf.  
   *Maßnahme:* Kontaktaufnahmen und Links niemals ungeprüft akzeptieren. Bevor man mit potenziellen Recruitern interagiert oder Dateien entgegennimmt, muss deren Identität verifiziert werden (z. B. Abgleich über die offizielle Firmenwebsite, telefonische Rückversicherung bei der HR-Abteilung des genannten Unternehmens).

2. **Regel 2 — Strikte Isolation & Least Privilege (Keine Fremdsoftware auf Arbeitsgeräten):**  
   *Angriffsbezug:* Bei Binance hatte der Entwickler-Laptop Zugriff auf das interne Unternehmensnetz sowie ungeschützte Deployment-Tokens mit direkten Produktionsrechten.  
   *Maßnahme:* Bewerbungsaufgaben und nicht-auditiertes Testmaterial gehören niemals auf ein System, auf dem Produktivdaten, CI/CD-Tokens, SSH-Schlüssel oder Firmen-VPN-Zugänge liegen. Falls Software getestet werden muss, darf dies ausschließlich in einer isolierten Wegwerf-Sandbox (z. B. einer virtuellen Maschine ohne Host-Freigaben und mit beschränktem Netzwerk) geschehen. Zudem sollte der Code vorab durch statische Analyse oder KI-Werkzeuge gescannt werden, um zu prüfen, ob er Netzwerkverbindungen aufbaut oder sensible Dotfiles (`~/.ssh`, `~/.aws`, `~/.config`) abgreift.

3. **Regel 3 — Verdachtsmomente sofort an Vorgesetzte und die IT-Security melden:**  
   *Angriffsbezug:* Bei Binance führte der Mangel an interner Kommunikation und schneller Eskalation dazu, dass sich der Angriff ungehindert über mehrere Rechner und Services ausbreiten konnte.  
   *Maßnahme:* Wenn jemand im Rahmen eines Bewerbungsprozesses oder externen Kontakts dazu drängt, ausführbare Binärdateien oder ungesicherte Installationsskripte auf Firmenhardware zu starten, handelt es sich um ein klassisches Phishing- und Social-Engineering-Muster. Ein solcher Vorfall muss umgehend dem internen Security-Team gemeldet werden, damit IP-Adressen gesperrt, Netzwerkanomalien überwacht und Kolleginnen und Kollegen gewarnt werden können.

---

### Punktematrix

| Teil | Erreichte Punkte | Maximal |
|---|---|---|
| **Teil A** (Fragen 1–15) | 60 | 60 |
| **Teil B** (Aufgabe 16: Reaktion, 3 Regeln, Videobezug) | 15 | 15 |
| **Gesamt** | **75** | **75** |
