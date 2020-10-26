package org.njax.trinetco.netgrid.java.app.repositories;


import org.njax.trinetco.netgrid.java.app.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {
    Role findByRole(String role);
}
