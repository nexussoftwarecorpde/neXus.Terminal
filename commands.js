// commands.js

// Speichern der verfügbaren Befehle in Kleinbuchstaben
const commands = {
  "nxs update": () => {
    return "Update abgeschlossen!";
  },
  "nxs upgrade": () => {
    return "System aktualisiert!";
  },
  "nxs help": () => {
    return "Verfügbare Befehle: nxs update, nxs upgrade, nxs install <path>, nxs start <filename>";
  },
  "nxs install": (arg) => {
    return `Installation von ${arg}...`;
  },
  "nxs start": (arg) => {
    return `Starte ${arg}...`;
  },
  "nxs credit _##": () => {
    return "Erstellt von THE ARCHITEKT für neXus";
  },
  "nxs root +##36743679953##+": () => {
    return "Root-Zugang gewährt!";
  },
  "nxs update -&": () => {
    return "Suche nach Updates...";
  },
  "nxs upgrade -&": () => {
    return "System wird aktualisiert...";
  },
  // Hier kannst du beliebig neue Befehle hinzufügen
};

// Funktion zur Ausführung des Befehls
function executeCommand(command) {
  const outputDiv = document.getElementById('output');
  
  // Befehl und Argumente extrahieren
  const commandParts = command.trim().split(' ');
  const cmd = commandParts[0].toLowerCase(); // Umwandlung in Kleinbuchstaben
  const args = commandParts.slice(1).join(' '); // Rest des Befehls als Argumente

  // Überprüfen, ob der Befehl existiert
  if (commands[cmd]) {
    // Führe den Befehl aus und zeige das Ergebnis an
    const result = commands[cmd](args);
    outputDiv.innerHTML += `<p>$ ${command}</p><p>${result}</p>`;
  } else {
    outputDiv.innerHTML += `<p>$ ${command}</p><p>Befehl nicht gefunden</p>`;
  }

  // Scrollen zum letzten Output
  outputDiv.scrollTop = outputDiv.scrollHeight;
}

// Optional: Funktion um zur Laufzeit Befehle hinzuzufügen
function addNewCommand(commandName, commandFunction) {
  commands[commandName] = commandFunction;
}
