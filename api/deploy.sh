#!/bin/bash

echo "We are deploying our app"
pm2 stop "npm start"

DIRECTORY = "/Users/tiwarikanha26/Desktop/Blog-Application/api"

cd DIRECTORY
echo "Installing the Dependencies"
npm install 
echo "Dependency Installed"

echo "Now Starting our backend"
echo "Now making it on air"
pm2 start "npm start"

echo "Our App in on the air"



