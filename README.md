# Blockly - Make Game
### Introduction

Make Game is an experimental project let people make games and learn coding with simple drag & drop blocks.

### Setup

##### Prerequisites

Install [polymer-cli](https://github.com/Polymer/polymer-cli):

    npm install -g polymer-cli

Install gulp-cli

	npm i -g gulp-cli

##### Install project dependencies

    npm install & bower install

### Start the development server

This command serves the app at `http://localhost:9000` and provides basic URL
routing for the app:

    gulp watch


### Build

This command performs HTML, CSS, and JS minification on the application
dependencies.

The minified files are output to the `www` folder, and are suitable
for serving from a HTTP/2+Push compatible server.

In addition the command also creates a fallback `www` folder,
generated using fragment bundling, suitable for serving from non
H2/push-compatible servers or to clients that do not support H2/Push.

    gulp build
