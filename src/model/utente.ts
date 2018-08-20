class Utente { 
    nome: String; 
    cognome: String; 
     
    constructor(nome: String, cognome: String) { 
        this.nome = nome; 
        this.cognome = cognome; 
    }

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
} 