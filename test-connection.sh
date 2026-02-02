#!/bin/bash

echo "🔍 Тестирование разных форматов Connection String..."

PASSWORD="Dotanat1804!"

# Вариант 1: Pooler с разными регионами
echo ""
echo "Вариант 1 (pooler us-west-1):"
echo "postgresql://postgres.tveboeglyvgvdeeaeyij:${PASSWORD}@aws-0-us-west-1.pooler.supabase.com:6543/postgres"

echo ""
echo "Вариант 2 (pooler us-east-1):"
echo "postgresql://postgres.tveboeglyvgvdeeaeyij:${PASSWORD}@aws-0-us-east-1.pooler.supabase.com:6543/postgres"

echo ""
echo "Вариант 3 (прямое подключение):"
echo "postgresql://postgres:${PASSWORD}@db.tveboeglyvgvdeeaeyij.supabase.co:5432/postgres"

echo ""
echo "Вариант 4 (с кодированием !):"
ENCODED=$(echo "$PASSWORD" | sed 's/!/%21/g')
echo "postgresql://postgres:${ENCODED}@db.tveboeglyvgvdeeaeyij.supabase.co:5432/postgres"
