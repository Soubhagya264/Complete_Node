const { Worker, Queue } = require('bullmq');

// Configure the connection to Redis
const connection = {
  host: '127.0.0.1', // or your Redis server IP
  port: 6379        // or your Redis server port
};


// Create a Worker
const worker = new Worker('email-queue', async (job) => {
  console.log(job.data);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 4 * 1000);
  });
}, { connection });

worker.on('completed', (job) => {
  console.log(`Job ${job.id} has completed!`);
});

worker.on('failed', (job, err) => {
  console.log(`Job ${job.id} has failed with ${err.message}`);
});

