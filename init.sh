#!/usr/bin/env bash
sudo chmod -R 777 .
cd BackEnd-Express
sudo npm install
sudo chmod -R 777 .
cd ..
sudo chmod -R 777 .
cd FrontEnd-Vue
sudo npm install
sudo chmod -R 777 .
sudo npm run build
sudo chmod -R 777 .
sudo rm -rf ../BackEnd-Express/public/static
sudo mv dist/static ../BackEnd-Express/public
sudo mv dist/index.html dist/index.ejs
sudo mv dist/index.ejs ../BackEnd-Express/views
pm2 delete all
cd ..
cd BackEnd-Express
pm2 start bin/www