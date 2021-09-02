const {Storage} = require('@google-cloud/storage');

const storage = new Storage();
const bucketName = 'goit-26-test';
const filePath = './tmp/4385ede8-1387-403a-9dbe-b9d573e5b2f7.png';
const destFileName = '4385ede8-1387-403a-9dbe-b9d573e5b2f7.jpeg';

const downloadFilePath = '4385ede8-1387-403a-9dbe-b9d573e5b2f7.jpeg';
const downloadDestination = './tmp/downloaded_image.png';

async function launchDemo() {
  // Uploading
  //   await storage.bucket(bucketName).upload(filePath, {
  //     destination: destFileName,
  //   });

  //   console.log(`${filePath} uploaded to ${bucketName}`);

  // Downloading
  await storage.bucket(bucketName).file(downloadFilePath).download({
    destination: downloadDestination,
  });

  console.log(
      `gs://${bucketName}/${downloadFilePath} downloaded to ${downloadDestination}.`
  );
};

launchDemo()
    .catch(console.error);
