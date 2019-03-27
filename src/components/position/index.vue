<template>
  <div class="position-box">

    <div class="position-search">
      <span class="icons i-search"></span>
      <input type="text" placeholder="搜索职位、部门名称" v-model="searchString" />
    </div>

    <div class="position-data">
      <div class="position-item" :class="active == key ? 'active':''"  v-for="(v, key) in filteredPositions" :key="key" @click="toggleClass(key,v.id)" :data-id="v.id" >
        <h4 class="title" v-html="v.title.replace(searchString,'<span style=color:red;>'+searchString+'</span>')">{{v.title}}</h4>
        <div class="department" v-html="v.department.replace(searchString,'<span style=color:red;>'+searchString+'</span>')">{{v.department}}</div>
        <span class="unread" v-if="v.new > 0">{{v.new}}</span>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'position',
  data () {
    return {
      searchString: '',
      positions: [
        {'title':'C++引擎开发中级工程师','department':'线下事业群华北分公司北京','new':33,'id':'000a01xpa1'},
        {'title':'JAVA 工程师','department':'科技总部','new':99,'id':'000a01xpa2'},
        {'title':'销售主管','department':'集团运营中心销售1部','new':0,'id':'000a01xpa3'},
        {'title':'C++引擎开发中级工程师','department':'线下事业群华北分公司北京','new':33,'id':'000a01xpa1'},
        {'title':'JAVA 工程师','department':'科技总部','new':99,'id':'000a01xpa2'},
        {'title':'销售主管','department':'集团运营中心销售1部','new':0,'id':'000a01xpa3'},
      ],
      active: -1
    }
  },
  created(){
    // this.searchData()
  },
  methods: {
    toggleClass: function (key,id) {
      if(this.active != key){
        this.active = key
      }else{
        this.active = -1
      }
      this.$router.push({path:'/list/'+id});
    }
  },
  computed: {
    filteredPositions: function () {
      var positions_array = this.positions,
        searchString = this.searchString;

      if(!searchString){
        return positions_array;
      }

      searchString = searchString.trim().toLowerCase();

      positions_array = positions_array.filter(function(item){
        if(JSON.stringify(item).toLowerCase().indexOf(searchString) !== -1){
          return item;
        }
      })

      // Return an array with the filtered data.
      return positions_array;;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet" type="text/css" scoped>
  .position-box{
    background: #f0f0f0;
  }
  .position-search{
    padding:10px 15px;
    display: flex;
  }
  .position-search input{
    padding:10px;
    border:solid 1px #dfdfdf;
    width:100%;
    font-size:16px;
    outline: none;
  }

  .position-data{
    width:300px;
    background:#fafafa;
    text-align: left;
    margin:0 15px;
  }
  .position-item{
    border-bottom:solid 1px #ccc;
    padding:10px;
    position:relative;
    transition: all .3s ease-in-out;
  }
  .position-item:last-child{
    border:0 none;
  }
  .position-item .title{
    font-size:14px;
    font-weight:bold;
    color:#000;
  }
  .position-item .department{
    font-size:12px;
    color:#444;
  }
  .position-item .unread{
    background:#ccc;
    position:absolute;
    right:0;
    top:0;
    margin:10px;
    color:#fff;
    min-width:2em;
    border-radius:50px;
    text-align: center;
    font-size:12px;
    transition: all .3s ease-in-out;
  }

  .position-item.active{
    background: #e7eff3;
  }
  .position-item.active .unread{
    background:#0a8fbd;
  }

</style>
