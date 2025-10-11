const expres = require('express');
const app = expres();
app.use(expres.json());
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
app.get('/autor', (req, res) => {
    if (req.get('accept') === 'application/json') {
        res.json({ autor: 'Jose Gilmar Oliveira de Sa' });
    } else {
        res.send('<h1>Jose Gilmar Oliveira de Sa</h1><p>Desenvolvedor de Software</p>');
    }
});
app.get('/tema', (req, res) => {
        res.json([{ 'id': 1, 'nome': 'Tecnologia' }, { 'id': 2, 'nome': 'Programacao' }]);
});
app.post('/tema', (req, res) => {
    const  novoTema  = req.body;
console.log('novo Tema recebido:', novoTema);
res.status(201).json({id: 3, nome: novoTema.nome});
});
app.put('/tema/:id', (req, res) => {
    const id = req.params.id;
    const temaAtualizado = req.body;
    console.log(`atualizando o tema com ID ${id}:`, temaAtualizado);
    res.json({id: parseInt(id), nome: temaAtualizado.nome});
});
app.delete('/tema/:id', (req, res) => {
    const id = req.params.id;
    console.log(`excluindo o tema com ID ${id}`);
    res.json({message: `Tema com ID ${id} excluido com sucesso`});
});
app.get('/tema/:id/categorias', (req, res) => {
    const temaId = req.params.id;
    console.log(`Listando categorias do tema com ID ${temaId}`);
    res.json([{ id: 1, nome: 'Categoria 1' }, { id: 2, nome: 'Categoria 2' }]);
});
app.post('/tema/:id/categorias', (req, res) => {
    const temaId = req.params.id;
    const novaCategoria = req.body;
    console.log(`Adicionando nova categoria ao tema com ID ${temaId}:`, novaCategoria);
    res.status(201).json({ id: 3, nome: novaCategoria.nome });
});
app.put('/tema/:id/categorias/:catId', (req, res) => {
    const temaId = req.params.id;
    const catId = req.params.catId;
    const categoriaAtualizada = req.body;
    console.log(`Atualizando a categoria com ID ${catId} do tema com ID ${temaId}:`, categoriaAtualizada);
    res.json({id: parseInt(catId), nome: categoriaAtualizada.nome});
});
app.delete('/tema/:id/categorias/:catId', (req, res) => {
    const temaId = req.params.id;
    const catId = req.params.catId;
    console.log(`Excluindo a categoria com ID ${catId} do tema com ID ${temaId}`);
    res.json({message: `Categoria com ID ${catId} do tema com ID ${temaId} excluida com sucesso`});
// servidor rodando na porta 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor de gilmar está rodando em http://localhost:${port}`);
});});
