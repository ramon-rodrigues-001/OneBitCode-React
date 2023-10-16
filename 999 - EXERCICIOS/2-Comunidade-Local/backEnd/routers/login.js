const User = require('../models/user.js')
const express = require('express');
const router = express.Router()


router.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
  
    const user = await User.findOne({ email, password });
  
    if (user) {
      res.json({ success: true, message: 'Login bem-sucedido' });
    } else {
      res.status(401).json({ success: false, message: 'Credenciais inválidas' });
    }
});

  
module.exports = router