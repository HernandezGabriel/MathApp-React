import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Math from './Math';
import './styles.css';

class Main extends Component {
    render() {
        return(
        <>
        <Header />
        <Math />       
        <Footer />
        </>
        )
    }
}
 export default Main;