const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Usuario = require("../models/Usuario");

class AuthController {

    async cadastro(req, res) {
        const { nome, email, telefone, senha, tipo_usuario, matricula, codigo_professor, codigo_funcionario } = req.body;

        try {
            // Verifica se usuário já existe
            const existingUser = await Usuario.findOne({ where: { email } });
            if (existingUser) {
                return res.status(400).json({ error: 'Email já cadastrado.' });
            }

            // Hash da senha
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(senha, salt);

            // Criação do usuário
            await Usuario.create({
                nome,
                email,
                telefone: telefone || null,
                senha: hashedPassword,
                tipo_usuario,
                matricula: matricula || null,
                codigo_professor: codigo_professor || null,
                codigo_funcionario: codigo_funcionario || null
            });

            res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao cadastrar usuário.' });
        }
    }

    async login(req, res) {
        const { email, senha } = req.body;

        try {
            const user = await Usuario.findOne({ where: { email } });
            if (!user) {
                return res.status(404).json({ error: 'Usuário não encontrado.' });
            }

            const validPassword = await bcrypt.compare(senha, user.senha);
            if (!validPassword) {
                return res.status(401).json({ error: 'Senha incorreta.' });
            }

            // Gera o token JWT
            const token = jwt.sign(
                { id: user.id, tipo_usuario: user.tipo_usuario },
                process.env.JWT_SECRET,
                { expiresIn: '1h' }
            );

            res.json({ token });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao realizar login.' });
        }
    }

    async perfil(req, res) {
        try {
            const user = await Usuario.findByPk(req.user.id, {
                attributes: ['id', 'nome', 'email', 'telefone', 'tipo_usuario', 'matricula', 'codigo_professor', 'codigo_funcionario']
            });

            if (!user) {
                return res.status(404).json({ error: 'Usuário não encontrado.' });
            }

            res.json(user);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao buscar perfil.' });
        }
    }

}

module.exports = new AuthController();
