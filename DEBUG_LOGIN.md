# 🔍 Диагностика проблемы входа

## Шаги для диагностики:

### 1. Проверьте пароль в базе данных

Выполните в Supabase SQL Editor:

```sql
-- Проверить пароль администратора
SELECT 
  id, 
  email, 
  name, 
  LEFT(password, 30) as password_start,
  LENGTH(password) as password_length,
  "createdAt",
  "updatedAt"
FROM "Admin" 
WHERE email = 'admin@carsave.ru';
```

**Ожидаемый результат:**
- `password_start` должен начинаться с `$2a$10$N9qo8uLOickgx2ZMRZoMye`
- `password_length` должен быть `60`

### 2. Если пароль неправильный, обновите его:

```sql
DO $$
DECLARE
  correct_password_hash TEXT := '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy';
BEGIN
  UPDATE "Admin" 
  SET 
    password = correct_password_hash,
    "updatedAt" = NOW()
  WHERE email = 'admin@carsave.ru';
  
  RAISE NOTICE 'Password updated successfully';
END $$;

-- Проверка после обновления
SELECT 
  email,
  LEFT(password, 30) as password_start,
  LENGTH(password) as password_length
FROM "Admin" 
WHERE email = 'admin@carsave.ru';
```

### 3. Проверьте Connection String в Vercel

В Vercel Dashboard → Settings → Environment Variables:

**DATABASE_URL должен быть:**
```
postgresql://postgres.tveboeglyvgvdeeaeyij:Dotanat1804%21@aws-1-eu-west-2.pooler.supabase.com:5432/postgres
```

**Важно:**
- Используется `%21` вместо `!`
- Используется `pooler.supabase.com` (не `db.supabase.co`)
- Порт `5432`

### 4. Проверьте логи в Vercel после попытки входа

1. Откройте Vercel Dashboard → **Deployments**
2. Выберите последний деплой
3. Перейдите в **Logs**
4. Попробуйте войти снова
5. Ищите в логах:
   - `🔍 Looking for admin: admin@carsave.ru`
   - `✅ Admin found:` или `❌ Admin not found:`
   - `🔐 Checking password...`
   - `✅ Password valid!` или `❌ Invalid password`
   - `Password hash in DB: $2a$10$...`

### 5. Возможные проблемы:

#### Проблема 1: Администратор не найден
**Логи покажут:** `❌ Admin not found: admin@carsave.ru`
**Решение:** Выполните SQL для создания/проверки администратора (см. выше)

#### Проблема 2: Неправильный пароль в базе
**Логи покажут:** `❌ Invalid password`
**Решение:** Обновите пароль через SQL (см. выше)

#### Проблема 3: Ошибка подключения к базе
**Логи покажут:** Ошибки Prisma или "Can't reach database server"
**Решение:** 
- Проверьте Connection String
- Убедитесь, что используется Pooler (не Direct)
- Проверьте, что пароль URL-кодирован (`%21` вместо `!`)

### 6. Тест подключения к базе

Если хотите проверить подключение, можно временно добавить тестовый endpoint:

```typescript
// app/api/test-db/route.ts
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const admin = await prisma.admin.findUnique({
      where: { email: 'admin@carsave.ru' },
    })
    
    return Response.json({
      success: true,
      admin: admin ? {
        id: admin.id,
        email: admin.email,
        name: admin.name,
        passwordLength: admin.password.length,
        passwordStart: admin.password.substring(0, 20),
      } : null,
    })
  } catch (error: any) {
    return Response.json({
      success: false,
      error: error.message,
    }, { status: 500 })
  }
}
```

Затем откройте: `https://carsave-garant.vercel.app/api/test-db`
