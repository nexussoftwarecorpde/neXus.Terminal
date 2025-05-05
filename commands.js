// Befehlshandhabung
const generatePhoneNumbers = () => {
    let numbers = [];
    for (let i = 0; i < 100; i++) {
        numbers.push('+49151' + Math.random().toString().slice(2, 9)); // Generiert eine Nummer
    }
    return numbers.join('\n');
};

// Der Hauptbefehlprozessor
const processCommand = (cmd, term, commandsEnabled, isRoot) => {
    const args = cmd.trim().split(' ');

    if (args[0] !== 'nxs') {
        term.write('\nUnbekannter Befehl. Versuche "nxs help".');
        return;
    }

    switch (args[1]) {
        case 'nml':
            if (args[2] === 'execute') {
                term.write('\n' + generatePhoneNumbers());
            }
            break;

        case 'Base64':
            if (args[2] === 'encode' && args[3]) {
                term.write('\n' + btoa(args[3]));
            } else if (args[2] === 'decode' && args[3]) {
                term.write('\n' + atob(args[3]));
            }
            break;

        case 'install':
            if (args[2] === 'c16.o0x' && args[3] === '-#') {
                commandsEnabled = true;
                term.write('\nBefehle freigeschaltet!');
            }
            break;

        case 'credit':
            if (args[2] === '_##') {
                term.write('\n[Created from THE ARCHITEKT for neXus]');
            }
            break;

        case 'root':
            if (args[2] === '+##36743679953##+') {
                isRoot = true;
                term.write('\nRoot-Zugang gewährt!');
            }
            break;

        case 'update':
            if (args[2] === '-&') {
                term.write('\nSuchen nach Updates... (simuliert)');
            }
            break;

        case 'upgrade':
            if (args[2] === '-&') {
                term.write('\nSystem wird aktualisiert... (simuliert)');
            }
            break;

        default:
            term.write('\nUnbekannter Befehl.');
    }
};
