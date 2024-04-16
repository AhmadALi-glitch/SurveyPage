
class Survies extends Page {

    name = "survies"
    path = "/survies"
    content = document.createElement("div")
    
    loading = true
    categories = ["Health", "Education", "Life Style"]
    categoriesContainer = document.createElement("div")


    constructor() {
        super()

        this.content.classList.add(".surveis-wrapper")
        
        this.categoriesContainer.classList.add(".surveis-categories-list")
        this.categories.forEach(c => {
            let el = document.createElement("div")
            el.textContent = c;
            this.categoriesContainer.appendChild(
                el
            )
        });

        this.content.appendChild(this.categoriesContainer)
    }

}

const surviesPage = new Survies()
