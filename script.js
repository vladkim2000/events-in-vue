Vue.createApp({
    data(){
        return {
            outputValue: '', 
            outputValueEnter: ''
        }
    }, 
    methods:{
        submit(){
            alert('Submitted!');
        },
        output(event){
            this.outputValue = event.target.value; 
        },
        outputEnter(event){
            this.outputValueEnter = event.target.value; 
        }
    }
}).mount('#events')