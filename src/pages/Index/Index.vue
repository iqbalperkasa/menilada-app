<template lang="pug">
  .container
    .row
      .col
        h1.page-title Dashboard
    .row
      .col-lg-4
        .card.mb-3
          .card-header
            div Minggu Ini
          .card-body
            .row
              .col
                .badge.bg-primary Nett
                div Rp 450.000.000
              .col
                .badge.bg-info Gross
                div Rp 450.000.000
        .card.mb-3
          .card-header
            div Total
          .card-body
            .row
              .col
                .badge.bg-info Batch
                div 20
              .col
                .badge.bg-info Order
                div 20
              .col
                .badge.bg-info Orang
                div 20
      .col-lg-8
        .card.mb-3
          .card-header Rekap Batch Penjualan
          .card-body
            button.btn.btn-primary.mb-1(@click='isShowInsertRekap = !isShowInsertRekap') Tambah Rekap
            InsertRekap(
              v-show='isShowInsertRekap'
              @newRekap='newRekap'
            )
            div.mt-3
              .rekap-item.d-flex.justify-content-between.align-items-center.py-3(
                v-for='(item, i) in 10'
                :key='i'
              )
                div
                  div
                    span.font-weight-bold.mr-3 Batch {{ ++i }}
                    br.d-xl-none.d-lg-block
                    span Senin, 09 Sep 2020
                  div
                    .badge.bg-primary.mr-1 Nett
                    .badge.bg-light.text-dark.mr-2 Rp 2.000.000
                    br.d-xl-none.d-lg-block
                    .badge.bg-info.mr-1 Gross
                    .badge.bg-light.text-dark Rp 2.000.000
                div.text-right
                  .badge.bg-light.text-dark.mh-1 40 Order
                  .badge.bg-light.text-dark.mh-1 10 Orang
                  //- div 40 Order 10 Orang
                //- div
                //-   a.btn.btn-outline-primary.btn-sm Lihat Rekap
</template>

<script>
import InsertRekap from './components/InsertRekap';

export default {
  name: 'IndexPage',
  components: {
    InsertRekap,
  },
  data() {
    return {
      isShowInsertRekap: false,
    };
  },
  methods: {
    newRekap(data) {
      console.log(data);
    },
  },
}
</script>

<style lang="stylus" scoped>
.rekap-item
  cursor pointer
  padding 1rem
  margin 0.5rem 0
  border-radius 7px
  border 2px solid transparent

  &:nth-child(odd)
    background-color #f5f5f5

  &:hover
    border-color #ddd
</style>
