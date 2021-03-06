import authService from '../../../core/service/AuthService.js'; 
import loginService from '../../../core/service/LoginService.js';

export default  {
    async login(req, res) {
        const {username, password} = req.body;
        const user = await loginService.loginUSer(username, password);
        if (user) {
            const token  = authService.token(user.user_id);
            return res.json({auth: true, token});
        }
        res.status(401).end();
    }
}