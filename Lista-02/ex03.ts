
function filterProperties(obj, minValue) {
    const newObj = {};
    for (const prop in obj) {
      if (obj.hasOwnProperty(prop) && obj[prop] > minValue) {
        newObj[prop] = obj[prop];
      }
    }
    return newObj;
  }

  const produto = {
    preco: 10,
    peso: 5,
    altura: 20,
    largura: 15
  };
  
  const newObj = filterProperties(produto, 10);
  console.log(newObj); // { altura: 20, largura: 15 }