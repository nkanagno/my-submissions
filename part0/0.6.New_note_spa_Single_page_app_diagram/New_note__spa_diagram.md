```mermaid
sequenceDiagram
    participant browser
    participant server
    participant user

    Note right of Browser: adding a new note spa does not reloads the page
    
    user->>browser: Enter a new note and click save
    Browser->>Browser: Create new note object
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: Response 201 Created (new_note_spa added)
    deactivate server

```