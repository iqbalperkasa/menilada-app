<template lang="pug">
  .card
    .card-body
      form(@submit.prevent='addRekap()')
        .row
          .col-lg-3.my-2
            label.form-label Batch
            input.form-control(v-model='newRekap.batch')
          .col-lg-3.my-2
            label.form-label Tanggal
            input.form-control(
              type='date'
              v-model='newRekap.startDate'
            )
          .col-lg-3.my-2
            label.form-label Tanggal Akhir
            input.form-control(
              type='date'
              v-model='newRekap.endDate'
            )
          .col-lg-3.my-2
            label.form-label &nbsp;
            input.col.btn.btn-outline-primary.btn-block(
              type='submit'
              value='Tambah Rekap'
            )
</template>

<script>
export default {
  name: 'InsertRekap',
  data() {
    return {
      newRekap: {
        batch: 'Batch 11',
        startDate: null,
        endDate: null,
      },
    };
  },
  methods: {
    addRekap(ev) {
      if (!this.newRekap.batch) return alert('Mohon masukkan nama batch.');
      if (!this.newRekap.startDate) return alert('Mohon masukkan tanggal awal.');

      this.$emit('newRekap', this.newRekap);
    },
  },
}
</script>
