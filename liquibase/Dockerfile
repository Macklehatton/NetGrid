FROM liquibase/liquibase

# Root level setup
RUN mkdir /liquibase/jdbc
WORKDIR /liquibase/jdbc
RUN wget https://github.com/TriNetCo/NetGrid/raw/master/liquibase/mysql-connector-java-8.0.19.jar

USER root
RUN apt-get update && \
      apt-get install -y vim tmux git mysql-client

WORKDIR /liquibase
RUN git clone https://github.com/thenotary/dotfiles

# User level setup
USER 101
WORKDIR /liquibase/dotfiles
RUN /bin/bash make.sh

##USER liquibase
WORKDIR /app

ENTRYPOINT []
CMD []

ENTRYPOINT [ "" ]
