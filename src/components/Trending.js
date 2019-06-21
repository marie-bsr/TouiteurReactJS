import React from 'react';
import { httpGetTrending } from '../api/TouitAPI';



class Trending extends React.Component {



    constructor(props) {  //props : parametre d'un composant, ne change pas  alors que les state change
        super(props);
        this.state = {
            // a l'intérieur d'un objet, clé:valeur et non clé=valeur
            tableau: []
        };

    }


    componentDidMount() {
        this.interval = setInterval(() => {

            httpGetTrending(data => this.setState({
                tableau: Object.entries(data).sort((a, b) => // a et b sont 2 tableaux (cad paire mot frequence) du gros tableau
                {
                    if (a[1] == b[1]) { //on trie par l'index 1 du tableau cad la frequence
                        return 0;
                    } else {
                        return (a[1] < b[1]) ? 1 : -1;
                    }
                })
            }))

        }, 3000);
    }


    render() {

        return (
            <div>
                {this.state.tableau.map((mot, freq) =>
                    <div className="mot" key={freq}> #{mot[0]}</div>
                )}
            </div>
        );
    }

    //le js est entre accolades
    //this.state.tableau.map est une fonction/methode qui pour chaque mot et frequence renvoie
    //du html dans lequel il y a une part de js
    //pour chaque freq afficher le mot
    //key est un attribut de la div comme className



    componentWillUnmount() {
        clearInterval(this.interval);
    }

}

// a faire idem que touit container
// l'objet de base n'est pas un tableau, on ne peut donc pas le trier, 
//il faut transformer en tableau de tableaux avec index 0=mot, index 1=freq 
// cela permettra d'utiliser les fonction map et sort pour faire un nouveau tableau trié
//exercice de manipulation des données











export default Trending;