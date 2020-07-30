# NetGrid Java API

This is the primary webapp for handling user authentication and sending game data to the client such as inventory, quest completion, etc.  


###### References:
- https://spring.io/guides/gs/accessing-data-mysql/


## Build

```
gradle build
```


## Execute

```
export MYSQL_ROOT_PASSWORD=$(kubectl get secret --namespace default netgrid-mysql-dev -o jsonpath="{.data.mysql-root-password}" | base64 --decode; echo)
export MYSQL_HOST=$(kubectl get nodes --namespace default -o jsonpath='{.items[0].status.addresses[0].address}')
export MYSQL_PORT=$(kubectl get svc --namespace default netgrid-mysql-dev -o jsonpath='{.spec.ports[0].nodePort}')

gradle bootRun
```


## Add records

```
curl localhost:8080/users/add \
  -d name=myname1 \
  -d bio=blah%20blah
```

## Publish to Artifactory

```
gradle artifactoryPublish -Partifactory_user=$USER -Partifactory_password=$ARTIFACTORY_PASSWORD_TRINETCO
```


## Boot via Docker

```
docker build -t registry.njax.org/TriNetCo/NetGrid-java-api .
docker push registry.njax.org/TriNetCo/NetGrid-java-api

docker run \
  -p 8080:8080 \
  -e MYSQL_HOST=$MYSQL_HOST \
  -e MYSQL_PORT=$MYSQL_PORT \
  -e MYSQL_ROOT_PASSWORD=$MYSQL_ROOT_PASSWORD \
  registry.njax.org/TriNetCo/NetGrid-java-api
```


## Boot via Helm

```
cd helm/
helm upgrade --install --atomic \
  --set-string mysql_root_password=${MYSQL_ROOT_PASSWORD} \
  netgrid-java-api .
```
