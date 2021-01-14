#!/bin/bash
set -e

# This entry point runs two processes, a continuous java api build and a continuous serve of a springboot application


# Spawn bash if we're booting in console mode
if [ "$1" = 'bash' ]; then
    /bin/bash
    exit
fi

echo "Beginning Build Server"
cd /home/gradle/src
gradle build --continuous &
gradle bootRun
