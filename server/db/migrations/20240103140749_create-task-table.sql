-- migrate:up
CREATE TABLE tasks (
    task_id SERIAL PRIMARY KEY,
    task_name VARCHAR(255) NOT NULL,
    task_description TEXT,
    task_priority VARCHAR(20) NOT NULL,
    task_due_date DATE,
    task_duration_days INT,
    task_duration_hours INT,
    task_duration_minutes INT,
    task_status VARCHAR(20) NOT NULL,
    user_id INT NOT NULL,
    category_name VARCHAR(100) 
);

-- migrate:down
DROP TABLE tasks;