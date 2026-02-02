#!/bin/bash

echo "🔧 Настройка Connection String для Supabase"
echo ""
echo "Project ID: tveboeglyvgvdeeaeyij"
echo ""
read -p "Введите пароль БД (который вы создали через 'Reset database password'): " PASSWORD

if [ -z "$PASSWORD" ]; then
    echo "❌ Пароль не может быть пустым"
    exit 1
fi

# Кодируем специальные символы в пароле
ENCODED_PASSWORD=$(echo "$PASSWORD" | sed 's/!/%21/g; s/@/%40/g; s/#/%23/g; s/\$/%24/g')

echo ""
echo "✅ Connection String (pooler):"
echo "postgresql://postgres.tveboeglyvgvdeeaeyij:${ENCODED_PASSWORD}@aws-0-us-west-1.pooler.supabase.com:6543/postgres"
echo ""
echo "✅ Connection String (прямое подключение):"
echo "postgresql://postgres:${ENCODED_PASSWORD}@db.tveboeglyvgvdeeaeyij.supabase.co:5432/postgres"
echo ""
echo "📋 Скопируйте одну из строк выше и используйте для настройки!"
