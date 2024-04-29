<!--
CONSEGNA:
Descrizione:
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo, come da screenshot allegato. Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). -->

<!-- RISOLUZIONE DELL'ESERCIZIO -->
-Inserire due campi di testo e un bottone per ottenere degli input con valore dall'utente
-Ottenere tramite questi due campi: 
    -Il numero di chilometri che vuole percorrere
    -L'età del passeggero
-Stampare km da percorrere ed età del passeggero su console
-Dichiarare una variabile che moltiplichi i chilometri da percorrere per il prezzo (0.21 € al km)
-Dichiarare una variabile per lo sconto senza darle alcun valore iniziale
    -Tramite un costrutto if-else calcolare che:
        -Se l'età inserita è inferiore ai 18 anni, deve venire applicato uno sconto del 20% e sottrarlo al prezzo stampato precedentemente
        -Se l'età inserita è superiore o uguale ai 65, deve venire applicato uno sconto del 40% e sottrarlo al prezzo stampato precedentemente
-Dopo aver calcolato il prezzo totale con eventuale sconto, applicare un metodo per far sì che il numero finale abbia massimo due cifre decimali.
-Stampare il prezzo finale su console
-Come da screenshot, sistemare il form dove l'utente inserirà i propri dati
-Dopo aver cliccato il bottone, stampare in pagina:
    -Il recap dei suoi dati
    -Il prezzo finale con eventuale sconto applicato