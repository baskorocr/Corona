<template>
  <div class="index container">
    <div class="row align-items-start">
      <div class="col" />
      <div class="col text-center">
        <h1>Data Covid-19 di Indonesia</h1>
      </div>
      <div class="col" />
    </div>
    <br />
    <br />
    <div class="konten">
      <div
        v-for="(data, index) in dataCorona"
        :key="index"
        class="container text-center"
      >
        <div class="row align-items-start">
          <div class="col">
            <img src="../assets/sakit.png" class="card-img-top" alt="..." />
            <div class="card-body"></div>
            <h3 class="p">positif</h3>
            <h1 class="p">{{ data.positif }}</h1>
          </div>
          <div class="col">
            <img src="../assets/sembuh.png" class="card-img-top" alt="..." />
            <div class="card-body"></div>
            <h3 class="p">Sembuh</h3>
            <h1 class="p">{{ data.sembuh }}</h1>
          </div>
          <div class="col">
            <img src="../assets/meninggal.png" class="card-img-top" alt="..." />
            <div class="card-body"></div>
            <h3 class="p">Meninggal</h3>
            <h1 class="p">{{ data.meninggal }}</h1>
          </div>
          <div class="col">
            <img src="../assets/dirawat.png" class="card-img-top" alt="..." />
            <div class="card-body"></div>
            <h3 class="p">Dirawat</h3>
            <h1 class="p">{{ data.dirawat }}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { onMounted, ref } from 'vue';
export default {
  setup() {
    let dataCorona = ref([]);

    onMounted(() => {
      axios
        .get('https://api.kawalcorona.com/indonesia/')
        .then((result) => {
          dataCorona.value = result.data;
        })
        .catch((err) => {
          console.log(err.response);
        });
    });

    return {
      dataCorona,
    };
  },
};
</script>
