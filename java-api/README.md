# NetGrid Java API

This is the primary webapp for handling user authentication and sending game data to the client such as inventory, quest completion, etc.  


###### References:
- https://spring.io/guides/gs/accessing-data-mysql/


## Build

To build the docker container, see the parent readme.  

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

## Deploy to Helm

Please see the parent readme!

## Authentication

Ref:  https://medium.com/@gustavo.ponce.ch/spring-boot-spring-mvc-spring-security-mysql-a5d8545d837d

curl -i -XPOST localhost:8080/api/services/controller/user/login -d '{"name": "Mario", "password": "123456"}'
