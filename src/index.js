/***********************************************************************************************************************************************
 * 
 *      autor: Robert Zabrocki
 *      date: grudzień 2021
 * 
 *      opis: zadaniem skryptu jest realizacja funkcjonalności polegającej na odsłanianiu lub ukrywaniu części opisu na każdej karcie.
 *            naciśnięcie przycisku z napisem "... Show More" powinno odsłonić tekst pozostający do tej pory ukryty dla oczu użytkownika.
 *            naciśnięcie przycisku z napisem "... Show Less" powinno zasłonić część tekstu.
 * 
 *            jako że plik "index.js" jest dodawany w sekcji <head> musimy zadbać, aby kod skryptu wywołany został dopiero po całkowitym
 *            załadowaniu wszystkich elementów DOM. dlatego wykożystane zastało zdarzenie "DOMContentLoaded".
 * 
 ***********************************************************************************************************************************************/
 
        document.addEventListener('DOMContentLoaded', () => {

            const expandsMore = document.querySelectorAll('[expand-more]'); // kolekcja elementów HTML posiadających atrybut "expand-more" 
            
            // przyporządkowanie każdemu elementowi "expand-more" procedury obsługi zdarzenia 'click'
            expandsMore.forEach(expandMore => {expandMore.addEventListener('click', expand)});
        });



/***********************************************************************************************************************************************
 * 
 *      autor: Robert Zabrocki
 *      date: grudzień 2021
 * 
 *      opis: procedura obsługi zdarzenia 'click' elementów HTML z atrybutami "expand-more".
 *            funkcja po każdym kliknięciu zmiania 
 * 
 ***********************************************************************************************************************************************/

        function expand() {

            const showContent = document.getElementById(this.dataset.target);   // pobranie elementu o identyfikatorze zawartym w polu
                                                                                // 'data-target' klikanego przycisku

            showContent.classList.toggle('expand-active');  // rozszerzenie/zmniejszenie pola poprzez wprowadzenie/usunięcie 'expand-active'
                                                            // do atrybutu 'class' klikniętego elementu

            if (showContent.classList.contains('expand-active')) {
                // jeżeli kliknięty element jest klasy 'expand-active' => wprowadzony zostaje
                // napis informujący o możliwości zmniejszenia pola
                this.innerHTML = this.dataset.hidetext;

            } else {
                // jeżeli kliknięty element nie jest klasy 'expand-active' => wprowadzony zostaje
                // napis informujący o możliwości rozszerzenia pola
                this.innerHTML = this.dataset.showtext;

            }
        }