// commands.js

// Speichern der verfügbaren Befehle
const commands = {
  // Beispielbefehle
  "nxs update": () => {
    return "Update abgeschlossen!";
  },
  "nxs upgrade": () => {
    return "System aktualisiert!";
  },
  "nxs help": () => {
    return "Available commands: nxs update, nxs upgrade, nxs install <path>, nxs start <filename>";
  },
  "nxs install": (arg) => {
    return `Installing ${arg}...`;
  },
  "nxs start": (arg) => {
    return `Starting ${arg}...`;
  },
  "nxs credit _##": () => {
    return "Created from THE ARCHITEKT for neXus";
  },
  "nxs root +##36743679953##+": () => {
    return "Root access granted!";
  },
  "nxs update -&": () => {
    return "Searching for updates...";
  },
  "nxs upgrade -&": () => {
    return "System upgrade in progress...";
  },
  // Hier kannst du neue Befehle hinzufügen
};

// Funktion, die den Befehl ausführt
function executeCommand(command) {
  const outputDiv = document.getElementById('output');

  // Den Befehl und die Argumente aufteilen
  const commandParts = command.split(' ');
  const cmd = commandParts[0];
  const args = commandParts.slice(1).join(' '); // Alles nach dem Befehl als Argument

  // Überprüfen, ob der Befehl existiert
  if (commands[cmd]) {
    // Führe den Befehl aus und zeige das Ergebnis an
    const result = commands[cmd](args);
    outputDiv.innerHTML += `<p>$ ${command}</p><p>${result}</p>`;
  } else {
    outputDiv.innerHTML += `<p>$ ${command}</p><p>Command not found</p>`;
  }

  // Scrollen zum letzten Output
  outputDiv.scrollTop = outputDiv.scrollHeight;
}

// Funktion, um neue Befehle hinzuzufügen (Optional)
function addNewCommand(commandName, commandFunction) {
  commands[commandName] = commandFunction;
}
