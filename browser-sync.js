module.exports = {
  "server": "build",
  "port": "8080",
  "files": "build",
  "open": false,
  "notify": false,
  // "reloadDelay": 5000,
  "reloadDebounce": 500,
  "serveStatic": [
    'build'
  ],
  "serveStaticOptions": {
    "extensions": ['html']
  },
}