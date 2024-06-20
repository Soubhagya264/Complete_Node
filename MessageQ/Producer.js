const { Queue } = require('bullmq');
const notificationQueue = new Queue('email-queue');

async function init(vars) {
    const res = await notificationQueue.add("Email to Soubhagya ", { email: "Soubhagya.dev", subject: `Welcome Dear ${vars}`, body: `Hey Soubhagya, Welcome for ${vars} times ` });
    console.log("Job added to queue", res.id);
}
for (let i = 1; i < 4; i++) {
    init(i);
}

