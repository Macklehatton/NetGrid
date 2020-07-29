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

## Provision

###### What do we even need to provision?

- DNS Routes
- Liquibase tables/ data to MySql server


