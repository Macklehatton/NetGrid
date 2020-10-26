ALTER TABLE users
 ADD COLUMN email varchar(250) NOT NULL,
 ADD COLUMN password varchar(250) NOT NULL,
 ADD COLUMN active tinyint(1) NOT NULL DEFAULT '1';
