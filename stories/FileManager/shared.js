import { promiseWait } from 'library/common/utils';

const caches = {};
const createFileList = preFix => [
  {
    name: `${preFix}-1`,
    relPath: `${preFix}-1`,
    type: 'folder',
  },
  {
    name: `${preFix}-2`,
    relPath: `${preFix}-2`,
    type: 'folder',
  },
  {
    name: `${preFix}-3`,
    relPath: `${preFix}-3`,
    type: 'folder',
  },
  {
    name: `${preFix}-4.js`,
    relPath: `${preFix}-4.js`,
    type: 'file',
  },
  {
    name: `${preFix}-5.js`,
    relPath: `${preFix}-5.js`,
    type: 'file',
  },
  {
    name: `${preFix}-6.js`,
    relPath: `${preFix}-6.js`,
    type: 'file',
  },
  {
    name: `${preFix}-7.js`,
    relPath: `${preFix}-7.js`,
    type: 'file',
  },
  {
    name: `${preFix}-8.js`,
    relPath: `${preFix}-8.js`,
    type: 'file',
  },
  {
    name: `${preFix}-9.js`,
    relPath: `${preFix}-9.js`,
    type: 'file',
  },
  {
    name: `${preFix}-10.js`,
    relPath: `${preFix}-10.js`,
    type: 'file',
  },
];

export const canCreate = async ({
  filename,
  type,
  params: {
    options: {
      paths,
    },
  },
}) => {
  if (!filename) {
    return 'Filename or folder name is empty!!'
  }
  const path = paths.join('/');
  caches[path] = caches[path] || createFileList(preFix);
  const found = caches[path].find(info => info.relPath === filename);
  if (found && found.type === 'folder') {
    return 'Folder with the same name exists!!'
  }
};

export const isFileExists = async ({
  filename,
  type,
  params: {
    options: {
      paths,
    },
  },
}) => {
  const path = paths.join('/');
  caches[path] = caches[path] || createFileList(preFix);
  const found = caches[path].find(info => info.relPath === filename);
  if (found && found.type === 'file') {
    return true;
  }
  return false;
};

export const createFileOrFolder = async ({
  filename,
  params: {
    options: {
      paths,
    },
  },
}) => {
  const path = paths.join('/');
  caches[path] = caches[path] || createFileList(preFix);
  const found = caches[path].find(info => info.relPath === filename);
  if (!found) {
    caches[path].push({
      name: filename,
      relPath: filename,
      type: 'folder',
    });
  }
};

export const getFileList = async (paths) => {
  const path = paths.join('/');
  const preFix = paths.length ? paths[paths.length - 1] : 'save-data';
  caches[path] = caches[path] || createFileList(preFix);
  // console.log('preFix :', preFix);
  await promiseWait(500);
  return caches[path];
};
