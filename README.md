# Simple example of handling job failures in bull
Demo retry and backoff options in bull

Re-run a job that has failed. Returns a promise that resolves when the job is scheduled for retry.
```
retry(): Promise
```