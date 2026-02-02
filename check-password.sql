-- Проверка пароля администратора
-- Сначала посмотрим, какой пароль сохранён в базе

SELECT id, email, name, 
       LEFT(password, 20) as password_start,
       LENGTH(password) as password_length
FROM "Admin" 
WHERE email = 'admin@carsave.ru';

-- Если пароль неправильный, обновим его
-- Пароль: admin123
-- Хеш bcrypt: $2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy

-- Обновление пароля (используйте блок DO для безопасности)
DO $$
DECLARE
  correct_password_hash TEXT := '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy';
BEGIN
  UPDATE "Admin" 
  SET 
    password = correct_password_hash,
    "updatedAt" = NOW()
  WHERE email = 'admin@carsave.ru';
  
  RAISE NOTICE 'Password updated for admin@carsave.ru';
END $$;

-- Проверка после обновления
SELECT id, email, name, 
       LEFT(password, 20) as password_start
FROM "Admin" 
WHERE email = 'admin@carsave.ru';
