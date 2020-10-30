#!/usr/bin/env bash

pushd ..
docker build . -t registry.njax.org/trinetco/netgrid/java-api
docker push registry.njax.org/trinetco/netgrid/java-api
popd

pushd helm
helm upgrade --install --atomic \
  --set-string mysql_root_password=${MYSQL_ROOT_PASSWORD} \
  netgrid-java-api .
popd
