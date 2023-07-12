CREATE TABLE
    user(
        id_user SERIAL PRIMARY KEY,
        nick_name VARCHAR (20) NOT NULL,
        email VARCHAR(25) NOT NULL,
        orders_id INTEGER,
    );

CREATE TABLE
    order(
        id_order SERIAL PRIMARY KEY,
        id_user INTEGER,
        Foreign Key (id_user) REFERENCES user(id_user)
        /* foreign key */
        car VARCHAR (30),
        total_cost INTEGER NOT NULL,
        order_date DATE NOT NULL DEFAULT CURRENT_DATE,
    );

/* 
 CREATE TABLE card(
 id_card SERIAL PRIMARY KEY,
 nombre VARCHAR (100),
 descripcion VARCHAR (150),
 color VARCHAR(25),
 imagen VARCHAR (150),
 id_ilu INTEGER,
 FOREIGN KEY (id_ilu) REFERENCES ilustrator(id_ilu)
 );
 */