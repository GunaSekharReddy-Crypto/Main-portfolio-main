import './Particleback.css'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticleBackground() {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  return (
    <div className="ParticleBackground">
      

       <Particles
      id="tsparticles"
      init={particlesInit}

      options={{
        "fullScreen": {
            "enable": true,
            "zIndex": 1
        },
        
            "particles": {
              "number": {
                "value": 100,
                "density": {
                  "enable": true,
                  "value_area": 100000
                }
              },
              "color": {
                "value": "#dff0d8"
              },
              "shape": {
                "type": "star",
                "stroke": {
                  "width": 9,
                  "color": "green"
                },
                "polygon": {
                  "nb_sides":4
                },
                "image": {
                  "width": 100,
                  "height": 100
                }
              },
              "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                  "enable": true,
                  "speed": 3,
                  "opacity_min": 0.1,
                  "sync": true
                }
              },
              "size": {
                "value": 0,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 80.18596664587774,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": false,
                "distance": 150,
                "color": "#000000",
                "opacity": 0.4,
                "width": 1
              },
              "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 40,
                  "rotateY": 120
                }
              }
            },
            "interactivity": {
              "detect_on": "window",
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "repulse"
                },
                "onclick": {
                  "enable": true,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 400,
                  "line_linked": {
                    "opacity": 0.5
                  }
                },
                "bubble": {
                  "distance": 100,
                  "size": 40,
                  "duration": 1,
                  "opacity": 0.2,
                  "speed": 3
                },
                "repulse": {
                  "distance": 200,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 1
                },
                "remove": {
                  "particles_nb": 10
                }
              }
            },
            "retina_detect": true
          
    }}
    />
    </div>
  );
}