-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

CREATE TABLE Category (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    category_name VARCHAR(30) NOT NULL
);


CREATE TABLE Product (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    product_name VARCHAR(30) NOT NULL,
    price -- decimal, NOT NULL, validation that value is a decimal
    stock INT NOT NULL -- default value of 10, validates that value is numeric
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES Category(id)
);


CREATE TABLE Tag (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    tag_name VARCHAR(30)
);

CREATE TABLE ProductTag (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    product_id INT,
    tag_id INT,
    FOREIGN KEY (product_id) REFERENCES Product(id)
    FOREIGN KEY (tag_id) REFERENCES Tag(id)
);