#!/bin/bash
set -e

echo "Beginning NPM Server"
cd /app

# Spawn bash if we're booting in console mode
if [ "$1" = 'bash' ]; then
    /bin/bash
    exit
fi

npm start
