import styles from '@/stylesheets/Auth.module.css';

export default function About() {
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
                    />
                </div>
                <div className={styles.inputContainer}>
                    <p className={styles.label}>Email:</p>
                    <input
                        type='password'
                        autoComplete='current-password'
                        placeholder='***********'
                        className={styles.input}
                    />
                </div>
                <div className={styles.formFooter}>
            <div className={{ flexDirection: 'row' }}>
              {/* <Switch
                className={styles.switch}
                trackColor={{ false: '#767577', true: '#F7A224' }}
                thumbColor={'#ff8329'}
                value={form.rememberMe}
                onValueChange={(value) => setForm({ ...form, rememberMe: value })}
              /> */}
              <p className={{ color: '#495057', marginTop: 14, marginLeft: 5 }}>Memorizar-me</p>
            </div>
            <a className={styles.textLink} href={{ pathname: '/auth/recovery' }}>Esqueci-me a Palavra-Passe</a>
          </div>
            </div>
        </div>

    )
}