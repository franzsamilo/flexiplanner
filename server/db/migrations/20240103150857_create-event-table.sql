-- migrate:up
CREATE TABLE events (
  event_id SERIAL PRIMARY KEY,
  day VARCHAR(20) NOT NULL,
  subject VARCHAR(255) NOT NULL,
  starts TIME NOT NULL,
  ends TIME NOT NULL,
  user_id INT NOT NULL,
  category_name VARCHAR(100)
);


-- migrate:down
DROP TABLE events;
