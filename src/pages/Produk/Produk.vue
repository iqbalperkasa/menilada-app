<template lang="pug">
  .container
    .row
      .col
        h1.page-title Produk
    .row
      .col-lg-6
        .card
          .card-body
            router-link.mb-3.btn-sm.btn.btn-primary(to='/produk/add') Tambah Produk
            table.table
              thead
                tr
                  th Nama Produk
                  th Harga
                  th
              tbody
                tr
                  td Mercon Beranak
                  td Rp 30.000
                  td
                    router-link.text-decoration-none(to='/produk/23/edit') Edit
                tr
                  td Mercon Beranak
                  td Rp 30.000
                  td
                    router-link.text-decoration-none(to='/produk/23/edit') Edit
                tr
                  td Mercon Beranak
                  td Rp 30.000
                  td
                    router-link.text-decoration-none(to='/produk/23/edit') Edit
</template>

<script>
export default {
  name: 'ProdukPage',
}
</script>
