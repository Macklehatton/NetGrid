package org.njax.trinetco.netgrid.java.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
@RequestMapping(path="")
public class MainController {

    @Autowired // https://www.vojtechruzicka.com/spring-boot-version/
    org.springframework.boot.info.BuildProperties buildProperties;

    @GetMapping(value = "/version")
    public ResponseEntity<Object> root() {
        String responseString = "";
        String artifactId = buildProperties.getArtifact();
        String group = buildProperties.getGroup();
        String version = buildProperties.getVersion();
        org.njax.trinetco.netgrid.java.app.models.version.Version modelVersion = new org.njax.trinetco.netgrid.java.app.models.version.Version();
        org.njax.trinetco.netgrid.java.api.version.Version appVersion = new org.njax.trinetco.netgrid.java.api.version.Version();

        responseString += "Web App: " + appVersion.info() + "<br>\n";
        responseString += "DB Models: " + modelVersion.info() + "<br>\n";

        return new ResponseEntity<>(responseString, HttpStatus.OK);
    }

}
