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
    if (req.get('accept') === 'application/json') {
        res.json({ tema: 'Desenvolvimento de Software' });
    } else {
        res.send('<h1>Desenvolvimento de Software</h1><p>Aprendendo a criar APIs com Node.js</p>');
    }
});
app.post('/tema', (req, res) => {
    const  novoTema  = req.body;
console.log('novo Tema recebido:', novoTema);
res.status(201).json({id: 3, nome: novoTema.nome});
});
app.put('/tema/:id', (req, res) => {
    const { id } = req.params;
    const temaAtualizado = req.body;
    console.log(`Tema com ID ${id} atualizado para:`, temaAtualizado);
    res.json({ id: parseInt(id), nome: temaAtualizado.nome });
});
app.delete('/tema/:id', (req, res) => {
    const { id } = req.params;
    console.log(`Tema com ID ${id} deletado`);
    res.json({ message: `Tema com ID ${id} deletado com sucesso` });
}); 
app.get('/tema/:id/categorias', (req, res) => {
    const temaId = req.params.id;
    res.json({ id: temaId, nome: 'Desenvolvimento de Software', categorias: ['Backend', 'Frontend', 'DevOps'] });
}); 
app.post('/tema/:id/categorias', (req, res) => {
    const temaId = req.params.id;
    const novaCategoria = req.body;
    console.log(`Nova categoria para o tema ID ${temaId}:`, novaCategoria);
    res.status(201).json({ id: 1, nome: novaCategoria.nome });
});
app.put('/tema/:id/categorias/:catId', (req, res) => {
    const { id, catId } = req.params;
    const categoriaAtualizada = req.body;
    console.log(`Categoria ID ${catId} do tema ID ${id} atualizada para:`, categoriaAtualizada);
    res.json({ id: parseInt(catId), nome: categoriaAtualizada.nome });
});
app.delete('/tema/:id/categorias/:catId', (req, res) => {
    const { id, catId } = req.params;
    console.log(`Categoria ID ${catId} do tema ID ${id} deletada`);
    res.json({ message: `Categoria ID ${catId} do tema ID ${id} deletada com sucesso` });
}); 
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
