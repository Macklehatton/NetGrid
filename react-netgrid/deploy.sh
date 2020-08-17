#!/usr/bin/env bash

# This script will deploy the frontend assets to the on-prem webserver

#
source ../.env
npm run-script build
rsync -avz build/ it-workhorse-vm:/storage/netgrid
# You only need to upload this once
# rsync -avz nginx-netgrid.conf it-workhorse-vm:/etc/nginx/sites-enabled/nginx-netgrid.conf
