--liquibase formatted sql
--changeset author:me runAlways:true
--preconditions onFail:HALT onError:HALT
--validCheckSum any

DELETE FROM roles WHERE id = 1;
INSERT INTO roles(id, role, created_at, updated_at)
     VALUES (
              1,               -- id
              'ADMIN',         -- name
              NOW(),           -- created_at
              NOW()            -- updated_at
            );
