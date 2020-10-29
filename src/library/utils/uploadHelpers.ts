import crypto from 'crypto';

// http://code.hootsuite.com/html5/
export function isUploadSupported() {
  if (navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/)) { // eslint-disable-line max-len
    return false;
  }
  return true;
}

export function isFileReaderSupported() {
  return window.File && window.FileReader && window.FormData;
}

export const defaultHashFunc = data => crypto
  .createHash('sha256')
  .update(data, 'binary').digest('hex');

export type ProcessFileDataUrlResult = {
  file : string;
  fileName : string;
  fileType : string;
  dataURL : string;
  hash?: string;
};

export type ProcessFileResult = ProcessFileDataUrlResult;

export function processFileFromDataURL(dataURL, file, options : any = {}) : Promise<ProcessFileDataUrlResult> {
  const fileName = file.name;
  const fileType = file.type;
  const doHash = !!options.hash;
  const hashFunc = (typeof options.hash === 'function' ? options.hash : defaultHashFunc);

  const searchRegex = /data:(.*);base64,([a-zA-Z0-9+/=]*)/g;
  const dataUrlRegexResult = searchRegex.exec(dataURL || '');

  const result : ProcessFileDataUrlResult = {
    file,
    fileName,
    fileType,
    dataURL,
  };

  if (doHash && dataUrlRegexResult) {
    result.hash = hashFunc(atob(dataUrlRegexResult[2]));
    // console.log('result.hash :', result.hash);
  }

  return Promise.resolve(result);
}

export const readFileAsDataURL = (file, options = {}) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onerror = () => {
    reject(new Error('There was an error reading the file!'));
  };

  reader.onloadend = () => {
    // console.log('reader.result, file :', reader.result, file);
    processFileFromDataURL(reader.result, file, options).then(resolve, reject);
  };

  reader.readAsDataURL(file);
});

export const processFile = processFileFromDataURL;
export const readFile = readFileAsDataURL;

// =====================================================
export type ProcessFileBinaryResult = {
  file : string;
  fileName : string;
  fileType : string;
  buffer : string | ArrayBuffer | null;
  hash?: string;
};

export function processFileFromBinary(buffer : string | ArrayBuffer | null, file, options : any = {}) : Promise<ProcessFileBinaryResult> {
  console.log('buffer :', buffer);
  const fileName = file.name;
  const fileType = file.type;
  const doHash = !!options.hash;
  const hashFunc = (typeof options.hash === 'function' ? options.hash : defaultHashFunc);

  // const searchRegex = /data:(.*);base64,([a-zA-Z0-9+/=]*)/g;
  // const dataUrlRegexResult = searchRegex.exec(data || '');

  const result : ProcessFileBinaryResult = {
    file,
    fileName,
    fileType,
    buffer,
  };
  // if (doHash) {
  //   result.hash = hashFunc(buffer);
  //   // console.log('result.hash :', result.hash);
  // }

  return Promise.resolve(result);
}

export const readFileAsBinary = (file, options = {}) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onerror = () => {
    reject(new Error('There was an error reading the file!'));
  };

  reader.onloadend = () => {
    // console.log('reader.result, file :', reader.result, file);
    processFileFromBinary(reader.result, file, options).then(resolve, reject);
  };

  reader.readAsArrayBuffer(file);
});


export function processFileFromText(data, file, options = {}) {
  const fileName = file.name;
  const fileType = file.type;

  const result = {
    file,
    fileName,
    fileType,
    data,
  };

  return Promise.resolve(result);
}

export const readFileAsText = (file, options = {}) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onloadend = () => {
    // console.log('reader.result, file :', reader.result, file);
    processFileFromText(reader.result, file, options).then(resolve, reject);
  };

  reader.onerror = () => {
    reject(new Error('There was an error reading the file!'));
  };

  reader.readAsText(file);
});
