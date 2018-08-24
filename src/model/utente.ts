export class Utente { 
    id: number; 
    nome: String; 
    cognome: String; 
    email: String; 
    tipo_utente: String; 
     
    constructor(id: number, nome: String, cognome: String, email: String, tipo_utente: String) { 
        this.id = id; 
        this.nome = nome; 
        this.cognome = cognome; 
        this.email = email; 
        this.tipo_utente = tipo_utente; 
    }

/*
    getNome(){
        return this.nome;
    }
 
    getCognome(){
        return this.nome;
    }

    setNome(nome: String){
        this.nome = nome;
    }

    setCognome(cognome: String){
        this.cognome = cognome;
    }

    visualizzaNomeCognome() {
        return this.nome + ' ' + this.cognome; 
    } 
    */
} 