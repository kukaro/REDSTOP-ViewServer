#!/usr/bin/env bash
sudo chmod -R 777 .
cd BackEnd-Express
sudo npm install
cd ..
cd FrontEnd-Vue
sudo npm install
sudo npm run build
sudo rm -rf ../BackEnd-Express/public/static
sudo mv dist/static ../BackEnd-Express/public
sudo mv dist/index.html dist/index.ejs
sudo mv dist/index.ejs ../BackEnd-Express/views