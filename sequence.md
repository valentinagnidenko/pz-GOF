# Sequence Diagram
sequenceDiagram
    participant User
    participant Site
    participant Payment

    User->>Site: Обирає товар
    Site-->>User: Показує кошик
    User->>Site: Оформляє замовлення
    Site->>Payment: Запит на оплату
    Payment-->>Site: Підтвердження
    Site-->>User: Замовлення підтверджено