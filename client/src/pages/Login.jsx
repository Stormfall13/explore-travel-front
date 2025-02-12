import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { loginSuccess } from "../store/slices/authSlice";

const API_URL = process.env.REACT_APP_API_URL;

const Login = () => {
    const [form, setForm] = useState({ email: "", password: "" });
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${API_URL}/api/auth/login`, form);
            // console.log("Ответ сервера:", res.data); // 🔍 Лог для проверки
            dispatch(loginSuccess(res.data));
            navigate("/");
        } catch (error) {
            console.error("Ошибка входа:", error.response?.data?.message);
        }
    };

    console.log(user);
    if(user){
        window.location.reload();
    }
    

    return (
        <div className="auth-container">
            <h2>Вход</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
                <input type="password" name="password" placeholder="Пароль" value={form.password} onChange={handleChange} required />
                <button type="submit">Войти</button>
            </form>
            <p>Нет аккаунта? <a href="/register">Зарегистрироваться</a></p>
        </div>
    );
};

export default Login;
