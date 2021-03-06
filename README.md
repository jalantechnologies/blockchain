# Blockchain

## Scripts

- `npm build` - For building the app. (Set `NODE_ENV` to `testing` to build for test)
- `npm start` - For starting the app.
- `npm serve` - For building, starting and reloading on changes over the app.
- `npm test` - To run test suits via `mocha`.
- `npm test-dist` - To run test suits for the distribution build.

## Configuration

The module uses [config](https://www.npmjs.com/package/config) for loading configuration entries.

In the `config` directory:

- Consult/update `custom-environment-variables.json` for loading values via environment. This overrides any value set in files defined below.
- Create `local.json` for local config.
- Consult/update `development.json` for values at development. (The default env)
- Consult/update `testing.json` for values at testing. `NODE_CONFIG_ENV` must be set to `testing` for this.
- Consult/update `staging.json` for values at staging. `NODE_CONFIG_ENV` must be set to `staging` for this.
- Consult/update `production.json` for values at production. `NODE_CONFIG_ENV` must be set to `production` for this.
- Consult/update `default.json` for **constant values only**.

**Entries**

Each entry here is an object notation and is provided with short description.

- `sentry.dsn` `String` - Sentry DSN for error reporting. If not provided, sentry will not be configured.
- `sentry.env` `String` - Environment for Sentry. [More Info](https://docs.sentry.io/learn/environments/?platform=node)
- `papertrail.host` `String` - If provided, logging via [Papertrail](https://papertrail.com) will be enabled.
- `papertrail.port` `String` - If provided, logging via [Papertrail](https://papertrail.com) will be enabled.
- `papertrail.program` `String` - Papertrail program. Useful for prefixing log messages with custom namespace.
- `papertrail.handleExceptions` `Boolean` - For enabling logging of un-handled exceptions via papertrail. (Default: `false`)
- `www.port` `String/Number` - Port for listening incoming HTTP connection. (Default: `8080`)
- `blockchain.websocket.port` - 'Port at which it should allows peers to connect (Default: `5001`)'
- `blockchain.websocket.peers` - 'Peers to which it should connect to sync blockchain'
- `blockchain.difficulty` - Initial difficulty for the blockchain (number of leading zeros in hash, default: 4)
- `blockchain.miningRate` - Rate at which block should be included in blockchain (time in milliseconds, default: 1 minute)
- `blockchain.miningReward` - Reword associated with mining a block

## Features

- Logging via papertrail.
- Error reporting via sentry.
- Heroku deployment ready (see `app.json` and `Procfile`)
- PM2 process manager ready (`ecosystem.config.js`)
- Internationalization support.
- CI/CD via CircleCI.
