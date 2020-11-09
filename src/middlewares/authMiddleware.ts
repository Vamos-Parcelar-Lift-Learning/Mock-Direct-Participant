// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const authMiddleware = (req, res, next) => {
  console.log(`Nova requisição recebida: ${req.method}`);
  const token = process.env.TOKEN;
  if (token && req.headers.authorization === token) {
    next();
  } else {
    res.json({ erro: 'Token não encontrado!' });
  }
};

export default authMiddleware;
