const alphabets = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U'];

export const getRandomAlphabet = () =>{
    const index = Math.ceil(Math.random()*20)
    return alphabets[index]
  }
  