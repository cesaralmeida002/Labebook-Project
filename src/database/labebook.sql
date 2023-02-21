-- Active: 1676904490839@@127.0.0.1@3306

CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT NOT NULL,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL
);

CREATE TABLE playlists (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    creator_id TEXT NOT NULL,
    name TEXT NOT NULL,
    likes INTEGER DEFAULT (0) NOT NULL,
    deslikes INTEGER DEFAULT (0) NOT NULL,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL,
    updated_at TEXT DEFAULT (DATETIME()) NOT NULL,
    FOREIGN KEY (creator_id) REFERENCES users (id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE likes_deslikes(
    user_id TEXT NOT NULL,
    playlist_id TEXT NOT NULL, 
    like INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (playlist_id) REFERENCES playlists (id)
        ON DELETE CASCADE
        ON UPDATE CASCADE

);

INSERT INTO users (id, name, email, password, role)
VALUES
	("u001", "João", "joao@email.com", "joao123", "NORMAL"),
	("u002", "Maria", "maria@email.com", "maria123", "NORMAL"),
	("u003", "Joana", "joana@email.com", "joana123", "ADMIN");

INSERT INTO playlists (id, creator_id, name)
VALUES
	("p001", "u001", "Jazz and Blues"),
	("p002", "u002", "Rock´n Roll 80 years"),
	("p003", "u002", "Songs pra-codar");
    
INSERT INTO likes_deslikes (user_id, playlist_id, like)
VALUES
	("u002", "p001", 0),
	("u003", "p001", 1),
    ("u002", "p001", 1),
	("u001", "p003", 1),
	("u003", "p003", 0);

UPDATE playlists
SET likes = 2
WHERE id = "p001";

UPDATE playlists
SET likes = 2
WHERE id = "p002";

UPDATE playlists
SET likes = 1
WHERE id = "p003";

UPDATE playlists
SET dislikes = 1
WHERE id = "p003";

    SELECT * FROM likes_deslikes;
