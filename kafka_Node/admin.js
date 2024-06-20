
const { kafka } = require("./client")
async function init() {
    const admin = kafka.admin();
    console.log("Admin connecting")
    await admin.connect();
    console.log("Admin connecting Success.....");
    console.log("Creating Topic.....[rider-updates]")
    await admin.createTopics({
        topics: [{
            topic: "rider-updates",
            numPartitions: 2,
        }]
    })
    console.log("Topic created success.......");
    console.log("Disconnecting admin.........");
    await admin.disconnect();
}
init().catch((e) => {
    console.error(e);
})

