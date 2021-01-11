# Note: this container is meant to run along with the docker-compose.yml file in the parent dir

FROM liquibase/liquibase

# Root level setup
RUN mkdir /liquibase/jdbc
WORKDIR /liquibase/jdbc
RUN wget https://github.com/TriNetCo/NetGrid/raw/master/liquibase/mysql-connector-java-8.0.19.jar

USER root

ADD liquibase.properties .
ADD changelogs/ ./changelogs/

RUN apt-get update && apt-get install -y netcat

#RUN apt-get update && \
#      apt-get install -y vim tmux git mysql-client

USER liquibase

COPY entrypoint.sh /app/entrypoint.sh
ENTRYPOINT ["/app/entrypoint.sh"]
