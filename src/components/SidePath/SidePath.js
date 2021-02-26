import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './SidePath.css'

class SitePath extends Component {

    static get propTypes() {
        return {
            sitepathParam: PropTypes.object,
            filterParamFunc: PropTypes.func,
        };
    };

    redirectHome = () => {
        window.location.pathname = '/home'
    };

    render() {
        const { filterParamFunc, sitepathParam, filterParam, mainUrlparam } = this.props;
        const activeCategory = filterParam ? {
            id: filterParam.activeCategory.id,
            title: filterParam.activeCategory.title
        } : null;
        const type = sitepathParam ? sitepathParam.type : null;
        const name = sitepathParam ? sitepathParam.name : null;
        return (
            <div className="site-path">
                <ul className="site-path__items">
                    <li className="site-path__item"><Link onClick={() => this.redirectHome()}>Главная</Link></li>

                    {sitepathParam && <li className="site-path__item"><Link to={`/carPage/${sitepathParam.id}`}>{sitepathParam.title}</Link></li>}
                </ul>
            </div>
        );
    };
};
export default SitePath;
