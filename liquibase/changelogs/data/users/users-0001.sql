--liquibase formatted sql
--changeset author:me runAlways:true
--preconditions onFail:HALT onError:HALT
--validCheckSum any

DELETE FROM users WHERE id = 1;
INSERT INTO users(id, name, bio, is_kind, email, password, created_at, updated_at)
     VALUES (
              1,               -- id
              'Mario',         -- name
              'Great jumper',  -- bio
              1,               -- is_kind
              'mario@a.com',       -- email
              '$2a$10$kRR3XA1b9i8KnU.0URldleMVdB1g/vcjiSeBpKJMY5fONw.roTLBi',        -- password 123456
              NOW(),           -- created_at
              NOW()            -- updated_at
            );


DELETE FROM users WHERE id = 2;
INSERT INTO users(id, name, bio, is_kind, email, password, created_at, updated_at)
     VALUES (
              2,               -- id
              'Luigi',         -- name
              'Another good jumper',  -- bio
              1,               -- is_kind
              'luigi@a.com',       -- email
              '$2a$10$kRR3XA1b9i8KnU.0URldleMVdB1g/vcjiSeBpKJMY5fONw.roTLBi',        -- password
              NOW(),           -- created_at
              NOW()            -- updated_at
            );

DELETE FROM users WHERE id = 3;
INSERT INTO users(id, name, bio, is_kind, email, password, created_at, updated_at)
     VALUES (
              3,               -- id
              'Bowser',        -- name
              'Not such a jumper here',  -- bio
              0,               -- is_kind
              'bowser@a.com',       -- email
              '$2a$10$kRR3XA1b9i8KnU.0URldleMVdB1g/vcjiSeBpKJMY5fONw.roTLBi',        -- password
              NOW(),           -- created_at
              NOW()            -- updated_at
            );
