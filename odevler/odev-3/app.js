const app = Vue.createApp({
    data() {
        return {
            // fruitList: ["Elma", "Armut", "Kiraz"],
            fruitList: [{ id : 1, text : "Elma",check:false}, { id : 2, text : "Çay",check:false}, { id : 3, text : "Karpuz",check:false}],
            todoValue: null,
            arr:[1,2,3,4,5,6,7,8]
        }
    },
    methods: {
        checkBoxClicked(fruit){
          const index = this.fruitList.findIndex(x => x === fruit);
            this.fruitList[index].check=!(this.fruitList[index].check);
            this.itemClasses;
        },
        addNewTodo() {
            this.fruitList.push({
                text : this.todoValue,
                id : new Date().getTime()
            });
            this.todoValue = null;
        },
        press(e){
            console.log(e)
            if(e.keyCode === 13) this.addNewTodo();
        },
        deleteItem(item) {
            console.log(item);
             this.fruitList = this.fruitList.filter(fruit => fruit !== item)
            // this.fruitList.splice(itemIndex, 1);
        },
        itemClasses(fruit){
            if(fruit.check === true){
            return {
                green_line : true,
                red_line: false
            }}
            else{
                return {
                green_line:false,
                red_line :true
                }
            }
        }
    },
    computed : {
        totalCount(){
            greenCount=0;
            redCount=0;
            this.fruitList.forEach(element => {
                if(element.check===true){
                    greenCount++;
                }else{
                    redCount++;
                }
            });
            return `${greenCount} işaretlenmiş <br>  ${redCount}  işaretlenmemiş kayıt <br> bulunmaktadır`
        },
        
    }
})
app.mount("#app")
