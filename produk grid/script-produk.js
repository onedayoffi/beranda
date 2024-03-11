 // Ambil semua elemen dengan kelas "product"
 var products = document.querySelectorAll('.product');

 // Loop melalui setiap produk dan tambahkan event listener
 products.forEach(function(product) {
     product.addEventListener('click', function() {
         // Ambil URL gambar dari atribut data-image
         var imageUrl = this.getAttribute('data-image');

         // Buat elemen modal
         var modal = document.createElement('div');
         modal.classList.add('modal');

         // Buat elemen gambar di dalam modal
         var modalImg = document.createElement('img');
         modalImg.src = imageUrl;

         // Tambahkan gambar ke dalam modal
         modal.appendChild(modalImg);

         // Tambahkan modal ke dalam body
         document.body.appendChild(modal);

         // Fungsi untuk menutup modal saat mengklik di luar gambar
         modal.addEventListener('click', function() {
             modal.remove();
         });
     });
 });