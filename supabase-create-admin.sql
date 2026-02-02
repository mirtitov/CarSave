-- Создание администратора в Supabase
-- Пароль: admin123

-- Сначала проверим, есть ли администратор
SELECT * FROM "Admin" WHERE email = 'admin@carsave.ru';

-- Если администратора нет, создадим его
-- ВАЖНО: Используем одинарные кавычки и экранируем символы $
INSERT INTO "Admin" (id, email, password, name, "createdAt", "updatedAt")
VALUES (
  gen_random_uuid()::text,
  'admin@carsave.ru',
  '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy',
  'Администратор',
  NOW(),
  NOW()
)
ON CONFLICT (email) DO UPDATE SET
  password = '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy',
  "updatedAt" = NOW();

-- Альтернативный вариант (если первый не работает):
-- Используем функцию для экранирования
DO $$
DECLARE
  password_hash TEXT := '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy';
BEGIN
  INSERT INTO "Admin" (id, email, password, name, "createdAt", "updatedAt")
  VALUES (
    gen_random_uuid()::text,
    'admin@carsave.ru',
    password_hash,
    'Администратор',
    NOW(),
    NOW()
  )
  ON CONFLICT (email) DO UPDATE SET
    password = password_hash,
    "updatedAt" = NOW();
END $$;
