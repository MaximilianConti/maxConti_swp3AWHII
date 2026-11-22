# Dokumentation Beispiel 1: Eine CDN-Einbindung härten & Deno-Rechte

**Schüler:** Maximilian Conti (3AHWII)  
**Aufgabe:** SA-01 Beispiel 1 (1a bis 1e)

---

## 1a) Schwachstellen-Analyse
```html
<script src="https://cdn.example.com/werkzeug/latest.js"></script>
```
**Erklärung:**  
Diese Zeile bindet dynamisch ein Skript ohne Versionsbindung und ohne Prüfsumme von einem Drittanbieter ein, wodurch der externe CDN-Betreiber (oder ein Angreifer, der die CDN übernimmt) jederzeit beliebigen Schadcode in den Kontext der Anwendung einschleusen kann. Der Video-Autor nutzt dafür den Begriff „raw-dogging links/dependencies“ (ungeprüftes Laden ohne Schutzmechanismen).

---

## 1b) Lokale Datei & SRI-Hash-Berechnung

Inhalt von `werkzeug.js`:
```javascript
console.log("werkzeug 1.0.0 geladen");
```

Berechnung via OpenSSL:
```bash
openssl dgst -sha384 -binary werkzeug.js | openssl base64 -A
```

**Ergebnis:**  
`sLJ/z+gRJ0cTHA4Bv9i0YQ8UUWeO7OE9R62XCXsR4yXD92wMg4xmRDC5X/plaN+R`

Präfixiert für SRI:  
`sha384-sLJ/z+gRJ0cTHA4Bv9i0YQ8UUWeO7OE9R62XCXsR4yXD92wMg4xmRDC5X/plaN+R`

---

## 1c) Gehärtete HTML-Einbindung (`index.html`)

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <title>Werkzeugkasten (Gehärtet mit SRI)</title>
</head>
<body>
  <h1>Werkzeugkasten</h1>
  <script src="./werkzeug.js"
          integrity="sha384-sLJ/z+gRJ0cTHA4Bv9i0YQ8UUWeO7OE9R62XCXsR4yXD92wMg4xmRDC5X/plaN+R"
          crossorigin="anonymous"></script>
</body>
</html>
```

---

## 1d) Manipulationstest & Fehlermeldung im Browser

Wird in `werkzeug.js` auch nur ein einzelnes Zeichen manipuliert (z. B. der Punkt zu `!`), weicht der Hash der ausgelieferten Bytes vom deklarierten `integrity`-Wert ab.

**Verhalten des Browsers:**  
Der Browser blockiert die Skriptausführung sofort und lädt den Code nicht in den JavaScript-Execution-Context.

**Konsolenmeldung (Chrome/Firefox):**
```text
Failed to find a valid digest in the 'integrity' attribute for resource '.../werkzeug.js' with computed SHA-384 integrity '...'. The resource has been blocked.
```

---

## 1e) Deno-Berechtigungsmodell (`lesen.ts`)

Skript:
```typescript
const text = await Deno.readTextFile("lesen.ts");
console.log(text.length, "Zeichen gelesen");
```

### Ausführung 1: Ohne Flag (`deno run lesen.ts`)
- **Ergebnis:** Abbruch mit `PermissionDenied` (bzw. interaktiver Permission Prompt).
- **Meldung:** `error: Uncaught (in promise) PermissionDenied: Requires read access to "lesen.ts", run again with the --allow-read flag`

### Ausführung 2: Mit `--allow-read` (`deno run --allow-read lesen.ts`)
- **Ergebnis:** Erfolgreich ausgeführt.
- **Ausgabe:** `91 Zeichen gelesen` (Dateilänge)

### Ausführung 3: Mit `--allow-all` (`deno run -A lesen.ts`)
- **Ergebnis:** Erfolgreich ausgeführt, allerdings ohne jegliche Sicherheitsgrenzen.
- **Ausgabe:** `91 Zeichen gelesen`

**Begründung:**  
`--allow-all` (oder `-A`) hebt das Sicherheitsmodell von Deno vollständig auf und gewährt dem Programm uneingeschränkten Vollzugriff auf das gesamte Dateisystem, Umgebungsvariablen, Netzwerk und Subprozesse – genau dies hebelt das Prinzip der minimalen Rechte (Least Privilege) aus und ermöglicht Schadsoftware uneingeschränkten Schaden.
