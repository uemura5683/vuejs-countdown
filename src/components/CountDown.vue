<template>
  <div class="hello">
    <span v-if="realtime>0">
    {{day}}<span>days</span>{{hour}}:{{min}}:{{sec}}
    </span>
    <span v-else>
    DEATH
    </span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props : {
    endDate : {
      type : Date,
      default: function(){
        return new Date( 2022,6,15,0,0,0 );
      }
    },
    negative : {
      type : Boolean,
      default : false
    }
  },
  data: function(){
    return{
      now : new Date(),
      timer : null
    }
  },
  computed:{
    realtime: function(){
      let r = Math.trunc((this.endDate - this.now) / 1000);
      return r;
    },
    day: function(){
      let d = Math.trunc((this.endDate - this.now) / 1000 / 3600 / 24);
      return d > 9 ? d :'0' + d;
    },
    hour: function(){
      let h = Math.trunc((this.endDate - this.now) / 1000 / 3600) % 24;
      return h > 9 ? h :'0' + h;
    },
    min: function(){
      let m = Math.trunc((this.endDate - this.now) / 1000 / 60) % 60;
      return m > 9 ? m :'0' + m;
    },
    sec: function(){
      let s = Math.trunc((this.endDate - this.now) / 1000 ) % 60;
      return s > 9 ? s :'0' + s;
    }
  },
  watch : {
    endDate : {
      immediate : true,
      handler: function(newVal) {
        if(this.timer){
          clearInterval(this.timer)
        }
        this.timer = setInterval(()=>{
          this.now = new Date()
          if(this.negative)
            return
          if(this.now > newVal){
            this.now = newVal
            this.$emit('endTime')
            clearInterval(this.timer)
          }
        }, 1000)
      }
    }
  },
  beforeDestroy: function(){
    clearInterval(this.timer)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
