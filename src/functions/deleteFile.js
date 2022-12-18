import { rm } from 'node:fs/promises';

const deleteFile = async (path) => {
  try {
    rm(path);
  } catch {
    console.error('Impossible to delete file: path to file is incorrect');
  }
};

export default deleteFile;
