// ANIMATIONEN HARD SKILLS HOMEPAGE -------------—-------------—-------------—-------------—-------------—-------------—

// Funktion zum Überprüfen, ob ein Element im sichtbaren Bereich ist
function isElementInViewport(el) {
    let rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}  
// Funktion, um Animationen basierend auf Sichtbarkeit zu starten
function startAnimationsOnScroll() {
    let animatedElements = document.querySelectorAll('.col.animate__animated');
  
    animatedElements.forEach(element => {
        if (isElementInViewport(element) && !element.classList.contains('animate__zoomIn')) {
            element.classList.add('animate__zoomIn');
        }
    });
} 
// Event-Listener für das Scroll-Ereignis hinzufügen
window.addEventListener('scroll', startAnimationsOnScroll); 
// Direkt nach dem Laden der Seite überprüfen, welche Elemente sichtbar sind
document.addEventListener('DOMContentLoaded', () => {
    startAnimationsOnScroll(); // Animationen für sichtbare Elemente starten
});



// LEBENSLAUF ÖFFNEN BUTTON -------------—-------------—-------------—-------------—-------------—-------------—-------------—
function openCV() {
    let cvUrl = "pdfs/Lebenslauf.pdf";
    window.open(cvUrl, '_blank');
}

// ZERTIFIKAT ÖFFNEN BUTTON
function openPDF() {
    let pdfUrl = "pdfs/Zertifikat HTML&CSS.pdf";
    window.open(pdfUrl, '_blank');
}

function openPDF2() {
    let pdfUrl = "pdfs/Zertifikat JS.pdf";
    window.open(pdfUrl, '_blank');
}

function openBS() {
    let pdfUrl = "pdfs/Bewerbungsschreiben.pdf";
    window.open(pdfUrl, '_blank');
}
