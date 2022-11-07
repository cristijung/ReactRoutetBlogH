import styles from './Opiniao.module.css';
import React, { useState } from 'react';
import * as yup from 'yup';


function Opiniao () {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    });

    //Aqui recebe os dados do form
    const valueInput = e => setUser({ ...user, [e.target.name]: e.target.value });

    //Neste local podemos enviar os dados para o back end ou mesmo
    // para um srv fake jason
    const addUser = async e => {
        e.preventDefault();  //evento padrão para não ter q recarregar todo o form

        if (!(await validate())) return;
        const saveDataForm = true;

        if (saveDataForm) {
            setStatus({
                type: 'success',
                mensagem: "Usuário cadastrado com sucesso!!"
            });
            setUser({
                name: '',
                email: '',
                password:''
            });
        } else {
            setStatus({
                type: 'error',
                mensagem: "Erro! Usuário não foi cadastrado!"
            });
        }
    }
    //schema assíncrono para fazer a validação dos inputs
    async function validate(){
        let schema = yup.object().shape({
          password: yup.string("Erro: Necessário preencher o campo senha!")
            .required("Erro: Necessário preencher o campo senha!")
            .min(6,"Erro: A senha deve ter no mínimo 6 caracteres!"),
          
            email: yup.string("Erro: Necessário preencher o campo e-mail!")
            .required("Erro: Necessário preencher o campo e-mail!")
            .email("Erro: Necessário preencher o campo com e-mail válido!"),
          
            name: yup.string("Erro: Necessário preencher o campo nome!")
            .required("Erro: Necessário preencher o campo nome!")
        });
    
        try{
          await schema.validate(user);
          return true;
        }catch (err) {
          setStatus({
            type: 'error',
            mensagem: err.errors
          });
          return false;
        }
      }




    return(
        <>  

        <h1> Formulário de Cadastro</h1>

        {status.type === 'success' ? <p style={{ color: "green" }}>{status.mensagem}</p> : ""}
        {status.type === 'error' ? <p style={{ color: "#ff0000" }}>{status.mensagem}</p> : ""}
        
        <div className={styles.formu}>
        <form onSubmit={addUser}>
            <div className={styles.field}>
                <label className={styles.label}>Nome*: </label>
                <input type="text" name="name" placeholder="Nome do usuário" onChange={valueInput} value={user.name}  />
            </div>
            <div className={styles.field}>
                <label className={styles.label}>E-mail*: </label>
                <input type="email" name="email" placeholder="Digite um email válido" onChange={valueInput}  value={user.email} />
            </div>
            <div className={styles.field}>
                <label className={styles.label}>Senha*: </label>
                <input type="password" name="password" placeholder="Senha para poder cadastrar" autoComplete="on" onChange={valueInput} value={user.password} />
            </div>
        * Campo obrigatório<br /><br />

        <button type="submit">Cadastrar</button>
      </form>
      </div>

        </>
    );
}

export default Opiniao;