<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .horizontal-container {
            display: flex; 
            justify-content: space-between; 
            align-items: center; 
            padding: 20px;
            background-color: #f0f0f0; 
            border: 1px solid #ccc; 
        }

       
    body {
        font-family: 'Arial', sans-serif;
        background-color: #f7f7f7;
        color: #444;
        text-align: left;
        padding: 20px;
    }

    h1 {
        background-color: #4CAF50;
        color: #fff;
        padding: 20px;
        margin-bottom: 30px;
        text-align: center;
        border-radius: 8px;
        font-size: 2em;
    }

    button {
        padding: 12px 36px;
        margin: 10px;
        border: none;
        background-color: #90EE90;
        border-radius: 8px;
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        font-size: 16px;
    }

    button:hover {
        background-color: #8FBC8F;
        transform: scale(1.05);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    button.logout {
        background-color: #FF5733;
    }

    button.logout:hover {
        background-color: #FF4F30;
        transform: scale(1.05);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    button.edit {
        background-color: #4CAF50;
        color: white;
        border-radius: 8px;
        padding: 12px 25px;
        transition: all 0.3s ease;
    }

    button.edit:hover {
        background-color: #45a049;
        transform: scale(1.05);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }

    button.edit:focus {
        outline: none;
        box-shadow: 0 0 5px rgba(76, 175, 80, 0.6);
    }

    .filter-container {
        margin: 20px 0;
    }

    select {
        padding: 8px;
        margin: 10px;
        border: 1px solid #ddd;
        border-radius: 8px;
        font-size: 16px;
        transition: border-color 0.3s ease;
    }

    select:hover {
        border-color: #4CAF50;
    }

    select:focus {
        outline: none;
        border-color: #388E3C;
    }

    table {
        width: 100%;
        max-width: 100%;
        border-collapse: collapse;
        margin-top: 10px;
        table-layout: fixed;
    }

    table th,
    table td {
        padding: 12px;
        border: 1px solid #ddd;
        text-align: center;
        vertical-align: middle;
        word-wrap: break-word;
        transition: background-color 0.3s ease;
    }

    table th {
        background-color: #4CAF50;
        color: white;
        font-size: 18px;
    }

    table tr:nth-child(even) {
        background-color: #f9f9f9;
    }

    table tr:nth-child(odd) {
        background-color: #f1f1f1;
    }

    table th,
    table td {
        width: 150px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    table tr:hover {
        background-color: #e8f5e9;
    }

    #modal {
        display: none;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        z-index: 1001;
        width: 80%;
        max-width: 500px;
        transition: all 0.3s ease;
    }

    .modal-overlay {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1000;
    }

    #modal h2 {
        margin-bottom: 20px;
        color: #333;
        font-size: 1.5em;
    }

    .form-group {
        margin-bottom: 20px;
    }

    .form-group label {
        display: block;
        margin-bottom: 8px;
        font-weight: bold;
        color: #555;
    }

    .form-group input {
        width: 100%;
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 8px;
        font-size: 16px;
        transition: border-color 0.3s ease;
    }

    .form-group input:hover,
    .form-group input:focus {
        border-color: #4CAF50;
    }

    #modal-submit {
        background-color: #28a745;
        color: #fff;
        padding: 12px 20px;
        border: none;
        cursor: pointer;
        margin-right: 10px;
        border-radius: 8px;
        font-size: 16px;
        transition: background-color 0.3s ease, transform 0.3s ease;
    }

    #modal-submit:hover {
        background-color: #218838;
        transform: scale(1.05);
    }

    #modal-delete {
        background-color: #dc3545;
        color: #fff;
        padding: 12px 20px;
        border: none;
        cursor: pointer;
        border-radius: 8px;
        font-size: 16px;
        transition: background-color 0.3s ease, transform 0.3s ease;
    }

    #modal-delete:hover {
        background-color: #c82333;
        transform: scale(1.05);
    }

    .modal-close {
        cursor: pointer;
        color: #888;
        font-size: 24px;
        position: absolute;
        top: 10px;
        right: 10px;
    }

    .modal-close:hover {
        color: #444;
    }

    button,
    input,
    select {
        outline: none;
    }

    button:focus,
    input:focus,
    select:focus {
        border-color: #4CAF50;
    }

    #modal-submit:focus,
    #modal-delete:focus {
        border-color: #4CAF50;
    }
</style>