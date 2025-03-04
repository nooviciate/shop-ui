import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useLoginStore = defineStore('logState',()=>{
    let User = ref({
        Name:'user',
        Password:'user',
        UID:'',
        Type:'用户',
        LoginState:false,
        UserData: {
            avaURL:'',
        },
    });
    // let Admin = ref({
    //     name:'admin',
    //     password:'admin',
    //     Type:'管理员',
    //     UID:'',
    //     AdminData:{
    //         avaURL:'',
    //     }
    // })
    // return {User,Admin};
    return {User};
})