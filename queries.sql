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
        Foreign Key (id_user) REFERENCES user(id_user) cars JSON,
        total_cost INTEGER NOT NULL,
        order_date DATE NOT NULL DEFAULT CURRENT_DATE,
    );