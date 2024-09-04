const getFileExtension = (fileName) => {
  const fileExtDelimiterIndex = fileName.lastIndexOf('.');

  if (fileExtDelimiterIndex === -1) return ''; // return an enum value we can utilze here

  return fileName.substring(fileExtDelimiterIndex + 1, fileName.length);
};

const blockedFileExtensionsEnum = Object.freeze({
  exe: true,
  bat: true,
  cmd: true,
  com: true,
  cpl: true,
  scr: true,
  js: true,
  vbs: true,
  jse: true,
  msi: true,
  msp: true,
  pif: true,
  reg: true,
  sh: true,
  php: true,
  pl: true,
  py: true,
  rb: true,
  dll: true,
  jar: true,
  jsp: true,
  html: true,
  htm: true,
  asp: true,
  aspx: true,
  cgi: true,
  sys: true,
  lnk: true,
  vb: true,
  vbscript: true,
  wsf: true,
  ps1: true,
  htaccess: true,
  shtml: true,
});

const blockedFileExtensions = {
  blockedFileExtentions: blockedFileExtensionsEnum,
  getIsFileBlocked(fileExt) {
    // Good test would be to switch this out for a Set DS
    return this.blockedFileExtentions[fileExt];
  },
};

const getNewFileBlockListManager = () => ({
  // Good test would be to switch this out for a Set DS
  keys: {},

  containsKey(key) {
    return this.keys[key];
  },

  add(key) {
    if (this.containsKey(key)) {
      console.error(`Key: ${key} already exists`);
      return;
    }
    this.keys[key] = 1;
  },
  remove(key) {
    if (!this.containsKey(key)) {
      console.error(`Key: ${key} does not exist`);
      return;
    }

    delete this.keys[key];
  },

  getBlockList() {
    return Object.keys(this.keys);
  },
});

// Takes in files array and returns object/set where the keys are the indecies of files that will not proceed with the upload
export default (files) => {
  const blockedFilesIndecies = getNewFileBlockListManager();

  files.forEach((file, index) => {
    const fileExt = getFileExtension(file.name);

    const isBlackListed = blockedFileExtensions.getIsFileBlocked(fileExt);

    if (isBlackListed) blockedFilesIndecies.add(index);
  });

  return blockedFilesIndecies.getBlockList();
};
