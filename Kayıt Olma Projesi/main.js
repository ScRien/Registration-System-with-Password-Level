function KayitFormFnct() {
    const form = document.forms["kayitForm"]; // Form alanını Seçtik.
    var ad = form.username; // Kullanıcı adını seçtik.
    var sifre = form["pass"]; // Şifre seçerken [""] Kullandık çünkü pass. 'ın bizim için yazı olması gerek.
    if (ad.value != "" && sifre.value != "") {
        if (ad.value.length < 4) {
            alert("Lütfen minimum 4 Karakterli bir Kullanıcı adı giriniz !");
            return false
        } else if(ad.value.length > 28){
            alert("Lütfen Maksimum 28 Karakterli bir kullanıcı adı giriniz !");
            return false
        } else if (sifre.value.length < 8) {
            alert("Lütfen minimum 8 karakterli bir şifre giriniz !");
            return false
        } else if (sifre.value.length > 24){
            alert("Lütfen maksimum 24 karakterli bir şifre giriniz !");
            return false
        }else if (sifre.value == "12345678" || sifre.value == "123456780" || sifre.value == "123456789" || sifre.value == "1234567890" ||sifre.value == "01234567" || sifre.value == "87654321" || sifre.value == "987654321" || sifre.value == "11111111" || sifre.value == "password" || sifre.value == "12312312" || sifre.value == "123123123") {
            alert("Şifrenizin Güvenlik Düzeyi çok düşük. Lütfen daha güvenlikli bir şifre giriniz !")
        }else {
            alert("Kayıt Başarılı!");
        }
    }else {
        alert("Lütfen Tüm alanları doldurun !")
        return false // Formu iptal et.
    }
}