
let toDoListFormDOM = document.querySelector('#toDoListForm_id') //html form nesnesini bir javascript değişkenine tanımladık ki üzerinde işlem yapabilelim
toDoListFormDOM.addEventListener('submit', newElement)   //userFormDOM değişkenine tetikleme eylemi ve tetiklenecek founciton tanımladık
let ultoDoListDOM = document.querySelector('#list')

const alertDOM = document.querySelector('#liveToast')
//function tanımlama
const alertFunction = (title, message, className="warning") => `  
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="close"></button>
</div>`


function newElement (event) {  //newElement fonksiyonu addEventListener parametresi olarak tanımlandığı için diğer fonksiyon tanımlama metotlarında (const formHandler = function(event){} gibi) fonksiyon çalışmaz. Fonksiyon içerisinde belirtilen fonksiyonlar, diğer fonksiyon tanımlama metotları ile tanımlanabilir.
    //event.preventDefault() //submit eylemi çalışmasın, girilen bilgileri ilgili url adresine göndermemesi için. amacımız girilen bilgileri url adresine göndermek değil, girilen bilgiler ile yeni liste elemanları oluşturmak.
    const TODOLİST = document.querySelector("#task")   //html kullanıcı adı nesnesini değişkene tanımladık
//    const SCORE = document.querySelector("#score")          //html score (not) nesnesini değişkene tanımladık
    
    if (TODOLİST.value && !TODOLİST.value.includes("  ")) {
        let liDOM = document.createElement('li')    //liste nesnesi oluştur ve liDOM değişkenine ata, ve sonra girilen kullanıcı adı ve not bilgisini liste nesnesine ata, ve görüntüleme belirtilen class özelliklerinde olsun
        liDOM.innerHTML = `${TODOLİST.value}`
        ultoDoListDOM.append(liDOM)                 //oluşturulan listeyi ul (unordered list) nesne sonuna ekle (prepend olsa idi başına eklerdi)
      //eğer, her iki talep edilen bilgi de girildi ise, "addItem" fonksiyonu ile listeyi oluştur 
        TODOLİST.value = ""                    //ve sonra form kutularını sıfırla (boş değer ata)
        alertDOM.innerHTML = alertFunction(
            "",
            "Listeye eklendi!",
            "success"
        )
        for (i = 0; i < myNodelist.length; i++) {
            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.appendChild(txt);
            myNodelist[i].appendChild(span);
          }
          for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
              var div = this.parentElement;
              div.style.display = "none";
            }
          }
    } else {
        alertDOM.innerHTML = alertFunction(
            "Uyarı!",
            "Eksik Bilgi Girdiniz",
            "danger"
        )
    }
    
}


//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_todo aşağıdaki kodlar için faydalandığım link.

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
}, false);

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}