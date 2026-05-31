function kirimPesan() {
    let nama = document.getElementById("inputNama").value;
    let notif = document.getElementById("notifPesan"); 

    if (nama.trim() === "") { 
        notif.className = "alert alert-danger mt-3";
        notif.innerHTML = "Waduh cees, inisialnya diisi dulu dong biar kita kenal!";
        notif.style.display = "block"; 
    } else {
        
        notif.innerHTML = "Mantap <strong>" + nama.trim() + "</strong>! Pesan atau keluh kesahmu sudah masuk ke sistem SINKOSTAN CAFE.";
        notif.style.display = "block"; 
        
        document.getElementById("inputNama").value = "";
    }
}
