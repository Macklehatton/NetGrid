## MySQL Setup

For references, see:
  - [Best Java reference](https://spring.io/guides/gs/accessing-data-mysql/)
  - https://qxf2.com/blog/mysql-and-liquibase/
  - https://www.liquibase.org/documentation/tutorials/mysql.html


###### Access MySQL

```
MYSQL_ROOT_PASSWORD=$(kubectl get secret --namespace default netgrid-mysql-dev -o jsonpath="{.data.mysql-root-password}" | base64 --decode; echo)
MYSQL_HOST=$(kubectl get nodes --namespace default -o jsonpath='{.items[0].status.addresses[0].address}')
MYSQL_PORT=$(kubectl get svc --namespace default netgrid-mysql-dev -o jsonpath='{.spec.ports[0].nodePort}')


mysql -h netgrid-mysql-dev.default.svc.cluster.local -u root -p

mysql -h ${MYSQL_HOST} -P ${MYSQL_PORT} -u root -p

kubectl run --rm -i --tty ubuntu --image=registry.njax.org/destructocats/liquibase_client --restart=Never -- bash -il
mysql -h netgrid-mysql-dev.default.svc.cluster.local -u root -p
```


## Liquibase Setup

###### Build the Liquibase Image

```
docker build . -t registry.njax.org/destructocats/liquibase_client
docker push registry.njax.org/destructocats/liquibase_client
docker run \
  -e MYSQL_USER=${MYSQL_USER} \
  -e MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD} \
  -e MYSQL_HOST=${MYSQL_HOST} \
  -e MYSQL_PORT=${MYSQL_PORT} \
  registry.njax.org/destructocats/liquibase_client
```


###### Run liquibase via binary

```
MYSQL_ROOT_PASSWORD=$(kubectl get secret --namespace default netgrid-mysql-dev -o jsonpath="{.data.mysql-root-password}" | base64 --decode; echo)
MYSQL_HOST=$(kubectl get nodes --namespace default -o jsonpath='{.items[0].status.addresses[0].address}')
MYSQL_PORT=$(kubectl get svc --namespace default netgrid-mysql-dev -o jsonpath='{.spec.ports[0].nodePort}')

liquibase \
  --driver=com.mysql.cj.jdbc.Driver \
  --classpath=mysql-connector-java-8.0.19.jar \
  --url="jdbc:mysql://${MYSQL_HOST}:${MYSQL_PORT}/demo?createDatabaseIfNotExist=true" \
  --changeLogFile=changelog.xml \
  --username=root \
  --password=$MYSQL_ROOT_PASSWORD \
  generateChangeLog
```


###### Run via Docker locally

```
docker run -it \
  -v ${PWD}/mysql-connector-java-8.0.19.jar:/liquibase/jdbc/mysql-connector-java-8.0.19.jar \
  registry.njax.org/destructocats/liquibase_client \
  /liquibase/liquibase \
  --driver=com.mysql.cj.jdbc.Driver \
  --classpath=/liquibase/jdbc/mysql-connector-java-8.0.19.jar \
  --url="jdbc:mysql://netgrid-mysql-dev.default.svc.cluster.local:3306/mysql?createDatabaseIfNotExist=true" \
  --changeLogFile=changelog.xml \
  --username=root \
  --password=$MYSQL_ROOT_PASSWORD \
  generateChangeLog
```

###### generate the changelog.xml file

```
/liquibase/liquibase \
  --driver=com.mysql.cj.jdbc.Driver \
  --classpath=/liquibase/jdbc/mysql-connector-java-8.0.19.jar \
  --url="jdbc:mysql://netgrid-mysql-dev.default.svc.cluster.local:3306/mysql" \
  --changeLogFile=changelog.xml \
  --username=root \
  --password=$MYSQL_ROOT_PASSWORD \
  generateChangeLog
```

###### Update Database to match changelog

```
MYSQL_ROOT_PASSWORD=$(kubectl get secret --namespace default netgrid-mysql-dev -o jsonpath="{.data.mysql-root-password}" | base64 --decode; echo)
MYSQL_HOST=$(kubectl get nodes --namespace default -o jsonpath='{.items[0].status.addresses[0].address}')
MYSQL_PORT=$(kubectl get svc --namespace default netgrid-mysql-dev -o jsonpath='{.spec.ports[0].nodePort}')

liquibase \
  --url="jdbc:mysql://${MYSQL_HOST}:${MYSQL_PORT}/demo?createDatabaseIfNotExist=true" \
  --password=$MYSQL_ROOT_PASSWORD \
  update
```


###### Header for some of the change scripts

```
--liquibase formatted sql
--changeset author:me runAlways:true
--preconditions onFail:HALT onError:HALT
--validCheckSum any

```
