import isAvailable from '../util/isAvailable.js';
import pathUp from '../functions/pathUp.js';
import killProcess from '../util/killProcess.js';
import osInfo from '../functions/osInfo.js';
import calcHash from '../functions/calcHash.js';
import createEmptyFIle from '../functions/createEmptyFIle.js';
import deleteFile from '../functions/deleteFIle.js';
import commandList from '../data/commandList.js';
import state from '../data/state.js';
import greeting from '../util/greeting.js';

let { currentPath } = state;
let currentCommand = [];

async function mainCommandHandler(com) {
  currentCommand = await commandSplit(com);

  //Main switch command
  switch (currentCommand[0]) {
    case 'up':
      let newPath = await pathUp(currentPath);
      currentPath = newPath;
      greeting(currentPath);
      break;
    case 'cd':
      if (await isAvailable(currentCommand[1])) {
        currentPath = currentCommand[1];
      } else {
        console.log('Error: path is incorrect');
      }
      greeting(currentPath);
      break;
    case 'add':
      await createEmptyFIle(currentPath, currentCommand[1]);
      greeting(currentPath);
      break;
    case 'rm':
      await deleteFile(currentCommand[1]);
      greeting(currentPath);
      break;
    case 'os':
      osInfo(currentCommand);
      greeting(currentPath);
      break;
    case 'hash':
      await calcHash(currentCommand[1]);
      greeting(currentPath);
      break;
    case 'help':
      console.table(commandList, ['command', 'description', 'example']);
      greeting(currentPath);
      break;
    case '.exit':
      killProcess();
    default:
      console.log('Instruction is not defined');
  }

  //Functions
  async function commandSplit(inpCom) {
    const outPut = [];
    const comSpl = inpCom.split(' ');
    comSpl.map((el) => {
      if (el !== '') {
        outPut.push(el);
      }
    });
    return outPut;
  }
}

export default mainCommandHandler;
