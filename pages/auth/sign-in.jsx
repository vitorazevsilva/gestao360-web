import styles from '@/stylesheets/Auth.module.css';
import Link from 'next/link'
import { useState } from 'react';
export default function Signin() {
    const [form, setForm] = useState({
        email: '',
        password: '',
        rememberMe: false
      })
    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <p className={styles.title}>Entrar em <span className={styles.brand}>Gestão 360</span></p>
                <p className={styles.subtitle}>Podes entrar usado a tua palavra-passe ou atraves de um codigo enviado por email</p>
                <div className={styles.inputContainer}>
                    <p className={styles.label}>Email:</p>
                    <input
                        type='email'
                        autoComplete='email'
                        placeholder='alguem@exemplo.com'
                        className={styles.input}
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <p className={styles.label}>Palavra-passe:</p>
                    <input
                        type='password'
                        autoComplete='current-password'
                        placeholder='***********'
                        className={styles.input}
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                    />
                </div>
                <div className={styles.formFooter}>
                    <label style={{ color: '#495057', marginTop: 13, marginLeft: 5 }}>
                        <input 
                            type="checkbox" 
                            className={styles.checkbox} 
                            checked={form.rememberMe}
                            onChange={(e) => setForm({ ...form, rememberMe: e.target.checked })}
                        /> 
                        Memorizar-me 
                    </label>
                    <Link className={styles.textLink} href={{ pathname: '/auth/recovery' }}>Esqueci-me a Palavra-Passe</Link>
                </div>
                <input type="button" className={styles.button} value="Entrar com Palavra-Passe" />
                <p style={{ display:'flex', justifyContent: 'center' }}>OU</p>
                <input type="button" className={styles.button} value="Entrar sem Palavra-Passe" />
                <p className={styles.textLink} style={{ display:'flex', justifyContent: 'center' }} href={{ pathname: '/auth/signup' }}>Quero começar a usar o Gestão 360</p>
            </div>
        </div>

    )
}
