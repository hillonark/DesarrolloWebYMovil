<!DOCTYPE html>
<html lang="es">
<head>
    <title>Pagina Principal</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: Arial, sans-serif;
        }
 
        /* Barra de navegacion */
        .navbar {
            background-color: #D94421;
            color: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 20px;
        }
        .navbar a {
            color: white;
            text-decoration: none;
            margin-right: 20px;
        }
        .navbar a:hover {
            text-decoration: underline;
        }
        .nav-links {
            display: flex;
            align-items: center;
        }
        .btn {
            padding: 8px 16px;
            border: 1px solid white;
            background: transparent;
            color: white;
            border-radius: 4px;
            cursor: pointer;
        }
        .btn:hover {
            background: white;
            color: #212529;
        }
 
        /* Contenido principal */
        .contenido {
            background-color: #3DB538;
            padding: 20px;
        }
        .contenido a {
            display: block;
            color: black;
            margin-bottom: 8px;
        }
 
        /* Pie de pagina */
        .footer {
            background-color: #212529;
            color: white;
            text-align: center;
            padding: 15px;
        }
 
        /* Modal (ventana de login) */
        .modal-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            justify-content: center;
            align-items: center;
        }
        .modal-overlay.activo {
            display: flex;
        }
        .modal-box {
            background: white;
            width: 90%;
            max-width: 400px;
            border-radius: 6px;
            overflow: hidden;
        }
        .modal-header, .modal-footer {
            padding: 12px 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .modal-header {
            border-bottom: 1px solid #ddd;
        }
        .modal-footer {
            border-top: 1px solid #ddd;
            justify-content: flex-end;
        }
        .modal-body {
            padding: 16px;
        }
        .modal-body label {
            display: block;
            margin-top: 10px;
            margin-bottom: 4px;
        }
        .close-btn {
            background: none;
            border: none;
            font-size: 20px;
            cursor: pointer;
        }
        .btn-cerrar {
            background: #dc3545;
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 4px;
            cursor: pointer;
        }
        .btn-login {
            background: #0d6efd;
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 4px;
            cursor: pointer;
            margin-top: 10px;
        }
    </style>
</head>
<body>
 
    <!-- Barra de navegacion -->
    <nav class="navbar">
        <a href="index.php"><strong>Logo</strong></a>
        <div class="nav-links">
            <a href="empresa.php">Gatos</a>
            <a href="servicios.php">Perros</a>
            <a href="productos.php">Pájaros</a>
       
        </div>
    </nav>
 
    <!-- Contenido principal -->
    <div class="contenido">
        <a href="empresa.php">Ir a Gatos</a>
        <a href="servicios.php">Ir a Perros</a>
        <a href="productos.php">Ir a Pájaros</a>
    </div>
 
    <!-- Pie de pagina -->
    <div class="footer">
        <strong>Alumno@unab</strong>
    </div>
 
    <!-- Modal de login -->
    <div class="modal-overlay" id="myModal">
        <div class="modal-box">
            <div class="modal-header">
                <h4>Autenticacion</h4>
                <button class="close-btn" onclick="cerrarModal()">&times;</button>
            </div>
            <div class="modal-body">
                <form action="empresa.php">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter email">
 
                    <label for="pwd">Password:</label>
                    <input type="password" id="pwd" name="pswd" placeholder="Enter password">
 
                    <div style="margin-top:10px;">
                        <label>
                            <input type="checkbox" name="remember"> Remember me
                        </label>
                    </div>
 
                    <button type="submit" class="btn-login">Login</button>
                </form>
            </div>
            <div class="modal-footer">
                <button class="btn-cerrar" onclick="cerrarModal()">Close</button>
            </div>
        </div>
    </div>
 
    <script>
        function abrirModal() {
            document.getElementById('myModal').classList.add('activo');
        }
        function cerrarModal() {
            document.getElementById('myModal').classList.remove('activo');
        }
    </script>
 
</body>
</html>
 
