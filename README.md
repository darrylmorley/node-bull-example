# Run a cron job with bull
Simple example of how to run a repeating cron job with bull. There are also other options for repeatable jobs.


Repeated Job Details
```
interface RepeatOpts {
  cron?: string; // Cron string
  tz?: string; // Timezone
  startDate?: Date | string | number; // Start date when the repeat job should start repeating (only with cron).
  endDate?: Date | string | number; // End date when the repeat job should stop repeating.
  limit?: number; // Number of times the job should repeat at max.
  every?: number; // Repeat every millis (cron setting cannot be used together with this setting.)
  count?: number; // The start value for the repeat iteration count.
  readonly key: string; // The key for the repeatable job metadata in Redis.
}
```

Adding a job with the repeat option set will actually do two things immediately: create a Repeatable Job configuration, and schedule a regular delayed job for the job's first run. This first run will be scheduled "on the hour", that is if you create a job that repeats every 15 minutes at 4:07, the job will first run at 4:15, then 4:30, and so on. If startDate is set, the job will not run before startDate, but will still run "on the hour". In the previous example, if startDate was set for some day at 6:05, the same day, the first job would run on that day at 6:15.

The cron expression uses the [cron-parser](https://github.com/harrisiirak/cron-parser) library, see their docs for more details.