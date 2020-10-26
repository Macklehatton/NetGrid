// package org.njax.trinetco.netgrid.java.app.services;
//
// import org.njax.trinetco.netgrid.java.app.models.Role;
// import org.njax.trinetco.netgrid.java.app.models.User;
// import org.njax.trinetco.netgrid.java.app.repositories.RoleRepository;
// import org.njax.trinetco.netgrid.java.app.repositories.UserRepository;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// import org.springframework.stereotype.Service;
//
// import java.util.Arrays;
// import java.util.HashSet;
//
// @Service
// public class UserService {
//
//     private UserRepository userRepository;
//     private RoleRepository roleRepository;
//     private BCryptPasswordEncoder bCryptPasswordEncoder;
//
//     @Autowired
//     public UserService(UserRepository userRepository,
//                        RoleRepository roleRepository,
//                        BCryptPasswordEncoder bCryptPasswordEncoder) {
//         this.userRepository = userRepository;
//         this.roleRepository = roleRepository;
//         this.bCryptPasswordEncoder = bCryptPasswordEncoder;
//     }
//
//     public User findUserByEmail(String email) {
//         return userRepository.findByEmail(email);
//     }
//
//     public User findUserByUserName(String userName) {
//         return userRepository.findByUserName(userName);
//     }
//
//     public User saveUser(User user) {
//         user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
//         user.setActive(true);
//         Role userRole = roleRepository.findByRole("ADMIN");
//         user.setRoles(new HashSet<Role>(Arrays.asList(userRole)));
//         return userRepository.save(user);
//     }
//
// }
