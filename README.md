# Application Tracker Controller

This Spring Boot controller manages endpoints for an application tracking system. It provides functionalities to retrieve, add, update, and delete job applications.

## Endpoints

- **GET /applications/allapplications**
  - Retrieves all applications stored in the database.
  
- **GET /applications/viewapplication/{id}**
  - Retrieves a specific application by its ID.
  
- **POST /applications/addapplications**
  - Adds a new application to the database.
  
- **PUT /applications/updateapplication/{id}**
  - Updates an existing application identified by its ID.
  
- **DELETE /applications/deleteapplication/{id}**
  - Deletes an application from the database by its ID.
  
- **GET /applications/count**
  - Retrieves the total count of applications stored in the database.
  
- **GET /applications/{status}**
  - Retrieves applications filtered by status (e.g., APPLIED, INTERVIEWED).
  
- **GET /applications/find**
  - Retrieves applications filtered by job title, role, and company.
  
- **GET /applications/countByStatus**
  - Retrieves a count of applications grouped by status.
  
- **GET /applications/filterbydate**
  - Retrieves jobs count grouped by applied date.

## Technologies Used

- **Spring Boot**: Framework for creating Java applications quickly.
- **Java Persistence API (JPA)**: Standard for accessing databases in Java.
- **RESTful API**: Design pattern for building scalable APIs.
- **Spring Data JPA**: Simplifies data access using Spring applications with JPA technology.
- **Cross-Origin Resource Sharing (CORS)**: Mechanism for allowing resources on a web page to be requested from another domain.

## Usage

1. Ensure you have Java and Maven installed.
2. Clone the repository.
3. Configure your database settings in `application.properties`.
4. Run the application using `mvn spring-boot:run`.
5. Use API testing tools like Postman to interact with the endpoints.

## Dependencies

- Spring Web
- Spring Data JPA
- H2 Database (or your preferred database dependency)
- Other dependencies as required by your specific implementation.

## Contributing

Contributions are welcome! Fork the repository and submit a pull request with your enhancements.


