package org.njax.trinetco.netgrid.java.app.models;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.ZonedDateTime;
import java.util.Set;
import java.util.List;
import javax.persistence.*;
// import org.hibernate.validator.constraints.Length;
// import javax.validation.constraints.Email;
// import javax.validation.constraints.NotEmpty;
import lombok.*;

@Getter @Setter @NoArgsConstructor
@Entity
@Table(name = "users")
public class UserEntity implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "email")
    // @Email(message = "*Please provide a valid Email")
    // @NotEmpty(message = "*Please provide an email")
    private String email;

    @Column(name = "password")
    // @Length(min = 5, message = "*Your password must have at least 5 characters")
    // @NotEmpty(message = "*Please provide your password")
    private String password;

    @ManyToMany(cascade = CascadeType.MERGE)
    @JoinTable(name = "users_roles", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles;

    @Column(name = "active")
    private Boolean active;

    private String name;
    private String bio;
    private boolean isKind;
    private ZonedDateTime createdAt;
    private ZonedDateTime updatedAt;
}
