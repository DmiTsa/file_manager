import { once } from 'events';
import { createInterface } from 'readline';
import mainCommandHandler from './handlers/mainCommandHandler.js';
import state from './data/state.js';
import greeting from './util/greeting.js';
import killProcess from './util/killProcess.js';

let { currentPath, username } = state;

console.log(
  `Welcome to the File Manager${username === undefined ? '' : ', ' + username}!`
);

greeting(currentPath);
await processCommand(currentPath);

process.on('SIGINT', () => {
  killProcess();
});

//Functions
async function processCommand(path) {
  try {
    const rl = createInterface({
      input: process.stdin,
      crlfDelay: Infinity,
    });

    rl.on('line', async (line) => {
      await mainCommandHandler(line);
    });

    await once(rl, 'close');
  } catch (err) {
    console.error(err);
  }
}
