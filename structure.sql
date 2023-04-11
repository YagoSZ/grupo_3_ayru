CREATE DATABASE bdAyru;

USE bdAyru;

CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    image VARCHAR(255) DEFAULT 'default.jpg',
    category_id INT NOT NULL,
    FOREIGN KEY (category_id) REFERENCES Category(id)
);

CREATE TABLE Category (
   id INT PRIMARY KEY AUTO_INCREMENT,
   name VARCHAR(255) NOT NULL,
   FOREIGN KEY (category_id) REFERENCES Users(id);
);

CREATE TABLE Products (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  image VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  colors VARCHAR(255) NOT NULL,
  disponibility_id INT NOT NULL,
  category_id INT NOT NULL,
  available_locations TEXT,
  PRIMARY KEY (id),
  FOREIGN KEY (disponibility_id) REFERENCES Disponibility(id),
  FOREIGN KEY (category_id) REFERENCES Category(id)
);

CREATE TABLE Category (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  FOREIGN KEY (category_id) REFERENCES Products(id)
);

CREATE TABLE disponibility (
  id INT PRIMARY KEY,
  stock INT NOT NULL,
  FOREIGN KEY (disponibility_id) REFERENCES Products(id)
);

CREATE TABLE colors (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  color VARCHAR(255) NOT NULL
);

CREATE TABLE products_colors (
  product_id INT NOT NULL,
  color_id INT NOT NULL,
  FOREIGN KEY (product_id) REFERENCES Products(id),
  FOREIGN KEY (color_id) REFERENCES colors(id),
  PRIMARY KEY (product_id, color_id)
);


CREATE TABLE available_locations (
  id INT NOT NULL AUTO_INCREMENT,
  location VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE product_available_locations (
  product_id INT NOT NULL,
  available_location_id INT NOT NULL,
  FOREIGN KEY (product_id) REFERENCES Products(id),
  FOREIGN KEY (available_location_id) REFERENCES available_locations(id),
  PRIMARY KEY (product_id, available_location_id)
);