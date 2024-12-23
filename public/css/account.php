<style>
    /* Thêm tiền tố cho các lớp CSS trong file 1 */
    .profile-page body {
        background-color: #f8f9fa;
        font-family: Arial, sans-serif;
    }

    .profile-page .profile-container {
        max-width: 800px;
        margin: 50px auto;
        background-color: #fff;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .profile-page .profile-header {
        text-align: center;
        margin-bottom: 30px;
    }

    .profile-page .profile-header img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-bottom: 15px;
    }

    .profile-page .profile-header h2 {
        color: #495057;
        margin-bottom: 10px;
    }

    .profile-page .profile-header p {
        font-size: 1.1em;
        color: #6c757d;
    }

    .profile-page .btn-custom {
        background-color: #007bff;
        color: white;
        border: none;
        width: 50%;
        border-radius: 10px;
        display: block;
        margin: 0 auto;
        padding: 8px 12px;
        font-size: 14px;
        transition: background-color 0.3s ease;
    }

    .profile-page .btn-custom:hover {
        background-color: #0056b3;
    }

    .profile-page .message {
        text-align: center;
        padding: 15px;
        margin-top: 20px;
        border-radius: 5px;
    }

    .profile-page .message.error {
        background-color: #f8d7da;
        color: #721c24;
    }

    .profile-page .message.success {
        background-color: #d4edda;
        color: #155724;
    }

    .profile-page #feedback-container {
        margin-top: 30px;
    }

    .profile-page #feedback-container h2 {
        text-align: center;
        margin-bottom: 20px;
    }

    .profile-page #feedback-container textarea {
        width: 100%;
        padding: 10px;
        margin-bottom: 15px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 1em;
        min-height: 100px;
    }

    .profile-page #feedback-container button.submit-feedback {
        background-color: #ffc107;
        color: white;
        border: none;
        padding: 12px;
        font-size: 16px;
        border-radius: 10px;
        width: 100%;
        transition: background-color 0.3s ease;
    }

    .profile-page #feedback-container button.submit-feedback:hover {
        background-color: #e0a800;
    }
</style>