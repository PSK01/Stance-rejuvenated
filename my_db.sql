CREATE DATABASE my_db;
USE my_db;
CREATE TABLE thread
(
username varchar(15) NOT NULL,
email varchar(255) NOT NULL,
title varchar(20) NOT NULL,
shortlink varchar(100) NOT NULL,
description text(200) NOT NULL
date DATE,
time TIME
PRIMARY KEY(title)
);
CREATE TABLE comment
(
username varchar(15) NOT NULL,
email varchar(255) NOT NULL,
comment text(1400),
commat int NOT NULL
date DATE,
time TIME
);
