package org.njax.trinetco.netgrid.java.app.models.version;

public class Version {
    public String info() {
        String artifactId = "java-app-models";
        String group = "org.njax.trinetco.netgrid";
        String version = Version.class.getPackage().getImplementationVersion();

        if (version == null) {
            version = "FROM_SOURCE";
        }

        String versionString = group + ":" + artifactId + ":" + version;
        return versionString;
    }
}
