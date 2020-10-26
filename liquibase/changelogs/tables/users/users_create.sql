CREATE TABLE IF NOT EXISTS users
(
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  bio varchar(250) NOT NULL,
  created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  is_kind tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
