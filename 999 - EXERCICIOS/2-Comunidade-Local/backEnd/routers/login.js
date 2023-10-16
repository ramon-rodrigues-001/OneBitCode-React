app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
  
    // Verifique se o usuário com o email fornecido existe no banco de dados
    const user = await User.findOne({ email, password });
  
    if (user) {
      // Autenticação bem-sucedida
      res.json({ success: true, message: 'Login bem-sucedido' });
    } else {
      // Autenticação falhou
      res.status(401).json({ success: false, message: 'Credenciais inválidas' });
    }
  });