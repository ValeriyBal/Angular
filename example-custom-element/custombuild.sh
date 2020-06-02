#!/bin/sh
## ng build example-custom-element --prod --output-hashing=none && cat dist/example-custom-element/runtime.js dist/example-custom-element/polyfills.js dist/example-custom-element/scripts.js dist/example-custom-element/main.js > preview/angularapp.js

cat dist/example-custom-element/runtime-es5.js dist/example-custom-element/polyfills-es5.js dist/example-custom-element/scripts-es5.js dist/example-custom-element/main-es5.js > preview/angularapp.js


