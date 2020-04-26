import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline After Undergraduate</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Google <span>Apr. 2019-present</span></h2>
                        <p>I joined Google because I want to have more hands-on experience with Websites development and the Internet industry. I am response for developing video related search features in Google Search. For example, to help users combat covid19, I implemented to the <a href="https://drive.google.com/file/d/1XvAUMVwrCDc6kKFbcr29bVANKC-vZyHV/view?usp=sharing">Covid19 Data Void feature</a> and <a href="https://drive.google.com/file/d/1tDGox72R8gWESPsNvQxfvtm-zZoCydb8/view?usp=sharing">the Covid19 related search feature</a> in the mobile video mode of Google Search. Besides Covid19 related features, I also work on the <a href="https://drive.google.com/file/d/1UftfdsC9jmKsL5tUbgnth93zqN-J0oBE/view?usp=sharing">time anchor feature</a>, which helps users directly find the video segments they are most interested in. Besides video features, I also implement some of the safety protection for video features, for example the <a href="https://en.wikipedia.org/wiki/Directive_on_Copyright_in_the_Digital_Single_Market">EUCD policy</a> protection for all video features in the Google search page.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Samsung Semiconductor Inc. <span>Feb. 2017-Apri. 2019</span></h2>
                        <p>After grauduation, I joined the Samsung Semiconductor Inc. to develop <a href="https://en.wikipedia.org/wiki/Optical_proximity_correction">Optical Proximity Correction</a> Software using C+++ and CUDA. I applied machine learning technology and high-performance computing skills to recognize various pollygon patterns in millions of images and optimize all the polygon segments in batches. The purpose of this project is to reduce Samsung's dependence on the license of other OPC software companies, like <a href="https://www.asml.com/en">ASML</a>, <a href="https://www.synopsys.com/">Synopsys</a> etc. This project saves Samsung millions of dollars in license fee each year.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Ph.D. Education <span>Sep. 2011-Dec. 2016</span></h2>
                        <p>After obtaining a Master degree in Chemical Engineering from the University of Wisconsin-Madison in 2013, I transferred to the University of Chicago with my Ph.D. advisor <a href="https://pme.uchicago.edu/faculty/juan-de-pablo">Juan J. de Pablo</a> to build the <a href="https://pme.uchicago.edu/">Pritzker School of Molecular Engineering</a>, which is the first engineering school in the university's history. My Ph.D. <a href="https://knowledge.uchicago.edu/record/661/files/Su_uchicago_0330D_13557.pdf">thesis</a> focuses on the extreme scale simulation of nanoparticle/polymer systems by Monte Carlo and Molecule dynamics in order to understand the behavoir of polymer systems from the molecular level.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
