<script>
/**
 * @name app
 * @description
 * This component is the main component of the application.
 * It is responsible for managing the developer count and welcoming developers.
 * It listens to the developer-registered event emitted by the RegisterDeveloper component.
 * It updates the developer count and welcomes the developer.
 */
import RegisterDeveloper  from "@/welcoming/components/register-developer.component.vue";
import Welcome            from "@/welcoming/components/welcome.component.vue";
import ShowDeveloperCount from "@/welcoming/components/show-developer-count.component.vue";

export default {
  name: "app",
  components: {ShowDeveloperCount, Welcome, RegisterDeveloper},

  data() {
    return {
      firstName: '',
      lastName: '',
      developerCount: 0
    }
  },
  methods: {
    /**
     * @method onDeveloperRegistered
     * @description
     * This method is called when a developer is registered.
     * It updates the developer count and welcomes the developer.
     * @param developer {Object} - The developer object.
     */
    onDeveloperRegistered(developer) {
      this.firstName = developer.firstName;
      this.lastName = developer.lastName;
      console.log("Developer registered: ", developer);
      this.updateDeveloperCount(developer);
    },

    /**
     * @method updateDeveloperCount
     * @description
     * This method updates the developer count.
     * It increments the developer count if the developer is not unknown.
     * @param developer {Object} - The developer object.
     */
    updateDeveloperCount(developer) {
      if (developer.fullName !== "Unknown")
        this.developerCount++;
    }
  }

}</script>

<template>
  <h1>Hello Vue Developer Application</h1>
  <register-developer v-on:developer-registered="onDeveloperRegistered" />
  <welcome :first-name="firstName" :last-name="lastName" />
  <show-developer-count :developer-count="developerCount" />

</template>

<style>
</style>
