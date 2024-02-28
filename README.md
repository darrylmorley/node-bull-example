# Rate limiting example in bull

We can options to a bull queue such as rate limiting:

```
interface RateLimiter {
  max: number; // Max number of jobs processed
  duration: number; // per duration in milliseconds
  bounceBack?: boolean = false; // When jobs get rate limited, they stay in the waiting queue and are not moved to the delayed queue
  groupKey?: string; // allows grouping of jobs with the specified key from the data object passed to the Queue#add (ex. "network.handle")
}
```