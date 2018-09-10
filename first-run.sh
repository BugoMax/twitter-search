#!/bin/bash

echo
echo 'Installing node_modules at server - http://localhost:8080.'
echo

cd server
npm install

echo
echo 'Installing node_modules and run devserver - http://localhost:8080.'
echo

cd ../
npm install
npm run start
