export const sayHelloAsync = (name) => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      if(name){
        resolve(`Hello ${name}`); 
      }else{
        reject("name is empty");
      }
    }, 1000);
  });
};