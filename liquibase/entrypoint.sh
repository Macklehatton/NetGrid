#!/bin/bash
set -e
export PATH="${PATH}:/liquibase"
echo "Beginning Liquibase Update"
cd /liquibase/jdbc

# Spawn bash if we're booting in console mode
if [ "$1" = 'bash' ]; then
    /bin/bash
    exit
fi

until nc -z -v -w30 $MYSQL_HOST $MYSQL_PORT
do
  echo "Waiting for database connection..."
  # wait for 5 seconds before check again
  sleep 5
done

liquibase \
  --logLevel=debug \
  --url="jdbc:mysql://${MYSQL_HOST}:${MYSQL_PORT}/demo?createDatabaseIfNotExist=true" \
  --password=$MYSQL_ROOT_PASSWORD \
  update

