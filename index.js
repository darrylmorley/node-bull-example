// Show progress of jobs in queue in bull ui
import Bull from "bull";
import dotenv from "dotenv";
import {promisify} from "util";
const sleep = promisify(setTimeout);

dotenv.config();
const {REDIS_HOST, REDIS_PORT, REDIS_PASSWORD} = process.env;

const redisOptions = {redis: {host: REDIS_HOST, port: REDIS_PORT, password: REDIS_PASSWORD}};

// define queue
const burgerQueue = new Bull("burger", redisOptions);

// register processor
burgerQueue.process(async (payload, done) => {
  try {   
    // step 1
    payload.log("Step 1: Preparing the bun");
    payload.progress(25);
    await sleep(5000);
    // step 2
    payload.log("Step 2: Grilling the patty");
    payload.progress(50);
    await sleep(5000);
    // step 3
    payload.log("Step 3: Adding cheese");
    payload.progress(75);
    await sleep(5000);
    // step 4
    payload.log("Step 4: Adding toppings");
    payload.progress(100);
    sleep(5000);
    // done
    payload.log("Done: Burger is ready");
    done();
  } catch (error) {
    done(error);
  }
});

// add job to the queue
burgerQueue.add({
  bun: "sesame",
  patty: "beef",
  cheese: "cheddar",
  toppings: ["lettuce", "tomato", "onion"],
});
