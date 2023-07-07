import './pginicial.css';




function pginicial() {

    // Array para armazenar os produtos cadastrados
var image;
var nome;
var codigo;
var nota;

function onChange() {  
  var nameInput = document.getElementById('product-name');
  var url = 'https://www.omdbapi.com/?t='+nameInput.value+'&plot=full&apikey=4fcebba3';
  fetch(url)
    .then(response => response.json())
    .then(responseJson => {
      // Cria um objeto de produto
      var product = {
        name: responseJson.Title,
        imagem: responseJson.Poster,
        codigo: responseJson.Year,
        nota:responseJson.imdbRating,
      };
      // Adiciona o produto ao array de estoque
      console.log(responseJson)
      nome=product.name;
      image=product.imagem;
      codigo=product.codigo;
      nota=product.nota;
      document.getElementById('nome').innerHTML=nome;
      document.getElementById('imagem').innerHTML='<img src='+image+'></img>';
      document.getElementById('code').innerHTML=codigo;
      document.getElementById('nota').innerHTML=nota;
    })
    .catch(error => console.error(error));
    

  }
  return (
    <div >
      <h1>busque seu filme</h1>

      <div id="form-container">
        <h2>busque seu filme</h2>

        <input type="text" id="product-name" placeholder="Nome do file" ></input>
        <button type="submit" onClick={onChange}>pesquisar filme</button>

      </div>
      <form>
        <div id="inventory-container">
          <h2>Inventário</h2>
          <table id="inventory-table">
            <thead>
              <tr>
                <th>Nome do Filme:</th>
                <th>Poster:</th>
                <th>Ano de laçamento:</th>
                <th>nota imdb:</th>
              </tr>
            </thead>
            <tbody id="inventory-body">
              <tr>
                <th id="nome"></th>
                <th id="imagem"></th>
                <th id="code"></th>
                <th id="nota"></th>
              </tr>
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );
}
export default pginicial;
