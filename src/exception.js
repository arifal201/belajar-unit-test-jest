export class MyException extends Error {

}

export const callme = (name) => {
  if (name === 'arifal') {
    throw new MyException("ups my expection happends");
  }else{
    return "ok";
  }
}