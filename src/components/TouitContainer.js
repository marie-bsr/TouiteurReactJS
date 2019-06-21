import React from 'react';
import { httpGetMessages } from '../api/TouitAPI';
import Touit from './Touit';

class TouitContainer extends React.Component {


    constructor(props) {  //props : parametre d'un composant, ne change pas  alors que les state change
        super(props);
        this.state = { //on initialise un tableau vide
            tableau: [] // a l'intérieur d'un objet, clé:valeur et non clé=valeur
        };

    }

    createTouit(touit, index) { //touit = un objet contenant id, name, message ,etc. 
        return <Touit key={index} name={touit.name} message={touit.message}/> // pour plus court, on peut écrire {...touit} à la place de name={touit.name} message={touit.message}
    }

    render() {


        //il faut un div dans return
        return ( // utiliser render return pour affichage uniquement. 
            <div className="container">
                {this.state.tableau.map(this.createTouit)}
            </div> //pour chaque index du tableau, on lui injecte toutes les proprietes du touit
        );
        
    }

    componentDidMount() { //se declanche au montage du composant (1er lancement)
        this.interval = setInterval(() =>{
        httpGetMessages(0, (data) => { this.setState({ tableau: data.messages }) }) //data= l'ensemble des touits
        // setState modifie le state de tableau. les data sont stockees dans un tableau
    })

}

componentWillUnmount(){
    clearInterval(this.interval);
}

}

//setInterval pour mise à jour de la page
//props, state ou p?
//utiliser le ts


export default TouitContainer;

// pas besoin d'accéder aux messages en dehors du composant touitcontainer. pas besoin de mettre les messages en props
// impact des messages sur le rendu donc on met les messages dans le state
// 1ere étape du montage: le constructeur. on initialise le state du composant avec un tableau vide.
//methode render qui récupere les messages et les affiche sous forme de liste
// componentDidMount: à mettre en place si on veut avoir un controle sur ce qui se passe à la fin du 1er rendu. c'est ici qu'on met appel API. on peut lancer 1ere requete ajax sans crainte de bloquer utilisateur.
//setState pour mettre à jour le state qu'on  défini au début.
// comme setState est mis à jour, render est ré appelé

//dans http://touiteur.cefim-formation.org/list on voit qu'on a un tableau d'objets. chaque objet est entre {}. on appelle un objet touit ici.

// entre {} : jsx
