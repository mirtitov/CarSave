# 🔧 Исправление ошибки SQL в Supabase

## Проблема:
PostgreSQL интерпретирует символы `$` в хеше пароля bcrypt как параметры, что вызывает ошибку.

## Решение:

### Вариант 1: Используйте блок DO (рекомендуется)

Выполните этот SQL в Supabase SQL Editor:

```sql
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
```

### Вариант 2: Выполните запросы по отдельности

**Шаг 1:** Проверьте, есть ли администратор:
```sql
SELECT * FROM "Admin" WHERE email = 'admin@carsave.ru';
```

**Шаг 2:** Если администратора нет, создайте его через функцию:

```sql
-- Создать функцию для безопасной вставки
CREATE OR REPLACE FUNCTION create_admin()
RETURNS void AS $$
BEGIN
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
END;
$$ LANGUAGE plpgsql;

-- Вызвать функцию
SELECT create_admin();
```

### Вариант 3: Используйте двойные кавычки для экранирования

```sql
INSERT INTO "Admin" (id, email, password, name, "createdAt", "updatedAt")
VALUES (
  gen_random_uuid()::text,
  'admin@carsave.ru',
  E'$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy',
  'Администратор',
  NOW(),
  NOW()
)
ON CONFLICT (email) DO UPDATE SET
  password = E'$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy',
  "updatedAt" = NOW();
```

## После выполнения:

1. Проверьте, что администратор создан:
```sql
SELECT id, email, name FROM "Admin" WHERE email = 'admin@carsave.ru';
```

2. Попробуйте войти:
   - Email: `admin@carsave.ru`
   - Password: `admin123`

## Если всё ещё не работает:

Проверьте логи в Vercel на наличие ошибок подключения к базе данных.
