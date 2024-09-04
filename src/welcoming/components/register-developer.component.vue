<script>
/**
 * @name register-developer
 * @description
 * This component is responsible for registering a new developer.
 * It emits an event to the parent component when the developer is registered.
 * @emits developer-registered
 */

export default {
  name: "register-developer",
  data() {
    return {
      firstName: '',
      lastName: ''
    }
  },
  methods: {
    /**
     * @method onSubmit
     * @description
     * This method is called when the form is submitted.
     * It emits the developer-registered event with the developer object.
     */
    onSubmit() {
      console.log("Registering developer");
      this.$emit("developer-registered", {
        firstName: this.firstName,
        lastName: this.lastName
      });
    }
  }
}
</script>

<template>
  <div>
    <h2>New Developer</h2>
    <div>
      <form @submit.prevent="onSubmit">
        <div>
          <label for="firstName">First Name</label>
          <input type="text" id="firstName" v-model="firstName" required/>
        </div>
        <div>
          <label for="lastName">Last Name</label>
          <input type="text" id="lastName" v-model="lastName" required/>
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>