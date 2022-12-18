const commandList = [
  {
    command: 'up',
    group: 'file system',
    description: 'Move to up from current path',
    example: 'up',
  },
  {
    command: 'cd',
    group: 'file system',
    description: 'Move to path',
    example: 'cd <path_to_directory>',
  },
  {
    command: 'add',
    group: 'file system',
    description: 'Create empty file from current path',
    example: 'add <new_file_name>',
  },
  {
    command: 'rm',
    group: 'file system',
    description: 'Delete file from current path',
    example: 'rm <path_to_file>',
  },
  {
    command: 'os --EOL',
    group: 'operation system',
    description: 'Get information of EOLs current operation system',
    example: 'os --EOL',
  },
  {
    command: 'os --cpus',
    group: 'operation system',
    description: 'Get information of CPUs current operation system',
    example: 'os --cpus',
  },
  {
    command: 'os --homedir',
    group: 'operation system',
    description: 'Get information of home direcrory current PC',
    example: 'os --homedir',
  },
  {
    command: 'os --username',
    group: 'operation system',
    description: 'Get information of current user',
    example: 'os --username',
  },
  {
    command: 'os --architecture',
    group: 'operation system',
    description: 'Get information of architecture current PC',
    example: 'os --architecture',
  },
  {
    command: 'hash',
    group: 'hash',
    description: 'Calculeted hash for file',
    example: 'hash <path_to_file>',
  },
  {
    command: '.exit',
    group: 'utility',
    description: 'Exit from process',
    example: '.exit',
  },
];

export default commandList;
