<template>
  <div class="featur container">
    <div class="container">
      <div class="row align-items-start">
        <div class="col" v-for="person in people" :key="person.name">
          <div class="card" style="width: 18rem">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'negara',
  components: {},
  data: () => ({
    people: [
      { name: 'John', country: '' },
      { name: 'Jane', country: '' },
      { name: 'Jane', country: '' },
      { name: 'Jane', country: '' },
      { name: 'Jane', country: '' },
      { name: 'John', country: '' },
      { name: 'Jane', country: '' },
      { name: 'Jane', country: '' },
      { name: 'Jane', country: '' },
      { name: 'Jane', country: '' },
      { name: 'John', country: '' },
      { name: 'Jane', country: '' },
      { name: 'Jane', country: '' },
      { name: 'Jane', country: '' },
      { name: 'Jane', country: '' },
      { name: 'John', country: '' },
      { name: 'Jane', country: '' },
      { name: 'Jane', country: '' },
      { name: 'Jane', country: '' },
      { name: 'Jane', country: '' },
      { name: 'John', country: '' },
      { name: 'Jane', country: '' },
      { name: 'Jane', country: '' },
      { name: 'Jane', country: '' },
      { name: 'Jane', country: '' },
    ],
  }),
};
</script>
