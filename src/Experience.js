import React, { Component } from 'react';
import './Experience.css';
import './content/content.json';

class Experience extends Component {
  render() {
    return (
    <div className="section">
      <div className="head-section">
        <h2 className="head-title">expérience professionnelle</h2>
        <hr/>
      </div>
      <div className="content-section">
        <div className="project-container">
          <div className="project-info">
            <div className="project-date">12.2017 - Actuel</div>
            <div className="project-location">Zürich - Bern</div>
          </div>
          <div className="project-view">
            <div className="project-name">Artificial Intelligence Demo Experience</div>
            <div className="project-decription">
              <ul>
                <li>Développement d'application web pour la création de démos
                d'intelligence artificielle</li>
                <li>Communication avec les API REST d'intelligence artificielle</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="project-container">
            <div className="project-info">
              <div className="project-date">05.2017 - 12.2017</div>
              <div className="project-location">Ostermundigen</div>
            </div>
            <div className="project-view">
              <div className="project-name">Développeur d'interface web interactive, Apps Team Enterprise</div>
              <div className="project-decription">
                <ul>
                  <li>Création de designs d'applications web</li>
                  <li>Programmation d'applications (Frontend developement)</li>
                </ul>
              </div>
            </div>
        </div>

        <div className="project-container">
            <div className="project-info">
              <div className="project-date">05.2016 - 05.2017</div>
              <div className="project-location">Villars-sur-Glâne <br/> Ittigen / Berne</div>
            </div>
            <div className="project-view">
              <div className="project-name">Projet IT Distribution de software pour les clients</div>
              <div className="project-decription">
                <ul>
                  <li>Distribution avec System Center Configuration Manager</li>
                  <li>Résolution de problèmes d'installation de logiciels</li>
                </ul>
              </div>
            </div>
        </div>

        <div className="project-container">
            <div className="project-info">
              <div className="project-date">11.2015 - 05.2016</div>
              <div className="project-location">Düdingen</div>
            </div>
            <div className="project-view">
              <div className="project-name">Junior Swisscom Shop, projet linguistique en allemand</div>
              <div className="project-decription">
                <ul>
                  <li>Service à la clientèle et service technique</li>
                </ul>
              </div>
            </div>
        </div>

        <div className="project-container">
            <div className="project-info">
              <div className="project-date">08.2015 - 11.2015</div>
              <div className="project-location">Villars-sur-Glâne</div>
            </div>
            <div className="project-view">
              <div className="project-name">Projet au Service IT</div>
              <div className="project-decription">
                <ul>
                  <li>Support technique (hardware) auprès des clients</li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Experience;