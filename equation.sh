#!/bin/bash

filepath=$1

if [ -z $filepath ]
then 
  node interactive.js 
else 
  node fileMode.js $filepath
fi
