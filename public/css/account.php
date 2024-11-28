    <style>
        body {
            background-color: #f8f9fa;
            font-family: Arial, sans-serif;
        }

        .profile-container {
            max-width: 800px;
            margin: 50px auto;
            background-color: #fff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .profile-header {
            text-align: center;
            margin-bottom: 30px;
        }

        .profile-header img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            margin-bottom: 15px;
        }

        .profile-header h2 {
            color: #495057;
            margin-bottom: 10px;
        }

        .profile-header p {
            font-size: 1.1em;
            color: #6c757d;
        }

        .btn-custom {
            background-color: #007bff;
            color: white;
            border: none;
            width: 100%;
            border-radius: 10px;
            padding: 12px;
            font-size: 16px;
            transition: background-color 0.3s ease;
        }

        .btn-custom:hover {
            background-color: #0056b3;
        }

        .message {
            text-align: center;
            padding: 15px;
            margin-top: 20px;
            border-radius: 5px;
        }

        .message.error {
            background-color: #f8d7da;
            color: #721c24;
        }

        .message.success {
            background-color: #d4edda;
            color: #155724;
        }

        /* Form thay đổi mật khẩu */
        #change-password-form {
            display: none;
            margin-top: 30px;
        }

        #change-password-form .form-label {
            font-size: 1.1em;
        }

        #change-password-form .form-control {
            margin-bottom: 15px;
        }

        #change-password-form button {
            background-color: #28a745;
            color: white;
            border: none;
            width: 100%;
            border-radius: 10px;
            padding: 12px;
            font-size: 16px;
        }

        #change-password-form button:hover {
            background-color: #218838;
        }

        #feedback-container {
            margin-top: 30px;
        }

        #feedback-container h2 {
            text-align: center;
            margin-bottom: 20px;
        }

        #feedback-container textarea {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 1em;
            min-height: 100px;
        }

        #feedback-container button.submit-feedback {
            background-color: #ffc107;
            color: white;
            border: none;
            padding: 12px;
            font-size: 16px;
            border-radius: 10px;
            width: 100%;
            transition: background-color 0.3s ease;
        }

        #feedback-container button.submit-feedback:hover {
            background-color: #e0a800;
        } .message {
        padding: 10px;
        margin-bottom: 15px;
    }

    .success {
        background-color: #d4edda;
        color: #155724;
        border: 1px solid #c3e6cb;
    }

    .error {
        background-color: #f8d7da;
        color: #721c24;
        border: 1px solid #f5c6cb;
    }
    </style>