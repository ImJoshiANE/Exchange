# Exchange Platform

Building a fully functional and secure exchange platform is a complex undertaking. This project serves as a starting point for exploration and learning.

This is an trading system built using a modern JavaScript stack. The architecture is designed for high performance and real-time updates, leveraging multiple servers that communicate using advanced techniques.

## Features

- **Real-time Order Matching**: Fast and efficient in-memory trading engine.
- **Authentication and API Handling**: Managed by a dedicated Node.js backend server.
- **Redis Queue and Pub/Sub**: Ensures efficient order processing and real-time updates.
- **WebSocket Server**: Provides real-time market updates to the frontend.
- **Data Storage**: PostgreSQL for persistent data and a time-series database for trading history.
- **K-Line Chart**: Uses the TradingView library for advanced charting capabilities.

## Architecture
![Architecture-min](https://github.com/user-attachments/assets/7d88d39f-9b60-4160-ad16-9d12e4e53854)

## Technologies

- **Frontend**: Next.js, Lightweight Charts by TradingView library
- **Backend**: Node.js, Redis Queue & Pub/Sub, WebSocket
- **Database**: PostgreSQL, Time-series database
- **Others**: Docker

## Getting Started

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/YourUsername/ExchangePlatform.git
    cd ExchangePlatform
    ```

2. Open five different terminals and navigate to the project directory in each.

3. **Run Docker Compose for Redis and Time-series Database**:
    ```bash
    cd docker
    docker-compose up
    ```

4. **Start the Database Server**:
    ```bash
    cd db
    npm install
    npm run dev
    ```

5. **Start the Trading Engine**:
    ```bash
    cd engine
    npm install
    npm run dev
    ```

6. **Start the WebSocket Server**:
    ```bash
    cd ws
    npm install
    npm run dev
    ```

7. **Start the API Server**:
    ```bash
    cd api
    npm install
    npm run dev
    ```

8. **Start the Frontend**:
    ```bash
    cd frontend
    npm install
    npm run dev
    ```

## Acknowledgements

- Special thanks to [Harkirat Singh](https://app.100xdevs.com/)
- Inspired by Jane Street's trading engine architecture as discussed in [this video](https://www.youtube.com/watch?v=b1e4t2k2KJY)

## Contributing

This is a vast and time-taking project. Each folder contains a README file with TODOs that outline features to implement to increase usability and functionality of the exchange. If you want to contribute, feel free to implement these features or suggest new ones.

## License

This project is licensed under the MIT License.
