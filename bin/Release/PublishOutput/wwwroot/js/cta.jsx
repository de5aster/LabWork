class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleEfreet: false,
            visbleGaia: false,
            visibleMidas: false,
            visiblePoseidon: false,
            visibleHades: false,
            visibleZeus: false
        }
    }
    visibleEfreetClick = (e) => {
        e.preventDefault();
        this.setState({
            visibleEfreet: !this.state.visibleEfreet
        })
    }
    visibleGaiaClick = (e) => {
        e.preventDefault();
        this.setState({
            visibleGaia: !this.state.visibleGaia
        })
    }
    visibleMidasClick = (e) => {
        e.preventDefault();
        this.setState({
            visibleMidas: !this.state.visibleMidas
        })
    }
    visibleHadesClick = (e) => {
        e.preventDefault();
        this.setState({
            visibleHades: !this.state.visibleHades
        })
    }
    visiblePoseidonClick = (e) => {
        e.preventDefault();
        this.setState({
            visiblePoseidon: !this.state.visiblePoseidon
        })
    }
    visibleZeusClick = (e) => {
        e.preventDefault();
        this.setState({
            visibleZeus: !this.state.visibleZeus
        })
    }
    render() {       
        return (
            <div className="content" style={{ marginTop: "50px" }}>
                <div className="game_set">
                    <a href="#" className="visible_game_set" onClick={this.visibleEfreetClick}><h2>Efreet set</h2></a>
                    <div className={"img_set" + (this.state.visibleEfreet ? '_none' : '')}>
                        <img src="images/cta/Efreet_set/efreet_armor.jpg" className="cta_img"></img>
                        <img src="images/cta/Efreet_set/efreet_shield.jpg" className="cta_img"></img>
                        <img src="images/cta/Efreet_set/efreet_weapon.jpg" className="cta_img"></img>
                    </div>
                    <a href="#" className="visible_game_set" onClick={this.visibleGaiaClick}><h2>Gaia set</h2></a>
                    <div className={"img_set" + (this.state.visibleGaia ? '_none' : '')}>
                        <img src="images/cta/Gaia_set/gaia_armor.jpg" className="cta_img"></img>
                        <img src="images/cta/Gaia_set/gaia_crown.jpg" className="cta_img"></img>
                        <img src="images/cta/Gaia_set/gaia_weapon.jpg" className="cta_img"></img>
                    </div>
                    <a href="#" className="visible_game_set" onClick={this.visibleMidasClick}><h2>Midas set</h2></a>
                    <div className={"img_set" + (this.state.visibleMidas ? '_none' : '')}>
                        <img src="images/cta/Midas_set/midas_arm.jpg" className="cta_img"></img>
                        <img src="images/cta/Midas_set/midas_crown.jpg" className="cta_img"></img>
                        <img src="images/cta/Midas_set/midas_weapon.jpg" className="cta_img"></img>
                    </div>
                    <a href="#" className="visible_game_set" onClick={this.visibleHadesClick}><h2>Hades set</h2></a>
                    <div className={"img_set" + (this.state.visibleHades ? '_none' : '')}>
                        <img src="images/cta/Hades_set/hades_accessory.jpg" className="cta_img"></img>
                        <img src="images/cta/Hades_set/hades_arm.jpg" className="cta_img"></img>
                        <img src="images/cta/Hades_set/hades_weapon.jpg" className="cta_img"></img>
                    </div>
                    <a href="#" className="visible_game_set" onClick={this.visiblePoseidonClick}><h2>Poseidon set</h2></a>
                    <div className={"img_set" + (this.state.visiblePoseidon ? '_none' : '')}>
                        <img src="images/cta/Poseidon_set/poseidon_armor.jpg" className="cta_img"></img>
                        <img src="images/cta/Poseidon_set/poseidon_crown.jpg" className="cta_img"></img>
                        <img src="images/cta/Poseidon_set/poseidon_weapon.jpg" className="cta_img"></img>
                    </div>
                    <a href="#" className="visible_game_set" onClick={this.visibleZeusClick}><h2>Zeus set</h2></a>
                    <div className={"img_set" + (this.state.visibleZeus ? '_none' : '')}>
                        <img src="images/cta/Zeus_set/zeus_armor.jpg" className="cta_img"></img>
                        <img src="images/cta/Zeus_set/zeus_shield.jpg" className="cta_img"></img>
                        <img src="images/cta/Zeus_set/zeus_weapon.jpg" className="cta_img"></img>
                    </div>
                </div>
            </div>
        );
    }
}
var Footer = React.createClass({
    render: function () {
        return (
            <div className="footer-main">
                <footer>
                    <p>&#169; Copyright Kalistratov Anton</p>

                </footer>
            </div>
        )
    }
});

class ScrollButton extends React.Component {
    constructor() {
        super();
        this.state = {
            intervalId: 0
        };
    }

    scrollStep() {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }

    scrollToTop() {
        let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
        this.setState({ intervalId: intervalId });
    }

    render() {
        return <button title='Back to top' className='scroll'
            onClick={() => { this.scrollToTop(); }}>
            <span>Up</span>
        </button>;
    }
} 
var Crash = React.createClass({
    render: function () {
        return (
            <div className="index-page">
                <Content />
                <ScrollButton scrollStepInPx="50" delayInMs="16.66" />
                <Footer />
            </div>
        );
    }
});

ReactDOM.render(
    <Crash />,
    document.getElementById('react-content')
);