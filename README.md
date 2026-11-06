# 24BCS10184 - Arshdeep Singh

Repository for Java (PBLJ) and Full Stack Development (FSD) lab questions and project.

## Structure

- `JAVA/` (PBLJ Labs)
  - `Question1/`: Inventory reordering system using 2D ArrayList and LinkedList
  - `Question2/`: ATM withdrawal with custom exception and input validation
  - `Question3/`: Employee salary analytics using Stream API
- `FULLSTACK/` (FSD Labs)
  - `Question1/`: JavaScript array methods
  - `Question2/`: Product catalog with React Router
  - `Question3/`: Portfolio dashboard with React hooks
- `ScholarFlow/` (PBLJ & FSD Course Project)
  - **Overview**: An AI-powered "Second Brain" for researchers and students using Retrieval-Augmented Generation (RAG).
  - **PBLJ Component** (`ScholarFlow/backend-spring/`): Enterprise Java Spring Boot backend service providing API routing, proxying, native chat capabilities, and containerized pgvector persistence integration.
  - **FSD Component** (`ScholarFlow/frontend/` & `ScholarFlow/backend/`): Next.js React TypeScript web interface and FastAPI Python RAG microservice with LangChain and Google Gemini embeddings.

## Running

### Java questions (PBLJ):
```bash
javac JAVA/Question1/*.java && java -cp JAVA/Question1 InventoryReorderingSystem
javac JAVA/Question2/*.java && java -cp JAVA/Question2 ATMMain
javac JAVA/Question3/*.java && java -cp JAVA/Question3 SalaryAnalytics
```

### Full Stack questions (FSD):
```bash
# Q1
node FULLSTACK/Question1/arrayMethods.js

# Q2
cd FULLSTACK/Question2 && npm run dev

# Q3
cd FULLSTACK/Question3 && npm run dev
```

### Course Project - ScholarFlow:
See detailed setup and architectural documentation in [`ScholarFlow/README.md`](ScholarFlow/README.md).

- **Spring Boot Backend (Java / PBLJ)**:
  ```bash
  cd ScholarFlow/backend-spring
  mvn spring-boot:run
  ```
- **FastAPI Backend (Python / RAG)**:
  ```bash
  cd ScholarFlow/backend
  pip install -r requirements.txt
  uvicorn main:app --reload --port 8000
  ```
- **Next.js Frontend (Full Stack / FSD)**:
  ```bash
  cd ScholarFlow/frontend
  npm install
  npm run dev
  ```
