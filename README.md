# Laboratorio 02


Hoy utilizaremos docker compose para poder desplegar su trabajo. Servicio web y una base de datos.

## Stack
API
  - Minimal API (Node.js + Express)
    - Retorna un mensaje incluyendo mi nombre
    - 3 copias/réplicas en puertos 3000, 3001 y 3002
  - Docker (Build local mediante Dockerfile)

BD
  - PostgreSQL 16 Alpine
  - Persistencia mediante volúmenes

---

# Indicaciones

## Comandos

Para construir y levantar los servicios:
```bash
docker compose up -d --build