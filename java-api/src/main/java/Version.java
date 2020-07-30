package org.njax.trinetco.netgrid.java.api.version;

public class Version {
    public String info() {
        String artifactId = "netgrid-java-api";
        String group = "org.njax.trinetco";
        String version = Version.class.getPackage().getImplementationVersion();

        if (version == null) {
            version = "FROM_SOURCE";
        }

        String versionString = group + ":" + artifactId + ":" + version;
        return versionString;
    }
}
