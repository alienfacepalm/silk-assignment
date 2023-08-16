#!/bin/bash

cd silk

if [ "$1" == "prod" ]; then
    echo "Running assignment in production mode..."
    
    # Check if "nx" command is available
    if ! command -v nx &> /dev/null
    then
        echo "nx command not found, installing with npm i -g nx"
        npm i -g nx
    fi
    
    # Build both findings and dashboard projects
    nx build findings
    nx build dashboard
    
    # Run the projects in production mode
    node ./dist/apps/findings/main.js
    node ./dist/apps/dashboard/main.js
else
    echo "Running assignment in development mode..."
    
    # Check if "nx" command is available
    if ! command -v nx &> /dev/null
    then
        echo "nx command not found, installing with npm i -g nx"
        npm i -g nx
    fi
    
    # Run both findings and dashboard projects in development mode
    nx run-many --target=serve --projects=findings,dashboard
fi
