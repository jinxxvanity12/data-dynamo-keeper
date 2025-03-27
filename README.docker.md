
# Docker Setup for Debt Dynamo Dashboard

This README provides instructions for running the Debt Dynamo Dashboard in a Docker container, ensuring data persistence across different devices and browsers.

## Prerequisites

- Docker and Docker Compose installed on your system
- Git (to clone the repository)

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/jinxxvanity12/debt-dynamo-dashboard.git
   cd debt-dynamo-dashboard
   ```

2. Build and start the Docker container:
   ```
   docker-compose up -d
   ```

3. Access the application:
   Open your browser and navigate to `http://localhost` or your server's IP address.

## Data Persistence

- All application data is stored in a Docker volume named `app-data`
- This ensures that your data persists across container restarts and across different devices
- The volume maps to `/app/data` inside the container

## Managing the Container

- To stop the container:
  ```
  docker-compose down
  ```

- To view logs:
  ```
  docker-compose logs -f
  ```

- To rebuild the container after code changes:
  ```
  docker-compose build
  docker-compose up -d
  ```

## Backup and Restore

To backup your data:

```
docker run --rm -v debt-dynamo-dashboard_app-data:/data -v $(pwd):/backup alpine tar -zcf /backup/data-backup.tar.gz /data
```

To restore from backup:

```
docker run --rm -v debt-dynamo-dashboard_app-data:/data -v $(pwd):/backup alpine sh -c "rm -rf /data/* && tar -xzf /backup/data-backup.tar.gz -C /"
```
