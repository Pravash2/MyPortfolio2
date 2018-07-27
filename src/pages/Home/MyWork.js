import React, { Component } from 'react';
import '../../styles/pages/home/my-work.css';
import MtSvgLines from 'react-mt-svg-lines';
import $ from 'jquery';
import CanvasWavy from '../../components/CanvasWavy';
import CanvasDrip from '../../components/CanvasDrip';

var svgStrokeWidth = 10;
var svgDrawDelay = 100;

export default class MyWork extends Component {
  constructor(options) {
    super(options);
  }

  componentDidMount() {
    // Anim on scroll
    var els = $('.anim-on-scroll');
    this.scrollableElements = [];
    for (var i = 0; i < els.length; i++) {
      var el = els.eq(i);
      this.scrollableElements.push({ el: el, y: el.offset().top });
    }

    /* Disabled for now... not sure how I feel about it.
    new CanvasWavy({
      canvas: $('.canvas-2'),
      width: container.width(),
      height: container.height()
    });
    */
    /*
    new CanvasDrip({
      canvas: $('.canvas-2'),
      width: container.outerWidth(),
      height: container.outerHeight()
    });
    */
  }
  componentWillReceiveProps(newProps) {
    this.checkScroll(newProps.scrollY);
  }
  checkScroll(scrollY) {
    for (var i = 0; i < this.scrollableElements.length; i++) {
      var scrollable = this.scrollableElements[i];
      if (scrollY + window.innerHeight >= scrollable.y) {
        scrollable.el.addClass('anim');
      } else {
        scrollable.el.removeClass('anim');
      }
    }
  }

