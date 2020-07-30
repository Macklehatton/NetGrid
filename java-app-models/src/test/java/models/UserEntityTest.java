package org.njax.trinetco.netgrid.java.app.models;

import java.math.BigDecimal;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;

public class UserEntityTest {

	@Test
    public void itCanSetAndGetATitleString(){
        UserEntity UserEntity = new UserEntity();
        UserEntity.setTitle("I'm a title");
        Assert.assertEquals("I'm a title", UserEntity.getTitle());
    }

}
