// commands.js

// Speichert alle verfügbaren Befehle in einem Objekt
const commands = {
  // Standard-Befehle
  "nxs update": () => {
    return "Update completed!";
  },
  "nxs upgrade": () => {
    return "System upgraded!";
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
  // Hier kannst du neue Befehle hinzufügen, ohne den bestehenden Code zu ändern
};

// Funktion, die den Befehl ausführt
function executeCommand(command) {
  const outputDiv = document.getElementById('output');

  // Aufteilen des Befehls in den Befehl und die Argumente
  const commandParts = command.split(' ');
  const cmd = commandParts[0];
  const args = commandParts.slice(1).join(' '); // Alles nach dem Befehl als Argument

  // Überprüfen, ob der Befehl existiert
  if (commands[cmd]) {
    // Führe den Befehl aus und zeige das Ergebnis
    const result = commands[cmd](args);
    outputDiv.innerHTML += `<p>$ ${command}</p><p>${result}</p>`;
  } else {
    outputDiv.innerHTML += `<p>$ ${command}</p><p>Command not found</p>`;
  }

  // Scrollen zum letzten Output
  outputDiv.scrollTop = outputDiv.scrollHeight;
}

// Funktion, um neue Befehle hinzuzufügen
function addNewCommand(commandName, commandFunction) {
  commands[commandName] = commandFunction;
}
