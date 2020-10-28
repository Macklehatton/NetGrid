--liquibase formatted sql
--changeset author:me runAlways:true
--preconditions onFail:HALT onError:HALT
--validCheckSum any

DELETE FROM users_roles WHERE user_id = 1 AND role_id = 1;
INSERT INTO users_roles
             (user_id, role_id)
     VALUES (1, 1);

DELETE FROM users_roles WHERE user_id = 2 AND role_id = 1;
INSERT INTO users_roles
             (user_id, role_id)
     VALUES (2, 1);

DELETE FROM users_roles WHERE user_id = 3 AND role_id = 1;
INSERT INTO users_roles
             (user_id, role_id)
     VALUES (3, 1);
