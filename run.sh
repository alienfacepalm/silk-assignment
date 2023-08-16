#!/bin/bash

cd silk

if ! command -v nx &> /dev/null
then
    echo "nx command not found, installing with npm i -g nx"
    npm i -g nx
fi
nx run-many --target=serve --projects=findings,dashboard

