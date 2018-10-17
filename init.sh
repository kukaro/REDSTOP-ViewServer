#!/usr/bin/env bash
cd BackEnd-Express
npm install
cd ..
cd FrontEnd-Vue
npm install
npm run build
rm -rf ../BackEnd-Express/static
mv dist/static ../BackEnd-Express/public
mv dist/index.html dist/index.ejs
mv dist/index.ejs ../BackEnd-Express/views