import { appendFile } from 'node:fs/promises';
import { join } from 'node:path';

const createEmptyFIle = async (path, fileName) => {
  const fullPath = join(path, fileName);
  const data = '';
  try {
    await appendFile(fullPath, data);
    console.log('File created!');
  } catch {
    console.error('Error file create!');
  }
};

export default createEmptyFIle;
