#!/usr/bin/env bash
npm run build:prod example-custom-element  && cat dist/example-custom-element/runtime.js dist/example-custom-element/main.js dist/example-custom-element/polyfills.js> preview/test.js

