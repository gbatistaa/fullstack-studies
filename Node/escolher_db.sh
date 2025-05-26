#!/bin/bash
echo "Qual banco do SQLite deseja abrir?"
select db in *.db; do
    sqlite3 "$db"
    break
done
