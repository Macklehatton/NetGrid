# NetGrid

## Dev Dependencies

- Git LFS
- Unity 2019.4.4f1
- [mysql-connector-java-8.0.19.jar](https://downloads.mysql.com/archives/c-j/) ugh...


## Getting Started

Before you clone, make sure you have git LFS installed or you won't have any textures.  After importing the project into Unity, you may need to make some manual changes in order for movement to work correctly.

```
Edit -> Project Settings -> Input Manager -> Horizontal -> Gravity = Infinity
Edit -> Project Settings -> Input Manager -> Horizontal -> Sensitivity = Infinity
Edit -> Project Settings -> Input Manager -> Vertical -> Gravity = Infinity
Edit -> Project Settings -> Input Manager -> Vertical -> Sensitivity = Infinity
```

## Deployment

###### What do we even deploy?

- MySql Database Server (on k8s)
- Java API (on k8s)
- Mirror Server (on k8s)

##### MySql Server Deployment

###### Conduct Deployment

```
pushd charts/helm-mysql && \
  helm upgrade --install --wait --atomic netgrid-mysql-dev . && \
  popd
```

###### Export MySql variables from K8S

```
export K8S_NAMESPACE=default
export RELEASE=netgrid-mysql-dev

export MYSQL_ROOT_PASSWORD=$(kubectl get secret --namespace ${K8S_NAMESPACE} ${RELEASE} -o jsonpath="{.data.mysql-root-password}" | base64 -D; echo)
export MYSQL_HOST=$(kubectl get nodes --namespace ${K8S_NAMESPACE} -o jsonpath='{.items[0].status.addresses[0].address}')
export MYSQL_PORT=$(kubectl get svc --namespace ${K8S_NAMESPACE} ${RELEASE} -o jsonpath='{.spec.ports[0].nodePort}')

echo "This settings file has secrets!

export MYSQL_ROOT_PASSWORD='$MYSQL_ROOT_PASSWORD'
export MYSQL_HOST='$MYSQL_HOST'
export MYSQL_PORT='$MYSQL_PORT'
" > .env
```


## Provision

###### What do we even need to provision?

- DNS Routes
- Liquibase tables/ data to MySql server



##### Liquibase table/ data provisioning

```
pushd liquibase && \
  liquibase \
    --url="jdbc:mysql://${MYSQL_HOST}:${MYSQL_PORT}/demo?createDatabaseIfNotExist=true" \
    --password=$MYSQL_ROOT_PASSWORD \
    update && \
  popd
```

