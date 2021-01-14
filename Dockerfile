FROM gradle:6.5.1-jdk8 AS build

#COPY --chown=gradle:gradle java-api/ /home/gradle/src
#COPY --chown=gradle:gradle java-app-models /home/gradle/java-app-models

WORKDIR /home/gradle/src
# RUN gradle build --no-daemon

# # Old build container
# FROM openjdk:8-jre-slim
# EXPOSE 8080
# RUN mkdir /app
# COPY --from=build /home/gradle/src/build/libs/app.jar /app/app.jar
# ENTRYPOINT ["java", "-XX:+UnlockExperimentalVMOptions", "-XX:+UseCGroupMemoryLimitForHeap", "-Djava.security.egd=file:/dev/./urandom","-jar","/app/app.jar"]


COPY --chown=gradle:gradle entrypoint.sh /entrypoint.sh

ENTRYPOINT [ "/entrypoint.sh" ]
