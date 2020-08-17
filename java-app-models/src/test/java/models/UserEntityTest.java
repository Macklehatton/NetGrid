package org.njax.trinetco.netgrid.java.app.models;

import java.math.BigDecimal;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;

public class UserEntityTest {

	@Test
    public void itCanSetAndGetATitleString(){
        UserEntity UserEntity = new UserEntity();
        UserEntity.setName("I'm a name");
        Assert.assertEquals("I'm a name", UserEntity.getName());
    }

}
