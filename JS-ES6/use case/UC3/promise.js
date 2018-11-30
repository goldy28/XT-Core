const getUser=()=>{
    let mockUser ={
        name:'admin'
    };
    return new Promise((resolve,reject)=>{
        if(mockUser){
            resolve(mockUser);
        }else{
            reject({
                err:'something went wrong'
            });
        }
    });
};

const getLogin=(mockUser)=>{
    return new Promise((resolve,reject)=>{
        if(mockUser.name==='admin'){
            resolve(mockUser);
        }else{
            reject({
                err:'Not able to login'
            });
        }
    });
};

const getDashBoard=(mockUser)=>{
    return new Promise((resolve,reject)=>{
        if(mockUser.name==='admin'){
            resolve(mockUser);
        }else{
            reject({
                err:'not able to show dashboard'
            });
        }
    });
};

getUser().then(response=>{
    return getLogin(response);
}).then(response=>{
    return getDashBoard(response);
}).then(response=>{
    console.log('Welcome ',response.name);
}).catch(err=>{
    console.log(err);
}).finally(()=>console.log('done'));

