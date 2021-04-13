const { v4: uuidv4 } = require("uuid");

const params = (fileName) => {
  const myFile = fileName.originalname.split(".");
  const fileType = myFile[myFile.length - 1];
  const imageParams = {
    Bucket: "user-images-5c1d4f29-aebb-41e6-975e-611b0621c26c",
    Key: `${myFile[0]}-${uuidv4()}.${fileType}`,
    Body: fileName.buffer,
    ACL: "public-read", // allow read access to this file
  };
  return imageParams;
};

module.exports = params;
