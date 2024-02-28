import Bull from "bull";
import dotenv from "dotenv";

dotenv.config();
const {REDIS_HOST, REDIS_PORT, REDIS_PASSWORD} = process.env;

const redisOptions = {redis: {host: REDIS_HOST, port: REDIS_PORT, password: REDIS_PASSWORD}};

// define queue
const burgerQueue = new Bull("burger", redisOptions);

// register processor
burgerQueue.process((payload, done) => {
  console.log("Preparing the burger..");
  setTimeout(() => {
    console.log("Burger is ready!");
    done();
  }, 3000)
});

// add job to the queue
burgerQueue.add({
  bun: "sesame",
  patty: "beef",
  cheese: "cheddar",
  toppings: ["lettuce", "tomato", "onion"],
});
