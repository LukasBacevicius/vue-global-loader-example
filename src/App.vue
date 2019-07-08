<template>
  <div id="app">
    <Button @click="testLoader">Make a request to see a loader</Button>
    <Loader :visible="loading"/>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Loader from "@/components/loader";
import httpClient from '@/utils/httpClient';

export default {
  name: "app",
  components: {
    Loader
  },
  computed: {
    ...mapState("loader", ["loading"])
  },
  methods: {
    testLoader() {
      httpClient.get('http://slowwly.robertomurray.co.uk/delay/3000/url/http://www.google.co.uk');
    }
  }
};
</script>

<style>
</style>
