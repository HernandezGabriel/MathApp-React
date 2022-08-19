import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Logic from './Logic';
import './styles.css';

class Main extends Component {
    render() {
        return(
        <>
        <Header />
        <Logic />
        <Footer />
        </>
        )
    }
}
 export default Main;