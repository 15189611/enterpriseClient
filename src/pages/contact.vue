<template>
  <div class="contact-parent">
    <div class="contact-content-parent">
      <div >联系我们</div>
    </div>
    
  </div>
  
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {

    };
  },
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contact-parent {
  background: #292929;
  min-height: 750px;
}
.contact-content-parent{
  margin-top: 20px;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  max-width: 1200px;
  margin-bottom: 20px;
  min-height: 750px;
  color: white;
}

</style>
