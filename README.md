# ![Project Link app](https://raw.githubusercontent.com/fxbox/app/master/app/img/icons/32.png "Project Link app") Project Link app

[![Build Status](https://travis-ci.org/fxbox/app.svg?branch=master)](https://travis-ci.org/fxbox/app)
[![License](https://img.shields.io/badge/license-MPL2-blue.svg)](https://raw.githubusercontent.com/fxbox/app/master/LICENSE)

> An app for [Project Link](https://wiki.mozilla.org/Project_Link)

## Support

The following browsers are actively supported:

* Firefox Nightly for Android
* Chrome Beta for Android

## Prerequisites

Assuming you have git and [nvm](http://nvm.sh/) installed, clone this repo:

```bash
$ git clone https://github.com/fxbox/app
$ cd app
```

And then run:

```bash
$ nvm install v4.2.2
$ nvm use v4.2.2
$ npm install -g gulp
$ npm install
```

## How to build?

```bash
$ gulp
```

Then point your browser to [https://localhost:8000](https://localhost:8000/) and accept security exception for self-signed
development certificate.

By default app is served via `https` using self-signed certificate from `certs` folder. Certificate is valid for ~100
years and generated with the following command:

```bash
$ openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 36500 -nodes
```

In case custom certificate is required you can either override respective files in `certs` folder or change certificate
and private key paths in `webserver` gulp task in `gulpfile.js`.

Even though it's not recommended sometimes you may want to switch to `http`, for that purpose just comment out `https`
config property in `webserver` gulp task in `gulpfile.js`. Check out official [gulp-webserver module page](https://www.npmjs.com/package/gulp-webserver)
for possible options as well. And don't forget to flip it back while running integration tests as they will still assume
that app is run via `https`.


Note: The app is built in the `dist/app` folder.

## Tests

### All regular tests

Run `npm test`.

### Run end-to-end tests (e2e)

Steps (to be scripted soon):

1. Clone [foxbox](https://github.com/fxbox/foxbox/)
2. Run it with `cargo run`
3. With a browser, perform the first time setup by going to [http://localhost:3000](http://localhost:3000/)
4. Run `gulp test-e2e`
