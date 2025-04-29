// message.js
  document.getElementById("back").onclick = function() {
    history.back();
  };
  
  // Efek ketik per kata
  const message = `Hai Fina Putri Rengganis, <br>
  <br>
jujur aku sayang banget sama kamu, tapi maaf kalo aku selalu bikin kesalahan hal yang gakamu suka dan kali ini aku ngerti aku harus ngelangkah buat mertahanin hubungan ini kemana, aku pengen bawa hubungan ini kearah yang lebih baik, jangan sungkan buat cerita semua keluh kesah kamu, gimanapun aku pasangan kamu, aku pengen ada masalaah kita deeptalk berdua tanpa harus aku dicuekin, aku tau kamu nyuekin itu karna kamu mikir aku gada rasa salah, tapi aku ngerti rasa salah aku dimana makannya aku ngespam terus jujur sayang bgt sama kamu fin, ireally, aku gabullshit soal perasaan aku kekamu, jangan nangis ya baca ini, aku sayang banget aku minta maaf atas semua hal yang pernah aku lakuin kekamu sampe kamu kaya gini keaku, aku bisa buktiin untuk kali ini aku gaakan ngulangin hal yang sama dan aku ngejauhin hal yang gakamu suka, untuk kali ini tolong percaya sama aku buat aku ngebuktiin kalo aku cowo yang terbaik yang ada dihidup kamu meskipun aku pernah ngecewain kamu, iloveyou more bb, gimanapun kamu selalu aku usahakan sayang,i loveyouu iloveyou iloveyou iloveyou iloveyou iloveyou iloveyou iloveyou iloveyou (ada 9) sesuai tanggal aku nyatain perasaan kamu
<br> <br>
aku gapernah nyudutin kamu atas dasar sikap kamu yang sering kaya gni karna aku sblm nya punya keslaahan aku ngerti dan aku dewasa gimanapun aku selalu ngerti karna ini semua ulah aku,aku mencintaimu sayang, sungguh.
<br> <br>
  I love you <3`;
  
  const messageContent = document.getElementById("message-content");
  const words = message.split(" ");
  let index = 0;
  
  function typeMessage() {
    if (index < words.length) {
      messageContent.innerHTML += words[index] + " ";
      index++;
      setTimeout(typeMessage, 150); // 150ms antar kata, bisa diatur kecepatannya
    }
  }
  
  window.onload = typeMessage;
  
  document.getElementById("next").onclick = function () {
    // Hentikan lagu sebelumnya jika masih bermain
    const currentMusic = document.getElementById("bg-music");
    currentMusic.pause();
    currentMusic.currentTime = 0;
  
    // Putar lagu baru
    const nextMusic = document.getElementById("next-music");
    nextMusic.play();
  
    // Setelah beberapa detik (misal 3 detik), lanjut redirect
    setTimeout(() => {
      window.location.href = "gallery.html";
    }, 3000); // 3000ms = 3 detik
  };
  