breakpoints:
1200
1048
992
768
600
440
340

----------k&l
icons anpassen
divs hinzufügen



-----Responsive:
Überschrift ab 600px margin halbieren
css cleanen




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mein Portolio | Kursprojekte</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
<!-- NAVBAR -->
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="index.html">Homepage</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="webseiten.html">Webseiten</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="kursprojekte.html">Kursprojekte</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="lernprojekte.html">Lernprojekte</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<h1 class="header-text animate__animated animate__fadeIn">Dies sind die Abschlussprojekte der absolvierten Kurse:</h1>

<!-- HTML UND CSS KURS -->
<div class="vorschau-container animate__animated animate__bounceInRight">
  <div class="thumbnail-name">
    <h2><a href="https://sparkling-lollipop-593932.netlify.app" target="_blank">WEBDESIGN made simple</a></h2>
    <img class="thumbnail" src="img_vs/htmlcss.png" alt="">
  </div>
  <div class="beschreibung">
    <div>
      <img class="icon-projekte" src="img/html.png" alt="">
      <img class="icon-projekte" src="img/css.png" alt="">
    </div>
    <p>
      Um mir auf dem besten Weg umfassendes Wissen über HTML & CSS anzueignen, entschied ich mich für einen praxisorientierten Udemy-Kurs mit den besten Bewertungen. Durch diesen Kurs konnte ich meine Fähigkeiten erheblich verbessern und bin nun in der Lage, meine kreativen Ideen effektiv in Projekten umzusetzen.<br><br>
    </p>
    <div class="button-container">
      <h4><a href="https://github.com/NilsK02/Abschlussprojekt-HTML-CSS" target="_blank" class="button-blau">ZUM CODE</a></h4>
      <!-- <h4><a onclick="openPDF()" class="button-blau">ZUM ZERTIFIKAT</a></h4> -->
    </div>
  </div>
</div>


<!-- JAVASCRIPT KURS-->
<div class="vorschau-container vc2 animate__animated animate__bounceInLeft">
  <div class="thumbnail-name">
    <h2><a href="https://dapper-capybara-1aeac5.netlify.app" target="_blank">Liqui-Planner (Haushaltsbuch)</a></h2>
    <img class="thumbnail" src="img_vs/liquiplanner.png" alt="">
  </div>
  <div class="beschreibung">
    <div>
      <img class="icon-projekte" src="img/html.png" alt="">
      <img class="icon-projekte" src="img/css.png" alt="">
      <img class="icon-projekte" src="img/js.png" alt="">
    </div>
    <p>
      Wie in jeder Web Entwickler Laufbahn kam auch für mich JavaScript als nächstes dran.
      Hier entschied ich mich für den Kurs vom selben Dozenten, welcher ebenfalls die beste Bewertung hat.
      Ein sehr umfangreicher Kurs, welche mich tief in die Welt der Entwicklung eintauchen und dafür sorgte 
      das ich danach kleinere Challenges selbst absolvieren konnte<br><br>
    </p>
    <div class="button-container">
      <h4><a href="https://github.com/NilsK02/AbschlussprojektJavascript" target="_blank" class="button-blau">ZUM CODE</a></h4>
      <!-- <h4><a onclick="openPDF2()" class="button-blau">ZUM ZERTIFIKAT</a></h4> -->
    </div>
  </div>
</div>

<!-- WP KURS -->
<div class="vorschau-container animate__animated animate__bounceInRight">
  <div class="thumbnail-name">
    <h2><a href="https://sparkling-lollipop-593932.netlify.app" target="_blank">Fictional University</a></h2>
    <img class="thumbnail" src="img_vs/fu.png" alt="">
  </div>
  <div class="beschreibung">
    <div>
      <img class="icon-projekte" src="img/html.png" alt="">
      <img class="icon-projekte" src="img/css.png" alt="">
      <img class="icon-projekte" src="img/js.png" alt="">
      <img class="icon-projekte" src="img/wp.png" alt="">
      <img class="icon-projekte" src="img/php2.png" alt="">
    </div>
    <p>
      Nachdem mir klar wurde, welchen weiteren Weg ich in der Webentwicklung einschlagen wollte, war dieser Kurs ein Muss. Dieser Kurs zeichnet sich durch seine herausragende Bewertung aus und gilt als einer der umfassendsten Kurse für die Entwicklung von Webseiten mit WordPress. Durch ein ausführliches Projekt wurden die Kenntnisse geschult.<br><br>
      </p>
      <div class="button-container">
        <h4><a href="https://github.com/NilsK02/Abschlussprojekt-fictional-university" target="_blank" class="button-blau">ZUM CODE</a></h4>
        <!-- <h4><a class="button-blau">NOCH IN ARBEIT</a></h4> -->
      </div>
  </div>
</div>






<!-- JS-->
  <script src="main.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>