app.component('search-pokemon', {
    data() {
        return {
           search_poke : '',
        }
      },
    template: 
    /*html*/
    `
      <div class ="input">
        <p>Rechercher un pokemon </p>
        <input v-model="search_poke" name="search" id="search_poke" placeholder="nom ou id d'un pokemon">
      </div>
    `,
    
    watch : {
        search_poke(search_poke){ //en para le v-model
            this.$emit('tapping-pokemon', search_poke)
            console.log(search_poke)
        }
    }
  })