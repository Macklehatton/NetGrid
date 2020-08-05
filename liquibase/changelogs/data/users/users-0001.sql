--liquibase formatted sql

INSERT INTO users(id, name, bio, is_kind, created_at, updated_at)
     VALUES (
              1,               -- id
              'Mario',         -- name
              'Great jumper',  -- bio
              1,               -- is_kind
              NOW(),           -- created_at
              NOW()            -- updated_at
            );


INSERT INTO users(id, name, bio, is_kind, created_at, updated_at)
     VALUES (
              2,               -- id
              'Luigi',         -- name
              'Another good jumper',  -- bio
              1,               -- is_kind
              NOW(),           -- created_at
              NOW()            -- updated_at
            );


INSERT INTO users(id, name, bio, is_kind, created_at, updated_at)
     VALUES (
              3,               -- id
              'Bowser',        -- name
              'Not such a jumper here',  -- bio
              0,               -- is_kind
              NOW(),           -- created_at
              NOW()            -- updated_at
            );
