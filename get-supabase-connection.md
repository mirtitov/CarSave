# Получение Connection String из Supabase

## Шаги:

1. Откройте: https://supabase.com/dashboard/project/tveboeglyvgvdeeaeyij

2. В левом меню: Settings (⚙️) → Database

3. Прокрутите до раздела "Connection string"

4. Выберите вкладку "URI"

5. Скопируйте строку (она будет выглядеть примерно так):
   ```
   postgresql://postgres.tveboeglyvgvdeeaeyij:[YOUR-PASSWORD]@aws-0-us-west-1.pooler.supabase.com:6543/postgres
   ```

6. **ВАЖНО:** Замените `[YOUR-PASSWORD]` на реальный пароль БД

7. Если забыли пароль:
   - Settings → Database → Reset database password
   - Создайте новый пароль и сохраните его!

## Пример готовой строки:
```
postgresql://postgres.tveboeglyvgvdeeaeyij:MyPassword123@aws-0-us-west-1.pooler.supabase.com:6543/postgres
```
