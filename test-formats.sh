#!/bin/bash

PASS="Dotanat1804%21"
PROJECT="tveboeglyvgvdeeaeyij"

echo "Тестирую разные форматы Connection String:"
echo ""
echo "1. Pooler с точкой:"
echo "postgresql://postgres.${PROJECT}:${PASS}@aws-0-us-west-1.pooler.supabase.com:6543/postgres"
echo ""
echo "2. Pooler без точки:"
echo "postgresql://postgres:${PASS}@aws-0-us-west-1.pooler.supabase.com:6543/postgres"
echo ""
echo "3. Прямое подключение:"
echo "postgresql://postgres:${PASS}@db.${PROJECT}.supabase.co:5432/postgres"
echo ""
echo "4. Pooler с другим регионом (us-east-1):"
echo "postgresql://postgres.${PROJECT}:${PASS}@aws-0-us-east-1.pooler.supabase.com:6543/postgres"
