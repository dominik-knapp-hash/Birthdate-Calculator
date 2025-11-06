const { DateTime, Interval } = luxon;


const inputFeld = document.getElementById('datum');
const button = document.getElementById('berechnen');
const ergebnisAnzeige = document.getElementById('ergebnis-anzeige');




function berechneAlter(geburtsdatumString) {
    
    const geburtsdatum = DateTime.fromISO(geburtsdatumString);
    

    const heute = DateTime.local();


    if (!geburtsdatum.isValid) {
        return "Ungültiges Datum eingegeben.";
    }


    const zeitspanne = Interval.fromDateTimes(geburtsdatum, heute);

    const alter = zeitspanne.toDuration(['years', 'months', 'days', 'hours']);

    return {
        years: Math.floor(alter.years),
        months: Math.floor(alter.months),
        days: Math.floor(alter.days),
        hours: Math.floor(alter.hours)
};
}

button.addEventListener('click', () => {

    event.preventDefault();

    const datumString = inputFeld.value; 

    const alterErgebnis = berechneAlter(datumString);

    if (typeof alterErgebnis === 'object' && alterErgebnis !== null) {
        ergebnisAnzeige.textContent = `Du bist ${alterErgebnis.years} Jahre, ${alterErgebnis.months} Monate, ${alterErgebnis.days} Tage, ${alterErgebnis.hours} Stunden alt.`;
    } else {
        ergebnisAnzeige.textContent = alterErgebnis;
    }
});