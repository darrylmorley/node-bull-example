# Demo events in bull

A queue emits some useful events, for example...
```
.on('completed', function (job, result) {
  // Job completed with output result!
})
```

Available events:
```
.on('error', function (error) {
  // An error occured.
})

.on('waiting', function (jobId) {
  // A Job is waiting to be processed as soon as a worker is idling.
});

.on('active', function (job, jobPromise) {
  // A job has started. You can use `jobPromise.cancel()`` to abort it.
})

.on('stalled', function (job) {
  // A job has been marked as stalled. This is useful for debugging job
  // workers that crash or pause the event loop.
})

.on('lock-extension-failed', function (job, err) {
  // A job failed to extend lock. This will be useful to debug redis
  // connection issues and jobs getting restarted because workers
  // are not able to extend locks.
});

.on('progress', function (job, progress) {
  // A job's progress was updated!
})

.on('completed', function (job, result) {
  // A job successfully completed with a `result`.
})

.on('failed', function (job, err) {
  // A job failed with reason `err`!
})

.on('paused', function () {
  // The queue has been paused.
})

.on('resumed', function (job) {
  // The queue has been resumed.
})

.on('cleaned', function (jobs, type) {
  // Old jobs have been cleaned from the queue. `jobs` is an array of cleaned
  // jobs, and `type` is the type of jobs cleaned.
});

.on('drained', function () {
  // Emitted every time the queue has processed all the waiting jobs (even if there can be some delayed jobs not yet processed)
});

.on('removed', function (job) {
  // A job successfully removed.
});
```