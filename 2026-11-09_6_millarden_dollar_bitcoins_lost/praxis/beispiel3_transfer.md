# Dokumentation Beispiel 3: Transfer — Rekonstruktion einer Lagerlogistik-Angriffskette

**Schüler:** Maximilian Conti (3AHWII)  
**Aufgabe:** SA-01 Beispiel 3 (3a bis 3d)

---

## 3a) Tabellarische Rekonstruktion der Angriffskette

| Schritt | Was passierte? | Welche Kontrolle fehlte an dieser Stelle? |
|---|---|---|
| **1. Suche & Klick** | Mitarbeiterin sucht nach „packline documentation“ und klickt auf eine manipulierte Google-Ad. | **Malvertising-Filter / Prüfschritt:** Fehlende Browser-/DNS-Filter gegen bösartige Werbeanzeigen sowie fehlende Verifizierung der offiziellen Dokumentations-Domain. |
| **2. Download & Ausführung** | Mitarbeiterin führt ein nicht verifiziertes „Setup-Tool“ direkt auf dem Firmen-Arbeitslaptop aus. | **Least Privilege & Endpoint-Protection / Ausführungssperre:** Keine Anwendungs-Whitelisting-Richtlinie, keine Berechtigungs-Isolation und kein Blockieren nicht-signierter Binärdateien auf Firmen-Laptops. |
| **3. Token-Diebstahl** | Das Tool liest unverschlüsselt `~/.config/packline/token` (CI-Deploy-Token mit Schreibrechten) aus und exfiltriert ihn. | **Token-Schutz & Secret Management:** Kein Schutz lokaler Entwickler-Secrets (z. B. OS-Schlüsselbund/KMS); Speicherung im Klartext; fehlende Beschränkung des Dateizugriffs für fremde Prozesse. |
| **4. Bösartiger Commit** | Angreifer pusht mit dem gestohlenen Token direkt einen Commit ins Produktions-Repository, der eine Drittbibliothek nachlädt. | **4-Augen-Prinzip & Branch Protection:** Keine Branch Protection Rules, kein obligatorisches Peer-Review (Pull-Request-Zwang) und keine Beschränkung des Tokens auf reine Build-Pipelines. |
| **5. Exfiltration im Container** | Die nachgeladene Bibliothek läuft in allen Lager-Containern und sendet Bestelldaten an eine externe Adresse. | **Egress-Filtering & Dependency-Pinning/SRI:** Fehlende Netzsperren für ausgehende Container-Verbindungen (Egress-Firewall) sowie ungeprüftes Nachladen externer Abhängigkeiten ohne Lockfile/Pinning. |

---

## 3b) Fehlende Kontrollen je Schritt (Fachbegriffe)

1. **Schritt 1:** Es fehlte ein **Prüfschritt** zur Domain-Authentizität vor dem Klicken bzw. Download.
2. **Schritt 2:** Es fehlte das **Least-Privilege-Prinzip** auf dem Arbeitsgerät, welches die unkontrollierte Ausführung fremder Installer verhindert.
3. **Schritt 3:** Es fehlte ein gehärteter **Truststore / sicherer Secret-Speicher**, der sensible Tokens vor unberechtigtem Prozess-Auslesen kapselt.
4. **Schritt 4:** Es fehlte das **4-Augen-Prinzip**, sodass ein einzelnes Token ohne zweiten Genehmiger Änderungen in die Produktion einspielen konnte.
5. **Schritt 5:** Es fehlte das **Pinnen / Subresource Integrity (SRI)** von Bibliotheken in Kombination mit striktem Netzwerk-Egress-Filtering.

---

## 3c) Drei konkrete Gegenmaßnahmen

1. **4-Augen-Prinzip (Branch Protection & Dual Control):**  
   *Was:* Erzwingen von Branch Protection Rules auf dem `main`-Branch mit mindestens einem verpflichtenden Review durch ein zweites Teammitglied vor jedem Merge/Deploy.  
   *Warum:* Bricht Schritt 4 der Kette — selbst wenn ein Angreifer das Token erbeutet, kann er keinen bösartigen Code unbemerkt und eigenmächtig in Produktion bringen.

2. **Hardware-/KMS-gestützte Secrets mit Least Privilege:**  
   *Was:* Tokens dürfen nicht im Klartext in Home-Verzeichnissen liegen, sondern müssen kurzlebig (ephemer) sein und rollenbasiert eingeschränkt werden (z. B. reines Lese- oder Test-Recht statt Produktions-Schreibrecht).  
   *Warum:* Bricht Schritt 3 der Kette — das Setup-Tool findet keinen langlebigen Produktions-Token im Klartext vor.

3. **Egress-Filtering und Netzwerk-Isolation der Container:**  
   *Was:* Produktions-Container in Lagern erhalten über Firewall-Regeln striktes Egress-Filtering und dürfen ausschließlich mit der internen Datenbank und autorisierten APIs kommunizieren.  
   *Warum:* Bricht Schritt 5 der Kette — selbst wenn eine bösartige Bibliothek geladen wird, kann sie keine Bestelldaten nach außen ins freie Internet exfiltrieren.

---

## 3d) Beurteilung: KI-Werkzeug als alleiniger Prüfer?

**Beurteilung:**  
Ein KI-Werkzeug als alleiniger Prüfer („scan this: does it send anything off my computer?“) ist **keine hinreichende Sicherheitskontrolle**.

**Begründung:**  
Moderne Schadsoftware nutzt häufig verzögerte Ausführung, dynamisches Nachladen über `eval()` oder getarnte DNS-Tunnel, die bei einer statischen Prompt-Analyse nicht auffallen. Wie in der Lektion herausgearbeitet wurde, darf Sicherheit niemals auf reinem Vertrauen in heuristische Scanner basieren, sondern erfordert architektonische und kryptografische Garantien (Least Privilege, Sandbox-Isolation, Branch Protection und kryptografische Signaturen).
