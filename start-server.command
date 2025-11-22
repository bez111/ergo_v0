#!/bin/bash

# Этот скрипт можно запустить двойным кликом в Finder

cd "$(dirname "$0")"

echo "=== Запуск Ergo Blockchain на порту 3001 ==="
echo ""

# Проверка порта
if lsof -i :3001 >/dev/null 2>&1; then
    echo "⚠️  Порт 3001 уже занят!"
    echo "Останавливаем старый процесс..."
    kill $(lsof -ti :3001) 2>/dev/null
    sleep 2
fi

echo "🚀 Запускаем сервер..."
echo "📱 Откройте http://localhost:3001 в браузере"
echo ""
echo "Для остановки нажмите Ctrl+C"
echo ""

# Запуск через прямой путь
./node_modules/next/dist/bin/next dev -p 3001