  render() {
    return (
      <div className="MyWork">
        <canvas className="canvas-2" />
        {/* Design Philosophy */}
        <div className="section-title anim-on-scroll">Design Philosophy</div>
        <div className="svg-container anim-on-scroll">
          <MtSvgLines
            animate={svgDrawDelay}
            className="svg anim-on-scroll"
            trigger={2000}
            stagger={25}
            duration={3500}
          >
            <svg viewBox="0 0 480.026 480.026">
              <path
                d="M16.013,344.013h-16c0,35.664,36.336,72,72,72v-16C45.317,400.013,16.013,370.709,16.013,344.013z"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth={svgStrokeWidth}
              />
              <path
                d="M460.389,211.222c-5.517-7.841-12.726-14.34-21.096-19.017c17.838-30.407,7.648-69.518-22.759-87.356    c-7.661-4.495-16.177-7.341-25.001-8.356c-3.84-32.183-31.109-56.429-63.52-56.48c-0.24,0-0.472,0.048-0.712,0.048    c-4.353-26.114-29.052-43.754-55.166-39.401c-13.143,2.191-24.781,9.754-32.122,20.873C225.42-0.556,195.684-6.633,173.594,7.96    c-11.229,7.419-18.823,19.216-20.925,32.51c-29.256,3.427-52.405,26.361-56.104,55.584c-0.184,0-0.368-0.04-0.552-0.04    c-35.346-0.008-64.007,28.639-64.015,63.985c-0.002,6.723,1.056,13.405,3.135,19.799c-16.989,11.964-27.103,31.438-27.12,52.216    c0.066,23.155,12.576,44.487,32.752,55.848c-17.819,30.418-7.606,69.523,22.813,87.342c7.638,4.474,16.122,7.311,24.915,8.33    c3.84,32.183,31.109,56.429,63.52,56.48c0.24,0,0.472-0.048,0.712-0.048c4.353,26.114,29.052,43.755,55.166,39.401    c13.143-2.191,24.781-9.754,32.122-20.873c14.593,22.089,44.33,28.166,66.419,13.574c11.229-7.419,18.823-19.216,20.925-32.51    c29.243-3.423,52.388-26.337,56.104-55.544c0.184,0,0.368,0.04,0.552,0.04c35.346,0.008,64.007-28.639,64.015-63.985    c0.002-6.723-1.056-13.405-3.135-19.799C473.762,279.959,480.7,240.091,460.389,211.222z M408.013,296.013v16    c7.655-0.013,15.244-1.412,22.4-4.128c6.791,25.529-8.399,51.73-33.928,58.521c-4.068,1.082-8.262,1.623-12.472,1.607    c-0.168,0-0.336,0-0.512,0c-2.359-19.243-13.362-36.36-29.888-46.496l-8.408,13.6c22.56,13.921,29.564,43.495,15.643,66.055    c-7.401,11.995-19.701,20.13-33.635,22.249c-1.909-10.49-7.257-20.046-15.2-27.16l-10.672,11.92    c13.175,11.779,14.307,32.009,2.528,45.184c-11.779,13.175-32.009,14.307-45.184,2.528c-6.797-6.076-10.679-14.763-10.672-23.88    v-16h-16v16c0,17.673-14.327,32-32,32s-32-14.327-32-32c0-10.072,4.742-19.557,12.8-25.6l-9.6-12.8    c-9.836,7.353-16.447,18.227-18.448,30.344c-0.248,0-0.496,0.056-0.744,0.056c-23.641-0.027-43.743-17.263-47.376-40.624    c3.266-0.426,6.494-1.102,9.656-2.024l-4.56-15.344c-25.41,7.558-52.135-6.914-59.692-32.324s6.914-52.135,32.324-59.692    c4.427-1.317,9.022-1.988,13.641-1.992c7.115-0.019,14.143,1.559,20.568,4.616l6.864-14.448    c-24.494-11.617-53.652-6.526-72.76,12.704c-23.722-11.735-33.439-40.478-21.705-64.199c8.093-16.361,24.779-26.703,43.033-26.673    v-16c-7.655,0.013-15.244,1.412-22.4,4.128c-6.791-25.529,8.399-51.73,33.928-58.521c4.068-1.082,8.262-1.623,12.472-1.607    c0.168,0,0.336,0,0.512,0c2.358,19.243,13.362,36.36,29.888,46.496l8.408-13.6c-22.56-13.921-29.564-43.495-15.643-66.055    c7.401-11.995,19.701-20.13,33.635-22.249c1.909,10.49,7.257,20.046,15.2,27.16l10.672-11.92    c-13.175-11.779-14.307-32.009-2.528-45.184c11.779-13.175,32.009-14.307,45.184-2.528c6.797,6.076,10.679,14.763,10.672,23.88v16    h16v-16c0-17.673,14.327-32,32-32c17.673,0,32,14.327,32,32c0,10.072-4.742,19.557-12.8,25.6l9.6,12.8    c9.836-7.353,16.447-18.227,18.448-30.344c0.248,0,0.496-0.056,0.744-0.056c23.641,0.027,43.743,17.263,47.376,40.624    c-3.266,0.426-6.494,1.102-9.656,2.024l4.56,15.344c25.409-7.558,52.135,6.914,59.692,32.324s-6.914,52.135-32.324,59.692    c-4.427,1.317-9.022,1.988-13.641,1.992c-7.115,0.019-14.143-1.559-20.568-4.616l-6.864,14.448    c24.494,11.617,53.652,6.526,72.76-12.704c23.722,11.735,33.439,40.478,21.705,64.199    C442.953,285.702,426.267,296.044,408.013,296.013z"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth={svgStrokeWidth}
              />
              <path
                d="M216.013,132.117c-28.751,10.201-47.972,37.389-48,67.896h16c0.034-23.72,14.977-44.857,37.328-52.8L216.013,132.117z"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth={svgStrokeWidth}
              />
              <path
                d="M232.013,128.453l1.752,15.904c4.147-0.457,8.333-0.457,12.48,0l1.768-15.904    C242.696,127.867,237.33,127.867,232.013,128.453z"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth={svgStrokeWidth}
              />
              <path
                d="M327.649,143.922c-30.928-48.4-95.236-62.564-143.636-31.636c-48.4,30.928-62.564,95.236-31.636,143.636    c8.125,12.715,18.92,23.51,31.636,31.636v17.928c-12.409,4.293-18.989,17.833-14.696,30.243c1.062,3.07,2.742,5.89,4.936,8.285    c-8.894,9.75-8.2,24.864,1.55,33.758c4.429,4.04,10.215,6.268,16.21,6.242h96c13.197,0.058,23.943-10.593,24.002-23.79    c0.027-5.995-2.201-11.781-6.242-16.21c8.869-9.683,8.209-24.723-1.475-33.592c-2.396-2.194-5.215-3.874-8.285-4.936v-17.928    C344.413,256.629,358.577,192.321,327.649,143.922z M288.013,368.013h-96c-4.418,0-8-3.582-8-8s3.582-8,8-8h96    c4.418,0,8,3.582,8,8S292.432,368.013,288.013,368.013z M288.013,336.013h-96c-4.418,0-8-3.582-8-8s3.582-8,8-8h96    c4.418,0,8,3.582,8,8S292.432,336.013,288.013,336.013z M284.013,276.149c-2.473,1.428-3.997,4.065-4,6.92v20.944h-32v-44.688    l29.656-29.656l-11.312-11.312l-26.344,26.344l-26.344-26.344l-11.312,11.312l29.656,29.656v44.688h-32v-20.944    c-0.003-2.855-1.527-5.492-4-6.92c-42.075-24.273-56.507-78.058-32.235-120.133c15.716-27.243,44.783-44.021,76.235-44.003    c48.575-0.028,87.975,39.327,88.003,87.901C328.034,231.366,311.256,260.433,284.013,276.149z"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth={svgStrokeWidth}
              />
              <path
                d="M408.013,64.013v16c26.696,0,56,29.304,56,56h16C480.013,100.349,443.677,64.013,408.013,64.013z"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth={svgStrokeWidth}
              />
            </svg>
          </MtSvgLines>
          <MtSvgLines
            animate={svgDrawDelay + 750}
            duration={5000}
            className="svg anim-on-scroll"
          >
            <svg viewBox="0 0 512 512">
              <path
                d="M504.843,72.607L439.386,7.15c-9.534-9.534-25.048-9.533-34.582,0L281.561,130.392c-3.086,3.087-3.086,8.089,0,11.176    c3.086,3.085,8.089,3.085,11.175,0L415.978,18.326c1.634-1.634,3.806-2.533,6.116-2.533s4.482,0.899,6.116,2.533l65.458,65.457    c1.633,1.633,2.533,3.805,2.533,6.116c0,2.31-0.9,4.482-2.533,6.115l-16.064,16.064L435.515,69.99    c-3.086-3.085-8.089-3.085-11.175,0c-3.086,3.087-3.086,8.089,0,11.176l42.088,42.088l-18.353,18.353l-18.498-18.498    c-3.086-3.085-8.089-3.085-11.175,0c-3.086,3.087-3.086,8.089,0,11.176l18.498,18.497l-18.353,18.353l-18.498-18.498    c-3.086-3.085-8.089-3.085-11.175,0c-3.086,3.087-3.086,8.089,0,11.176l18.498,18.497l-18.353,18.353l-42.089-42.09    c-3.085-3.084-8.089-3.086-11.175,0c-3.086,3.087-3.086,8.089,0,11.176l42.089,42.089l-18.353,18.353l-18.498-18.498    c-3.086-3.085-8.089-3.085-11.175,0c-3.086,3.087-3.086,8.089,0,11.176l18.497,18.497l-15.526,15.526L255.1,179.203l14.45-14.451    c3.086-3.087,3.086-8.089,0-11.176c-3.086-3.085-8.089-3.085-11.175,0l-14.451,14.451L98.156,22.264    C88.018,12.126,74.539,6.543,60.202,6.543c-14.337,0.001-27.816,5.584-37.953,15.722C12.11,32.403,6.527,45.881,6.527,60.219    c0,14.337,5.583,27.816,15.721,37.954l145.765,145.765L7.157,404.797c-9.534,9.535-9.534,25.048,0,34.583l65.457,65.458    C77.232,509.456,83.373,512,89.905,512c6.532,0,12.673-2.544,17.291-7.162L268.054,343.98l11.457,11.457    c3.086,3.085,8.089,3.085,11.175,0c3.086-3.087,3.086-8.089,0-11.176l-15.814-15.814c-0.307-0.486-0.667-0.948-1.09-1.371    c-0.423-0.423-0.885-0.783-1.37-1.09L101.189,154.763l21.191-21.191l13.102,13.102c1.543,1.542,3.565,2.314,5.588,2.314    s4.045-0.772,5.588-2.314c3.086-3.087,3.086-8.089,0-11.176l-13.101-13.101l21.191-21.191l83.579,83.579    c0.003,0.004,0.006,0.007,0.01,0.011c0.004,0.004,0.007,0.006,0.011,0.01l88.081,88.081c0.218,0.288,0.45,0.57,0.713,0.833    s0.544,0.495,0.832,0.713l117.268,117.268l-21.191,21.191L305.735,294.576c-0.071-0.077-0.135-0.158-0.21-0.232l-47.182-47.183    c-0.078-0.078-0.163-0.146-0.243-0.22l-83.343-83.342c-3.086-3.085-8.089-3.085-11.175,0c-3.086,3.087-3.086,8.089,0,11.176    l249.291,249.291l-21.192,21.191l-75.096-75.097c-3.086-3.085-8.089-3.085-11.175,0c-3.086,3.087-3.086,8.089,0,11.176    l80.684,80.684c0.767,0.767,1.717,1.386,2.728,1.778l95.478,37.069c1.506,0.584,3.076,0.868,4.634,0.868    c3.342,0,6.624-1.308,9.073-3.759c3.591-3.593,4.721-8.973,2.88-13.707l-37.108-95.434c-0.392-1.008-1.011-1.96-1.777-2.725    L343.963,268.071l160.88-160.881C514.378,97.655,514.378,82.142,504.843,72.607z M256.882,332.805l-15.507,15.503l-18.498-18.498    c-3.086-3.085-8.089-3.085-11.175,0c-3.086,3.087-3.086,8.089,0,11.176l18.498,18.498l-18.353,18.353l-42.089-42.089    c-3.086-3.085-8.089-3.085-11.175,0c-3.086,3.087-3.086,8.089,0,11.176l42.089,42.089l-18.353,18.353l-18.498-18.498    c-3.086-3.085-8.089-3.085-11.175,0c-3.086,3.087-3.086,8.089,0,11.176l18.498,18.497l-18.353,18.353l-18.498-18.498    c-3.086-3.085-8.089-3.085-11.175,0c-3.086,3.087-3.086,8.089,0,11.176l18.498,18.498l-18.353,18.353l-42.089-42.089    c-3.086-3.085-8.089-3.085-11.175,0c-3.086,3.087-3.086,8.089,0,11.176l42.089,42.088l-16.064,16.064    c-1.634,1.634-3.806,2.534-6.116,2.534s-4.482-0.9-6.116-2.534l-65.457-65.458c-3.372-3.372-3.372-8.859,0-12.231l160.857-160.858    L256.882,332.805z M33.423,86.998c-14.766-14.766-14.766-38.792,0-53.558c14.766-14.767,38.792-14.767,53.558,0l24.976,24.976    l-53.558,53.558L33.423,86.998z M116.798,116.803c-0.002,0.002-0.004,0.003-0.005,0.005c-0.002,0.002-0.003,0.004-0.005,0.005    l-26.774,26.774l-20.439-20.439l53.558-53.558l20.439,20.439L116.798,116.803z M483.703,483.681l-77.864-30.229l47.601-47.601    L483.703,483.681z"
                stroke="#FFFFFF"
                strokeWidth={svgStrokeWidth}
                fill="none"
              />
            </svg>
          </MtSvgLines>
          <MtSvgLines
            animate={svgDrawDelay + 1500}
            duration={2500}
            className="svg anim-on-scroll"
            stagger={50}
          >
            <svg viewBox="0 0 512 512">
              <path
                d="M350.688,496.97H66.121V126.245c0-4.151-3.365-7.515-7.515-7.515c-4.15,0-7.515,3.364-7.515,7.515v373.23    c0,6.907,5.619,12.525,12.525,12.525h287.072c4.15,0,7.514-3.364,7.515-7.515C358.203,500.334,354.838,496.97,350.688,496.97z"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth={svgStrokeWidth}
              />
              <path
                d="M458.782,67.951L394.906,2.276C393.491,0.821,391.548,0,389.519,0H63.616C56.71,0,51.092,5.62,51.091,12.526v58.613    c0,4.151,3.365,7.515,7.515,7.515c4.15,0,7.515-3.364,7.515-7.515V15.031h320.224l59.536,61.212V496.97h-42.59    c-4.15,0-7.515,3.364-7.515,7.515s3.365,7.515,7.515,7.515h45.094c6.907,0,12.525-5.618,12.525-12.524V73.19    C460.91,71.233,460.147,69.354,458.782,67.951z"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth={svgStrokeWidth}
              />
              <path
                d="M458.781,67.951L394.905,2.276c-2.133-2.192-5.381-2.874-8.214-1.723s-4.687,3.904-4.687,6.963V73.19    c0,4.151,3.365,7.515,7.515,7.515h63.876c3.021,0,5.748-1.808,6.922-4.591C461.492,73.332,460.887,70.115,458.781,67.951z     M397.034,65.675V26.019l38.569,39.656H397.034z"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth={svgStrokeWidth}
              />
              <path
                d="M290.78,39.899H109.714c-6.907,0-12.525,5.619-12.525,12.525v41.533c0,6.907,5.619,12.525,12.525,12.525H290.78    c6.906,0,12.525-5.619,12.525-12.524V52.423C303.305,45.516,297.686,39.899,290.78,39.899z M288.275,91.451H112.219V54.928    h176.056V91.451z"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth={svgStrokeWidth}
              />
              <path
                d="M172.247,145.811c-3.303-2.509-8.018-1.869-10.53,1.436l-33.203,43.688l-9.972-8.726    c-3.123-2.734-7.87-2.417-10.604,0.707c-2.733,3.124-2.416,7.871,0.707,10.604l16.031,14.027c1.376,1.203,3.137,1.859,4.948,1.859    c0.252,0,0.505-0.013,0.759-0.037c2.072-0.211,3.965-1.271,5.225-2.93l38.075-50.098    C176.194,153.037,175.551,148.322,172.247,145.811z"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth={svgStrokeWidth}
              />
              <path
                d="M398.409,144.277H209.136c-4.15,0-7.515,3.364-7.515,7.515s3.365,7.515,7.515,7.515h189.273    c4.15,0,7.515-3.364,7.515-7.515S402.559,144.277,398.409,144.277z"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth={svgStrokeWidth}
              />
              <path
                d="M332.021,169.326H209.136c-4.15,0-7.515,3.364-7.515,7.515s3.365,7.515,7.515,7.515h122.885    c4.15,0,7.515-3.364,7.515-7.515S336.171,169.326,332.021,169.326z"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth={svgStrokeWidth}
              />
              <path
                d="M360.076,194.376h-150.94c-4.15,0-7.515,3.364-7.515,7.515s3.365,7.515,7.515,7.515h150.94    c4.15,0,7.515-3.364,7.515-7.515S364.226,194.376,360.076,194.376z"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth={svgStrokeWidth}
              />
              <path
                d="M172.247,248.014c-3.303-2.51-8.018-1.869-10.53,1.436l-33.203,43.688l-9.972-8.726c-3.123-2.733-7.87-2.416-10.604,0.707    c-2.733,3.124-2.416,7.871,0.707,10.604l16.031,14.027c1.376,1.203,3.137,1.859,4.948,1.859c0.252,0,0.505-0.013,0.759-0.037    c2.072-0.211,3.965-1.271,5.225-2.93l38.075-50.098C176.194,255.24,175.551,250.527,172.247,248.014z"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth={svgStrokeWidth}
              />
              <path
                d="M398.409,246.481H209.136c-4.15,0-7.515,3.364-7.515,7.515c0,4.151,3.365,7.515,7.515,7.515h189.273    c4.15,0,7.515-3.364,7.515-7.515C405.924,249.845,402.559,246.481,398.409,246.481z"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth={svgStrokeWidth}
              />
              <path
                d="M332.021,271.53H209.136c-4.15,0-7.515,3.364-7.515,7.515s3.365,7.515,7.515,7.515h122.885    c4.15,0,7.515-3.364,7.515-7.515S336.171,271.53,332.021,271.53z"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth={svgStrokeWidth}
              />
              <path
                d="M360.076,296.579h-150.94c-4.15,0-7.515,3.364-7.515,7.515s3.365,7.515,7.515,7.515h150.94    c4.15,0,7.515-3.364,7.515-7.515S364.226,296.579,360.076,296.579z"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth={svgStrokeWidth}
              />
              <path
                d="M398.409,348.685H209.136c-4.15,0-7.515,3.364-7.515,7.515s3.365,7.515,7.515,7.515h189.273    c4.15,0,7.514-3.364,7.515-7.515C405.924,352.049,402.559,348.685,398.409,348.685z"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth={svgStrokeWidth}
              />
              <path
                d="M332.021,373.734H209.136c-4.15,0-7.515,3.364-7.515,7.515s3.365,7.515,7.515,7.515h122.885    c4.15,0,7.515-3.364,7.515-7.515S336.171,373.734,332.021,373.734z"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth={svgStrokeWidth}
              />
              <path
                d="M360.076,398.783h-150.94c-4.15,0-7.515,3.364-7.515,7.515s3.365,7.515,7.515,7.515h150.94    c4.15,0,7.515-3.364,7.515-7.515S364.226,398.783,360.076,398.783z"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth={svgStrokeWidth}
              />
              <path
                d="M158.681,348.685h-40.079c-6.907,0-12.525,5.619-12.525,12.525v40.078c0,6.907,5.619,12.525,12.525,12.525h40.079    c6.907,0,12.525-5.618,12.525-12.524V361.21C171.206,354.303,165.587,348.685,158.681,348.685z M156.177,398.784h-35.069v-35.069    h35.069V398.784z"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth={svgStrokeWidth}
              />
            </svg>
          </MtSvgLines>
        </div>
        <div className="section-sub-text anim-on-scroll">
          I practice a <b>minimal</b>, <b>precise</b> design philosophy. I
          believe <b>focused</b> efforts on the <b>fewest</b>, most <b>vital</b>{' '}
          elements undoubtedly reaps better results. The best user-experiences
          provide a <b>smooth</b>, <b>coherent</b> use-path centered around the
          users <b>direct interaction</b>. <b>Never</b> sacrificing utility for
          appearance, while perfecting the remaining elements to create a{' '}
          <b>beautiful</b> final product.
        </div>
        <div className="x-container" />
        <div className="line-container anim-on-scroll">
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>
      </div>
    );
  }
}
