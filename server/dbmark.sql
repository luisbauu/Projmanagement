CREATE DATABASE dbluemark;

CREATE TABLE customer (
	customer_no	 SERIAL NOT NULL UNIQUE PRIMARY KEY,
	surname		 VARCHAR(25),
	givenname	 VARCHAR(25),
	unit_no		 INT,
	street		 VARCHAR(25),
	city		 VARCHAR(25),
	phone_no		 INT,
	represented	 VARCHAR(1),
	repname		 VARCHAR(25)
);
/*INSERT INTO customer (customer_no,surname,givenname,unit_no,street,city,phone_no,represented,repname) VALUES (1, 'Bautista', 'Jose Luis', 9, 'Katipunan Ave', 'Quezon City', 1234, 'N', 'N/A');*/

CREATE TABLE package(
    serial_no 	SERIAL NOT NULL UNIQUE PRIMARY KEY,
    type 		VARCHAR(25) NOT NULL,
    weight 		INT NOT NULL
);

CREATE TABLE deliveryservice(
	control_no 				SERIAL NOT NULL UNIQUE PRIMARY KEY,
	service_type 			VARCHAR(10) NOT NULL,
	delivery_request_date 	DATE NOT NULL,
	cost 					INT NOT NULL,
	no_of_days 				INT NOT NULL,
	source 					VARCHAR(15) NOT NULL,
	destination 			VARCHAR(15) NOT NULL,
	sender_id 				INT NOT NULL,
	receiver_id 			INT NOT NULL,
	serial_no 				INT NOT NULL,
	FOREIGN KEY (sender_id) REFERENCES customer(customer_no) ON DELETE RESTRICT,
	FOREIGN KEY (receiver_id) REFERENCES customer(customer_no) ON DELETE RESTRICT,
	FOREIGN KEY (serial_no) REFERENCES package(serial_no) ON DELETE RESTRICT
);

CREATE TABLE delivery_receival(
    receival_no 	SERIAL NOT NULL UNIQUE PRIMARY KEY,
    receival_date 	DATE NOT NULL,
    staff_id_no 	INT NOT NULL,
    serial_no 		INT NOT NULL,
    receiver_no 	INT NOT NULL,
    FOREIGN KEY(staff_id_no) REFERENCES delivery_staff(staff_id_no) ON DELETE RESTRICT,
    FOREIGN KEY(serial_no) REFERENCES package(serial_no) ON DELETE RESTRICT,
    FOREIGN KEY(receiver_no) REFERENCES customer(customer_no) ON DELETE RESTRICT
);

CREATE TABLE delivery_staff(
    staff_id_no 	SERIAL NOT NULL UNIQUE PRIMARY KEY,
    surname 		VARCHAR(25) NOT NULL,
    givenname 		VARCHAR(25) NOT NULL
);
