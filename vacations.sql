create database vacations;



use vacations;


CREATE TABLE users (
id   INT NOT NULL AUTO_INCREMENT ,
firstName VARCHAR(255) not null,
lastName varchar(255) not null,
email varchar(255) not null,
password int not null,
isadmin boolean not null,
PRIMARY KEY (id)
);


INSERT INTO users (firstName, lastName, email, password, isadmin)
VALUES
('David', 'Gallula', 'dgallula@gmail.com', 1234, 1 ),
('Elie', 'Zenou', 'Elie@gmail.com', 1234, 0 ),
('Elie', 'Sellem', 'Elisellem@gmail.com', 1234, 0 ),
('Helene', 'Zenou', 'Helene@gmail.com', 1234,0 ),
('Levana', 'Amoyalle', 'Levana@gmail.com', 1234,0 ),
('Levy', 'Cohen', 'levy@gmail.com', 1234,0 ),
('Perez', 'Avraham', 'Avi@gmail.com', 1234,0 );




CREATE TABLE vacations (
id   INT NOT NULL AUTO_INCREMENT ,
description VARCHAR(255) not null,
destination VARCHAR(255) not null,
image VARCHAR(255) not null,
price int not null,
startDate datetime not null,
endDate datetime not null,
followers int not null,
userId int not null,
PRIMARY KEY (id),
FOREIGN KEY(userId) REFERENCES users(id)
);

INSERT INTO vacations (destination, description, image, price, startDate, endDate, followers, userId)
VALUES

('Paris France','Paris la ville des amoureux','Paris.jpej', 499, '2022-06-23', '2022-06-23', 5000, 1),
('Madrid Espagne','Viva espagna','Madrid.jpej', 399, '2020-07-23', '2022-07-23', 4000,2),
('Courchevelle France','La montagne , Ca vous gagne','Courchevelle.jpej', 699, '2022-08-23', '2022-08-23', 6000,2),
('Miami USA','une destination tres prisee ','Miami.webp', 899, '2022-08-23', '2022-08-23', 10000,1),
('New york USA','New York new york  ','NY.jpej', 899, '2022-09-23', '2022-09-23', 80000,3),
('Jerusalem','la ville des trois religions ','Jerusalem.jpej', 999, '2022-10-23', '2022-10-23', 20000,4),
('Bruxelle Belgium','une ville tres agrable ','Belgium.jpej', 399, '2022-10-23', '2022-10-23', 40000,4);



CREATE TABLE followers (
id   INT NOT NULL AUTO_INCREMENT ,
userId int not null,
vacationId int not null,
followers int not null,
PRIMARY KEY (id),
FOREIGN KEY(userId) REFERENCES users(id),
FOREIGN KEY(vacationId) REFERENCES vacations(id)
);

INSERT INTO followers ( userId, vacationId,followers)
VALUES
(1,1,5000),
(1,2,4000),
(1,3,6000),
(1,4,10000),
(1,5,8000),
(1,6,20000),
(1,7,40000);









 select * from followers;
 
 
 select followers, count(followers) from vacations group by followers;
 
  select followers, count(followers) from vacations group by followers;

select * from followers where userId=1;

 

 
 
 SELECT vacations.* ,COUNT(followers.vacationid) AS NumberVacations FROM followers
        LEFT JOIN vacations ON followers.vacationid = vacations.id
        GROUP BY vacations.destination
        ORDER BY vacations.id ;

select * from vacations;

select * from users;

select * from followers;
