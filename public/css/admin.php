<style>
    body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        padding: 20px;
        margin: 0;
    }

    .container {
        background-color: white;
        padding: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
    }

    th,
    td {
        border: 1px solid #ddd;
        padding: 6px;
        text-align: center;
    }

    th {
        background-color: #f2f2f2;
    }

    tr:nth-child(even) {
        background-color: #f2f2f2;
    }

    button {
        padding: 8px 16px;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 10px;
        border: none;
        transition: opacity 0.2s ease;
    }

    button:hover {
        opacity: 0.8;
    }

    button[type="submit"],
    button[name="addCourse"] {
        background-color: #1E90FF;
        color: white;
    }

    button[type="button"] {
        background-color: #1E90FF;
        color: white;
    }

    button {
        background-color: #1E90FF;
    }

    h3 {
        color: #333;
        margin-top: 20px;
    }

    form {
        margin: 20px 0;
    }

    .modal {
        display: none;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        padding: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        z-index: 1000;
    }

    .modal-overlay {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 500;
    }

    .form-group {
        margin-bottom: 10px;
    }

    input[type="text"],
    input[type="password"] {
        width: 100%;
        padding: 6px;
        margin-top: 3px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }

    label {
        display: block;
        margin-top: 10px;
        font-weight: bold;
    }
</style>