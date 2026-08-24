<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Practica uno</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
  <style>
    [class^="col-"] {
      padding: 0.75rem;
      text-align: center;
      font-weight: 600;
    }
  </style>
</head>
<body>

  <!-- Cuatro columnas responsivas -->
  <div class="container-fluid mt-3">
    <h1>Cuatro columnas responsivas</h1>
    <p>Prueba1</p>
    <div class="row g-2">
      <div class="col-sm-3 text-bg-primary">AZUL</div>
      <div class="col-sm-3 text-bg-dark">NEGRO</div>
      <div class="col-sm-3 text-bg-success">VERDE</div>
      <div class="col-sm-3 text-bg-warning">AMARILLO</div>
    </div>
  </div>

  <!-- Juego de columnas -->
  <div class="container-fluid mt-4">
    <h1>Juego de columnas</h1>
    <p>Prueba2</p>

    <div class="row g-2 mb-2">
      <div class="col-sm-12 text-bg-primary">AZUL</div>
    </div>

    <div class="row g-2 mb-2">
      <div class="col-sm-6 text-bg-primary">AZUL</div>
      <div class="col-sm-6 text-bg-danger">ROJO</div>
    </div>

    <div class="row g-2 mb-2">
      <div class="col-sm-4 text-bg-primary">AZUL</div>
      <div class="col-sm-4 text-bg-danger">ROJO</div>
      <div class="col-sm-4 text-bg-success">VERDE</div>
    </div>

    <div class="row g-2 mb-2">
      <div class="col-sm-3 text-bg-primary">AZUL</div>
      <div class="col-sm-3 text-bg-danger">ROJO</div>
      <div class="col-sm-3 text-bg-success">VERDE</div>
      <div class="col-sm-3 text-bg-warning">AMARILLO</div>
    </div>

    <p>Prueba3</p>

    <div class="row g-2 mb-2">
      <div class="col-sm-5 text-bg-primary">AZUL</div>
      <div class="col-sm-5 text-bg-danger">ROJO</div>
      <div class="col-sm-2 text-bg-success">VERDE</div>
    </div>

    <div class="row g-2 mb-2">
      <div class="col-sm-6 text-bg-primary">AZUL</div>
      <div class="col-sm-4 text-bg-danger">ROJO</div>
      <div class="col-sm-2 text-bg-success">VERDE</div>
    </div>

    <div class="row g-2 mb-2">
      <div class="col-sm-4 text-bg-primary">AZUL</div>
      <div class="col-sm-8 text-bg-danger">ROJO</div>
    </div>

    <div class="row g-2 mb-2">
      <div class="col-sm-8 text-bg-primary">AZUL</div>
      <div class="col-sm-4 text-bg-danger">ROJO</div>
    </div>
  </div>

</body>
</html>
