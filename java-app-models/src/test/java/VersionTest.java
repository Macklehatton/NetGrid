package org.njax.trinetco.netgrid.java.app.models.version;

import java.math.BigDecimal;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.Before;
import org.mockito.Mock;
import static org.mockito.BDDMockito.given;

// @RunWith(SpringRunner.class)
public class VersionTest {

    private Version version;

    @Before
    public void setUp(){
        // given(this.buildProperties.getArtifact()).willReturn("java-app-models");
        // given(this.buildProperties.getGroup()).willReturn("org.njax.trinetco.netgrid");
        // given(this.buildProperties.getVersion()).willReturn("1.1.1-SNAPSHOT");
        // version = new Version(buildProperties);
        version = new Version();
    }

	@Test
    public void itCanGetItsVersion(){
        String expectedVersion = "org.njax.trinetco.netgrid:java-app-models:FROM_SOURCE";
        Assert.assertEquals(expectedVersion, version.info());
    }

}
