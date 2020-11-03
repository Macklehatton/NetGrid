#!/usr/bin/env bash

# This script will deploy the frontend assets to the on-prem webserver

#
source ../.env
export REACT_APP_API_URL='https://netgrid-api.njax.org'
npm run-script build
rsync -avz build/ it-workhorse-vm:/storage/netgrid
# You only need to upload this once unless you change it
# rsync -avz nginx-netgrid.conf it-workhorse-vm:/etc/nginx/sites-enabled/nginx-netgrid.conf
