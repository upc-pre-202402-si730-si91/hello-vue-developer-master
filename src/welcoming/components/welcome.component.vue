<script>
/**
 * @name welcome
 * @description
 * This component is responsible for welcoming a new developer.
 * It receives the first name and last name of the developer as props.
 * It uses the Developer entity to create a developer object and welcome the developer.
 * @prop firstName {String} - The first name of the developer.
 * @prop lastName {String} - The last name of the developer.
 */
import {Developer} from "@/welcoming/model/developer.entity.js";
export default {
    name: "welcome",
    props: {
      firstName: String,
      lastName: String
    },
    methods: {
      developerName() {
        let developer = new Developer(this.firstName, this.lastName);
        return developer.fullName;
      }
    }
}
</script>

<template>
  <p>Hello {{ developerName() }}. Now You are a Vue Developer!.</p>
</template>

<style scoped>

</style>